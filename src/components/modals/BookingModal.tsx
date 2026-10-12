import React, { useState, useEffect } from 'react';
import { Calendar, Video, Clock, CheckCircle2, User, Phone, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { Button, ModalEl, Input, Select } from '../ui';

const availableDoctors = [
  { name: 'Dr. Sarah Chen', specialty: 'Cardiologist', fee: '$60', slots: ['Today 2:00 PM', 'Today 4:30 PM', 'Tomorrow 10:00 AM'] },
  { name: 'Dr. James Wilson', specialty: 'Neurologist', fee: '$80', slots: ['Tomorrow 10:30 AM', 'Tomorrow 2:00 PM', 'Friday 11:00 AM'] },
  { name: 'Dr. Priya Patel', specialty: 'Pediatrician', fee: '$50', slots: ['Today 4:00 PM', 'Tomorrow 9:00 AM', 'Tomorrow 3:30 PM'] },
  { name: 'Dr. Marcus Lee', specialty: 'Orthopedic Surgeon', fee: '$70', slots: ['Today 11:00 AM', 'Tomorrow 1:30 PM', 'Friday 3:00 PM'] },
];

export function BookingModal() {
  const { isBookingOpen, closeBooking, bookingDoctor, showToast } = useModal();
  const [selectedDoctor, setSelectedDoctor] = useState(bookingDoctor || availableDoctors[0].name);
  const [consultType, setConsultType] = useState<'video' | 'clinic'>('video');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [reason, setReason] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (bookingDoctor) {
      setSelectedDoctor(bookingDoctor);
    }
  }, [bookingDoctor]);

  useEffect(() => {
    const doctorObj = availableDoctors.find((d) => d.name === selectedDoctor) || availableDoctors[0];
    setSelectedSlot(doctorObj.slots[0]);
  }, [selectedDoctor]);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const refId = `MG-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingRef(refId);
    setIsConfirmed(true);
    showToast(`Appointment confirmed! Booking ID: ${refId}`, 'success');
  };

  const handleResetAndClose = () => {
    setIsConfirmed(false);
    closeBooking();
  };

  const activeDoc = availableDoctors.find((d) => d.name === selectedDoctor) || availableDoctors[0];

  return (
    <ModalEl
      isOpen={isBookingOpen}
      onClose={isConfirmed ? handleResetAndClose : closeBooking}
      maxWidth="lg"
      title={isConfirmed ? 'Appointment Confirmed!' : 'Book Medical Appointment'}
      subtitle={
        isConfirmed
          ? 'Your consultation has been scheduled with Medi Go'
          : 'Select your doctor, convenient time slot, and consultation mode'
      }
      headerBadge={
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-sky-200" />
          <span className="text-xs font-bold uppercase tracking-wider text-sky-100">
            Instant Healthcare Reservation
          </span>
        </div>
      }
      bodyClassName="p-0"
    >
      {isConfirmed ? (
        /* Confirmation Screen */
        <div className="p-6 sm:p-8 text-center space-y-5">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div>
            <div className="inline-block px-3.5 py-1.5 bg-sky-100 text-sky-900 font-mono text-xs font-black rounded-lg border-2 border-sky-300 mb-2 shadow-xs">
              Booking Reference: {bookingRef}
            </div>
            <h3 className="text-xl font-black text-slate-900">You are all set!</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto mt-1">
              We have sent a calendar invite and confirmation SMS with your video link to your contact details.
            </p>
          </div>

          {/* Details summary */}
          <div className="bg-slate-100 rounded-2xl p-5 text-left border-2 border-slate-200 space-y-2.5 text-xs sm:text-sm shadow-xs">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-600">Doctor:</span>
              <span className="font-bold text-slate-900">
                {selectedDoctor} ({activeDoc.specialty})
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-600">Time Slot:</span>
              <span className="font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                {selectedSlot}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-600">Mode:</span>
              <span className="font-bold text-slate-800">
                {consultType === 'video' ? 'HD Video Call (Telemedicine)' : 'In-Clinic Visit'}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2.5 border-t-2 border-slate-200">
              <span className="font-semibold text-slate-600">Consultation Fee:</span>
              <span className="text-base font-black text-emerald-700">{activeDoc.fee}</span>
            </div>
          </div>

          <div className="pt-2">
            <Button size="lg" variant="primary" fullWidth onClick={handleResetAndClose}>
              Done & Close
            </Button>
          </div>
        </div>
      ) : (
        /* Booking Form */
        <form onSubmit={handleBook} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Doctor Selection */}
          <Select
            label="Select Doctor"
            required
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            icon={<User className="w-4 h-4" />}
          >
            {availableDoctors.map((doc) => (
              <option key={doc.name} value={doc.name} className="py-1">
                {doc.name} — {doc.specialty} ({doc.fee})
              </option>
            ))}
          </Select>

          {/* Consultation Type Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-800 tracking-wide mb-1.5">
              Consultation Mode <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setConsultType('video')}
                className={`p-3.5 rounded-xl border-2 text-left flex items-center gap-3 transition-all cursor-pointer ${
                  consultType === 'video'
                    ? 'border-sky-600 bg-sky-50/80 text-sky-950 ring-4 ring-sky-500/20 font-bold shadow-sm'
                    : 'border-slate-300 bg-white hover:border-slate-400 hover:bg-slate-50 text-slate-800 shadow-xs'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${consultType === 'video' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-sky-600'}`}>
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">Video Call</div>
                  <div className="text-[11px] text-slate-600">100% Online HD</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setConsultType('clinic')}
                className={`p-3.5 rounded-xl border-2 text-left flex items-center gap-3 transition-all cursor-pointer ${
                  consultType === 'clinic'
                    ? 'border-teal-600 bg-teal-50/80 text-teal-950 ring-4 ring-teal-500/20 font-bold shadow-sm'
                    : 'border-slate-300 bg-white hover:border-slate-400 hover:bg-slate-50 text-slate-800 shadow-xs'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${consultType === 'clinic' ? 'bg-teal-600 text-white' : 'bg-slate-100 text-teal-600'}`}>
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">In-Clinic Visit</div>
                  <div className="text-[11px] text-slate-600">At Medi Go Clinic</div>
                </div>
              </button>
            </div>
          </div>

          {/* Available Slots */}
          <div>
            <label className="block text-xs font-bold text-slate-800 tracking-wide mb-1.5">
              Select Available Slot <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {activeDoc.slots.map((slot) => {
                const isSelected = selectedSlot === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`p-2.5 rounded-xl border-2 text-center transition-all cursor-pointer text-xs font-bold ${
                      isSelected
                        ? 'bg-sky-600 text-white border-sky-600 shadow-md ring-4 ring-sky-500/20'
                        : 'bg-white text-slate-800 border-slate-300 hover:border-sky-500 hover:bg-sky-50/50 shadow-xs'
                    }`}
                  >
                    <Clock className={`w-3.5 h-3.5 inline mr-1.5 ${isSelected ? 'text-sky-100' : 'text-slate-500'}`} />
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Patient Information Inputs */}
          <div className="grid sm:grid-cols-2 gap-3 pt-1">
            <Input
              label="Your Full Name"
              required
              placeholder="e.g. John Doe"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              icon={<User className="w-4 h-4" />}
            />

            <Input
              label="Phone Number"
              type="tel"
              required
              placeholder="+1 (555) 000-0000"
              value={patientPhone}
              onChange={(e) => setPatientPhone(e.target.value)}
              icon={<Phone className="w-4 h-4" />}
            />
          </div>

          {/* Reason for Consultation */}
          <div>
            <label className="block text-xs font-bold text-slate-800 tracking-wide mb-1.5">
              Reason for Consultation (Optional)
            </label>
            <div className="relative">
              <FileText className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
              <textarea
                rows={2}
                placeholder="e.g. Follow-up on blood pressure prescription, mild chest discomfort..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 bg-white text-slate-900 placeholder:text-slate-400 font-medium text-sm rounded-xl border-2 border-slate-300 hover:border-slate-400 focus:border-sky-600 focus:ring-4 focus:ring-sky-500/15 outline-none transition-all resize-none shadow-xs"
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="pt-2">
            <Button size="lg" variant="primary" fullWidth type="submit">
              Confirm Appointment ({activeDoc.fee})
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-600 mt-2.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Free cancellation up to 2 hours before appointment · HIPAA Encrypted</span>
            </div>
          </div>
        </form>
      )}
    </ModalEl>
  );
}
