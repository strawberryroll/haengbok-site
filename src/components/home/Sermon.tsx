import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Sermon() {
  return (
    <section className="flex flex-col items-center justify-center gap-3 bg-charcoal px-6 py-13">
      <p className="text-xs font-semibold text-white/50">Sermon</p>
      <h2 className="text-2xl text-white">설교 말씀</h2>
      <p className="mb-6 text-white/65">언제 어디서든 말씀을 들어보세요</p>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/@행복한교회-m2n"
        className={cn(
          buttonVariants({ size: 'lg' }),
          'flex w-56 items-center justify-center gap-1 bg-cream-light hover:bg-cream-light/90',
        )}
      >
        <Image
          className="mt-px h-auto"
          src="/icons/yt_icon.png"
          alt="youtube"
          width={25}
          height={25}
        />
        유튜브에서 듣기 <ArrowRight />
      </Link>
    </section>
  );
}
