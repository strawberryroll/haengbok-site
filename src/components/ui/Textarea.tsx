import * as React from 'react';
import { cn } from '@/lib/utils';

const Textarea = ({
  className,
  ...props
}: React.ComponentProps<'textarea'>) => {
  return (
    <textarea
      className={cn(
        'min-h-40 w-full rounded-lg border border-charcoal/30 bg-transparent px-3 py-2 text-sm text-charcoal transition-colors outline-none placeholder:text-description focus-visible:ring-[3px] focus-visible:ring-charcoal/50 disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
};

export default Textarea;
