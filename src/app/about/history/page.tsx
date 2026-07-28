import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/Card';
import Divider from '@/components/ui/Divider';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';
import { Quote } from 'lucide-react';
import Image from 'next/image';

interface HistoryItem {
  year: number;
  title: string;
  description: string;
}

interface PastorsItem {
  order: string;
  name: string;
  position: string;
  term: string;
  description: string;
  image: string;
}

const historyData: HistoryItem[] = [
  {
    year: 1998,
    title: '행복한 교회 설립',
    description:
      '개척 예배로 교회의 문을 열었습니다. OO동 상가 2층, 열두 가정이 함께한 첫 주일 예배였습니다.',
  },
  {
    year: 2003,
    title: '첫 예배당 건축 및 입당',
    description:
      '교인들의 헌신과 기도 위에 세워진 첫 예배당에 입당했습니다. 작지만 소중한 우리만의 공간이 생겼습니다.',
  },
  {
    year: 2010,
    title: '2대 담임목사 위임 및 주일학교 개설',
    description:
      '새로운 목회자와 함께 다음 세대를 위한 사역의 기초를 세웠습니다. 주일학교가 본격적으로 시작되었습니다.',
  },
  {
    year: 2015,
    title: '목장 사역 및 전도모임 본격화',
    description:
      '소그룹 중심의 공동체 사역이 확대되었습니다. 전도모임을 통해 지역 사회와 더 가까이 연결되기 시작했습니다.',
  },
  {
    year: 2020,
    title: '온라인 예배 시스템 구축',
    description:
      '전례 없는 어려운 시기에 온라인 예배 송출 체계를 마련했습니다. 어디서든 함께 예배할 수 있게 되었습니다.',
  },
  {
    year: 2026,
    title: '2대 담임목사 위임',
    description:
      '새로운 리더십과 함께 다음 시대를 준비합니다. 앞으로의 이야기는 지금부터 시작됩니다.',
  },
];

const pastorsData: PastorsItem[] = [
  {
    order: '1대',
    name: '서인원',
    position: '목사',
    term: '1998 - 2025',
    description: '개척의 사명을 안고 교회의 첫 걸음을 이끌었습니다',
    image: 'https://placehold.co/200x200',
  },
  {
    order: '2대',
    name: '서현정',
    position: '목사',
    term: '2026 - 현재',
    description: '새로운 시대를 향한 비전으로 교회를 이끌어가고 있습니다',
    image: 'https://placehold.co/200x200',
  },
];

export default function Page() {
  return (
    <>
      <div className="bg-cream-light px-6 pb-15">
        <PageHeader
          eyebrow="HISTORY"
          title="역사 및 연혁"
          description="하나님의 은혜로 걸어온 행복한 교회의 발자취"
        />
      </div>
      <div className="px-6 pb-20">
        {/* 인트로 */}
        <div className="flex flex-col gap-6 pt-15">
          <SectionHeading eyebrow="INTRO" title="우리의 지나온 길" />
          <p className="leading-[1.75] text-description">
            1998년, 작은 상가 한켠에서 시작된 행복한 교회는 지금까지 하나님의
            은혜 가운데 한 걸음씩 성장해왔습니다. 믿음의 가정들이 모이고,
            예배당이 세워지고, 다음 세대가 자라나는 동안 교회는 지역 사회 안에서
            조용하지만 꾸준하게 뿌리를 내려왔습니다. 지나온 발자취를 돌아보며,
            앞으로 함께 걸어갈 길을 그려봅니다.
          </p>
          <Card className="bg-charcoal">
            <CardContent className="flex flex-col gap-3">
              <Quote className="text-cream" size={20} />
              <p className="text-lg text-white">
                우리가 낙심하지 아니하나니 겉사람은 낡아지나 우리의 속사람은
                날로 새로워지도다
              </p>
              <div className="flex items-center gap-2">
                <Divider />
                <span className="font-semibold text-cream">
                  고린도후서 4:16
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 연혁 */}
        <div className="flex flex-col gap-6 pt-15">
          <SectionHeading eyebrow="TIMELINE" title="연혁" />
          <div className="relative flex flex-col gap-10">
            {/* 세로선 */}
            {/* 마커 크기 절반 = left 값 */}
            <div className="absolute left-3 h-full w-px bg-cream" />

            {historyData.map((item) => (
              <div key={item.title} className="flex gap-4">
                {/* 원 마커 */}
                {/* 원 마커 크기 바꾸면 세로선의 left도 같이 수정 */}
                <div className="relative z-10 mt-7 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-3 border-cream bg-white">
                  <div className="h-2 w-2 rounded-full bg-cream" />
                </div>

                <Card className="flex-1 gap-2 bg-warm-white p-6">
                  <span className="text-2xl font-semibold text-cream">
                    {item.year}
                  </span>
                  <CardTitle className="text-lg text-charcoal">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-description">
                    {item.description}
                  </CardDescription>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* 담임목사 계보 */}
        <div className="flex flex-col gap-6 pt-15">
          <SectionHeading eyebrow="PASTORS" title="담임목사 계보" />
          <div className="flex flex-col gap-4">
            {pastorsData.map((item) => (
              <Card
                key={item.order}
                className="flex-row items-center gap-6 bg-cream/10 p-6"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="self-start rounded-full bg-cream/15 px-3 py-0.5 text-sm text-gold">
                    {item.order}
                  </span>
                  <CardTitle className="text-xl font-semibold text-charcoal">
                    {item.name} {item.position}
                  </CardTitle>
                  <span className="text-sm font-semibold text-gold">
                    {item.term}
                  </span>
                  <CardDescription className="text-sm text-description">
                    {item.description}
                  </CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Onwards */}
        <div className="flex flex-col gap-6 pt-15">
          <div className="flex items-center gap-2">
            <Divider />
            <span className="text-xs font-semibold text-cream">ONWARDS</span>
          </div>
          <div className="leading-[1.75] text-description">
            <p>지나온 시간보다 앞으로 걸어갈 시간이 더 기대되는 교회,</p>
            <p>
              행복한 교회가 하나님의 은혜 가운데 계속해서 성장해 나가길
              소망합니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
