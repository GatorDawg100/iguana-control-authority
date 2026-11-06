import React from 'react';
import { ShieldCheck, Truck, Award, Clock, FileCheck, ThumbsUp } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: 'Licensed & Insured',
      desc: 'Full liability coverage for South Florida properties',
    },
    {
      icon: Award,
      title: 'FWC Compliant',
      desc: '100% legal & ethical removal adhering to state rules',
    },
    {
      icon: Truck,
      title: 'Equipped Work Truck',
      desc: 'Direct dispatch to your dock, pool, or estate',
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      desc: 'Open Mon–Sun 9AM–6PM with same-day dispatch',
    },
    {
      icon: FileCheck,
      title: 'Free On-Site Estimates',
      desc: 'Transparent pricing with zero hidden fees',
    },
    {
      icon: ThumbsUp,
      title: 'Guaranteed Defense',
      desc: 'Proven trapping & long-term property exclusion',
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500/40 hover:bg-emerald-50/30 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2.5 group-hover:scale-110 group-hover:bg-emerald-200 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1 font-heading uppercase tracking-wide">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-600 leading-tight">
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
