import { motion } from 'framer-motion';
import { Shield, Award, Clock, HeartPulse } from 'lucide-react';

const trustItems = [
  { icon: Shield, text: 'HIPAA-Inspired Security', sub: 'Military-grade encryption' },
  { icon: Award, text: 'Board-Certified Doctors', sub: '500+ verified specialists' },
  { icon: Clock, text: '24/7 Availability', sub: 'Always here for you' },
  { icon: HeartPulse, text: '98% Satisfaction Rate', sub: '50K+ happy patients' },
];

export default function TrustBar() {
  return (
    <section className="py-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl hover:bg-sky-50/70 border border-transparent hover:border-sky-100 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center shadow-md shadow-sky-500/20 flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">{item.text}</div>
                  <div className="text-xs text-slate-500">{item.sub}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
