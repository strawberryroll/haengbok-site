import * as React from 'react';
import { cn } from '@/lib/utils';

const Checkbox = ({
  className,
  ...props
}: Omit<React.ComponentProps<'input'>, 'type'>) => {
  return (
    <input
      type="checkbox"
      className={cn(
        'size-4 rounded border border-charcoal/30 text-charcoal outline-none focus-visible:ring-[3px] focus-visible:ring-charcoal/50 disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
};

export default Checkbox;
