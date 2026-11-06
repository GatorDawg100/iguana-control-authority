import React, { useState } from 'react';
import { Phone, ShieldCheck, CheckCircle2, Star, ArrowRight, MessageSquare, AlertCircle, Eye, ChevronRight } from 'lucide-react';
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
      title: 'Canal & Seawall Humane Capture',
      subtitle: 'Technician securing mature iguana along waterfront seawall and boat slip',
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
      title: 'Field Fleet Decal & Direct Dispatch',
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
    <section className="relative overflow-hidden bg-slate-950 py-12 lg:py-20 border-b border-slate-800">
      
      {/* Real South Florida Waterfront Background Image with Atmospheric Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-waterfront-bg.jpg"
          alt="South Florida Waterfront Canal Background"
          className="w-full h-full object-cover object-center opacity-30 filter blur-[1px] scale-105 transform"
        />
        {/* Multi-layered gradient overlay ensuring high contrast readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-lg backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>FWC Compliant • Licensed & Insured • Rapid Dispatch</span>
            </div>

            {/* Main Headline (Clean typography, no isolated hanging words) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight font-heading leading-tight uppercase">
              South Florida's Authority In
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 mt-1">
                Humane Iguana Removal
              </span>
              <span className="block text-white mt-1">
                & Property Defense
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Don’t let invasive green iguanas destroy your seawalls, dig under your pool patios, foul your docks, or strip your exotic landscaping. <strong className="text-white font-semibold">Avi Ezra</strong> and the <strong className="text-white font-semibold">Iguana Control Authority</strong> team dispatch directly to your property in our dedicated work truck to deliver legal, ethical, and permanent defense.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200 pt-1">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span><strong className="text-white">Free On-Site Property</strong> Estimates</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span><strong className="text-white">Seawall & Dock</strong> Burrow Eradication</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span><strong className="text-white">Mobile Work Truck</strong> Drives to You</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span><strong className="text-white">Palm Beach, Broward, Dade, Keys</strong></span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="tel:13059224210"
                onClick={() => trackPhoneCall('Hero Main CTA')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-950/80 hover:shadow-emerald-600/40 transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-emerald-100" />
                <span>Call Avi: (305) 922-4210</span>
              </a>

              <a
                href="sms:13059224210"
                onClick={() => trackSms('Hero Main SMS')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-100 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>Text Photos for Quick Quote</span>
              </a>
            </div>

            {/* Ratings & Social Proof */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-slate-200">4.9 / 5.0 Rating</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span>120+ South Florida Properties Protected</span>
            </div>
          </div>

          {/* Right Column: Hero Real Photo Showcase + Quick Quote Card */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Real Field Photo Interactive Showcase */}
            <div className="relative rounded-2xl overflow-hidden border border-emerald-800/40 bg-slate-900/90 shadow-2xl group">
              
              {/* Photo Display */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-950">
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
              <div className="p-5 bg-slate-900 border-t border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-base font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Request Free On-Site Inspection
                  </h3>
                  <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold uppercase">
                    Same-Day
                  </span>
                </div>

                {submitted ? (
                  <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-center space-y-2 animate-in fade-in">
                    <CheckCircle2 className="w-7 h-7 text-emerald-400 mx-auto" />
                    <h4 className="font-bold text-white text-sm">Inspection Request Received!</h4>
                    <p className="text-xs text-slate-300">
                      Avi Ezra will call or text you shortly at <strong className="text-emerald-300">{quickPhone}</strong>.
                    </p>
                    <a
                      href="tel:13059224210"
                      className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:underline font-semibold mt-1"
                    >
                      Need immediate help? Call (305) 922-4210 →
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleQuickSubmit} className="space-y-2.5">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-medium text-slate-300 mb-1">Your Name *</label>
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
                        <label className="block text-[10px] font-medium text-slate-300 mb-1">Phone Number *</label>
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
                        <label className="block text-[10px] font-medium text-slate-300 mb-1">City / County</label>
                        <input
                          type="text"
                          value={quickCity}
                          onChange={(e) => setQuickCity(e.target.value)}
                          placeholder="e.g. Boca Raton, Miami"
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-medium text-slate-300 mb-1">Primary Concern</label>
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
                      className="w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-amber-950/40 transition-colors"
                    >
                      <span>Get Free Property Estimate</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                      <AlertCircle className="w-3 h-3 text-emerald-400" />
                      100% Free • No obligation • Direct dispatch from Avi
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
