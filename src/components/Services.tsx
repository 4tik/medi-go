import { motion } from 'framer-motion';
import { Video, Calendar, FileText, TestTube, HeartPulse, FolderOpen } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Telemedicine Consultations',
    description: 'Connect with board-certified doctors via HD video from the comfort of your home. Available 24/7.',
    color: 'sky',
    gradient: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
    badge: 'Most Popular',
  },
  {
    icon: Calendar,
    title: 'Specialist Appointments',
    description: 'Book in-clinic appointments with 500+ specialists across 40+ medical disciplines.',
    color: 'teal',
    gradient: 'from-teal-500 to-emerald-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    icon: FileText,
    title: 'Electronic Prescriptions',
    description: 'Receive digital prescriptions instantly, sent directly to your preferred pharmacy.',
    color: 'blue',
    gradient: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: TestTube,
    title: 'Diagnostic Testing',
    description: 'Order lab tests online, get home sample collection, and receive results digitally.',
    color: 'purple',
    gradient: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
  {
    icon: HeartPulse,
    title: 'Health Check Packages',
    description: 'Comprehensive wellness packages tailored for all ages — preventive care at its best.',
    color: 'rose',
    gradient: 'from-rose-500 to-pink-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    badge: 'New',
  },
  {
    icon: FolderOpen,
    title: 'Medical Records',
    description: 'Securely store and share your complete health history, prescriptions, and reports.',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-sm font-medium mb-4">
            🏥 Comprehensive Healthcare Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Everything You Need,{' '}
            <span className="text-gradient">All in One Place</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            From telemedicine consultations to in-clinic visits, we offer a complete spectrum of healthcare services designed around your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative p-6 rounded-2xl bg-white border ${service.border} shadow-sm card-hover cursor-pointer overflow-hidden`}
              >
                {/* Hover background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Badge */}
                {service.badge && (
                  <div className={`absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-semibold ${
                    service.badge === 'New'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-sky-100 text-sky-700'
                  }`}>
                    {service.badge}
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-sky-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className={`flex items-center gap-1 text-sm font-semibold text-${service.color}-600 group-hover:gap-2 transition-all duration-200`}>
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
