import { AboutItem } from '@/app/community/cell-group/page';
import { BULLETIN_URL } from '@/app/worship/bulletin/page';
import { buttonVariants } from '@/components/ui/Button';
import { Card, CardContent, CardDescription } from '@/components/ui/Card';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';
import {
  BookOpenText,
  FileText,
  type LucideIcon,
  MessageCircle,
  Music,
  Sparkles,
  Sunrise,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface WorshipInfoItem {
  label: string;
  value: string;
  badge?: string;
}

const aboutItems: AboutItem[] = [
  {
    icon: Users,
    description: (
      <>
        유치부부터 초등부까지의 어린이들이 함께 모여 예배드리며 말씀을 배우는
        시간입니다. 아이들이 교회 안에서 또래 친구들과 함께 신앙의 첫걸음을
        내딛습니다.
      </>
    ),
  },
  {
    icon: Sparkles,
    description: (
      <>
        찬양과 말씀, 그리고 즐거운 활동을 통해 아이들이 하나님을 자연스럽고
        기쁘게 알아갈 수 있도록 돕습니다.
      </>
    ),
  },
];

interface ExperienceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const experienceItems: ExperienceItem[] = [
  {
    icon: Music,
    title: '찬양',
    description: '몸으로 함께 찬양하며 하나님을 기뻐하는 시간입니다',
  },
  {
    icon: BookOpenText,
    title: '말씀',
    description: '아이들의 눈높이에 맞게 성경 말씀을 배우는 시간입니다',
  },
  {
    icon: MessageCircle,
    title: '암송',
    description: '매주 한 구절씩 말씀을 마음 깊이 새기는 시간입니다',
  },
  {
    icon: Sunrise,
    title: '묵상',
    description: '반 선생님과 말씀을 나누고, 매일 묵상하는 습관을 길러갑니다',
  },
];

const worshipInfoItems: WorshipInfoItem[] = [
  { label: '예배 시간', value: '오전 9:30' },
  { label: '장소', value: '2층 베들레헴' },
  { label: '담당 목사님', value: '서현정', badge: '목사' },
  { label: '부장 선생님', value: '서은정', badge: '부장' },
];

export default function Page() {
  return (
    <>
      <div className="bg-cream-light px-6 pb-15">
        <PageHeader
          eyebrow="SUNDAY SCHOOL"
          title="주일학교"
          description="다음 세대가 하나님의 말씀 안에서 자라가는 행복한 교회의 어린이 예배입니다"
        />
      </div>
      <div className="px-6 pb-20">
        {/* 주일학교란 */}
        <div className="flex flex-col gap-6 pt-15">
          <SectionHeading eyebrow="ABOUT" title="주일학교란" />
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

        {/* 예배 안내 */}
        <div>
          <SectionHeading
            eyebrow="WHEN & WHERE"
            title="예배 안내"
            className="pt-15 pb-8"
          />
          <Card className="gap-0 border-cream/60 bg-warm-white">
            {worshipInfoItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <div className="flex items-center justify-between px-5 py-4">
                  <p className="font-semibold text-charcoal/95">{item.label}</p>
                  <p className="flex items-center gap-2 text-sm">
                    {item.badge && (
                      <span className="shrink-0 text-xs text-gold">
                        {item.badge}
                      </span>
                    )}
                    <span className="font-semibold text-charcoal">
                      {item.value}
                    </span>
                  </p>
                </div>
                {index < worshipInfoItems.length - 1 && (
                  <span className="inline-block h-px w-full bg-cream/30" />
                )}
              </React.Fragment>
            ))}
          </Card>
        </div>

        {/* 예배에서 만나는 것들 */}
        <div>
          <SectionHeading
            eyebrow="EXPERIENCE"
            title="예배에서 만나는 것들"
            className="pt-15 pb-8"
          />
          <div className="grid grid-cols-2 gap-5">
            {experienceItems.map((item) => (
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
          <p className="flex gap-3 pt-6 text-sm text-description">
            <span className="shrink-0 text-cream">—</span>
            출석과 암송, 말씀퀴즈, 묵상을 통해 아이들이 즐겁게 신앙생활의 습관을
            쌓아갑니다.
          </p>
        </div>

        {/* 주보 보기*/}
        <Card className="mt-15 bg-charcoal">
          <CardContent className="flex flex-col items-center gap-6 p-8">
            <span className="flex items-center justify-center rounded-2xl border border-cream/30 bg-cream/20 p-3 text-cream">
              <FileText size={26} />
            </span>
            <div className="text-center text-xl font-semibold text-white">
              이번 주 예배 순서와 말씀은 <br />
              주보에서 확인하세요
            </div>
            <p className="text-center text-white/60">
              그 주의 말씀과 예배 순서, 교회 소식을 주보에서 함께 담아
              전해드립니다
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
      </div>
    </>
  );
}
