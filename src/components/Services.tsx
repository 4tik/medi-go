import { motion } from 'framer-motion';
import { Video, Calendar, FileText, TestTube, HeartPulse, FolderOpen, ArrowRight, Building2 } from 'lucide-react';
import { SectionHeading, Badge, Card } from './ui';

const services = [
  {
    icon: Video,
    title: 'Telemedicine Consultations',
    description: 'Connect with board-certified doctors via HD video from the comfort of your home. Available 24/7.',
    gradient: 'from-sky-500 to-blue-600',
    border: 'border-sky-100',
    badge: 'Most Popular',
    badgeVariant: 'sky' as const,
    arrowColor: 'text-sky-600',
  },
  {
    icon: Calendar,
    title: 'Specialist Appointments',
    description: 'Book in-clinic appointments with 500+ specialists across 40+ medical disciplines.',
    gradient: 'from-teal-500 to-emerald-600',
    border: 'border-teal-100',
    arrowColor: 'text-teal-600',
  },
  {
    icon: FileText,
    title: 'Electronic Prescriptions',
    description: 'Receive digital prescriptions instantly, sent directly to your preferred pharmacy.',
    gradient: 'from-blue-500 to-indigo-600',
    border: 'border-blue-100',
    arrowColor: 'text-blue-600',
  },
  {
    icon: TestTube,
    title: 'Diagnostic Testing',
    description: 'Order lab tests online, get home sample collection, and receive results digitally.',
    gradient: 'from-purple-500 to-violet-600',
    border: 'border-purple-100',
    arrowColor: 'text-purple-600',
  },
  {
    icon: HeartPulse,
    title: 'Health Check Packages',
    description: 'Comprehensive wellness packages tailored for all ages — preventive care at its best.',
    gradient: 'from-rose-500 to-pink-600',
    border: 'border-rose-100',
    badge: 'New',
    badgeVariant: 'emerald' as const,
    arrowColor: 'text-rose-600',
  },
  {
    icon: FolderOpen,
    title: 'Medical Records',
    description: 'Securely store and share your complete health history, prescriptions, and reports.',
    gradient: 'from-amber-500 to-orange-600',
    border: 'border-amber-100',
    arrowColor: 'text-amber-600',
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
        {/* Reusable Section Header */}
        <SectionHeading
          badge={
            <span className="inline-flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-sky-600" />
              Comprehensive Healthcare Services
            </span>
          }
          badgeVariant="sky"
          title="Everything You Need,"
          gradientTitle="All in One Place"
          description="From telemedicine consultations to in-clinic visits, we offer a complete spectrum of healthcare services designed around your needs."
        />

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                variants={cardVariants}
                className={`group relative p-6 ${service.border} cursor-pointer overflow-hidden`}
              >
                {/* Subtle hover gradient wash */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none`}
                />

                {/* Badge if present */}
                {service.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge variant={service.badgeVariant || 'sky'} size="sm">
                      {service.badge}
                    </Badge>
                  </div>
                )}

                {/* Icon wrapper */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-md shadow-sky-500/15 group-hover:scale-105 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-sky-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div
                  className={`inline-flex items-center gap-1 text-sm font-semibold ${service.arrowColor} group-hover:gap-2 transition-all duration-200`}
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
