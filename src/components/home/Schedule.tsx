import { Card } from '@/components/ui/Card';
import ScheduleRow, { WorshipItem } from '@/components/ui/ScheduleRow';
import React from 'react';

interface ScheduleGroup {
  category: string;
  worships: WorshipItem[];
}

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
      { title: '어린이 예배', place: '주일 · 2층', time: '오전 9:30' },
      { title: '학생회 예배', place: '주일 · 2층', time: '오후 2:00' },
      { title: '청년 성경모임', place: '주일 · 2층', time: '오후 2:00' },
    ],
  },
  {
    category: '주중 예배',
    worships: [
      { title: '수요 기도회', place: '수요일 · 3층', time: '오후 7:30' },
      { title: '금요 기도회', place: '금요일 · 2층', time: '오후 9:00' },
      { title: '새벽 기도회', place: '월~금 · 2층', time: '새벽 5:00' },
    ],
  },
];

export default function Schedule() {
  return (
    <section className="bg-ivory px-6 py-13">
      <p className="mb-2 text-xs font-semibold text-cream">SCHEDULE</p>
      <h2 className="mb-8 text-2xl">예배 시간 안내</h2>

      {scheduleData.map((data) => (
        <div key={data.category} className="mb-8">
          <h3 className="mb-5 flex items-center gap-2 font-bold">
            <span className="inline-block h-5 w-1 rounded-2xl bg-cream" />
            {data.category}
          </h3>
          <Card className="gap-0 border-cream/60 bg-warm-white">
            {data.worships.map((item, index) => (
              <React.Fragment key={item.title}>
                <ScheduleRow
                  title={item.title}
                  time={item.time}
                  place={item.place}
                />
                {index < data.worships.length - 1 && (
                  <span className="inline-block h-px w-full bg-cream/30" />
                )}
              </React.Fragment>
            ))}
          </Card>
        </div>
      ))}
    </section>
  );
}
