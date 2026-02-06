import * as React from 'react';
import { cn } from '@/app/utils/cn';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'dark';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = 'default', ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-11 w-full rounded-xl border px-4 py-2 text-sm transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lilac focus-visible:ring-opacity-50',
          'disabled:cursor-not-allowed disabled:opacity-50',
          variant === 'dark'
            ? 'border-border/50 bg-background-alt text-text-primary placeholder:text-text-secondary/70'
            : 'border-border bg-background-alt/50 text-text-primary placeholder:text-text-secondary',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
