import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { Badge, type BadgeProps } from './Badge';

export interface SectionHeadingProps {
  badge?: React.ReactNode;
  badgeVariant?: BadgeProps['variant'];
  badgePulse?: boolean;
  title: string;
  gradientTitle?: string;
  description?: string;
  align?: 'center' | 'left';
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = 'sky',
  badgePulse = false,
  title,
  gradientTitle,
  description,
  align = 'center',
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12 sm:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl',
        className
      )}
    >
      {badge && (
        <div className={cn('mb-4', align === 'center' ? 'flex justify-center' : 'inline-block')}>
          {typeof badge === 'string' ? (
            <Badge
              variant={badgeVariant}
              pulse={badgePulse}
              className={dark ? 'bg-white/10 border-white/20 text-sky-300' : undefined}
            >
              {badge}
            </Badge>
          ) : (
            badge
          )}
        </div>
      )}

      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4',
          dark ? 'text-white' : 'text-slate-900'
        )}
      >
        {title}{' '}
        {gradientTitle && (
          <span
            className={
              dark
                ? 'bg-gradient-to-r from-sky-400 to-teal-300 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent'
            }
          >
            {gradientTitle}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            'text-base sm:text-lg leading-relaxed',
            dark ? 'text-slate-300/90' : 'text-slate-500'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
