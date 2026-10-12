import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Stethoscope, Heart, Sparkles, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { Button, ModalEl, Input } from '../ui';

export interface AuthFormProps {
  onSuccess?: () => void;
  defaultRole?: 'patient' | 'doctor';
  defaultIsSignUp?: boolean;
  className?: string;
}

export function AuthForm({
  onSuccess,
  defaultRole = 'patient',
  defaultIsSignUp = false,
  className = '',
}: AuthFormProps) {
  const { login } = useModal();
  const [activeRole, setActiveRole] = useState<'patient' | 'doctor'>(defaultRole);
  const [isSignUp, setIsSignUp] = useState(defaultIsSignUp);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setActiveRole(defaultRole);
  }, [defaultRole]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      login({
        name: name || (activeRole === 'doctor' ? 'Dr. Sarah Chen' : 'Sarah Jenkins'),
        email: email || (activeRole === 'doctor' ? 'dr.chen@medi-go.com' : 'sarah@example.com'),
        role: activeRole,
      });
      if (onSuccess) onSuccess();
    }, 600);
  };

  const handleQuickDemo = (role: 'patient' | 'doctor') => {
    setActiveRole(role);
    if (role === 'doctor') {
      setEmail('dr.chen@medi-go.com');
      setName('Dr. Sarah Chen');
      setPassword('MediGoDoc2026!');
    } else {
      setEmail('sarah.patient@medi-go.com');
      setName('Sarah Jenkins');
      setPassword('PatientPass2026!');
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Role Switcher Tabs with Smooth Sliding Animation */}
      <div className="p-6 pb-2">
        <label className="block text-xs font-bold text-slate-800 tracking-wide mb-2 uppercase">
          Select Account Type
        </label>
        <div className="flex p-1.5 bg-slate-100 rounded-2xl border-2 border-slate-200 relative">
          {/* Patient Tab */}
          <button
            type="button"
            onClick={() => setActiveRole('patient')}
            className={`relative flex-1 flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer z-10 ${
              activeRole === 'patient'
                ? 'text-sky-900'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {activeRole === 'patient' && (
              <motion.div
                layoutId="activeRoleIndicator"
                className="absolute inset-0 bg-white rounded-xl shadow-md border border-slate-200 -z-10"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
            <motion.div
              animate={{ scale: activeRole === 'patient' ? 1.15 : 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <Heart
                className={`w-4 h-4 ${
                  activeRole === 'patient' ? 'text-rose-500 fill-rose-500' : 'text-slate-400'
                }`}
              />
            </motion.div>
            <span>Patient Portal</span>
          </button>

          {/* Doctor Tab */}
          <button
            type="button"
            onClick={() => setActiveRole('doctor')}
            className={`relative flex-1 flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer z-10 ${
              activeRole === 'doctor'
                ? 'text-sky-900'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {activeRole === 'doctor' && (
              <motion.div
                layoutId="activeRoleIndicator"
                className="absolute inset-0 bg-white rounded-xl shadow-md border border-slate-200 -z-10"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
            <motion.div
              animate={{ scale: activeRole === 'doctor' ? 1.15 : 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <Stethoscope
                className={`w-4 h-4 ${
                  activeRole === 'doctor' ? 'text-sky-600' : 'text-slate-400'
                }`}
              />
            </motion.div>
            <span>Doctor & Staff</span>
          </button>
        </div>
      </div>

      {/* Quick Demo Fill Pill Helper */}
      <div className="px-6 py-2.5 flex items-center justify-between bg-sky-50/70 border-y border-sky-100/90 text-xs">
        <span className="font-bold text-slate-700 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          Quick One-Click Demo:
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => handleQuickDemo('patient')}
            className={`px-3 py-1 rounded-lg border text-[11px] font-bold shadow-xs transition-all cursor-pointer ${
              activeRole === 'patient'
                ? 'bg-sky-600 text-white border-sky-600 shadow-sm'
                : 'bg-white border-sky-300 text-sky-800 hover:bg-sky-50'
            }`}
          >
            Fill Patient
          </button>
          <button
            type="button"
            onClick={() => handleQuickDemo('doctor')}
            className={`px-3 py-1 rounded-lg border text-[11px] font-bold shadow-xs transition-all cursor-pointer ${
              activeRole === 'doctor'
                ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                : 'bg-white border-teal-300 text-teal-800 hover:bg-teal-50'
            }`}
          >
            Fill Doctor
          </button>
        </div>
      </div>

      {/* Main Authentication Form with smooth animated transitions */}
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <AnimatePresence mode="wait">
          {isSignUp && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Input
                label="Full Legal Name"
                required
                placeholder={activeRole === 'doctor' ? 'e.g. Dr. John Smith, MD' : 'e.g. John Doe'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                icon={<User className="w-4 h-4" />}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          key={`email-${activeRole}`}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Input
            label="Email Address"
            type="email"
            required
            placeholder={activeRole === 'doctor' ? 'doctor@medi-go.com' : 'patient@example.com'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<Mail className="w-4 h-4" />}
          />
        </motion.div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold text-slate-800 tracking-wide">
              Password <span className="text-rose-500">*</span>
            </label>
            {!isSignUp && (
              <a href="#forgot" className="text-xs font-semibold text-sky-700 hover:text-sky-800 hover:underline">
                Forgot password?
              </a>
            )}
          </div>

          <Input
            type={showPassword ? 'text' : 'password'}
            required
            placeholder="••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock className="w-4 h-4" />}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-500 hover:text-slate-800 cursor-pointer p-1"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            }
          />
        </div>

        {/* Remember Me & Privacy */}
        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-2 border-slate-400 text-sky-600 focus:ring-sky-500 cursor-pointer"
            />
            <span className="text-xs font-semibold text-slate-700">Remember this device</span>
          </label>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>256-bit HIPAA Secure</span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button size="lg" variant="primary" fullWidth type="submit" disabled={isLoading}>
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Verifying Credentials...
              </span>
            ) : (
              <motion.span
                key={activeRole + isSignUp}
                initial={{ opacity: 0.7, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2"
              >
                {isSignUp
                  ? `Create ${activeRole === 'doctor' ? 'Provider' : 'Patient'} Account`
                  : `Sign In to Medi Go ${activeRole === 'doctor' ? '(Provider)' : ''}`}
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            )}
          </Button>
        </div>

        {/* Mode Switcher */}
        <div className="text-center pt-3 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-xs text-slate-700 hover:text-sky-700 font-semibold transition-colors cursor-pointer"
          >
            {isSignUp ? (
              <span>
                Already have an account? <strong className="text-sky-700 underline ml-1">Sign in here</strong>
              </span>
            ) : (
              <span>
                Don't have an account yet? <strong className="text-sky-700 underline ml-1">Create free account</strong>
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export function AuthModal() {
  const { isLoginOpen, closeLogin, loginRole } = useModal();

  return (
    <ModalEl
      isOpen={isLoginOpen}
      onClose={closeLogin}
      maxWidth="lg"
      title="Medi Go Authentication"
      subtitle="Sign in or register to access consultations, prescriptions, and records"
      headerBadge={
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center">
            {loginRole === 'doctor' ? (
              <Stethoscope className="w-4 h-4 text-white" />
            ) : (
              <Heart className="w-4 h-4 text-white fill-white" />
            )}
          </div>
          <span className="text-xs font-bold tracking-wider uppercase text-sky-100">
            {loginRole === 'doctor' ? 'Healthcare Provider Portal' : 'Patient Health Portal'}
          </span>
        </div>
      }
      bodyClassName="p-0"
    >
      <AuthForm onSuccess={closeLogin} defaultRole={loginRole} />
    </ModalEl>
  );
}
