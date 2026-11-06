import React from 'react';
import { Phone, ShieldCheck, MessageSquare, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { trackPhoneCall, trackSms } from '../utils/analytics';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-[640px] lg:min-h-[720px] flex items-center justify-center bg-slate-900 border-b border-slate-200">
      
      {/* ========================================================================= */}
      {/* REAL FLORIDA BACKGROUND IMAGE: IGUANA WITH NICE WATERFRONT BACKGROUND */}
      {/* 100% Natural, NO white banner, NO white tint wash */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/florida-hero-live-iguana.jpg"
          alt="Live invasive iguana with South Florida waterfront canal and luxury yacht background"
          className="w-full h-full object-cover object-[center_35%] filter brightness-95 contrast-105"
        />
        {/* Subtle, soft dark gradient only to ensure crisp white text contrast without washing out the photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/50" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full text-center">
        
        {/* Credibility Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-400/50 text-emerald-300 text-xs font-bold mb-6 shadow-xl">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span>FWC Compliant • Licensed & Insured • Rapid Dispatch Truck</span>
        </div>

        {/* Main Headline with High-Contrast Drop Shadow */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-heading uppercase leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          <span className="block text-emerald-300">Iguana Control Authority</span>
          <span className="block text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold normal-case mt-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            South Florida's Humane Iguana Removal & Property Defense
          </span>
        </h1>

        {/* Clear Sub-headline: Appointments Scheduled Over The Phone */}
        <p className="mt-4 text-base sm:text-xl text-slate-100 font-semibold max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Protecting waterfront docks, seawalls, pool decks, and tropical landscaping across <strong className="text-white font-black underline decoration-emerald-400 underline-offset-4">Palm Beach, Broward, Miami-Dade & Monroe Counties</strong>. Appointments are scheduled directly over the phone.
        </p>

        {/* ================================================================ */}
        {/* GIANT HIGH-VISIBILITY CALL BUTTON (POPS TO THE EYE IMMEDIATELY) */}
        {/* ================================================================ */}
        <div className="mt-8 flex flex-col items-center">
          <a
            href="tel:13059224210"
            onClick={() => trackPhoneCall('Hero Giant Phone Button')}
            className="group inline-flex items-center justify-center gap-4 py-5 px-8 sm:px-12 rounded-3xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-2xl hover:scale-105 transition-all border-4 border-white/90 drop-shadow-2xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8 sm:w-9 sm:h-9 text-white animate-bounce" />
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-emerald-100 mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-300" />
                CALL TO SCHEDULE APPOINTMENT
              </span>
              <span className="text-2xl sm:text-4xl font-black font-heading tracking-tight text-white drop-shadow-sm">
                (305) 922-4210
              </span>
            </div>
          </a>

          {/* Secondary Actions: Direct SMS + Direct Email (No Form!) */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <a
              href="sms:13059224210"
              onClick={() => trackSms('Hero SMS Quick Quote')}
              className="py-3 px-5 rounded-2xl bg-slate-900/85 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm backdrop-blur-md border border-white/30 flex items-center gap-2 shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4 text-amber-300" />
              <span>Text Photos for Quick Quote: (305) 922-4210</span>
            </a>

            <a
              href="mailto:service@iguanacontrolauthority.com"
              className="py-3 px-5 rounded-2xl bg-slate-900/85 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm backdrop-blur-md border border-white/30 flex items-center gap-2 shadow-lg transition-all"
            >
              <Mail className="w-4 h-4 text-emerald-300" />
              <span>Email: service@iguanacontrolauthority.com</span>
            </a>
          </div>

          {/* Key Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-6 pt-6 border-t border-white/20 text-xs sm:text-sm text-slate-200 font-semibold drop-shadow-md">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Free On-Site Estimates</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Open Mon–Sun 8:00 AM – 6:30 PM</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Equipped Service Truck Drives To You</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
