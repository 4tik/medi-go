import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';

export type ModalWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export interface ModalElProps {
  isOpen: boolean;
  onClose: () => void;
  maxWidth?: ModalWidth;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  headerBadge?: React.ReactNode;
  headerGradient?: boolean;
  headerClassName?: string;
  showCloseButton?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}

const widthClassMap: Record<ModalWidth, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  full: 'max-w-4xl',
};

export function ModalEl({
  isOpen,
  onClose,
  maxWidth = 'md',
  title,
  subtitle,
  headerBadge,
  headerGradient = true,
  headerClassName,
  showCloseButton = true,
  closeOnBackdrop = true,
  closeOnEscape = true,
  className,
  bodyClassName,
  children,
}: ModalElProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, closeOnEscape]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeOnBackdrop ? onClose : undefined}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={cn(
              'relative w-full bg-white rounded-3xl shadow-2xl border-2 border-slate-200/90 overflow-hidden z-10 my-auto',
              widthClassMap[maxWidth],
              className
            )}
          >
            {/* Optional Header */}
            {(title || headerBadge || showCloseButton) && (
              <div
                className={cn(
                  'relative p-6',
                  headerGradient
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white'
                    : 'bg-white text-slate-900 border-b border-slate-100',
                  headerClassName
                )}
              >
                {showCloseButton && (
                  <button
                    type="button"
                    onClick={onClose}
                    className={cn(
                      'absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer outline-none focus-visible:ring-2',
                      headerGradient
                        ? 'bg-white/20 hover:bg-white/30 text-white focus-visible:ring-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 focus-visible:ring-sky-500'
                    )}
                    aria-label="Close dialog"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}

                {headerBadge && <div className="mb-2">{headerBadge}</div>}

                {title && (
                  <h2 className={cn('text-xl sm:text-2xl font-black tracking-tight', showCloseButton && 'pr-8')}>
                    {title}
                  </h2>
                )}

                {subtitle && (
                  <p
                    className={cn(
                      'text-xs mt-1',
                      headerGradient ? 'text-sky-100' : 'text-slate-500'
                    )}
                  >
                    {subtitle}
                  </p>
                )}
              </div>
            )}

            {/* Modal Body */}
            <div className={cn('p-6', bodyClassName)}>
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
