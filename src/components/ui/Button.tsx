import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-2xl text-sm font-medium whitespace-nowrap outline-none transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-charcoal/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-cream text-charcoal hover:bg-cream/90',
        secondary: 'bg-charcoal text-cream hover:bg-charcoal/90',
        outline:
          'border border-charcoal/30 bg-transparent text-charcoal hover:bg-charcoal/10',
        ghost: 'bg-transparent hover:bg-charcoal/5',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        xs: "h-6 gap-1 rounded-2xl px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: 'h-8 gap-1.5 rounded-2xl px-3 has-[>svg]:px-2.5',
        lg: 'h-12 rounded-2xl text-base font-bold px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-xs': "size-6 rounded-2xl [&_svg:not([class*='size-'])]:size-3",
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button = ({
  className,
  children,
  variant = 'default',
  size = 'default',
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) => {
  const buttonClasses = cn(buttonVariants({ variant, size }), className);

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
