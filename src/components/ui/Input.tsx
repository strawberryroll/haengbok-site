import * as React from 'react';
import { cn } from '@/lib/utils';

const Input = ({
  className,
  type,
  ...props
}: React.ComponentProps<'input'>) => {
  return (
    <input
      type={type}
      className={cn(
        'h-10 w-full min-w-0 rounded-lg border border-charcoal/30 bg-transparent px-3 py-2 text-sm text-charcoal transition-colors outline-none placeholder:text-description focus-visible:ring-[1px] focus-visible:ring-charcoal/50 disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
};

export default Input;
