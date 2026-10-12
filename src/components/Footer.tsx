import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Lock, ShieldCheck, CheckCircle2, Accessibility, Code2 } from 'lucide-react';

const footerLinks = {
  Services: [
    'Telemedicine Consultations',
    'Specialist Appointments',
    'Electronic Prescriptions',
    'Diagnostic Testing',
    'Health Check Packages',
    'Medical Records',
  ],
  Specialties: [
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Gynecology',
    'Dermatology',
    'Oncology',
    'Ophthalmology',
  ],
  Support: [
    'Patient Portal',
    'Insurance Verification',
    'Help Center',
    'Doctor Registration',
    'Clinic Partnership',
    'Corporate Health',
    'API Documentation',
    'Status Page',
  ],
  Company: [
    'About Us',
    'Our Mission',
    'Leadership Team',
    'Press & Media',
    'Careers',
    'Blog & Health Tips',
    'Research Papers',
    'Investor Relations',
  ],
};

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
];

const certifications = [
  { name: 'HIPAA Compliant', icon: Lock },
  { name: 'SOC 2 Certified', icon: ShieldCheck },
  { name: 'ISO 27001', icon: CheckCircle2 },
  { name: 'WCAG AA', icon: Accessibility },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
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
                <span className="text-xl font-bold text-white">Medi</span>
                <span className="text-xl font-bold text-sky-400"> Go</span>
                <div className="text-[9px] text-slate-400 leading-none font-semibold tracking-widest uppercase">
                  Digital Health Platform
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-5 max-w-sm">
              Your trusted digital healthcare partner. Connecting 50,000+ patients with 500+ specialists across 100+ clinics nationwide.
            </p>

            {/* Direct contact info */}
            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>1-800-MEDI-GO (24/7)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>hello@medi-go.com</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>123 Health Plaza, Suite 500<br />New York, NY 10001</span>
              </div>
            </div>

            {/* Social media links */}
            <div className="flex gap-2">
              {socialLinks.map(({ label, href, svg }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-sky-600 border border-slate-700/80 hover:border-sky-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 cursor-pointer"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {svg}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications row */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
              {certifications.map((cert) => {
                const Icon = cert.icon;
                return (
                  <div key={cert.name} className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Icon className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                    <span>{cert.name}</span>
                  </div>
                );
              })}
            </div>
            <div className="text-xs text-slate-400 text-center sm:text-right">
              Emergency? Call{' '}
              <a href="tel:911" className="text-rose-400 font-bold hover:underline">
                911
              </a>{' '}
              or{' '}
              <a href="tel:1800633446" className="text-sky-400 font-medium hover:underline">
                1-800-MEDI-GO
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="space-y-1">
              <p className="text-xs text-slate-500">
                © 2025 Medi Go, Inc. All rights reserved. Medi Go is not a substitute for professional medical advice.
              </p>
              <p className="text-xs text-slate-400 flex items-center justify-center md:justify-start gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                <span>Design and developed by</span>
                <span className="font-bold text-sky-400 hover:text-sky-300 transition-colors">
                  syntax.error
                </span>
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility', 'Sitemap'].map((link) => (
                <a key={link} href="#" className="text-xs text-slate-400 hover:text-sky-400 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
