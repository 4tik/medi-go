import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, User, LogOut, Stethoscope } from 'lucide-react';
import { Button } from './ui/Button';
import { useModal } from '../context/ModalContext';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Find Doctors', href: '#doctors' },
  { label: 'Specialties', href: '#specialties' },
  { label: 'Telemedicine', href: '#telemedicine' },
  { label: 'Clinics', href: '#services' },
  { label: 'About', href: '#technology' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openLogin, openBooking, user, logout } = useModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-slate-100/80 shadow-lg shadow-sky-100/50'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      {/* Top emergency announcement bar */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white text-xs py-1.5 px-4 text-center hidden md:block">
        <span className="flex items-center justify-center gap-2">
          <Phone className="w-3 h-3" />
          24/7 Emergency: <strong>1-800-MEDI-GO</strong>
          <span className="mx-3 text-sky-300/60">|</span>
          <span className="inline-flex items-center gap-1">
            <Stethoscope className="w-3.5 h-3.5 text-sky-200" />
            Free First Consultation for New Patients
          </span>
          <span className="mx-3 text-sky-300/60">|</span>
          <span>Now Accepting New Patients</span>
        </span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2.5"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center shadow-md">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-white"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M12 2L12 22M2 12L22 12" strokeLinecap="round" />
                <rect x="6" y="6" width="12" height="12" rx="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Medi
              </span>
              <span className="text-xl font-bold text-slate-800"> Go</span>
              <div className="text-[9px] text-slate-400 leading-none font-semibold tracking-widest uppercase -mt-0.5">
                Digital Health Platform
              </div>
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-sky-600 rounded-lg hover:bg-sky-50/70 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-2 bg-sky-50 border border-sky-100 px-3 py-1.5 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-bold">
                  <User className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-800">{user.name}</span>
                <button
                  onClick={logout}
                  title="Logout"
                  className="p-1 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                  aria-label="Logout"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => openLogin('patient')}
                className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors cursor-pointer"
              >
                Login
              </button>
            )}

            <Button
              size="md"
              variant="primary"
              onClick={() => openBooking()}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white border-t border-slate-100 shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 pb-1 space-y-2">
                {user ? (
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-xs">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">{user.name}</div>
                        <div className="text-[10px] text-slate-500">{user.email}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="text-xs text-rose-600 font-semibold cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      openLogin('patient');
                    }}
                    className="block w-full text-center px-4 py-3 text-sm font-semibold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
                  >
                    Login to Account
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    openBooking();
                  }}
                  className="block w-full text-center px-4 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 shadow-md shadow-sky-500/20 cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
