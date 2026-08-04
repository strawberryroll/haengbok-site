import fs from 'fs';

process.loadEnvFile('.env.local');

interface RawPlaylistItem {
  snippet: {
    title: string;
    publishedAt: string;
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}

interface Sermon {
  videoId: string;
  date: string;
  title: string;
  scripture: string;
  publishedAt: string;
  thumbnailUrl: string;
  preacher: string;
}

interface ParsedTitle {
  date?: string;
  title: string;
  scripture: string;
}

interface PlaylistItemsResponse {
  items: RawPlaylistItem[];
  nextPageToken?: string;
}

const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3/playlistItems';
const UPLOADS_PLAYLIST_ID = 'UUxOrEOlaJfZB0hKcUMMPa0w';
const PREACHER = '서인원';

// 예: "2025. 07. 13 행복한교회 주일 낮 예배 ..." 에서 날짜(2025, 07, 13)와 나머지를 분리 (4자리 연도, 문자열 맨 앞)
const DATE_PREFIX_REGEX_4DIGIT = /^(\d{4})\.\s*(\d{1,2})\.\s*(\d{1,2})\s*(.*)/;

// 예: "20.06.21행복한교회 주일 낮 예배 ..." 에서 날짜(20, 06, 21)와 나머지를 분리 (2자리 연도, 공백 없이 붙기도 함)
const DATE_PREFIX_REGEX_2DIGIT = /^(\d{2})\.\s*(\d{1,2})\.\s*(\d{1,2})\s*(.*)/;

// 예: "행복한교회 주일 낮 예배 (20.11.22)" 에서 괄호 안의 날짜(20, 11, 22)를 추출, 날짜 앞부분 전체를 나머지로 취급
const DATE_IN_PARENS_REGEX = /\((\d{2,4})\.\s*(\d{1,2})\.\s*(\d{1,2})\)/;

// 예: "2024년 7월 7일 행복한교회 주일 낮 예배 ..." 에서 날짜(2024, 7, 7)와 나머지를 분리
const DATE_KOREAN_REGEX = /^(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일\s*(.*)/;

// 예: '"겨자씨의 믿음" 마태복음 17:14-21' 에서 따옴표로 감싸진 설교 제목과 뒤에 남는 본문 구절을 분리
// 유튜브 제목에 혼용된 여러 유니코드 따옴표(U+0022 ", U+201C “, U+201D ”)를, 여닫는 순서가
// 뒤바뀐 오타까지 포함해 양쪽 모두 같은 후보군으로 허용해 매치한다
const QUOTE_CHARS = '"“”';
const QUOTED_TITLE_REGEX = new RegExp(
  `[${QUOTE_CHARS}]([^${QUOTE_CHARS}]+)[${QUOTE_CHARS}]\\s*(.*)`,
);

function normalizeYear(year: string): string {
  return year.length === 2 ? `20${year}` : year;
}

function toDateString(year: string, month: string, day: string): string {
  return `${normalizeYear(year)}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

// 나머지 문자열(날짜를 제외한 부분)에서 따옴표 안 설교 제목과 본문 구절을 뽑아낸다.
// 따옴표가 없으면 나머지 전체를 제목으로 취급하고 본문 구절은 빈 문자열로 둔다.
function parseContent(rest: string): { title: string; scripture: string } {
  const contentMatch = rest.match(QUOTED_TITLE_REGEX);
  if (contentMatch) {
    return {
      title: contentMatch[1].trim(),
      scripture: contentMatch[2].trim(),
    };
  }
  return { title: rest.trim(), scripture: '' };
}

function parseTitle(rawTitle: string): ParsedTitle | undefined {
  const prefix4 = rawTitle.match(DATE_PREFIX_REGEX_4DIGIT);
  if (prefix4) {
    const [year, month, day, rest] = prefix4.slice(1);
    return { date: toDateString(year, month, day), ...parseContent(rest) };
  }

  const korean = rawTitle.match(DATE_KOREAN_REGEX);
  if (korean) {
    const [year, month, day, rest] = korean.slice(1);
    return { date: toDateString(year, month, day), ...parseContent(rest) };
  }

  const prefix2 = rawTitle.match(DATE_PREFIX_REGEX_2DIGIT);
  if (prefix2) {
    const [year, month, day, rest] = prefix2.slice(1);
    return { date: toDateString(year, month, day), ...parseContent(rest) };
  }

  const inParens = rawTitle.match(DATE_IN_PARENS_REGEX);
  if (inParens) {
    const [year, month, day] = inParens.slice(1);
    const rest = rawTitle.slice(0, inParens.index).trim();
    return { date: toDateString(year, month, day), ...parseContent(rest) };
  }

  // 날짜 정보 자체가 제목에 없는 경우: 날짜 없이 따옴표 안 제목/본문 구절만이라도 뽑아낸다.
  // date는 undefined로 두고, 호출부에서 publishedAt으로 폴백한다.
  const content = parseContent(rawTitle);
  if (content.title !== rawTitle.trim()) {
    return content;
  }

  return undefined;
}

async function fetchPlaylistPage(
  pageToken?: string,
): Promise<PlaylistItemsResponse> {
  const url = pageToken
    ? `${YOUTUBE_API_BASE}?part=snippet&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}&pageToken=${pageToken}`
    : `${YOUTUBE_API_BASE}?part=snippet&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    console.error(
      `YouTube API 호출 실패: ${response.status} ${response.statusText}`,
    );
    process.exit(1);
  }

  return (await response.json()) as PlaylistItemsResponse;
}

async function fetchSermons(): Promise<Sermon[]> {
  const data = await fetchPlaylistPage();

  while (data.nextPageToken) {
    const nextData = await fetchPlaylistPage(data.nextPageToken);
    data.items.push(...nextData.items);
    data.nextPageToken = nextData.nextPageToken;
  }

  const failedItems: { videoId: string; title: string }[] = [];

  const sermons = data.items
    .map((item: RawPlaylistItem) => {
      const parsed = parseTitle(item.snippet.title);
      if (!parsed) {
        failedItems.push({
          videoId: item.snippet.resourceId.videoId,
          title: item.snippet.title,
        });
      }
      const { date, title, scripture } = parsed ?? {};
      return {
        videoId: item.snippet.resourceId.videoId,
        date: date ?? item.snippet.publishedAt.slice(0, 10),
        title: title ?? item.snippet.title,
        scripture: scripture ?? '',
        publishedAt: item.snippet.publishedAt,
        thumbnailUrl: item.snippet.thumbnails.high.url,
        preacher: PREACHER,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (failedItems.length > 0) {
    console.warn(`\n파싱 실패 항목 ${failedItems.length}건 (수동 검수 필요):`);
    failedItems.forEach(({ videoId, title }) => {
      console.warn(`  [${videoId}] ${title}`);
    });
  }

  return sermons;
}

const sermons = await fetchSermons();
const fileContent = `export interface Sermon {
  videoId: string;
  date: string;
  title: string;
  scripture: string;
  publishedAt: string;
  thumbnailUrl: string;
  preacher: string;
}\n\nexport const sermons: Sermon[] = ${JSON.stringify(sermons, null, 2)};\n`;

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/sermons.ts', fileContent);
