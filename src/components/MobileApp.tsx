import { motion } from 'framer-motion';
import { Calendar, Video, FileText, BarChart3, Star, Download, Smartphone } from 'lucide-react';

const appFeatures = [
  { icon: Calendar, text: 'Appointment Booking', color: 'text-sky-500' },
  { icon: Video, text: 'Video Consultation', color: 'text-teal-500' },
  { icon: FileText, text: 'Prescription Access', color: 'text-blue-500' },
  { icon: BarChart3, text: 'Health Reports', color: 'text-purple-500' },
];

const appStats = [
  { value: '4.9', label: 'App Store', icon: '⭐' },
  { value: '4.8', label: 'Google Play', icon: '⭐' },
  { value: '500K+', label: 'Downloads', icon: '📲' },
  { value: '50K+', label: 'Reviews', icon: '💬' },
];

export default function MobileApp() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1e3a5f 60%, #0c4a6e 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-300 text-sm font-medium mb-6">
              📱 Mobile App
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Healthcare in Your{' '}
              <span className="bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent">
                Pocket
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Download the MediCare Pro app and access world-class healthcare from anywhere. Manage appointments, consult doctors, view prescriptions, and track your health — all in one app.
            </p>

            {/* App Features */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {appFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.text} className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/10">
                    <Icon className={`w-5 h-5 ${feature.color} flex-shrink-0`} />
                    <span className="text-sm font-medium text-slate-200">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* App stats */}
            <div className="grid grid-cols-4 gap-3 mb-8">
              {appStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-lg mb-0.5">{stat.icon}</div>
                  <div className="text-lg font-extrabold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="#app-store"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-5 py-3 bg-white text-slate-900 rounded-2xl hover:bg-slate-100 transition-all shadow-lg group"
              >
                <div className="text-3xl">🍎</div>
                <div>
                  <div className="text-xs text-slate-500 leading-none mb-0.5">Download on the</div>
                  <div className="text-base font-bold leading-none">App Store</div>
                </div>
              </motion.a>
              <motion.a
                href="#google-play"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-5 py-3 bg-white text-slate-900 rounded-2xl hover:bg-slate-100 transition-all shadow-lg group"
              >
                <div className="text-3xl">▶️</div>
                <div>
                  <div className="text-xs text-slate-500 leading-none mb-0.5">Get it on</div>
                  <div className="text-base font-bold leading-none">Google Play</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative flex items-end justify-center gap-4">
              {/* Phone 1 - Main */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <div className="w-44 bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl border-2 border-slate-700">
                  <div className="bg-white rounded-[2rem] overflow-hidden" style={{ minHeight: '340px' }}>
                    {/* App Header */}
                    <div className="gradient-primary p-4 text-white">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold">MediCare Pro</span>
                        <Smartphone className="w-3 h-3" />
                      </div>
                      <div className="text-xs opacity-80 mb-1">Good morning, Sarah 👋</div>
                      <div className="text-sm font-bold">Next appointment in 2h</div>
                    </div>

                    {/* App Content */}
                    <div className="p-3 space-y-2">
                      {/* Appointment card */}
                      <div className="bg-sky-50 rounded-xl p-2.5 border border-sky-100">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center text-xs text-white font-bold">SC</div>
                          <div>
                            <div className="text-xs font-bold text-slate-800">Dr. Sarah Chen</div>
                            <div className="text-[10px] text-slate-500">Today · 2:00 PM · Video</div>
                          </div>
                        </div>
                      </div>

                      {/* Health metrics */}
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

                      {/* Recent Rx */}
                      <div className="bg-slate-50 rounded-xl p-2.5">
                        <div className="text-[10px] font-semibold text-slate-500 mb-1">Latest Prescription</div>
                        <div className="text-xs font-bold text-slate-800">Amlodipine 5mg</div>
                        <div className="text-[10px] text-slate-500">Once daily · 30 days</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 rounded-full z-20" />
              </motion.div>

              {/* Phone 2 - Secondary (slightly behind) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="relative -ml-8 opacity-80"
              >
                <div className="w-36 bg-slate-800 rounded-[2rem] p-1.5 shadow-xl border-2 border-slate-600">
                  <div className="bg-white rounded-[1.75rem] overflow-hidden" style={{ minHeight: '280px' }}>
                    <div className="bg-gradient-to-br from-teal-500 to-emerald-600 p-4 text-white">
                      <div className="text-xs font-bold mb-2">Book Appointment</div>
                      <div className="text-[10px] opacity-80">500+ Specialists Available</div>
                    </div>
                    <div className="p-3 space-y-2">
                      {['Cardiologist', 'Pediatrician', 'Neurologist', 'Dermatologist'].map((spec, i) => (
                        <div key={spec} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg ${i === 0 ? 'bg-teal-50 border border-teal-100' : 'hover:bg-slate-50'}`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-teal-500' : 'bg-slate-300'}`} />
                          <span className="text-[10px] font-medium text-slate-700">{spec}</span>
                        </div>
                      ))}
                      <button className="w-full mt-2 py-2 text-[10px] font-bold text-white rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600">
                        Find Doctor →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-0 left-0 glass rounded-xl p-2.5 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <div>
                  <div className="text-xs font-bold text-slate-800">4.9 Rating</div>
                  <div className="text-[10px] text-slate-500">50K+ Reviews</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-0 right-0 glass rounded-xl p-2.5 shadow-lg"
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
