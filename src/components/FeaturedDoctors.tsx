import { motion } from 'framer-motion';
import { Star, Clock, Calendar, BadgeCheck, Video } from 'lucide-react';

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
    badgeColor: 'bg-amber-100 text-amber-700',
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
    badgeColor: 'bg-blue-100 text-blue-700',
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
    badgeColor: 'bg-pink-100 text-pink-700',
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
    badgeColor: 'bg-teal-100 text-teal-700',
  },
];

export default function FeaturedDoctors() {
  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-sm font-medium mb-4">
              👨‍⚕️ Our Specialists
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3">
              Meet Our{' '}
              <span className="text-gradient">Expert Doctors</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-xl">
              Hand-picked, board-certified physicians with proven expertise and outstanding patient outcomes.
            </p>
          </div>
          <a
            href="#all-doctors"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-sky-200 text-sky-700 font-semibold hover:bg-sky-50 transition-all text-sm whitespace-nowrap"
          >
            View All 500+ Doctors →
          </a>
        </motion.div>

        {/* Doctor Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border border-slate-100 rounded-2xl shadow-sm card-hover overflow-hidden"
            >
              {/* Image area */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-sky-50 to-teal-50">
                <img
                  src={doctor.image}
                  alt={`Portrait of ${doctor.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold ${doctor.badgeColor}`}>
                  {doctor.badge}
                </div>
                {/* Online indicator */}
                <div className="absolute top-3 right-3">
                  <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-semibold ${
                    doctor.online ? 'bg-emerald-500 text-white' : 'bg-slate-500 text-white'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${doctor.online ? 'bg-white animate-pulse' : 'bg-slate-300'}`} />
                    {doctor.online ? 'Online' : 'Offline'}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Name & verify */}
                <div className="flex items-center gap-1.5 mb-0.5">
                  <h3 className="text-base font-bold text-slate-800 truncate">{doctor.name}</h3>
                  {doctor.verified && <BadgeCheck className="w-4 h-4 text-sky-500 flex-shrink-0" />}
                </div>
                <p className="text-sm text-sky-600 font-medium mb-2">{doctor.specialty}</p>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < Math.floor(doctor.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-700">{doctor.rating}</span>
                  <span className="text-xs text-slate-400">({doctor.reviews.toLocaleString()})</span>
                </div>

                {/* Info row */}
                <div className="flex items-center gap-3 mb-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {doctor.experience}
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {doctor.available} · {doctor.availableTime}
                  </div>
                </div>

                {/* Fee & Book */}
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400">Consult fee</span>
                    <div className="text-base font-bold text-slate-800">{doctor.consultFee}</div>
                  </div>
                  <motion.button
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white rounded-xl gradient-primary shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {doctor.online ? <Video className="w-3.5 h-3.5" /> : <Calendar className="w-3.5 h-3.5" />}
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
