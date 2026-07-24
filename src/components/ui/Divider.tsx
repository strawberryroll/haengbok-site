import { cn } from '@/lib/utils';

export default function Divider({ className }: { className?: string }) {
  return <div className={cn('w-8 border-t-2 text-cream', className)} />;
}
