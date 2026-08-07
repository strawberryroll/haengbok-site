import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center justify-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap',
  {
    variants: {
      variant: {
        important: 'border-amber-300 bg-amber-100 text-amber-700',
      },
    },
    defaultVariants: {
      variant: 'important',
    },
  },
);

const Badge = ({
  className,
  variant = 'important',
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) => {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
};

export default Badge;
