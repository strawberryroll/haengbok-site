import Link from 'next/link';
import { buttonVariants } from './Button';
import { cn } from '@/lib/utils';

export default function JoinCta() {
  return (
    <section className="flex flex-col items-center gap-8 bg-cream py-12">
      <div>
        <p className="mb-4 text-center text-xs">JOIN US</p>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-center text-xl font-bold">
            행복한 교회와 <br /> 함께 하고 싶으신가요?
          </h2>
          <p className="text-center text-base">
            함께 예배하고, 함께 행복해지는 <br /> 곳이 여기 있습니다.
          </p>
        </div>
      </div>
      <div className="round flex w-full flex-col items-center gap-2 px-10">
        <Link
          href="/about/new-member"
          className={cn(
            buttonVariants({
              variant: 'secondary',
              size: 'lg',
            }),
            'w-full',
          )}
        >
          새가족 안내 보기
        </Link>
        <Link
          href="/about/directions"
          className={cn(
            buttonVariants({ variant: 'outline', size: 'lg' }),
            'w-full',
          )}
        >
          오시는 길
        </Link>
      </div>
    </section>
  );
}
