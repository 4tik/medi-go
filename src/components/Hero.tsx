import { motion } from 'framer-motion';
import { Search, Calendar, Video, Star, Shield, ArrowRight, CheckCircle } from 'lucide-react';

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
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
      style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #F0FDFA 40%, #ECFEFF 100%)' }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #0EA5E9, transparent)' }} />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #14B8A6, transparent)' }} />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230EA5E9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>#1 Trusted Healthcare Platform</span>
              <span className="text-sky-400">•</span>
              <span>Rated 4.9/5 ⭐</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-5"
            >
              Your Trusted{' '}
              <span className="text-gradient">Digital Healthcare</span>{' '}
              Partner
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed mb-6 max-w-xl"
            >
              Book appointments, consult specialists online, access medical records, and receive quality healthcare from anywhere — anytime.
            </motion.p>

            {/* Feature checks */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {features.map((f) => (
                <div key={f} className="flex items-center gap-1.5 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <motion.a
                href="#book"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-2xl gradient-primary shadow-lg hover:shadow-sky-300/50 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#doctors"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-sky-700 bg-white border-2 border-sky-200 rounded-2xl hover:bg-sky-50 hover:border-sky-300 transition-all duration-300 shadow-sm"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Search className="w-5 h-5" />
                Find a Doctor
              </motion.a>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 flex flex-col sm:flex-row gap-2 max-w-xl"
            >
              <div className="flex-1 flex items-center gap-3 px-3">
                <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search doctors, specialties, clinics..."
                  className="flex-1 text-sm text-slate-700 outline-none placeholder-slate-400 bg-transparent"
                />
              </div>
              <button className="px-5 py-2.5 text-sm font-semibold text-white rounded-xl gradient-primary whitespace-nowrap">
                Search
              </button>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:h-[580px] flex items-center justify-center">
            {/* Main doctor image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="relative w-full max-w-sm mx-auto">
                {/* Circular background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-100 to-teal-100 scale-110" />
                <img
                  src="https://images.pexels.com/photos/7195424/pexels-photo-7195424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Doctor conducting telemedicine consultation"
                  className="relative z-10 w-full h-80 object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-8 -left-4 lg:left-0 glass rounded-2xl p-3 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-lg">✅</div>
                <div>
                  <div className="text-sm font-bold text-slate-800">Appointment Confirmed</div>
                  <div className="text-xs text-slate-500">Dr. Sarah Chen · Today 2:00 PM</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute bottom-24 -right-2 lg:-right-4 glass rounded-2xl p-3 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center">
                  <Video className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">Video Call Ready</div>
                  <div className="text-xs text-slate-500">HD • Encrypted • Secure</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-4 left-4 lg:left-8 glass rounded-2xl p-3 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-2">
                  {['#0EA5E9', '#14B8A6', '#2563EB'].map((color, i) => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white" style={{ background: color }} />
                  ))}
                </div>
                <div className="text-xs font-semibold text-slate-700">Online Doctors</div>
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                <span className="text-xs text-slate-600 ml-1">4.9 (12,800+ reviews)</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute top-16 right-0 lg:right-4 glass rounded-2xl px-3 py-2 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-sky-600" />
                <div>
                  <div className="text-xs font-bold text-slate-800">HIPAA Secure</div>
                  <div className="text-xs text-slate-500">256-bit encrypted</div>
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
              className="bg-white rounded-2xl p-5 text-center shadow-md border border-slate-100 card-hover"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-extrabold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
