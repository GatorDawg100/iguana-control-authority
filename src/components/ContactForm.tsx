import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, ShieldCheck, AlertCircle } from 'lucide-react';
import { trackFormSubmission, trackPhoneCall, trackSms } from '../utils/analytics';
import confetti from 'canvas-confetti';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: 'Boca Raton',
    county: 'Palm Beach County',
    serviceType: 'Waterfront Seawall & Dock Defense',
    urgency: 'Standard (Next 24-48 Hours)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    trackFormSubmission(formData.serviceType, formData.county);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#10b981', '#34d399', '#f59e0b', '#fbbf24'],
      });
    }, 400);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Schedule Service • Free On-Site Estimate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading uppercase tracking-wide">
            Protect Your Property Today
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Fill out the form below or contact Avi Ezra directly. Our work truck will drive out to inspect your property and provide an ethical, guaranteed solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Business Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
              <div>
                <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs">
                  Direct Contact Information
                </span>
                <h3 className="text-2xl font-extrabold text-white font-heading mt-1">
                  Iguana Control Authority
                </h3>
                <p className="text-xs text-amber-400 font-semibold mt-0.5">
                  Avi Ezra, Owner & Wildlife Specialist
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4 text-sm text-slate-300">
                
                {/* Phone Call */}
                <a
                  href="tel:13059224210"
                  onClick={() => trackPhoneCall('Contact Section Phone')}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-950 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Direct Phone & Emergency Hotline</span>
                    <strong className="text-white text-base group-hover:text-emerald-400 transition-colors">
                      (305) 922-4210
                    </strong>
                    <span className="text-[11px] text-emerald-400 block mt-0.5 font-semibold">Tap to call Avi directly</span>
                  </div>
                </a>

                {/* Text / SMS */}
                <a
                  href="sms:13059224210"
                  onClick={() => trackSms('Contact Section SMS')}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-950 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Fast SMS Photo Evaluation</span>
                    <strong className="text-white text-base group-hover:text-amber-400 transition-colors">
                      Text (305) 922-4210
                    </strong>
                    <span className="text-[11px] text-amber-300 block mt-0.5 font-semibold">Send photos of burrows or lizards</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:service@iguanacontrolauthority.com"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-950 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-slate-400 block font-medium">Service Desk & Proposals</span>
                    <span className="text-white text-xs sm:text-sm font-semibold truncate block">
                      service@iguanacontrolauthority.com
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">Inquiries, HOA proposals & billing</span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Boca Raton Corporate Office</span>
                    <address className="not-italic text-white text-sm font-semibold">
                      950 Peninsula Corporate Cir<br />
                      Boca Raton, FL 33487
                    </address>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 flex-shrink-0">
                    <Clock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Hours of Operation</span>
                    <span className="text-white text-sm font-semibold block">
                      Monday – Sunday: 8:00 AM – 6:30 PM
                    </span>
                    <span className="text-[11px] text-emerald-400 block mt-0.5">
                      7 Days a Week • Appointments Recommended
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading uppercase">
                  Thank You, {formData.name || 'Friend'}!
                </h3>
                <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                  Your property inspection request has been logged. Avi Ezra will review your details and contact you shortly at <strong className="text-white">{formData.phone}</strong> to confirm your appointment.
                </p>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 max-w-md mx-auto text-xs text-left space-y-1.5 text-slate-300">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Requested Details:</div>
                  <div>• Service: <strong>{formData.serviceType}</strong></div>
                  <div>• County: <strong>{formData.county} ({formData.city})</strong></div>
                  <div>• Priority: <strong>{formData.urgency}</strong></div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="tel:13059224210"
                    onClick={() => trackPhoneCall('Post Submit Call')}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Avi Directly: (305) 922-4210</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs text-center"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-800 pb-4 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading uppercase tracking-wide">
                    Request A Free On-Site Inspection
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    No credit card required. Avi will assess your infestation and provide a tailored plan.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Avi Ezra"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(305) 922-4210"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      County
                    </label>
                    <select
                      value={formData.county}
                      onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Palm Beach County">Palm Beach County</option>
                      <option value="Broward County">Broward County</option>
                      <option value="Miami-Dade County">Miami-Dade County</option>
                      <option value="Monroe County">Monroe County (Florida Keys)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Street Address or City
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. 950 Peninsula Corp, Boca Raton"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Service Required
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Waterfront Seawall & Dock Defense">Waterfront Seawall & Dock Defense</option>
                      <option value="Humane Live Trapping & Eradication">Humane Live Trapping & Eradication</option>
                      <option value="Tree Wrapping & Anti-Climb Barriers">Tree Wrapping & Anti-Climb Barriers</option>
                      <option value="Commercial, HOA & Marina Programs">Commercial, HOA & Marina Programs</option>
                      <option value="Underground Burrow & Egg Nest Destruction">Burrow & Egg Nest Destruction</option>
                      <option value="Pool Deck Sanitization & Dropping Cleanup">Pool Deck / Patio Sanitization</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Describe Your Iguana Issue & Property Details
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us what you are seeing (e.g., burrows near the seawall, iguanas on the roof, droppings on the pool patio, eating orchids, etc.)..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/80 transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Details...' : 'Submit Request For Free On-Site Inspection'}</span>
                </button>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    100% Free & No Obligation
                  </span>
                  <span>Direct Reply from Avi Ezra</span>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
