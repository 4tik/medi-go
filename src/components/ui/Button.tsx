import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-400/40 focus-visible:ring-sky-500',
  secondary:
    'bg-white text-sky-700 border-2 border-sky-200 hover:bg-sky-50 hover:border-sky-300 shadow-sm focus-visible:ring-sky-400',
  outline:
    'bg-transparent text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 focus-visible:ring-slate-400',
  white:
    'bg-white text-slate-900 shadow-lg hover:bg-slate-50 focus-visible:ring-white',
  ghost:
    'bg-transparent text-slate-600 hover:text-sky-600 hover:bg-sky-50 focus-visible:ring-sky-500',
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-3.5 py-1.5 text-xs rounded-xl gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-xl gap-2',
  lg: 'px-7 py-3.5 text-base rounded-2xl gap-2.5',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      className,
      children,
      whileHover = { scale: 1.02, y: -1 },
      whileTap = { scale: 0.98 },
      transition = { duration: 0.15 },
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={whileHover}
        whileTap={whileTap}
        transition={transition}
        className={cn(
          'inline-flex items-center justify-center font-semibold cursor-pointer select-none transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
