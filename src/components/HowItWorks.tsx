import { motion } from 'framer-motion';
import { Search, Clock, Video, FileText } from 'lucide-react';
import { SectionHeading, Button } from './ui';

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Search a Doctor',
    description: 'Browse 500+ specialists by specialty, location, language, or availability. Read verified reviews and compare credentials.',
    gradient: 'from-sky-500 to-blue-600',
    detail: 'Filter by insurance, rating, availability',
    textColor: 'text-sky-400',
    badgeBg: 'bg-sky-400/10 border-sky-400/20',
  },
  {
    step: '02',
    icon: Clock,
    title: 'Choose Time Slot',
    description: 'Select your preferred appointment time from real-time availability. Book instantly — no phone calls needed.',
    gradient: 'from-teal-500 to-emerald-600',
    detail: 'Real-time slot booking in seconds',
    textColor: 'text-teal-400',
    badgeBg: 'bg-teal-400/10 border-teal-400/20',
  },
  {
    step: '03',
    icon: Video,
    title: 'Consult Online or Visit',
    description: 'Join a secure HD video call or visit the clinic. Our encrypted platform ensures complete privacy.',
    gradient: 'from-blue-500 to-indigo-600',
    detail: 'HD video · Secure chat · Screen share',
    textColor: 'text-blue-400',
    badgeBg: 'bg-blue-400/10 border-blue-400/20',
  },
  {
    step: '04',
    icon: FileText,
    title: 'Prescription & Follow-up',
    description: 'Receive digital prescriptions instantly. Track your health progress with automated follow-up reminders.',
    gradient: 'from-purple-500 to-violet-600',
    detail: 'Digital Rx · Lab orders · Health tracking',
    textColor: 'text-purple-400',
    badgeBg: 'bg-purple-400/10 border-purple-400/20',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl bg-sky-500"
        />
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-10 blur-3xl bg-teal-500"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Dark theme Section Heading */}
        <SectionHeading
          dark
          badge="⚡ Simple 4-Step Process"
          title="Healthcare Made"
          gradientTitle="Effortlessly Simple"
          description="From finding the right doctor to receiving your prescription — everything is designed to be fast, easy, and stress-free."
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
          {/* Connecting Line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-sky-500 via-teal-500 to-purple-500 opacity-25" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative text-center group"
              >
                {/* Step Icon Bubble */}
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${step.gradient} p-0.5 shadow-lg`}>
                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700/90 transition-colors duration-300">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  {/* Step Number Tag */}
                  <div
                    className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-xs font-black shadow-lg`}
                  >
                    {step.step.replace('0', '')}
                  </div>
                </div>

                {/* Content */}
                <div className="px-3">
                  <div className={`text-xs font-bold ${step.textColor} mb-2 uppercase tracking-widest`}>
                    Step {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{step.description}</p>
                  <div
                    className={`inline-flex items-center gap-1 text-xs font-medium ${step.textColor} ${step.badgeBg} px-3 py-1.5 rounded-full border`}
                  >
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
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a href="#book">
            <Button size="lg" variant="primary">
              <Clock className="w-5 h-5 mr-1" />
              Get Started — It's Free
            </Button>
          </a>
          <p className="mt-4 text-xs sm:text-sm text-slate-400">
            No credit card required · First consultation free
          </p>
        </motion.div>
      </div>
    </section>
  );
}
