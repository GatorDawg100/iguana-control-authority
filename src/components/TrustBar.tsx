import React from 'react';
import { ShieldCheck, Truck, Award, Clock, FileCheck, ThumbsUp } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: 'Licensed & Insured',
      desc: 'Full liability coverage for residential & commercial properties',
    },
    {
      icon: Award,
      title: 'FWC Compliant',
      desc: '100% legal & ethical removal adhering to state wildlife protocols',
    },
    {
      icon: Truck,
      title: 'Equipped Work Truck',
      desc: 'Dispatched directly to your site with traps & exclusion equipment',
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      desc: 'Same-day emergency inspection available across 4 counties',
    },
    {
      icon: FileCheck,
      title: 'Free On-Site Estimates',
      desc: 'Transparent pricing with zero hidden fees or obligations',
    },
    {
      icon: ThumbsUp,
      title: '100% Satisfaction',
      desc: 'Tailored property protection plans backed by local reputation',
    },
  ];

  return (
    <section className="bg-slate-900 border-y border-emerald-900/40 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-emerald-500/30 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2.5 group-hover:scale-110 group-hover:bg-emerald-900/50 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1 font-heading uppercase tracking-wide">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-tight">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
