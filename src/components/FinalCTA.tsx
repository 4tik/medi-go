import { motion } from 'framer-motion';
import { Calendar, Video, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui';

const benefits = [
  'Free first consultation',
  'No credit card required',
  'Cancel anytime',
  'HIPAA-secure platform',
];

export default function FinalCTA() {
  return (
    <section id="book" className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-r from-sky-500 to-blue-600">
      {/* Background patterns */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Decorative gradient blobs */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-25 blur-3xl bg-white"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-25 blur-3xl bg-teal-400"
        style={{ transform: 'translate(50%, 50%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-medium mb-6 shadow-sm"
        >
          🏥 Start Your Health Journey Today
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-5 leading-tight tracking-tight"
        >
          Quality Healthcare Is Just{' '}
          <span className="text-teal-200">One Click</span>{' '}
          Away
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-xl text-sky-100 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Join 50,000+ patients who trust Medi Go for their healthcare needs. Expert doctors, secure platform, seamless experience.
        </motion.p>

        {/* Benefits Checks */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10"
        >
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-sky-100">
              <CheckCircle className="w-4 h-4 text-teal-300 flex-shrink-0" />
              <span>{b}</span>
            </div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <a href="#appointment">
            <Button size="lg" variant="white" className="w-full sm:w-auto text-sky-700">
              <Calendar className="w-5 h-5 mr-1" />
              Book Appointment
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
          <a href="#telemedicine">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-white border-2 border-white/50 bg-white/10 hover:bg-white/20"
            >
              <Video className="w-5 h-5 mr-1" />
              Start Online Consultation
            </Button>
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <div className="flex -space-x-2.5">
            {['#0EA5E9', '#14B8A6', '#2563EB', '#7C3AED', '#F59E0B'].map((color, i) => (
              <div
                key={i}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white flex items-center justify-center text-xs sm:text-sm shadow-sm"
                style={{ background: color }}
              >
                {['👨', '👩', '👨🏽', '👩🏾', '👨🏻'][i]}
              </div>
            ))}
          </div>
          <div className="text-white text-xs sm:text-sm">
            <span className="font-bold">50,000+</span> patients joined this month
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="w-4 h-4 text-amber-300 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-white text-xs sm:text-sm font-semibold ml-1">4.9/5 rated</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
