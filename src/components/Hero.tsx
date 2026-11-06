import React, { useState } from 'react';
import { Phone, ShieldCheck, CheckCircle2, Star, ArrowRight, MessageSquare, AlertCircle, Mail, Clock, MapPin, Sparkles } from 'lucide-react';
import { trackPhoneCall, trackFormSubmission, trackSms } from '../utils/analytics';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickCity, setQuickCity] = useState('');
  const [quickIssue, setQuickIssue] = useState('Seawall / Dock Burrowing');
  const [submitted, setSubmitted] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const heroPhotos = [
    {
      title: 'South Florida Waterfront Dock Infestation',
      subtitle: 'Real scene: Multiple invasive green iguanas basking on residential yacht dock',
      image: '/images/dock-infestation-hd.jpg',
      badge: 'Active Dock Infestation',
    },
    {
      title: 'Canal & Seawall Live Capture',
      subtitle: 'Specialist securing mature iguana along waterfront seawall and boat slip',
      image: '/images/canal-seawall-capture.jpg',
      badge: 'Waterfront Removal',
    },
    {
      title: 'Humane Live Cage Trapping',
      subtitle: 'FWC-compliant ethical live trap deployed along residential garden corridor',
      image: '/images/humane-trap.jpg',
      badge: 'Garden Defense',
    },
    {
      title: 'Field Fleet Decal & Dispatch',
      subtitle: 'Service truck door decal with official license crest and emergency hotline',
      image: '/images/service-truck.jpg',
      badge: 'Branded Fleet Decal',
    },
  ];

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName || !quickPhone) return;

    trackFormSubmission(quickIssue, quickCity || 'South Florida');

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#10b981', '#34d399', '#fbbf24'],
    });

    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-10 lg:py-16 border-b border-slate-800 min-h-[640px] flex items-center">
      
      {/* Real Florida Environment Background Image with Iguanas on Dock */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/florida-dock-iguanas.jpg"
          alt="Florida canal dock environment with iguanas basking"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-105"
        />
        {/* Soft, balanced gradient overlays that let the real Florida environment show while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Value Proposition & BIG POPPING Action Box */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Top Credibility Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/50 text-emerald-300 text-xs font-bold shadow-lg backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>FWC Compliant • Licensed & Insured • Free Estimates</span>
            </div>

            {/* Main Headline (Clean semantic blocks, NO dangling single words) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight font-heading leading-tight uppercase">
              <span className="block">South Florida's Authority</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 mt-1">
                Humane Iguana Removal
              </span>
              <span className="block text-white mt-1">
                & Seawall Protection
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed font-medium">
              Don’t let invasive green iguanas destroy your seawalls, undermine pool patios, foul yacht docks, or eat prized landscaping. The <strong className="text-white font-bold">Iguana Control Authority</strong> team dispatches directly to your property in our equipped work truck with ethical, legal, and permanent eradication solutions.
            </p>

            {/* ============================================================== */}
            {/* BIG HIGH-VISIBILITY CALL & APPOINTMENT ACTION BOX (POPS TO EYE) */}
            {/* ============================================================== */}
            <div className="p-4 sm:p-5 rounded-3xl bg-slate-900/95 border-2 border-emerald-500/60 shadow-2xl backdrop-blur-md space-y-3.5 max-w-2xl">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                <span className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Call Now To Book Your Free On-Site Inspection
                </span>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  Same-Day Dispatch Available
                </span>
              </div>

              {/* GIANT POPPING PHONE BUTTON */}
              <a
                href="tel:13059224210"
                onClick={() => trackPhoneCall('Hero Giant Phone CTA')}
                className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 hover:from-emerald-400 hover:to-emerald-500 text-white font-black text-lg sm:text-2xl flex items-center justify-center gap-3.5 shadow-2xl shadow-emerald-950/90 hover:shadow-emerald-500/50 transition-all border-2 border-emerald-300/50 transform hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-950/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7 animate-bounce text-emerald-100" />
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[11px] sm:text-xs uppercase tracking-widest text-emerald-100 font-extrabold mb-1">
                    TAP TO CALL DIRECT DISPATCH HOTLINE
                  </span>
                  <span className="tracking-wider font-heading text-2xl sm:text-3xl text-white font-black">
                    (305) 922-4210
                  </span>
                </div>
              </a>

              {/* Secondary Actions: SMS + Email + Free Appointment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <a
                  href="#contact"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-950/40 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-slate-950" />
                  <span>Book Free Estimate Online</span>
                </a>

                <a
                  href="sms:13059224210"
                  onClick={() => trackSms('Hero Action Box SMS')}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>Text Photos: (305) 922-4210</span>
                </a>
              </div>

              {/* Direct Email & Operating Info */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                <a
                  href="mailto:service@iguanacontrolauthority.com"
                  className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-semibold truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>service@iguanacontrolauthority.com</span>
                </a>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Open Mon–Sun 8AM–6:30PM</span>
                </span>
              </div>
            </div>

            {/* Quick Proof Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-slate-200">4.9 / 5.0 Rating</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span>120+ South Florida Properties Protected</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-emerald-400 font-semibold">Palm Beach, Broward, Dade & Monroe</span>
            </div>
          </div>

          {/* Right Column: Hero Real Photo Showcase + Quick Quote Card */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Real Field Photo Interactive Showcase */}
            <div className="relative rounded-2xl overflow-hidden border border-emerald-800/40 bg-slate-900/90 shadow-2xl group">
              
              {/* Photo Display */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
                <img
                  src={heroPhotos[activePhotoIdx].image}
                  alt={heroPhotos[activePhotoIdx].title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md border border-emerald-500/40 px-2.5 py-1 rounded-md text-[11px] font-bold text-amber-300 shadow-md">
                  {heroPhotos[activePhotoIdx].badge}
                </div>

                {/* Caption Bar */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-slate-950/90 backdrop-blur-md p-2 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
                  <div className="truncate pr-2">
                    <span className="font-bold text-white block truncate">{heroPhotos[activePhotoIdx].title}</span>
                    <span className="text-[10px] text-slate-400 block truncate">{heroPhotos[activePhotoIdx].subtitle}</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold flex-shrink-0">
                    Photo {activePhotoIdx + 1}/4
                  </span>
                </div>
              </div>

              {/* Photo Selector Thumbnails */}
              <div className="grid grid-cols-4 gap-1 p-2 bg-slate-950/95 border-t border-slate-800">
                {heroPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`relative rounded-md overflow-hidden h-12 border transition-all ${
                      activePhotoIdx === idx
                        ? 'border-emerald-400 ring-2 ring-emerald-500/40'
                        : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photo.image}
                      alt={photo.badge}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Fast On-Site Estimate Request Box */}
              <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800">
                <div className="flex items-center justify-between mb-2.5">
                  <h3 className="font-heading text-sm sm:text-base font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Request Free On-Site Inspection
                  </h3>
                  <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold uppercase">
                    Free $0
                  </span>
                </div>

                {submitted ? (
                  <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-center space-y-2 animate-in fade-in">
                    <CheckCircle2 className="w-7 h-7 text-emerald-400 mx-auto" />
                    <h4 className="font-bold text-white text-sm">Inspection Request Received!</h4>
                    <p className="text-xs text-slate-300">
                      Our wildlife specialist will contact you shortly at <strong className="text-emerald-300">{quickPhone}</strong>.
                    </p>
                    <a
                      href="tel:13059224210"
                      className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:underline font-bold mt-1"
                    >
                      Need immediate assistance? Call (305) 922-4210 →
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleQuickSubmit} className="space-y-2.5">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-300 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={quickName}
                          onChange={(e) => setQuickName(e.target.value)}
                          placeholder="e.g. John Doe"
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-300 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={quickPhone}
                          onChange={(e) => setQuickPhone(e.target.value)}
                          placeholder="(561) 000-0000"
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-300 mb-1">City / County</label>
                        <input
                          type="text"
                          value={quickCity}
                          onChange={(e) => setQuickCity(e.target.value)}
                          placeholder="e.g. Boca Raton, Miami"
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-300 mb-1">Primary Problem</label>
                        <select
                          value={quickIssue}
                          onChange={(e) => setQuickIssue(e.target.value)}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                        >
                          <option value="Seawall / Dock Burrowing">Seawall / Dock Burrowing</option>
                          <option value="Pool Patio / Droppings">Pool Patio / Droppings</option>
                          <option value="Roof / Attic Invasion">Roof / Attic Invasion</option>
                          <option value="Garden & Trees Eaten">Garden & Trees Eaten</option>
                          <option value="Commercial / HOA Infestation">Commercial / HOA Property</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-amber-950/40 transition-colors"
                    >
                      <span>Submit For Free Inspection</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                      <AlertCircle className="w-3 h-3 text-emerald-400" />
                      100% Free • No obligation • Rapid Mobile Dispatch
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
