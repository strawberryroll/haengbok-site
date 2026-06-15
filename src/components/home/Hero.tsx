import Link from 'next/link';
import Button, { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex h-135 flex-col justify-end bg-charcoal px-6 py-13">
      <Image
        src="/images/hero.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
      {/* 오버레이 레이어 */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* 콘텐츠 */}
      <div className="relative z-10">
        <p className="mb-2 text-xs font-semibold text-cream">
          HAPPY CHURCH · 인천
        </p>
        <h1 className="text-[40px] leading-tight text-white">
          행복이 <br />
          넘치는 교회
        </h1>
        <p className="mt-2 text-base text-white/70">행복한 교회입니다</p>

        <div className="mt-10 flex gap-3">
          <Button
            variant="default"
            size="lg"
            className="flex-1 text-black shadow-lg shadow-cream/60"
          >
            예배 시간 보기
          </Button>
          <Link
            href="/about/directions"
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'lg' }),
              'text-white',
              'bg-white/15',
              'border',
              'border-white/35',
              'flex-1',
            )}
          >
            오시는 길
          </Link>
        </div>
      </div>
    </section>
  );
}
