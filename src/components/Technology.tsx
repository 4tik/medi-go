import { motion } from 'framer-motion';
import { Shield, Brain, Activity, Bell, Lock, Database, Zap } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'HIPAA-Inspired Security',
    description: 'Military-grade 256-bit AES encryption for all patient data, communications, and medical records. Zero data breaches since inception.',
    gradient: 'from-emerald-500 to-teal-600',
    stat: '256-bit',
    statLabel: 'AES Encryption',
  },
  {
    icon: Brain,
    title: 'AI-Assisted Scheduling',
    description: 'Our proprietary AI optimizes appointment matching based on urgency, doctor availability, specialty, and patient preference.',
    gradient: 'from-sky-500 to-blue-600',
    stat: '94%',
    statLabel: 'Match Accuracy',
  },
  {
    icon: Activity,
    title: 'Digital Health Tracking',
    description: 'Continuous monitoring of vital signs, medication adherence, and chronic disease management through integrated wearables.',
    gradient: 'from-rose-500 to-pink-600',
    stat: '∞',
    statLabel: 'Health Metrics',
  },
  {
    icon: Bell,
    title: 'Real-time Notifications',
    description: 'Instant push notifications for appointment reminders, lab results, prescription refills, and emergency alerts.',
    gradient: 'from-amber-500 to-orange-600',
    stat: '<1s',
    statLabel: 'Alert Latency',
  },
  {
    icon: Database,
    title: 'Secure Patient Records',
    description: 'Centralized, interoperable EHR system accessible across all our clinics and partner hospitals with role-based access control.',
    gradient: 'from-indigo-500 to-blue-600',
    stat: '99.9%',
    statLabel: 'Uptime SLA',
  },
  {
    icon: Zap,
    title: 'Instant Lab Results',
    description: 'Direct integration with 200+ diagnostic labs. Receive results and doctor interpretations within hours, not days.',
    gradient: 'from-purple-500 to-violet-600',
    stat: '2hrs',
    statLabel: 'Avg. Result Time',
  },
];

const techStack = [
  { name: 'SOC 2 Type II', color: 'bg-sky-100 text-sky-700' },
  { name: 'HL7 FHIR', color: 'bg-teal-100 text-teal-700' },
  { name: 'ISO 27001', color: 'bg-blue-100 text-blue-700' },
  { name: 'GDPR Ready', color: 'bg-purple-100 text-purple-700' },
  { name: '256-bit SSL', color: 'bg-emerald-100 text-emerald-700' },
  { name: 'WCAG AA', color: 'bg-amber-100 text-amber-700' },
];

export default function Technology() {
  return (
    <section id="technology" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            🔬 Healthcare Technology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Powered by{' '}
            <span className="text-gradient">Cutting-Edge Technology</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Enterprise-grade healthcare infrastructure built for security, scale, and reliability. Trusted by 100+ clinics nationwide.
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {techStack.map((tech) => (
              <span key={tech.name} className={`px-3 py-1.5 rounded-full text-xs font-bold ${tech.color} border border-current/20`}>
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl border border-slate-100 hover:border-sky-100 bg-white hover:shadow-xl hover:shadow-sky-100/30 transition-all duration-300 card-hover"
              >
                {/* Icon + Stat */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className={`text-xl font-extrabold text-gradient`}>{feature.stat}</div>
                    <div className="text-xs text-slate-400">{feature.statLabel}</div>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-sky-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 relative overflow-hidden rounded-3xl"
          style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0F172A 100%)' }}
        >
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 p-8 lg:p-10">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <Lock className="w-5 h-5 text-sky-400" />
                <span className="text-sky-400 font-semibold text-sm uppercase tracking-wider">Enterprise Security</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">Your Data is 100% Secure & Private</h3>
              <p className="text-slate-400 max-w-lg">
                All patient data is encrypted at rest and in transit. We never sell or share your health information. Full audit logs, role-based access, and zero-knowledge architecture.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <div className="text-center px-6 py-4 rounded-2xl bg-white/10 border border-white/20">
                <div className="text-2xl font-extrabold text-white">0</div>
                <div className="text-xs text-slate-400">Data Breaches</div>
              </div>
              <div className="text-center px-6 py-4 rounded-2xl bg-white/10 border border-white/20">
                <div className="text-2xl font-extrabold text-white">100%</div>
                <div className="text-xs text-slate-400">Encrypted</div>
              </div>
              <div className="text-center px-6 py-4 rounded-2xl bg-sky-500/20 border border-sky-500/30">
                <div className="text-2xl font-extrabold text-sky-400">SOC 2</div>
                <div className="text-xs text-slate-400">Certified</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
