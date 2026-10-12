import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'sky' | 'teal' | 'amber' | 'rose' | 'blue' | 'emerald' | 'purple' | 'indigo' | 'slate';
  size?: 'sm' | 'md';
  pulse?: boolean;
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  sky: 'bg-sky-50 border-sky-200/80 text-sky-700',
  teal: 'bg-teal-50 border-teal-200/80 text-teal-700',
  amber: 'bg-amber-50 border-amber-200/80 text-amber-700',
  rose: 'bg-rose-50 border-rose-200/80 text-rose-700',
  blue: 'bg-blue-50 border-blue-200/80 text-blue-700',
  emerald: 'bg-emerald-50 border-emerald-200/80 text-emerald-700',
  purple: 'bg-purple-50 border-purple-200/80 text-purple-700',
  indigo: 'bg-indigo-50 border-indigo-200/80 text-indigo-700',
  slate: 'bg-slate-100 border-slate-200 text-slate-700',
};

export function Badge({
  variant = 'sky',
  size = 'md',
  pulse = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-full border',
        size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3.5 py-1.5 text-xs sm:text-sm',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {pulse && (
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      )}
      {children}
    </span>
  );
}
