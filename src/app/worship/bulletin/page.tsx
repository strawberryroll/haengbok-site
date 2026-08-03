import { buttonVariants } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Divider from '@/components/ui/Divider';
import EventRow, { MonthlyEventItem } from '@/components/ui/EventRow';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';
import { FileText } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface ServantGroup {
  role: string;
  name: string[];
}

const BULLETIN_URL =
  'https://drive.google.com/drive/folders/1nOFK3M3l3NOzHvzyENtvo-7riFo_u0v1?usp=sharing';

const monthlyEventsData: MonthlyEventItem[] = [
  { startDay: 2, titles: ['목장 모임'] },
  { startDay: 7, weekday: '금', titles: ['축복기도회'] },
  { startDay: 9, titles: ['마리아 여전도회 헌신예배'] },
  { startDay: 13, weekday: '목', titles: ['목회자 월례회'] },
  { startDay: 16, titles: ['목장 모임', '장학금 지급'] },
  {
    startDay: 23,
    titles: ['건축헌금주일', '각 기관 월례기도회', '학생부 헌신예배'],
  },
  { startDay: 24, endDay: 26, weekday: '월-수', titles: ['말씀사랑 설교특강'] },
  { startDay: 30, titles: ['영화 상영'] },
];

const servantsData: ServantGroup[] = [
  { role: '담임목사', name: ['서현정'] },
  { role: '원로목사', name: ['서인원'] },
  { role: '장로', name: ['임화일'] },
  { role: '반주', name: ['최혜영', '김지은', '서은정', '양혜빈'] },
];

export default function Page() {
  return (
    <>
      <div className="bg-cream-light px-6 pb-15">
        <PageHeader
          eyebrow="BULLETIN"
          title="주보"
          description="행복한 교회의 예배와 교회 소식, 행사, 예배 자료를 전합니다"
        />
      </div>
      <div className="px-6 pb-20">
        <Card className="mt-15 bg-charcoal">
          <CardContent className="flex flex-col items-center gap-6 p-8">
            <span className="flex items-center justify-center rounded-2xl border border-cream/30 bg-cream/20 p-3 text-cream">
              <FileText size={26} />
            </span>
            <div className="text-center text-xl font-semibold text-white">
              교회 소식과 예배 자료는 <br />
              주보에서 확인하세요
            </div>
            <p className="text-center text-white/60">
              이번 주 예배와 교회 소식 및 설교 전문을 담은 주보 원문을 확인하실
              수 있습니다
            </p>
            <Link
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'border-cream/30 bg-cream/20 p-5 text-lg text-cream hover:bg-cream/30',
              )}
              href={BULLETIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              주보 보기
            </Link>
          </CardContent>
        </Card>

        <div>
          <SectionHeading
            eyebrow="THIS MONTH"
            title="이달의 행사"
            description="이번 달 교회 안에서 함께하는 행사들입니다"
            className="pt-15 pb-8"
          />
          <Card className="gap-0 border-cream/60 bg-warm-white">
            {monthlyEventsData.map((event, index) => (
              <React.Fragment key={event.startDay}>
                <EventRow
                  startDay={event.startDay}
                  endDay={event.endDay}
                  weekday={event.weekday}
                  titles={event.titles}
                />
                {index < monthlyEventsData.length - 1 && (
                  <span className="inline-block h-px w-full bg-cream/30" />
                )}
              </React.Fragment>
            ))}
          </Card>
        </div>

        <div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-20 pb-6">
            {servantsData.map((servant) => (
              <div className="flex items-center gap-1.5" key={servant.role}>
                <span className="shrink-0 text-xs font-medium text-gold">
                  {servant.role}
                </span>
                <span className="shrink-0 text-sm text-description">
                  {servant.name.join('·')}
                </span>
              </div>
            ))}
          </div>
          <Divider className="w-full border-t-[0.5px] text-description/30" />
          <div className="flex flex-col gap-1.5 pt-6">
            <span className="text-sm text-description/70">
              온라인현금 계좌: 농협 351-0991-7554-43
            </span>
            <span className="text-xs text-description/70">
              (예수교대한성결교회 행복한교회)
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
