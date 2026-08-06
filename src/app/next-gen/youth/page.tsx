import { AboutItem } from '@/app/community/cell-group/page';
import { Card, CardContent, CardDescription } from '@/components/ui/Card';
import Divider from '@/components/ui/Divider';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';

import {
  type LucideIcon,
  MessageCircle,
  MicVocal,
  Popcorn,
  Sparkles,
  Users,
  Utensils,
} from 'lucide-react';

const aboutItems: AboutItem[] = [
  {
    icon: Users,
    description: (
      <>
        학생청년부는 중학생부터 청년까지가 함께 모이는 신앙 공동체입니다. 예배와
        묵상, 삶을 나누며 각자의 믿음이 일상 속에서 자라가도록 서로 붙잡아
        줍니다.
      </>
    ),
  },
  {
    icon: Sparkles,
    description: (
      <>
        처음 오시는 분도 언제든지 편안하게 합류하실 수 있습니다. 나이와 믿음의
        연차에 상관없이 있는 그대로 환영받는 자리입니다.
      </>
    ),
  },
];

interface ProgramItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const programItems: ProgramItem[] = [
  {
    icon: MicVocal,
    title: '예배 모임',
    description:
      '청년들이 직접 찬양을 인도하고 담임 목사님이 말씀을 전합니다. 함께 찬양하고 귀를 기울이는 시간입니다.',
  },
  {
    icon: MessageCircle,
    title: '큐티 모임',
    description:
      '각자 묵상한 내용을 소그룹으로 모여 나눕니다. 말씀과 기도제목, 한 주의 일상을 함께 이야기합니다.',
  },
  {
    icon: Popcorn,
    title: '친교 활동',
    description: '보드게임, 영화 감상 등 다양한 방식으로 함께 어울립니다.',
  },
  {
    icon: Utensils,
    title: '함께 식사',
    description: '매달 셋째 주, 직접 요리하거나 함께 외식하며 교제를 나눕니다.',
  },
];

export default function Page() {
  return (
    <>
      <div className="bg-cream-light px-6 pb-15">
        <PageHeader
          eyebrow="YOUTH MINISTRY"
          title="학생청년부"
          description="중고등학생부터 청년까지, 신앙 안에서 함께 성장하고 서로를 세워가는 공동체입니다"
        />
      </div>
      <div className="px-6 pb-20">
        {/* 학생청년부란 */}
        <div className="flex flex-col gap-6 pt-15">
          <SectionHeading eyebrow="ABOUT" title="학생청년부란" />
          {aboutItems.map((item, index) => (
            <Card key={index} className="bg-ivory">
              <CardContent className="flex items-start gap-5">
                <div className="shrink-0">
                  <item.icon className="text-cream" />
                </div>
                <CardDescription className="text-base text-description">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 모임 안내 */}
        <div className="flex flex-col gap-6 pt-15">
          <SectionHeading eyebrow="WHEN & WHERE" title="모임 안내" />
          <Card className="gap-0 overflow-hidden">
            <div className="h-2 w-full bg-cream/30" />
            <CardContent className="flex flex-col">
              <p className="text-base font-semibold text-charcoal">
                주일 오후, 세대를 넘어 함께하는 따뜻한 시간입니다.
              </p>

              <CardDescription className="flex flex-col gap-2 py-5 text-sm leading-6 text-description">
                <p>
                  학생청년부는 매주 주일에 모입니다. 오후 두 시에 함께 모이기
                  시작하여
                </p>
                <p>예배와 묵상 나눔 그리고 교제의 시간으로 이어집니다.</p>

                <p>
                  모임 장소는 교회 건물 2층 임마누엘실이며, 중학생부터 청년까지
                  누구든 함께할 수 있습니다.
                </p>
              </CardDescription>
              <Divider className="w-full border-t pb-5 text-cream/40" />
              <div className="flex items-start gap-2 text-sm text-description/60">
                <span>-</span>
                <p className="text-sm">
                  모임 장소와 시간은 사정에 따라 변경될 수 있습니다. 변경 시
                  학생청년부 공지를 통해 안내해 드립니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 프로그램 소개 */}
        <div>
          <SectionHeading
            eyebrow="PROGRAMS"
            title="프로그램 소개"
            className="pt-15 pb-8"
          />
          <div className="grid grid-cols-2 gap-5">
            {programItems.map((item) => (
              <Card key={item.title} className="bg-ivory">
                <CardContent className="flex flex-col gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/20">
                    <item.icon className="text-cream" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-charcoal">
                      {item.title}
                    </p>
                    <CardDescription className="text-sm text-description">
                      {item.description}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
