import { motion } from 'framer-motion';
import { Star, Clock, Calendar, BadgeCheck, Video, UserCheck } from 'lucide-react';
import { Button, Badge } from './ui';
import { useModal } from '../context/ModalContext';

const doctors = [
  {
    name: 'Dr. Sarah Chen',
    specialty: 'Cardiologist',
    experience: '15 years',
    rating: 4.9,
    reviews: 1284,
    available: 'Today',
    availableTime: '2:00 PM',
    image: 'https://images.pexels.com/photos/4173250/pexels-photo-4173250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    verified: true,
    online: true,
    consultFee: '$60',
    badge: 'Top Rated',
    badgeVariant: 'amber' as const,
  },
  {
    name: 'Dr. James Wilson',
    specialty: 'Neurologist',
    experience: '20 years',
    rating: 4.8,
    reviews: 986,
    available: 'Tomorrow',
    availableTime: '10:30 AM',
    image: 'https://images.pexels.com/photos/8376207/pexels-photo-8376207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    verified: true,
    online: false,
    consultFee: '$80',
    badge: 'Senior Expert',
    badgeVariant: 'blue' as const,
  },
  {
    name: 'Dr. Priya Patel',
    specialty: 'Pediatrician',
    experience: '12 years',
    rating: 4.9,
    reviews: 2105,
    available: 'Today',
    availableTime: '4:00 PM',
    image: 'https://images.pexels.com/photos/28332542/pexels-photo-28332542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    verified: true,
    online: true,
    consultFee: '$50',
    badge: 'Most Loved',
    badgeVariant: 'rose' as const,
  },
  {
    name: 'Dr. Marcus Lee',
    specialty: 'Orthopedic Surgeon',
    experience: '18 years',
    rating: 4.7,
    reviews: 742,
    available: 'Today',
    availableTime: '11:00 AM',
    image: 'https://images.pexels.com/photos/19601385/pexels-photo-19601385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    verified: true,
    online: true,
    consultFee: '$70',
    badge: 'Specialist',
    badgeVariant: 'teal' as const,
  },
];

export default function FeaturedDoctors() {
  const { openBooking } = useModal();

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with right-aligned button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="mb-4 inline-block">
              <Badge variant="sky">
                <span className="inline-flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-sky-600" />
                  Our Specialists
                </span>
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Expert Doctors
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 max-w-xl">
              Hand-picked, board-certified physicians with proven expertise and outstanding patient outcomes.
            </p>
          </div>

          <a href="#all-doctors" className="flex-shrink-0">
            <Button size="md" variant="secondary">
              View All 500+ Doctors →
            </Button>
          </a>
        </motion.div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border border-slate-100 rounded-2xl shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-500/10 hover:border-sky-100 overflow-hidden transition-all duration-300"
            >
              {/* Doctor portrait */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-sky-50 to-teal-50">
                <img
                  src={doctor.image}
                  alt={`Portrait of ${doctor.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                  <Badge variant={doctor.badgeVariant} size="sm">
                    {doctor.badge}
                  </Badge>
                </div>

                {/* Online indicator */}
                <div className="absolute top-3 right-3">
                  <div
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm ${
                      doctor.online ? 'bg-emerald-500 text-white' : 'bg-slate-500 text-white'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        doctor.online ? 'bg-white animate-pulse' : 'bg-slate-300'
                      }`}
                    />
                    <span>{doctor.online ? 'Online' : 'Offline'}</span>
                  </div>
                </div>
              </div>

              {/* Content area */}
              <div className="p-5">
                {/* Name & verification check */}
                <div className="flex items-center gap-1.5 mb-1">
                  <h3 className="text-base font-bold text-slate-800 truncate">{doctor.name}</h3>
                  {doctor.verified && (
                    <BadgeCheck className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  )}
                </div>
                <p className="text-sm text-sky-600 font-medium mb-2.5">{doctor.specialty}</p>

                {/* Star rating */}
                <div className="flex items-center gap-1.5 mb-3.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(doctor.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-700">{doctor.rating}</span>
                  <span className="text-xs text-slate-400">({doctor.reviews.toLocaleString()})</span>
                </div>

                {/* Experience & availability */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{doctor.experience}</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{doctor.available} · {doctor.availableTime}</span>
                  </div>
                </div>

                {/* Fee & Booking CTA */}
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block leading-none mb-1">Consult fee</span>
                    <div className="text-base font-bold text-slate-900">{doctor.consultFee}</div>
                  </div>
                  <Button
                    size="sm"
                    variant="primary"
                    className="cursor-pointer"
                    onClick={() => openBooking(doctor.name)}
                  >
                    {doctor.online ? <Video className="w-3.5 h-3.5" /> : <Calendar className="w-3.5 h-3.5" />}
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
