import { Card, CardContent } from '@/components/ui/Card';
import {
  BookOpenText,
  Check,
  Clock,
  HeartHandshake,
  type LucideIcon,
  Music,
  Phone,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface WelcomeItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const welcomeData: WelcomeItem[] = [
  {
    icon: Music,
    title: '찬양과 경배',
    description: '함께 마음을 모아 찬양합니다',
  },
  {
    icon: BookOpenText,
    title: '말씀',
    description: '성경 말씀을 함께 듣습니다',
  },
  {
    icon: HeartHandshake,
    title: '기도와 마무리',
    description: '기도로 예배를 마칩니다',
  },
];

const checklistData = ['성경책 없어도 괜찮아요', '편한 복장으로 오세요'];

export default function Welcome() {
  return (
    <section className="bg-ivory px-6 py-13">
      <p className="mb-2 text-xs font-semibold text-cream">WELCOME</p>
      <h2 className="mb-8 text-2xl">처음 오시는 분들께</h2>

      <Card className="bg-cream-light">
        <CardContent>
          <div className="mb-2 text-charcoal">
            <p>어떤 모습으로 오셔도 괜찮아요</p>
            <p className="text-sm text-charcoal/60">
              교회가 처음이어도, 오랫동안 떠나 계셨어도
            </p>
          </div>
          <p className="flex items-center gap-1">
            행복한 교회가 따뜻하게 맞이합니다
          </p>
        </CardContent>
      </Card>

      <h3 className="mt-13 text-lg">예배 흐름</h3>
      <div className="mt-5">
        {welcomeData.map((item, index) => (
          <div key={item.title} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="rounded-full border border-cream/30 bg-cream-light p-2">
                <item.icon size={18} className="text-cream" />
              </span>
              {index < welcomeData.length - 1 && (
                <div className="my-1 w-px flex-1 bg-cream" />
              )}
            </div>
            <div className="pb-5">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-charcoal/60">{item.description}</p>
            </div>
          </div>
        ))}
        <div className="mt-1 flex items-center gap-2 text-sm text-description">
          <Clock size={14} className="text-cream" />총 약 1시간
        </div>
      </div>

      <Card className="mt-8 bg-cream-light">
        <CardContent>
          <p className="mb-3 font-bold">이런 분도 환영해요</p>
          <div className="flex flex-col gap-2 text-sm text-charcoal/80">
            {checklistData.map((item) => (
              <p key={item} className="flex items-center gap-2">
                <Check size={14} className="shrink-0 text-cream" />
                {item}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>

      <Link
        href="tel:032-875-8520"
        className={cn(
          buttonVariants({ variant: 'secondary', size: 'lg' }),
          'mt-10 w-full text-white',
        )}
      >
        <Phone className="translate-y-px" />
        전화 문의
      </Link>
    </section>
  );
}
