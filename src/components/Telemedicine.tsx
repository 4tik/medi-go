import { motion } from 'framer-motion';
import { Video, MessageSquare, FileText, RefreshCw, Shield, Wifi, Monitor, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'HD Video Consultation',
    description: 'Crystal-clear 1080p video calls with zero lag — just like being in the same room as your doctor.',
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    icon: MessageSquare,
    title: 'Secure Messaging',
    description: 'End-to-end encrypted chat for follow-up questions, test results, and ongoing care.',
    gradient: 'from-teal-500 to-emerald-600',
  },
  {
    icon: FileText,
    title: 'Digital Prescriptions',
    description: 'Receive legally valid e-prescriptions instantly, forwarded directly to your pharmacy.',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: RefreshCw,
    title: 'Follow-up Care',
    description: 'Automated follow-up scheduling, medication reminders, and health progress tracking.',
    gradient: 'from-purple-500 to-violet-600',
  },
];

const trustBadges = [
  { icon: Shield, text: '256-bit Encryption' },
  { icon: Wifi, text: 'HD Video Quality' },
  { icon: Monitor, text: 'Works on All Devices' },
  { icon: Smartphone, text: 'Mobile App Available' },
];

export default function Telemedicine() {
  return (
    <section id="telemedicine" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div className="relative bg-slate-900 rounded-3xl p-1 shadow-2xl">
              {/* Header bar */}
              <div className="bg-slate-800 rounded-t-2xl px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="flex-1 mx-4 bg-slate-700 rounded-md px-3 py-1 text-xs text-slate-400">
                  app.medicarepro.com/video-call
                </div>
                <Shield className="w-4 h-4 text-emerald-400" />
              </div>

              {/* Video call simulation */}
              <div className="bg-slate-800 p-4 relative overflow-hidden" style={{ minHeight: '260px' }}>
                {/* Doctor video */}
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/7195424/pexels-photo-7195424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Doctor on video call"
                    className="w-full h-44 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-xl" />
                  {/* Doctor info overlay */}
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="text-sm font-bold">Dr. Sarah Chen</div>
                    <div className="text-xs text-sky-300">Cardiologist · Session: 12:45</div>
                  </div>
                  {/* Live badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    LIVE
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-3 mt-4">
                  {[
                    { icon: '🎤', active: true, color: 'bg-slate-700' },
                    { icon: '📷', active: true, color: 'bg-slate-700' },
                    { icon: '📞', active: false, color: 'bg-red-500' },
                    { icon: '💬', active: true, color: 'bg-slate-700' },
                    { icon: '⚙️', active: true, color: 'bg-slate-700' },
                  ].map((ctrl, i) => (
                    <button key={i} className={`w-10 h-10 rounded-full ${ctrl.color} text-lg flex items-center justify-center hover:opacity-80 transition-opacity`}>
                      {ctrl.icon}
                    </button>
                  ))}
                </div>

                {/* Chat preview */}
                <div className="mt-4 space-y-2">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-sky-500 flex-shrink-0 flex items-center justify-center text-xs text-white">D</div>
                    <div className="bg-slate-700 rounded-xl rounded-tl-none px-3 py-2 text-xs text-white">
                      Based on your symptoms, I recommend a CBC test.
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="bg-sky-600 rounded-xl rounded-tr-none px-3 py-2 text-xs text-white">
                      Thank you, Doctor. Can I get the prescription?
                    </div>
                    <div className="w-6 h-6 rounded-full bg-teal-500 flex-shrink-0 flex items-center justify-center text-xs text-white">P</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 glass rounded-2xl p-3 shadow-xl"
            >
              <div className="text-xs font-semibold text-slate-600 mb-1">Today's Sessions</div>
              <div className="text-2xl font-extrabold text-gradient">1,247</div>
              <div className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
                <span>↑ 12% vs yesterday</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-4 glass rounded-2xl p-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-sm">✅</div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Rx Sent to Pharmacy</div>
                  <div className="text-xs text-slate-500">Metro Pharmacy · Just now</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-sm font-medium mb-6">
              📱 Telemedicine Platform
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              World-Class Care{' '}
              <span className="text-gradient">From Home</span>
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Our telemedicine platform brings top-tier medical consultations to your screen. Secure, reliable, and as personal as an in-clinic visit.
            </p>

            {/* Feature list */}
            <div className="space-y-4 mb-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-sky-50 border border-transparent hover:border-sky-100 transition-all duration-300 group"
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800 mb-1">{feature.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.text} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                    <Icon className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    <span className="text-xs font-semibold text-slate-600">{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
