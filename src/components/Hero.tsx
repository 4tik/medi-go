import { motion } from 'framer-motion';
import { Search, Calendar, Video, Star, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Button, Badge, Card } from './ui';

const stats = [
  { value: '50K+', label: 'Patients Served', icon: '👥' },
  { value: '500+', label: 'Specialists', icon: '🩺' },
  { value: '100+', label: 'Clinics', icon: '🏥' },
  { value: '98%', label: 'Satisfaction', icon: '⭐' },
];

const features = [
  'HIPAA-Compliant Platform',
  'Board-Certified Doctors',
  '24/7 Medical Support',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 bg-gradient-to-br from-blue-50/70 via-teal-50/40 to-slate-50"
    >
      {/* Decorative background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl bg-sky-500"
        />
        <div
          className="absolute top-1/2 -left-20 w-80 h-80 rounded-full opacity-15 blur-3xl bg-teal-500"
        />
        <div
          className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl bg-blue-600"
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230EA5E9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column Content */}
          <div>
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block"
            >
              <Badge variant="sky" pulse>
                <span>#1 Trusted Healthcare Platform</span>
                <span className="text-sky-300">•</span>
                <span>Rated 4.9/5 ⭐</span>
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-5 tracking-tight"
            >
              Your Trusted{' '}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Digital Healthcare
              </span>{' '}
              Partner
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-xl"
            >
              Book appointments, consult specialists online, access medical records, and receive quality healthcare from anywhere — anytime.
            </motion.p>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {features.map((f) => (
                <div key={f} className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <a href="#book">
                <Button size="lg" variant="primary" className="w-full sm:w-auto">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
              <a href="#doctors">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Search className="w-5 h-5" />
                  Find a Doctor
                </Button>
              </a>
            </motion.div>

            {/* Search Input Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 flex flex-col sm:flex-row gap-2 max-w-xl"
            >
              <div className="flex-1 flex items-center gap-3 px-3 py-1">
                <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search doctors, specialties, clinics..."
                  className="w-full text-sm text-slate-700 outline-none placeholder-slate-400 bg-transparent"
                />
              </div>
              <Button size="sm" variant="primary" className="sm:px-6">
                Search
              </Button>
            </motion.div>
          </div>

          {/* Right Visual / Doctor & Floating Highlights */}
          <div className="relative min-h-[380px] sm:min-h-[460px] lg:h-[580px] flex items-center justify-center">
            {/* Main doctor image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 w-full max-w-xs sm:max-w-sm"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-100 to-teal-100 scale-105" />
                <img
                  src="https://images.pexels.com/photos/7195424/pexels-photo-7195424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Doctor conducting telemedicine consultation"
                  className="relative z-10 w-full h-72 sm:h-80 object-cover rounded-3xl shadow-2xl"
                  loading="eager"
                />
              </div>
            </motion.div>

            {/* Floating Card: Appointment Confirmed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-4 -left-2 sm:left-2 lg:-left-4 z-20 bg-white/85 backdrop-blur-xl border border-white/50 rounded-2xl p-3 shadow-xl max-w-[210px] sm:max-w-xs"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-base flex-shrink-0">
                  ✅
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800">Appointment Confirmed</div>
                  <div className="text-[11px] text-slate-500">Dr. Sarah Chen · Today 2:00 PM</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card: Video Call Ready */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute bottom-20 -right-2 sm:right-2 lg:-right-4 z-20 bg-white/85 backdrop-blur-xl border border-white/50 rounded-2xl p-3 shadow-xl"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <Video className="w-4 h-4 text-sky-600" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800">Video Call Ready</div>
                  <div className="text-[11px] text-slate-500">HD • Encrypted • Secure</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card: Online Doctors Rating */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-2 left-2 sm:left-6 lg:left-8 z-20 bg-white/85 backdrop-blur-xl border border-white/50 rounded-2xl p-3 shadow-xl hidden sm:block"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="flex -space-x-1.5">
                  {['#0EA5E9', '#14B8A6', '#2563EB'].map((color, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full border-2 border-white"
                      style={{ background: color }}
                    />
                  ))}
                </div>
                <div className="text-xs font-semibold text-slate-700">Online Doctors</div>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-[11px] text-slate-600 ml-1">4.9 (12,800+ reviews)</span>
              </div>
            </motion.div>

            {/* Floating Card: HIPAA Secure */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute top-12 right-0 sm:right-4 lg:right-4 z-20 bg-white/85 backdrop-blur-xl border border-white/50 rounded-2xl px-3 py-2 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-800">HIPAA Secure</div>
                  <div className="text-[10px] text-slate-500">256-bit encrypted</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
            >
              <Card className="p-5 text-center">
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-extrabold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mb-0.5">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
