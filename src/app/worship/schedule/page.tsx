import { ScheduleGroup } from '@/components/home/Schedule';
import { Card } from '@/components/ui/Card';
import PageHeader from '@/components/ui/PageHeader';
import ScheduleRow from '@/components/ui/ScheduleRow';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import React from 'react';

const scheduleData: ScheduleGroup[] = [
  {
    category: '주일 예배',
    worships: [
      { title: '주일 낮예배', place: '3층 예배당', time: '오전 11:00' },
      { title: '주일 오후예배', place: '3층 예배당', time: '오후 2:00' },
    ],
  },
  {
    category: '다음 세대',
    worships: [
      { title: '어린이 예배', place: '2층 베들레헴 · 주일', time: '오전 9:30' },
      { title: '학생회 예배', place: '2층 임마누엘 · 주일', time: '오후 2:00' },
      {
        title: '청년 성경모임',
        place: '2층 임마누엘· 주일',
        time: '오후 2:00',
      },
    ],
  },
  {
    category: '주중 예배',
    worships: [
      {
        title: '수요 기도회',
        place: '2층 임마누엘 · 수요일',
        time: '오후 7:30',
      },
      {
        title: '금요 기도회',
        place: '2층 임마누엘 · 금요일',
        time: '오후 9:00',
      },
      {
        title: '새벽 기도회',
        place: '2층 임마누엘 · 일~금',
        time: '새벽 5:00',
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <div className="bg-cream-light px-6 pb-15">
        <PageHeader
          eyebrow="SCHEDULE"
          title="예배 시간"
          description="행복한 교회의 예배 시간과 장소를 안내합니다"
        />
      </div>

      <div className="px-6 pb-20">
        {/* 주일 예배 */}
        <div>
          <SectionHeading
            eyebrow="SUNDAY"
            title="주일 예배"
            description="온 성도가 함께 드리는 예배입니다"
            className="pt-15 pb-8"
          />
          <Card className="gap-0 border-cream/60 bg-warm-white">
            {scheduleData[0].worships.map((item, index) => (
              <React.Fragment key={item.title}>
                <ScheduleRow
                  title={item.title}
                  time={item.time}
                  place={item.place}
                />
                {index < scheduleData[0].worships.length - 1 && (
                  <span className="inline-block h-px w-full bg-cream/30" />
                )}
              </React.Fragment>
            ))}
          </Card>
        </div>
        <p className="pt-5 text-center text-sm font-medium text-description">
          예배 순서가 궁금하신가요?{` `}
          <Link href="/worship/bulletin">주보에서 확인하세요 →</Link>
        </p>

        {/* 다음 세대 */}
        <div>
          <SectionHeading
            eyebrow="NEXT GENERATION"
            title="다음 세대"
            description="학생·청년이 참여하는 예배입니다"
            className="pt-15 pb-8"
          />
          <Card className="gap-0 border-cream/60 bg-warm-white">
            {scheduleData[1].worships.map((item, index) => (
              <React.Fragment key={item.title}>
                <ScheduleRow
                  title={item.title}
                  time={item.time}
                  place={item.place}
                />
                {index < scheduleData[1].worships.length - 1 && (
                  <span className="inline-block h-px w-full bg-cream/30" />
                )}
              </React.Fragment>
            ))}
          </Card>
        </div>

        {/* 주중 예배 */}
        <div>
          <SectionHeading
            eyebrow="WEEKDAY"
            title="주중 예배"
            description="평일에 은혜를 나누는 기도회입니다"
            className="pt-15 pb-8"
          />
          <Card className="gap-0 border-cream/60 bg-warm-white">
            {scheduleData[2].worships.map((item, index) => (
              <React.Fragment key={item.title}>
                <ScheduleRow
                  title={item.title}
                  time={item.time}
                  place={item.place}
                />
                {index < scheduleData[2].worships.length - 1 && (
                  <span className="inline-block h-px w-full bg-cream/30" />
                )}
              </React.Fragment>
            ))}
          </Card>
        </div>
      </div>
    </>
  );
}
