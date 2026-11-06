import React from 'react';
import { Phone, Mail, Clock, MapPin, ShieldCheck, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import { trackPhoneCall, trackSms } from '../utils/analytics';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-12 lg:py-20 min-h-[640px] flex items-center border-b border-slate-200">
      
      {/* Real Florida Environment Background Image with Iguanas on Dock */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/florida-dock-iguanas.jpg"
          alt="Florida waterfront dock environment with invasive iguanas basking"
          className="w-full h-full object-cover object-center scale-105 filter brightness-100 contrast-105"
        />
        {/* Crisp, light gradient overlay so the real Florida background photo is clearly visible while keeping text ultra-readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/55 to-white/85" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Main Frosted Glass Center Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/80 text-center space-y-6">
          
          {/* Top Compliance Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-black shadow-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span>FWC COMPLIANT • LICENSED & INSURED • RAPID DISPATCH</span>
          </div>

          {/* Exact Headline Requested: Simple, authoritative, no dangling wrap issues */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading leading-tight uppercase max-w-4xl mx-auto">
            Iguana Control Authority will provide full property protection, eradication, and removal.{' '}
            <span className="text-emerald-700 block sm:inline mt-1 sm:mt-0">
              Call today.
            </span>
          </h1>

          {/* Core Notice: Appointment Scheduling over Phone Call or Email Only */}
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed">
            Appointments are scheduled directly via <strong className="text-slate-900 font-bold">phone call or email only</strong>. We dispatch our equipped service truck directly to residential and commercial properties throughout South Florida.
          </p>

          {/* ============================================================== */}
          {/* GIANT HIGH-CONTRAST PHONE BUTTON (POPS OUT TO THE EYE) */}
          {/* ============================================================== */}
          <div className="pt-2 flex flex-col items-center justify-center gap-3">
            <a
              href="tel:13059224210"
              onClick={() => trackPhoneCall('Hero Giant Call Button')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-4 py-5 sm:py-6 px-8 sm:px-12 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-2xl sm:text-3xl lg:text-4xl shadow-2xl hover:shadow-emerald-600/40 transform hover:-translate-y-1 transition-all border-2 border-emerald-400 group"
              aria-label="Call (305) 922-4210 to schedule an appointment"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 sm:w-8 sm:h-8 animate-bounce text-white" />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-emerald-100 font-extrabold mb-1">
                  CALL TO SCHEDULE APPOINTMENT
                </span>
                <span className="font-heading tracking-wide text-white">
                  (305) 922-4210
                </span>
              </div>
            </a>

            {/* Email & Text Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto pt-1">
              <a
                href="mailto:service@iguanacontrolauthority.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm sm:text-base shadow-md transition-all"
              >
                <Mail className="w-4 h-4 text-slate-950" />
                <span>Email: service@iguanacontrolauthority.com</span>
              </a>

              <a
                href="sms:13059224210"
                onClick={() => trackSms('Hero SMS Button')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-bold text-sm sm:text-base transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>Text Photos for Quote</span>
              </a>
            </div>
          </div>

          {/* ============================================================== */}
          {/* ESSENTIAL BUSINESS INFO (WORKING HOURS, LOCATION, COVERAGE) */}
          {/* ============================================================== */}
          <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            
            {/* Hours */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block">Working Hours</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block">Mon–Sun: 9:00 AM – 6:00 PM</span>
                <span className="text-[11px] text-emerald-700 font-semibold block">7 Days a Week</span>
              </div>
            </div>

            {/* Address */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block">Headquarters</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block">950 Peninsula Corp</span>
                <span className="text-[11px] text-slate-600 block">Boca Raton, FL 33487</span>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block">Service Territory</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block">Palm Beach • Broward</span>
                <span className="text-[11px] text-slate-600 block">Miami-Dade & Monroe Counties</span>
              </div>
            </div>

          </div>

          {/* Quick Credibility Footnote */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600 pt-1">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free On-Site Estimates
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Seawall & Dock Specialists
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Dedicated Work Truck
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
