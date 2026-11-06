import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { trackFormSubmission, trackPhoneCall, trackSms } from '../utils/analytics';
import confetti from 'canvas-confetti';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    county: 'Palm Beach County',
    serviceType: 'Seawall / Dock Burrowing',
    urgency: 'Standard (This Week)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);

    setTimeout(() => {
      trackFormSubmission(formData.serviceType, formData.county);

      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#059669', '#10b981', '#f59e0b'],
      });

      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Fast Response • Free Property Inspection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading uppercase tracking-wide">
            Schedule Your Free On-Site Property Estimate
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Call us directly or send a request below. Our equipped work truck dispatches directly to your location across South Florida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Calling Box */}
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-700 block mb-2">
                Fastest Response
              </span>
              <h3 className="text-2xl font-black text-slate-900 font-heading mb-3">
                Call Direct Dispatch Line
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Speak directly with our team to arrange same-day or next-day on-site inspection.
              </p>

              {/* Big Call Button */}
              <a
                href="tel:13059224210"
                onClick={() => trackPhoneCall('Contact Section Big Phone Button')}
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xl flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all"
              >
                <Phone className="w-6 h-6 animate-bounce" />
                <span>(305) 922-4210</span>
              </a>

              {/* SMS Option */}
              <div className="mt-3">
                <a
                  href="sms:13059224210"
                  onClick={() => trackSms('Contact Section SMS')}
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Text Photos To (305) 922-4210</span>
                </a>
              </div>
            </div>

            {/* Business Details Card */}
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
              <h4 className="text-base font-bold text-slate-900 font-heading border-b border-slate-100 pb-3">
                Business Contact Details
              </h4>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wider">Email Address</span>
                  <a
                    href="mailto:service@iguanacontrolauthority.com"
                    className="text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                  >
                    service@iguanacontrolauthority.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wider">Headquarters</span>
                  <p className="text-sm font-bold text-slate-900">
                    950 Peninsula Corporate Cir<br />
                    Boca Raton, FL 33487
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wider">Hours of Operation</span>
                  <p className="text-sm font-bold text-slate-900">
                    Mon – Sun: 8:00 AM – 6:30 PM<br />
                    <span className="text-emerald-700 font-semibold text-xs">Open 7 Days A Week</span>
                  </p>
                </div>
              </div>

              {/* Official Social Media Links */}
              <div className="border-t border-slate-100 pt-4">
                <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wider mb-2.5">
                  Follow Our Field Work on Social Media
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/iguanacontrolauthority"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pink-50 hover:bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold transition-all shadow-xs"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>Instagram</span>
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61584350266019#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold transition-all shadow-xs"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Clean White Inspection Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 font-heading">
                    Property Estimate Request Received!
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you. An Iguana Control Authority specialist will contact you shortly to confirm your inspection time.
                  </p>
                  <div className="pt-4">
                    <a
                      href="tel:13059224210"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Need immediate help? Call (305) 922-4210</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                      Request Free On-Site Inspection
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Fill out this quick form and our dispatched team will contact you promptly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Michael Smith"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-hidden focus:border-emerald-500 focus:bg-white text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(561) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-hidden focus:border-emerald-500 focus:bg-white text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="youremail@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-hidden focus:border-emerald-500 focus:bg-white text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        County / Area *
                      </label>
                      <select
                        name="county"
                        value={formData.county}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-hidden focus:border-emerald-500 focus:bg-white text-sm transition-all"
                      >
                        <option value="Palm Beach County">Palm Beach County (Boca Raton, Delray, etc.)</option>
                        <option value="Broward County">Broward County (Ft Lauderdale, Pompano, etc.)</option>
                        <option value="Miami-Dade County">Miami-Dade County (Miami, Coral Gables, etc.)</option>
                        <option value="Monroe County">Monroe County (Florida Keys)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Property Address or City
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="e.g. 123 Ocean Blvd, Boca Raton"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-hidden focus:border-emerald-500 focus:bg-white text-sm transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Primary Issue
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-hidden focus:border-emerald-500 focus:bg-white text-sm transition-all"
                      >
                        <option value="Seawall / Dock Burrowing">Seawall / Dock Burrowing</option>
                        <option value="Pool Deck / Patio Infestation">Pool Deck / Patio Infestation</option>
                        <option value="Roof / Tree Climbing">Roof / Tree Climbing</option>
                        <option value="Commercial / HOA Program">Commercial / HOA Program</option>
                        <option value="Garden & Landscaping Destruction">Garden & Landscaping Destruction</option>
                        <option value="Other / General Trapping">Other / General Trapping</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Urgency Level
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-hidden focus:border-emerald-500 focus:bg-white text-sm transition-all"
                      >
                        <option value="Emergency (Same-Day / Iguana in Home or Pool)">Emergency (Same-Day / In Pool or Home)</option>
                        <option value="Standard (This Week)">Standard (This Week)</option>
                        <option value="Planning / Future Quote">Planning / Future Quote</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about the number of iguanas, location on the property, or any specific concerns..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-hidden focus:border-emerald-500 focus:bg-white text-sm transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-black text-base uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Free Estimate Request</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-2 font-medium">
                    <span>🔒 100% Privacy Guaranteed</span>
                    <span>•</span>
                    <span>Zero Obligations</span>
                    <span>•</span>
                    <span>No Spam</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
