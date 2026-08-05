import { Card, CardContent, CardDescription } from '@/components/ui/Card';
import Divider from '@/components/ui/Divider';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';
import { Coffee, HandHeart, Phone } from 'lucide-react';
import { AboutItem } from '../cell-group/page';

const aboutItems: AboutItem[] = [
  {
    icon: HandHeart,
    description: (
      <>
        전도모임은 아직 예수님을 알지 못하는 이웃들에게 복음을 나누기 위해,
        <br />
        교회 정문 앞으로 직접 나가 전도지와 간식을 나누어드리는 모임입니다.
      </>
    ),
  },
  {
    icon: Coffee,
    description: (
      <>
        처음 참석하시는 분도 전혀 부담 없이 오실 수 있습니다. <br />
        모임은 언제나 기도로 시작되어, 누구든 자연스럽게 함께할 수 있습니다.
      </>
    ),
  },
];

export default function Page() {
  return (
    <>
      <div className="bg-cream-light px-6 pb-15">
        <PageHeader
          eyebrow="EVANGELISM"
          title="전도모임"
          description="이웃에게 복음을 나누고, 그 과정에서 함께 성장하는 행복한 교회의 모임입니다"
        />
      </div>
      <div className="px-6 pb-20">
        {/* 전도모임이란 */}
        <div className="flex flex-col gap-6 pt-15">
          <SectionHeading eyebrow="ABOUT" title="전도모임이란" />
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
                수요일 오후, 이웃과 함께하는 따뜻한 시간입니다.
              </p>

              <CardDescription className="flex flex-col gap-2 py-5 text-sm leading-6 text-description">
                <p>
                  전도모임은 매주 수요일 오후에 열립니다. 모이는 시간은 그 주의
                  사정에 따라 조금씩 달라질 수 있습니다.
                </p>
                <p>
                  먼저 함께 모여 기도한 뒤, 교회 정문 앞으로 나가 오가시는
                  이웃들에게 전도지와 간식을 나누어드립니다.
                </p>
                <p>
                  교회에 출석하는 모든 성도님은 누구든지 함께하실 수 있으며,
                  처음 오시는 분께는 더욱 따뜻하게 자리를 내어드립니다.
                </p>
                <p>
                  먼저 와 계신 분들이 항상 반갑게 맞이할 것이니, 편한 마음으로
                  문을 두드려 주세요.
                </p>
              </CardDescription>
              <Divider className="w-full border-t pb-5 text-cream/40" />
              <div className="flex items-start gap-2 text-sm text-description/60">
                <span>-</span>
                <p className="text-sm">
                  모임 시간과 장소가 변경될 경우 교회 공지를 통해 안내해
                  드리겠습니다. 문의사항은 교회 대표 전화로 연락해 주세요.
                  <span className="flex items-center gap-1.5 pt-2">
                    <Phone className="size-3 items-center" />
                    문의: 032-875-8520
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
