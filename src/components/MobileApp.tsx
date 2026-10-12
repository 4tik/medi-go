import { motion } from 'framer-motion';
import { Calendar, Video, FileText, BarChart3, Star, Download, Smartphone, MessageSquare } from 'lucide-react';
import { Badge } from './ui';

const appFeatures = [
  { icon: Calendar, text: 'Appointment Booking', color: 'text-sky-400' },
  { icon: Video, text: 'Video Consultation', color: 'text-teal-400' },
  { icon: FileText, text: 'Prescription Access', color: 'text-blue-400' },
  { icon: BarChart3, text: 'Health Reports', color: 'text-purple-400' },
];

const appStats = [
  { value: '4.9', label: 'App Store', icon: Star, iconColor: 'text-amber-400' },
  { value: '4.8', label: 'Google Play', icon: Star, iconColor: 'text-amber-400' },
  { value: '500K+', label: 'Downloads', icon: Download, iconColor: 'text-sky-400' },
  { value: '50K+', label: 'Reviews', icon: MessageSquare, iconColor: 'text-teal-400' },
];

export default function MobileApp() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-block">
              <Badge variant="sky" className="bg-sky-500/20 border-sky-400/30 text-sky-300">
                <span className="inline-flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-sky-400" />
                  Mobile App
                </span>
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Healthcare in Your{' '}
              <span className="bg-gradient-to-r from-sky-400 to-teal-300 bg-clip-text text-transparent">
                Pocket
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
              Download the Medi Go app and access world-class healthcare from anywhere. Manage appointments, consult doctors, view prescriptions, and track your health — all in one app.
            </p>

            {/* App Features List */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {appFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.text}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/10"
                  >
                    <Icon className={`w-5 h-5 ${feature.color} flex-shrink-0`} />
                    <span className="text-xs sm:text-sm font-medium text-slate-200">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* App ratings stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {appStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <div className="flex justify-center mb-1">
                      <Icon className={`w-5 h-5 ${stat.iconColor} ${stat.label.includes('Store') || stat.label.includes('Play') ? 'fill-amber-400' : ''}`} />
                    </div>
                    <div className="text-lg font-extrabold text-white">{stat.value}</div>
                    <div className="text-[11px] text-slate-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Download Badges */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="#app-store"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-5 py-3 bg-white text-slate-900 rounded-2xl hover:bg-slate-50 transition-all shadow-lg group cursor-pointer"
              >
                <div className="w-8 h-8 flex items-center justify-center text-slate-900">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.04-2.85 0-.15-.01-.3-.04-.44-.99.04-2.18.66-2.88 1.48-.56.64-1.05 1.68-1.05 2.74 0 .15.02.3.04.43 1.12.09 2.27-.56 2.89-1.36z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-500 leading-none mb-0.5">Download on the</div>
                  <div className="text-sm sm:text-base font-bold leading-none">App Store</div>
                </div>
              </motion.a>
              <motion.a
                href="#google-play"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-5 py-3 bg-white text-slate-900 rounded-2xl hover:bg-slate-50 transition-all shadow-lg group cursor-pointer"
              >
                <div className="w-8 h-8 flex items-center justify-center text-sky-600">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186a2.012 2.012 0 0 1-.22-.916V2.73c0-.33.08-.642.22-.916zm11.254 11.255l2.484-2.484-11.83-6.76 9.346 9.244zm0 1.862l-9.346 9.244 11.83-6.76-2.484-2.484zm1.534-1.534l3.155 1.803a1.455 1.455 0 0 0 0-2.524l-3.155-1.803-1.07 1.07 1.07 1.07z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-500 leading-none mb-0.5">Get it on</div>
                  <div className="text-sm sm:text-base font-bold leading-none">Google Play</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center pt-4"
          >
            <div className="relative flex items-end justify-center gap-4">
              {/* Phone 1 - Main Mockup */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <div className="w-48 sm:w-52 bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl border-2 border-slate-700">
                  <div className="bg-white rounded-[2rem] overflow-hidden" style={{ minHeight: '350px' }}>
                    {/* App Header */}
                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-4 text-white">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold">Medi Go</span>
                        <Smartphone className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-[11px] opacity-80 mb-0.5">Good morning, Sarah</div>
                      <div className="text-xs font-bold">Next appointment in 2h</div>
                    </div>

                    {/* App Content */}
                    <div className="p-3 space-y-2">
                      {/* Appointment Mini-Card */}
                      <div className="bg-sky-50 rounded-xl p-2.5 border border-sky-100">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center text-[10px] text-white font-bold">
                            SC
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-800">Dr. Sarah Chen</div>
                            <div className="text-[10px] text-slate-500">Today · 2:00 PM · Video</div>
                          </div>
                        </div>
                      </div>

                      {/* Vital Metrics Grid */}
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          { label: 'Heart Rate', value: '72 bpm', color: 'bg-rose-50', dot: 'bg-rose-400' },
                          { label: 'Blood Pres.', value: '120/80', color: 'bg-blue-50', dot: 'bg-blue-400' },
                          { label: 'SpO2', value: '98%', color: 'bg-teal-50', dot: 'bg-teal-400' },
                          { label: 'Steps', value: '8,240', color: 'bg-amber-50', dot: 'bg-amber-400' },
                        ].map((m) => (
                          <div key={m.label} className={`${m.color} rounded-lg p-2`}>
                            <div className="flex items-center gap-1 mb-0.5">
                              <div className={`w-1.5 h-1.5 rounded-full ${m.dot}`} />
                              <div className="text-[9px] text-slate-500">{m.label}</div>
                            </div>
                            <div className="text-xs font-bold text-slate-800">{m.value}</div>
                          </div>
                        ))}
                      </div>

                      {/* Prescription Alert */}
                      <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100">
                        <div className="text-[9px] font-semibold text-slate-400 mb-0.5">Latest Prescription</div>
                        <div className="text-xs font-bold text-slate-800">Amlodipine 5mg</div>
                        <div className="text-[9px] text-slate-500">Once daily · 30 days remaining</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulated Notch */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-slate-900 rounded-full z-20" />
              </motion.div>

              {/* Phone 2 - Secondary Mockup (tablet/desktop only) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="relative -ml-8 opacity-75 hidden sm:block"
              >
                <div className="w-36 bg-slate-800 rounded-[2rem] p-1.5 shadow-xl border-2 border-slate-600">
                  <div className="bg-white rounded-[1.75rem] overflow-hidden" style={{ minHeight: '280px' }}>
                    <div className="bg-gradient-to-br from-teal-500 to-emerald-600 p-3 text-white">
                      <div className="text-xs font-bold mb-1">Book Visit</div>
                      <div className="text-[9px] opacity-80">500+ Specialists Available</div>
                    </div>
                    <div className="p-2.5 space-y-1.5">
                      {['Cardiologist', 'Pediatrician', 'Neurologist', 'Dermatologist'].map((spec, i) => (
                        <div
                          key={spec}
                          className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] ${
                            i === 0 ? 'bg-teal-50 border border-teal-100 font-bold text-teal-800' : 'text-slate-600'
                          }`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-teal-500' : 'bg-slate-300'}`} />
                          <span>{spec}</span>
                        </div>
                      ))}
                      <div className="w-full mt-2 py-1.5 text-[9px] font-bold text-white text-center rounded-lg bg-gradient-to-r from-teal-500 to-emerald-600">
                        Find Doctor →
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Review Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-2 left-0 sm:left-4 bg-white/90 backdrop-blur-xl border border-white/50 rounded-xl p-2.5 shadow-lg z-20"
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <div>
                  <div className="text-xs font-bold text-slate-800">4.9 Rating</div>
                  <div className="text-[10px] text-slate-500">50K+ Reviews</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Downloads Badge */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-4 right-0 sm:right-4 bg-white/90 backdrop-blur-xl border border-white/50 rounded-xl p-2.5 shadow-lg z-20"
            >
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-sky-600" />
                <div>
                  <div className="text-xs font-bold text-slate-800">500K+ Downloads</div>
                  <div className="text-[10px] text-slate-500">iOS & Android</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
