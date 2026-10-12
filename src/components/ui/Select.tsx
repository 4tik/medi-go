import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, icon, id, required, children, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-xs font-bold text-slate-800 tracking-wide mb-1.5"
          >
            {label}
            {required && <span className="text-rose-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {icon && (
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none flex items-center justify-center">
              {icon}
            </div>
          )}

          <select
            id={selectId}
            ref={ref}
            required={required}
            className={cn(
              'w-full bg-white text-slate-900 font-semibold text-sm rounded-xl appearance-none transition-all outline-none shadow-sm cursor-pointer',
              'border-2 border-slate-300 hover:border-slate-400',
              'focus:border-sky-600 focus:ring-4 focus:ring-sky-500/15',
              icon ? 'pl-10' : 'pl-3.5',
              'pr-10 py-2.5',
              error && 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/15',
              className
            )}
            {...props}
          >
            {children}
          </select>

          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none flex items-center justify-center">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {error && <p className="mt-1 text-xs font-semibold text-rose-600">{error}</p>}
        {helperText && !error && (
          <p className="mt-1 text-[11px] text-slate-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
