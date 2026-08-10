import * as React from 'react';
import { cn } from '@/lib/utils';

const Label = ({
  className,
  children,
  ...props
}: React.ComponentProps<'label'>) => {
  return (
    <label
      className={cn('text-sm font-medium text-charcoal select-none', className)}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
