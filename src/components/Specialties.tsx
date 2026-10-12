import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const specialties = [
  {
    emoji: '❤️',
    name: 'Cardiology',
    description: 'Heart disease, hypertension & cardiovascular care',
    doctors: 42,
    color: 'rose',
    gradient: 'from-rose-500 to-red-600',
    bg: 'bg-rose-50 hover:bg-rose-100',
    border: 'border-rose-100',
    textColor: 'text-rose-700',
  },
  {
    emoji: '🧠',
    name: 'Neurology',
    description: 'Brain, spine & nervous system disorders',
    doctors: 31,
    color: 'purple',
    gradient: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-50 hover:bg-purple-100',
    border: 'border-purple-100',
    textColor: 'text-purple-700',
  },
  {
    emoji: '🦴',
    name: 'Orthopedics',
    description: 'Bone, joint, muscle & sports injuries',
    doctors: 38,
    color: 'blue',
    gradient: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50 hover:bg-blue-100',
    border: 'border-blue-100',
    textColor: 'text-blue-700',
  },
  {
    emoji: '👶',
    name: 'Pediatrics',
    description: 'Child healthcare from newborns to adolescents',
    doctors: 55,
    color: 'sky',
    gradient: 'from-sky-500 to-cyan-600',
    bg: 'bg-sky-50 hover:bg-sky-100',
    border: 'border-sky-100',
    textColor: 'text-sky-700',
  },
  {
    emoji: '👩‍⚕️',
    name: 'Gynecology',
    description: "Women's health, pregnancy & reproductive care",
    doctors: 48,
    color: 'pink',
    gradient: 'from-pink-500 to-rose-600',
    bg: 'bg-pink-50 hover:bg-pink-100',
    border: 'border-pink-100',
    textColor: 'text-pink-700',
  },
  {
    emoji: '🌿',
    name: 'Dermatology',
    description: 'Skin, hair, nail disorders & cosmetic treatments',
    doctors: 27,
    color: 'teal',
    gradient: 'from-teal-500 to-emerald-600',
    bg: 'bg-teal-50 hover:bg-teal-100',
    border: 'border-teal-100',
    textColor: 'text-teal-700',
  },
  {
    emoji: '🎗️',
    name: 'Oncology',
    description: 'Cancer detection, treatment & survivorship care',
    doctors: 23,
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50 hover:bg-amber-100',
    border: 'border-amber-100',
    textColor: 'text-amber-700',
  },
  {
    emoji: '👁️',
    name: 'Ophthalmology',
    description: 'Eye care, vision correction & retinal disorders',
    doctors: 19,
    color: 'indigo',
    gradient: 'from-indigo-500 to-blue-600',
    bg: 'bg-indigo-50 hover:bg-indigo-100',
    border: 'border-indigo-100',
    textColor: 'text-indigo-700',
  },
];

export default function Specialties() {
  return (
    <section id="specialties" className="py-20 lg:py-28" style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #F0FDFA 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-4">
            🩺 Medical Specialties
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            World-Class{' '}
            <span className="text-gradient">Medical Specialists</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Access 500+ board-certified specialists across all major medical disciplines. Expert care tailored to your health needs.
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className={`group relative p-5 rounded-2xl bg-white border ${specialty.border} shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${specialty.gradient} flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{specialty.emoji}</span>
              </div>

              {/* Content */}
              <h3 className="text-base font-bold text-slate-800 mb-1 group-hover:text-sky-700 transition-colors">
                {specialty.name}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                {specialty.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className={`text-xs font-semibold ${specialty.textColor} flex items-center gap-1`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {specialty.doctors} Doctors
                </div>
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${specialty.gradient} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#all-specialties"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-sky-200 text-sky-700 font-semibold hover:bg-sky-50 hover:border-sky-300 transition-all duration-200"
          >
            View All 40+ Specialties
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
