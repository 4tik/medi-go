import { motion } from 'framer-motion';
import {
  ArrowRight,
  Heart,
  Brain,
  Activity,
  Baby,
  UserCheck,
  Sparkles,
  Award,
  Eye,
  Stethoscope,
} from 'lucide-react';
import { SectionHeading, Button } from './ui';

const specialties = [
  {
    icon: Heart,
    name: 'Cardiology',
    description: 'Heart disease, hypertension & cardiovascular care',
    doctors: 42,
    gradient: 'from-rose-500 to-red-600',
    border: 'border-rose-100',
    textColor: 'text-rose-700',
  },
  {
    icon: Brain,
    name: 'Neurology',
    description: 'Brain, spine & nervous system disorders',
    doctors: 31,
    gradient: 'from-purple-500 to-violet-600',
    border: 'border-purple-100',
    textColor: 'text-purple-700',
  },
  {
    icon: Activity,
    name: 'Orthopedics',
    description: 'Bone, joint, muscle & sports injuries',
    doctors: 38,
    gradient: 'from-blue-500 to-indigo-600',
    border: 'border-blue-100',
    textColor: 'text-blue-700',
  },
  {
    icon: Baby,
    name: 'Pediatrics',
    description: 'Child healthcare from newborns to adolescents',
    doctors: 55,
    gradient: 'from-sky-500 to-cyan-600',
    border: 'border-sky-100',
    textColor: 'text-sky-700',
  },
  {
    icon: UserCheck,
    name: 'Gynecology',
    description: "Women's health, pregnancy & reproductive care",
    doctors: 48,
    gradient: 'from-pink-500 to-rose-600',
    border: 'border-pink-100',
    textColor: 'text-pink-700',
  },
  {
    icon: Sparkles,
    name: 'Dermatology',
    description: 'Skin, hair, nail disorders & cosmetic treatments',
    doctors: 27,
    gradient: 'from-teal-500 to-emerald-600',
    border: 'border-teal-100',
    textColor: 'text-teal-700',
  },
  {
    icon: Award,
    name: 'Oncology',
    description: 'Cancer detection, treatment & survivorship care',
    doctors: 23,
    gradient: 'from-amber-500 to-orange-600',
    border: 'border-amber-100',
    textColor: 'text-amber-700',
  },
  {
    icon: Eye,
    name: 'Ophthalmology',
    description: 'Eye care, vision correction & retinal disorders',
    doctors: 19,
    gradient: 'from-indigo-500 to-blue-600',
    border: 'border-indigo-100',
    textColor: 'text-indigo-700',
  },
];

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-teal-50/25 to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reusable Section Header */}
        <SectionHeading
          badge={
            <span className="inline-flex items-center gap-1.5">
              <Stethoscope className="w-4 h-4 text-teal-600" />
              Medical Specialties
            </span>
          }
          badgeVariant="teal"
          title="World-Class"
          gradientTitle="Medical Specialists"
          description="Access 500+ board-certified specialists across all major medical disciplines. Expert care tailored to your health needs."
        />

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <motion.div
                key={specialty.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className={`group relative p-5 rounded-2xl bg-white border ${specialty.border} shadow-sm hover:shadow-lg hover:shadow-teal-500/5 cursor-pointer transition-all duration-300`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${specialty.gradient} flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title & Desc */}
                <h3 className="text-base font-bold text-slate-800 mb-1 group-hover:text-sky-700 transition-colors">
                  {specialty.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {specialty.description}
                </p>

                {/* Doctors count & arrow */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                  <div className={`text-xs font-semibold ${specialty.textColor} flex items-center gap-1.5`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{specialty.doctors} Doctors</span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${specialty.gradient} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm`}
                  >
                    <ArrowRight className="w-3 h-3 text-white" />
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
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a href="#all-specialties">
            <Button size="md" variant="secondary">
              View All 40+ Specialties
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
