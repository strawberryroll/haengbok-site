import { cn } from '@/lib/utils';

export default function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow?: string;
  title?: string;
  className?: string;
}) {
  return (
    <div className={cn(`flex flex-col gap-2`, className)}>
      <p className="text-xs font-semibold text-cream">{eyebrow || 'EYEBROW'}</p>
      <h3 className="text-3xl font-semibold">{title || '제목'}</h3>
    </div>
  );
}
