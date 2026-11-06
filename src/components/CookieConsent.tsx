import React, { useState, useEffect } from 'react';
import { ShieldCheck, Check, X } from 'lucide-react';
import { initGA } from '../utils/analytics';

export const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ica_cookie_consent');
    if (!consent) {
      // Delay display slightly so it doesn't obstruct initial hero impression
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    } else if (consent === 'granted') {
      initGA();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ica_cookie_consent', 'granted');
    setShowBanner(false);
    initGA();
  };

  const handleDecline = () => {
    localStorage.setItem('ica_cookie_consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-16 lg:bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-50 max-w-md bg-slate-900 border border-slate-700/80 rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-4">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex-shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="flex-1 space-y-1">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
            Privacy & Analytics Notice
          </h4>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            We use privacy-friendly analytics cookies to measure estimate inquiries and improve our service dispatch across South Florida.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              onClick={handleAccept}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 shadow-md transition-colors"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Accept</span>
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 font-semibold text-[11px] transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={handleDecline}
          className="text-slate-500 hover:text-slate-300 p-1"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
