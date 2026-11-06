import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { trackPhoneCall, trackSms } from '../utils/analytics';

export const StickyMobileBar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 shadow-2xl flex items-center gap-3">
      <a
        href="tel:13059224210"
        onClick={() => trackPhoneCall('Sticky Mobile Call Bar')}
        className="flex-1 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
      >
        <Phone className="w-4 h-4 animate-bounce" />
        <span>Call: (305) 922-4210</span>
      </a>

      <a
        href="sms:13059224210"
        onClick={() => trackSms('Sticky Mobile SMS Bar')}
        className="flex-1 py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
      >
        <MessageSquare className="w-4 h-4 text-amber-400" />
        <span>Text Photos</span>
      </a>
    </div>
  );
};
