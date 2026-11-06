import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, CheckCircle2, Truck, Sparkles, Navigation } from 'lucide-react';
import { trackPhoneCall, trackSms } from '../utils/analytics';

export const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Fast Dispatch • 100% Free Property Inspections</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading uppercase tracking-wide">
            Schedule Your Free On-Site Inspection
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2">
            All appointments are scheduled directly over the phone. Call our direct line below to arrange same-day or next-day on-site inspection.
          </p>
        </div>

        {/* High-Impact Direct Appointment Dispatch Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Top Callout Strip */}
          <div className="bg-emerald-700 text-white p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-200 font-extrabold block mb-1">
                Direct Dispatch Hotline
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
                Call To Book Your Property Appointment
              </h3>
            </div>
            <span className="text-xs font-bold bg-emerald-800 px-3.5 py-1.5 rounded-full border border-emerald-600/50 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Same-Day Dispatch Available</span>
            </span>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            
            {/* GIANT PHONE BUTTON */}
            <div>
              <a
                href="tel:13059224210"
                onClick={() => trackPhoneCall('Appointment Section Giant Phone Button')}
                className="group w-full py-6 px-6 sm:px-8 rounded-3xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-700 hover:to-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-4 border-2 border-emerald-400 transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white animate-bounce" />
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-emerald-100 mb-1">
                    TAP TO CALL DIRECT DISPATCH LINE
                  </span>
                  <span className="text-3xl sm:text-4xl font-black font-heading tracking-tight text-white">
                    (305) 922-4210
                  </span>
                </div>
              </a>
            </div>

            {/* Secondary Direct Actions: SMS + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="sms:13059224210"
                onClick={() => trackSms('Appointment Section SMS')}
                className="py-4 px-5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-sm flex items-center justify-center gap-2.5 transition-all shadow-xs"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>Text Photos: (305) 922-4210</span>
              </a>

              <a
                href="mailto:service@iguanacontrolauthority.com"
                className="py-4 px-5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-sm flex items-center justify-center gap-2.5 transition-all shadow-xs"
              >
                <Mail className="w-5 h-5 text-emerald-600" />
                <span>service@iguanacontrolauthority.com</span>
              </a>
            </div>

            {/* What Happens When You Call (Simple 3 Steps) */}
            <div className="border-t border-slate-100 pt-8">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-5 text-center sm:text-left">
                How Our Phone Appointment Process Works:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center">
                    1
                  </div>
                  <h5 className="font-bold text-slate-900 text-sm">
                    Call Direct Hotline
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Call (305) 922-4210 to describe where iguanas are active on your property (seawalls, docks, trees, or pool decks).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center">
                    2
                  </div>
                  <h5 className="font-bold text-slate-900 text-sm">
                    Free On-Site Inspection
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We schedule a convenient time for our equipped work truck to drive directly to your location with zero obligation.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center">
                    3
                  </div>
                  <h5 className="font-bold text-slate-900 text-sm">
                    Humane Property Defense
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We deploy specialized live traps, extract iguanas humanely, seal burrow tunnels, and install anti-climb barriers.
                  </p>
                </div>
              </div>
            </div>

            {/* Business Contact Details & Social Media Links */}
            <div className="border-t border-slate-100 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Corporate Headquarters</span>
                  <span>950 Peninsula Corporate Cir<br />Boca Raton, FL 33487</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Hours of Operation</span>
                  <span>Mon – Sun: 9:00 AM – 6:00 PM<br /><strong className="text-emerald-700">Open 7 Days A Week</strong></span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Service Fleet Coverage</span>
                  <span>Palm Beach, Broward, Miami-Dade & Monroe Counties</span>
                </div>
              </div>
            </div>

            {/* Official Social Media Links */}
            <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                Follow Our Field Work On Social Media:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/iguanacontrolauthority"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-50 hover:bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold transition-all shadow-xs"
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold transition-all shadow-xs"
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

      </div>
    </section>
  );
};
