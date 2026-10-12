import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, icon, rightIcon, id, required, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
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

          <input
            id={inputId}
            ref={ref}
            required={required}
            className={cn(
              'w-full bg-white text-slate-900 placeholder:text-slate-400 font-medium text-sm rounded-xl transition-all outline-none shadow-sm',
              'border-2 border-slate-300 hover:border-slate-400',
              'focus:border-sky-600 focus:ring-4 focus:ring-sky-500/15 focus:bg-white',
              icon ? 'pl-10' : 'pl-3.5',
              rightIcon ? 'pr-10' : 'pr-3.5',
              'py-2.5',
              error && 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/15',
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 flex items-center justify-center">
              {rightIcon}
            </div>
          )}
        </div>

        {error && <p className="mt-1 text-xs font-semibold text-rose-600">{error}</p>}
        {helperText && !error && (
          <p className="mt-1 text-[11px] text-slate-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
