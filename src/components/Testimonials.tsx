import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily Richardson',
    age: 34,
    treatment: 'Cardiology Consultation',
    rating: 5,
    review: "MediCare Pro has completely transformed how I manage my heart condition. The video consultation with Dr. Chen was as thorough as any in-person visit. She reviewed my ECG, adjusted my medications, and sent the prescription to my pharmacy within minutes. I've saved hours of travel time!",
    avatar: '👩',
    location: 'New York, NY',
    date: '2 weeks ago',
  },
  {
    name: 'James Thompson',
    age: 52,
    treatment: 'Orthopedic Surgery Follow-up',
    rating: 5,
    review: "After my knee replacement surgery, post-op follow-ups via MediCare Pro were incredibly convenient. The HD video quality was excellent. Dr. Marcus was thorough and addressed all my recovery concerns. The digital prescription for my pain management was sent directly to my pharmacy!",
    avatar: '👨',
    location: 'Chicago, IL',
    date: '1 month ago',
  },
  {
    name: 'Sofia Martinez',
    age: 28,
    treatment: 'Pediatric Care for Child',
    rating: 5,
    review: "As a new mom, having access to a pediatrician at 11 PM when my baby had a fever was a lifesaver. Dr. Priya was so patient and thorough. The whole consultation took 20 minutes and I had the prescription ready for pickup. This service is worth every penny!",
    avatar: '👩‍👧',
    location: 'Los Angeles, CA',
    date: '3 weeks ago',
  },
  {
    name: 'Robert Kim',
    age: 45,
    treatment: 'Dermatology Treatment',
    rating: 5,
    review: "I was skeptical about online dermatology, but MediCare Pro proved me wrong. The doctor examined my skin condition via video, diagnosed eczema, prescribed the right medication, and arranged a follow-up. My skin cleared up in 2 weeks. Absolutely professional service!",
    avatar: '👨‍💼',
    location: 'Seattle, WA',
    date: '1 week ago',
  },
  {
    name: 'Aisha Johnson',
    age: 38,
    treatment: 'Neurology Consultation',
    rating: 5,
    review: "Managing my migraines got so much easier with MediCare Pro. Dr. Wilson spent 40 minutes understanding my history, ordered the right tests, and developed a personalized treatment plan. The secure messaging feature for follow-up questions is incredibly helpful.",
    avatar: '👩🏾',
    location: 'Houston, TX',
    date: '2 months ago',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((p) => (p + 1) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28" style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-sm font-medium mb-4">
            ⭐ Patient Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            What Our{' '}
            <span className="text-gradient">Patients Say</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Over 50,000 patients trust MediCare Pro for their healthcare needs. Here's what they have to say.
          </p>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 mt-6 px-6 py-3 bg-white rounded-2xl shadow-md border border-slate-100">
            <div className="text-3xl font-extrabold text-slate-900">4.9</div>
            <div>
              <div className="flex">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">Based on 28,450 reviews</div>
            </div>
            <div className="h-8 w-px bg-slate-200 mx-2" />
            <div className="text-sm font-medium text-slate-600">Verified on Google, Healthgrades & Zocdoc</div>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center">
                <Quote className="w-6 h-6 text-sky-400" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Treatment badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 rounded-full text-xs font-semibold text-sky-700 mb-4">
                🩺 {testimonials[current].treatment}
              </div>

              {/* Review text */}
              <blockquote className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                "{testimonials[current].review}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-2xl">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-800">{testimonials[current].name}, {testimonials[current].age}</div>
                  <div className="text-sm text-slate-500">{testimonials[current].location}</div>
                </div>
                <div className="ml-auto text-xs text-slate-400">{testimonials[current].date}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-sky-50 hover:border-sky-200 transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current ? 'w-8 h-2.5 bg-sky-500' : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-sky-50 hover:border-sky-200 transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Trust logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-slate-400 font-medium uppercase tracking-widest mb-6">Trusted & Featured By</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {['Healthgrades', 'WebMD', 'Zocdoc', 'JAMA Network', 'Mayo Clinic', 'AMA'].map((brand) => (
              <div key={brand} className="text-slate-600 font-bold text-lg">{brand}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
