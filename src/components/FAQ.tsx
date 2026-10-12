import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare, Mail } from 'lucide-react';
import { SectionHeading, Button } from './ui';

const faqs = [
  {
    question: 'How do I book an appointment with a specialist?',
    answer: "Booking is simple! Search for your desired specialty or doctor, choose an available time slot, and confirm your appointment. You'll receive instant confirmation via email and SMS. No waiting on hold — the whole process takes under 2 minutes.",
  },
  {
    question: 'Is telemedicine consultation as effective as in-person visits?',
    answer: 'For most medical concerns, telemedicine is equally effective as in-person visits. Our HD video platform allows doctors to conduct thorough consultations including visual assessments, symptom analysis, and reviewing uploaded medical documents. Studies show 85% of patient issues can be resolved remotely.',
  },
  {
    question: 'How secure is my medical data on MediCare Pro?',
    answer: 'Your privacy is our top priority. All data is protected with 256-bit AES encryption both in transit and at rest. We are SOC 2 Type II certified and follow HIPAA-inspired security practices. We never sell, share, or monetize your health data. You maintain complete ownership and control.',
  },
  {
    question: 'Can I access my medical records and prescriptions online?',
    answer: 'Yes! Your complete medical history, including visit notes, lab results, prescriptions, imaging reports, and doctor recommendations, is available 24/7 through your secure patient dashboard and mobile app. You can easily share records with any healthcare provider.',
  },
  {
    question: 'What if I need emergency medical attention?',
    answer: 'MediCare Pro is not for medical emergencies. If you are experiencing a medical emergency, please call 911 or go to your nearest emergency room immediately. For urgent but non-emergency situations, we offer same-day urgent care consultations with response times under 30 minutes.',
  },
  {
    question: 'Does MediCare Pro accept health insurance?',
    answer: 'We accept most major health insurance plans including Aetna, BlueCross BlueShield, Cigna, Humana, UnitedHealth, and Medicare Advantage. We also offer transparent self-pay pricing starting at $49 per consultation. Use our insurance checker tool to verify your coverage instantly.',
  },
  {
    question: 'How quickly can I see a doctor through telemedicine?',
    answer: 'For scheduled appointments, you can book a slot as soon as the same day. For on-demand urgent consultations, our average wait time is under 15 minutes. We have doctors available 24/7, including nights, weekends, and holidays.',
  },
  {
    question: 'Can I get prescriptions through MediCare Pro?',
    answer: 'Yes! Our licensed physicians can prescribe most medications digitally. Prescriptions are electronically sent to your preferred pharmacy or can be delivered to your home. Controlled substances and certain medications may require an in-person visit as per state regulations.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reusable Section Heading */}
        <SectionHeading
          badge={
            <span className="inline-flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </span>
          }
          badgeVariant="sky"
          title="Got Questions?"
          gradientTitle="We Have Answers"
          description="Everything you need to know about our healthcare platform, services, and technology."
        />

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-sky-200 shadow-md shadow-sky-100/50'
                    : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-sky-50/40 transition-colors duration-200 cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span
                      className={`text-sm sm:text-base font-semibold transition-colors ${
                        isOpen ? 'text-sky-700' : 'text-slate-800'
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-colors ${
                        isOpen ? 'text-sky-500' : 'text-slate-400'
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-sky-100/80 pt-4">
                        <div className="sm:ml-10">{faq.answer}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Support Prompt Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-sky-50 via-teal-50/40 to-blue-50 border border-sky-100/80"
        >
          <p className="text-slate-700 font-semibold mb-4">
            Still have questions? Our care team is ready to help 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#chat">
              <Button size="md" variant="primary">
                <MessageSquare className="w-4 h-4 mr-1" />
                Chat with Support
              </Button>
            </a>
            <a href="#email">
              <Button size="md" variant="outline" className="bg-white hover:bg-slate-50">
                <Mail className="w-4 h-4 mr-1" />
                Email Support Team
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
