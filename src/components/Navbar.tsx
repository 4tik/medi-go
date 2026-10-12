import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/Button';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Find Doctors', href: '#doctors' },
  { label: 'Specialties', href: '#specialties' },
  { label: 'Telemedicine', href: '#telemedicine' },
  { label: 'Clinics', href: '#services' },
  { label: 'About', href: '#technology' },
  { label: 'Contact', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          24/7 Emergency: <strong>1-800-MEDICARE</strong>
          <span className="mx-3 text-sky-300/60">|</span>
          <span>🩺 Free First Consultation for New Patients</span>
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
                MediCare
              </span>
              <span className="text-xl font-bold text-slate-800"> Pro</span>
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
            <a
              href="#login"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors"
            >
              Login
            </a>
            <a href="#book">
              <Button size="md" variant="primary">
                Book Appointment
              </Button>
            </a>
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
                <a
                  href="#login"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-3 text-sm font-medium text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all"
                >
                  Login
                </a>
                <a
                  href="#book"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 shadow-md shadow-sky-500/20"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
