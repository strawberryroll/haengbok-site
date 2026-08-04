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
  date: string;
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

// 예: "2025. 07. 13 행복한교회 주일 낮 예배 ..." 에서 날짜(2025, 07, 13)와 나머지를 분리
const DATE_PREFIX_REGEX = /(\d{4})\.\s*(\d{1,2})\.\s*(\d{1,2})\s*(.*)/;

// 예: '"겨자씨의 믿음" 마태복음 17:14-21' 에서 따옴표로 감싸진 설교 제목과 뒤에 남는 본문 구절을 분리
// 유튜브 제목에 혼용된 여러 유니코드 따옴표(", ", ", ")를 모두 후보로 둠
const QUOTED_TITLE_REGEX = /["""“]([^"""“]+)["""“]\s*(.*)/;

function parseTitle(rawTitle: string): ParsedTitle | undefined {
  const match = rawTitle.match(DATE_PREFIX_REGEX);
  if (!match) return undefined;

  const [year, month, day, sermonTitle] = match.slice(1);

  const contentMatch = sermonTitle.match(QUOTED_TITLE_REGEX);
  let contentTitle = '';
  let contentReference = '';

  if (contentMatch) {
    contentTitle = contentMatch[1];
    contentReference = contentMatch[2];
  } else {
    contentTitle = sermonTitle;
  }

  const date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  const title = contentTitle.trim();
  const scripture = contentReference.trim();

  return {
    date,
    title,
    scripture,
  };
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
        date: date ?? '날짜',
        title: title ?? '제목',
        scripture: scripture ?? '말씀',
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
