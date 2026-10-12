import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info, X } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export function Toast() {
  const { toast, showToast } = useModal();

  return (
    <div className="fixed top-20 right-4 z-[999] pointer-events-none max-w-sm w-full">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className={`pointer-events-auto flex items-center justify-between gap-3 p-4 rounded-2xl shadow-xl border backdrop-blur-xl ${toast.type === 'success'
              ? 'bg-slate-900/95 text-white border-sky-500/30 shadow-sky-500/10'
              : 'bg-slate-900/95 text-white border-slate-700 shadow-slate-900/20'
              }`}
          >
            <div className="flex items-center gap-3">
              {toast.type === 'success' ? (
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                  <Info className="w-5 h-5" />
                </div>
              )}
              <span className="text-sm font-medium">{toast.message}</span>
            </div>
            <button
              onClick={() => showToast('')}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
