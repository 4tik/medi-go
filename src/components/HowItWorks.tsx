import { motion } from 'framer-motion';
import { Search, Clock, Video, FileText } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Search a Doctor',
    description: 'Browse 500+ specialists by specialty, location, language, or availability. Read verified reviews and compare credentials.',
    color: 'sky',
    gradient: 'from-sky-500 to-blue-600',
    detail: 'Filter by insurance, rating, availability',
  },
  {
    step: '02',
    icon: Clock,
    title: 'Choose Time Slot',
    description: 'Select your preferred appointment time from real-time availability. Book instantly — no phone calls needed.',
    color: 'teal',
    gradient: 'from-teal-500 to-emerald-600',
    detail: 'Real-time slot booking in seconds',
  },
  {
    step: '03',
    icon: Video,
    title: 'Consult Online or Visit',
    description: 'Join a secure HD video call or visit the clinic. Our encrypted platform ensures complete privacy.',
    color: 'blue',
    gradient: 'from-blue-500 to-indigo-600',
    detail: 'HD video · Secure chat · Screen share',
  },
  {
    step: '04',
    icon: FileText,
    title: 'Prescription & Follow-up',
    description: 'Receive digital prescriptions instantly. Track your health progress with automated follow-up reminders.',
    color: 'purple',
    gradient: 'from-purple-500 to-violet-600',
    detail: 'Digital Rx · Lab orders · Health tracking',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #0EA5E9, transparent)' }} />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #14B8A6, transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sky-300 text-sm font-medium mb-4">
            ⚡ Simple 4-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Healthcare Made{' '}
            <span className="bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent">
              Effortlessly Simple
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From finding the right doctor to receiving your prescription — everything is designed to be fast, easy, and stress-free.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {/* Connector Line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-sky-500 via-teal-500 to-purple-500 opacity-30" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center group"
              >
                {/* Step icon circle */}
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${step.gradient} p-0.5 shadow-lg`}>
                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors duration-300">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  {/* Step number */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-xs font-black shadow-lg`}>
                    {step.step.replace('0', '')}
                  </div>
                </div>

                {/* Content */}
                <div className="px-4">
                  <div className={`text-xs font-bold text-${step.color}-400 mb-2 uppercase tracking-widest`}>
                    Step {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{step.description}</p>
                  <div className={`inline-flex items-center gap-1 text-xs font-medium text-${step.color}-400 bg-${step.color}-400/10 px-3 py-1.5 rounded-full border border-${step.color}-400/20`}>
                    ✓ {step.detail}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-14"
        >
          <motion.a
            href="#book"
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white rounded-2xl gradient-primary shadow-lg hover:shadow-sky-500/30 transition-all duration-300"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Clock className="w-5 h-5" />
            Get Started — It's Free
          </motion.a>
          <p className="mt-4 text-sm text-slate-500">No credit card required · First consultation free</p>
        </motion.div>
      </div>
    </section>
  );
}
