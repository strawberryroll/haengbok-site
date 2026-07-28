import { Card, CardDescription, CardTitle } from '@/components/ui/Card';
import CircleIconBadge from '@/components/ui/CircleIconBadge';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';
import { FileText, MoveRight, User } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-cream-light px-6 pb-20">
      <PageHeader
        eyebrow="NEW MEMBER"
        title="새가족 안내"
        description="행복한 교회의 새가족이 되고 싶은 분들을 위한 안내입니다"
      />

      <Card className="mb-20 flex-row items-center justify-between bg-warm-white p-6">
        <div className="flex flex-col gap-2">
          <CardTitle className="text-lg text-cream">예배 안내</CardTitle>
          <CardTitle className="text-xl text-charcoal">
            예배가 궁금하신가요?
          </CardTitle>
          <CardDescription className="text-md font-medium text-description">
            처음 오시는 분들께 안내 보기
          </CardDescription>
        </div>
        <Link href="/#welcome" className="flex items-center gap-1 text-cream">
          <div className="rounded-full border border-cream/30 bg-cream/15 p-3 transition-colors hover:bg-cream/25">
            <MoveRight />
          </div>
        </Link>
      </Card>

      <SectionHeading
        eyebrow="REGISTRATION"
        title="새가족 등록 안내"
        className="pb-6"
      />
      <Card className="bg-warm-white p-6">
        <CardDescription className="text-md flex flex-col gap-2 font-medium text-description">
          <p>행복한 교회에 처음 나오신 분을 진심으로 환영합니다.</p>
          <p>
            새가족 등록카드를 작성해서 안내위원에게 제출하시면 행복한 교회의 한
            가족이 됩니다.
          </p>
        </CardDescription>

        <div className="mt-4 flex items-start justify-around">
          <div className="flex flex-col items-center gap-2 text-center">
            <CircleIconBadge icon={FileText} size={28} />
            <span className="text-cream">01</span>
            <span className="text-lg font-semibold">등록카드 작성</span>
            <p className="text-sm text-description">
              안내 데스크에서 카드를 받아 작성해주세요
            </p>
          </div>

          <MoveRight size={28} className="mt-5 scale-x-150 text-cream" />

          <div className="flex flex-col items-center gap-2 text-center">
            <CircleIconBadge icon={User} size={28} />
            <span className="text-cream">02</span>
            <span className="text-lg font-semibold">안내위원에게 제출</span>
            <p className="text-sm text-description">
              작성하신 카드를 안내 위원에게 전달해주세요
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
