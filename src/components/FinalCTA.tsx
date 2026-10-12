import { motion } from 'framer-motion';
import { Calendar, Video, ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  'Free first consultation',
  'No credit card required',
  'Cancel anytime',
  'HIPAA-secure platform',
];

export default function FinalCTA() {
  return (
    <section id="book" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      {/* Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #ffffff, transparent)', transform: 'translate(-50%, -50%)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #14B8A6, transparent)', transform: 'translate(50%, 50%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm font-medium mb-6"
        >
          🏥 Start Your Health Journey Today
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-5 leading-tight"
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
          className="text-lg sm:text-xl text-sky-100 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Join 50,000+ patients who trust MediCare Pro for their healthcare needs. Expert doctors, secure platform, seamless experience.
        </motion.p>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10"
        >
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-1.5 text-sm text-sky-100">
              <CheckCircle className="w-4 h-4 text-teal-300 flex-shrink-0" />
              {b}
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <motion.a
            href="#appointment"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-sky-700 bg-white rounded-2xl shadow-xl hover:bg-sky-50 transition-all duration-300"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Calendar className="w-5 h-5" />
            Book Appointment
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#telemedicine"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-white/20 border-2 border-white/40 rounded-2xl hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Video className="w-5 h-5" />
            Start Online Consultation
          </motion.a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div className="flex -space-x-3">
            {['#0EA5E9', '#14B8A6', '#2563EB', '#7C3AED', '#F59E0B'].map((color, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-sm"
                style={{ background: color }}
              >
                {['👨', '👩', '👨🏽', '👩🏾', '👨🏻'][i]}
              </div>
            ))}
          </div>
          <div className="text-white text-sm">
            <span className="font-bold">50,000+</span> patients joined this month
          </div>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(s => (
              <svg key={s} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-white text-sm font-semibold ml-1">4.9/5 rated</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
