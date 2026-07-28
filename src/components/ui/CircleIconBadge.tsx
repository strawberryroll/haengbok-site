import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface CircleIconBadgeProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
}

export default function CircleIconBadge({
  icon: Icon,
  size,
  className,
}: CircleIconBadgeProps) {
  return (
    <div
      className={cn(
        'flex size-16 items-center justify-center rounded-full border-3 border-cream/30 bg-cream/15 text-center text-cream',
        className,
      )}
    >
      <Icon size={size} />
    </div>
  );
}
