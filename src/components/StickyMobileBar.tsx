import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { trackPhoneCall } from '../utils/analytics';

export const StickyMobileBar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-emerald-900/50 p-2.5 px-4 shadow-2xl flex items-center gap-3">
      <a
        href="tel:13059224210"
        onClick={() => trackPhoneCall('Sticky Mobile Call Bar')}
        className="flex-1 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950"
      >
        <Phone className="w-4 h-4 animate-bounce" />
        <span>Call: (305) 922-4210</span>
      </a>

      <a
        href="#contact"
        className="flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-950"
      >
        <Calendar className="w-4 h-4" />
        <span>Free Estimate</span>
      </a>
    </div>
  );
};
