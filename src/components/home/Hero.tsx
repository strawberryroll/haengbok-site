import Link from 'next/link';
import Button, { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function Hero() {
  return (
    <section className="flex h-135 flex-col justify-end bg-charcoal px-6 py-10">
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
    </section>
  );
}
