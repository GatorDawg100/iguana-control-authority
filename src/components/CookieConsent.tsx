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
    <div className="fixed bottom-16 lg:bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-50 max-w-md bg-white border border-slate-200 rounded-2xl p-4 shadow-2xl">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex-shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="flex-1 space-y-1">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-heading">
            Privacy & Cookie Notice
          </h4>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            We use privacy-friendly analytics cookies to measure estimate inquiries and improve our service dispatch across South Florida.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              onClick={handleAccept}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 shadow-xs transition-colors"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Accept</span>
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold text-[11px] transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={handleDecline}
          className="text-slate-400 hover:text-slate-600"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
