import React from 'react';
import { ShieldCheck, HeartHandshake, Truck, Target, Award, Users } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const points = [
    {
      icon: Target,
      title: 'Iguana Control Is All We Do',
      desc: 'Unlike general exterminators who treat iguanas as an afterthought alongside roaches or ants, Iguana Control Authority specializes 100% in invasive green iguana behavior, habitats, and exclusion.',
    },
    {
      icon: HeartHandshake,
      title: 'Ethical & Humane Standards',
      desc: 'We strictly adhere to Florida Fish and Wildlife Conservation Commission (FWC) humane handling and anti-cruelty guidelines. We eliminate threats legally, safely, and humanely.',
    },
    {
      icon: Truck,
      title: 'Dispatched Dedicated Service Truck',
      desc: 'We arrive in a professional, branded RAM service truck equipped with commercial-grade traps, telescoping catch poles, tree wrapping aluminum, and burrow remediation equipment.',
    },
    {
      icon: Award,
      title: 'Licensed & Fully Insured',
      desc: 'We hold complete commercial and residential liability insurance. You are protected whether we are working along your waterfront seawall, on high roof tiles, or around your pool cage.',
    },
    {
      icon: Users,
      title: 'Certified Wildlife Specialists',
      desc: 'You get dedicated wildlife professionals, clear communication, rapid response, and direct accountability on every single estimate and job.',
    },
    {
      icon: ShieldCheck,
      title: 'Free On-Site Inspections & Clear Pricing',
      desc: 'No vague phone quotes or surprise add-ons. We walk your property, inspect the burrow networks and basking hotspots, and provide a clear, customized proposal with zero obligation.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-900 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">
            The South Florida Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading uppercase tracking-wide mt-2">
            Why Property Owners Choose Iguana Control Authority
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Invasive green iguanas are fast, smart, and agile climbers and swimmers. Eradicating them requires specialized wildlife mastery, not standard pest control sprays.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-emerald-400 transition-colors">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Mission Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950/60 border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-amber-400 font-bold uppercase tracking-wider text-xs">
                Our Professional Standards & Guarantee
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading uppercase">
                "Our Mission Is Protecting Your South Florida Property with Integrity & Humane Care."
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                "South Florida is our home, and we’ve seen firsthand how invasive green iguanas cause tens of thousands of dollars in seawall washouts, damage costly pool decks, and ruin pristine tropical gardens. At Iguana Control Authority, we built our reputation on fast responsiveness, honest communication, and humane results that actually last. When you call us, you get our dedicated work truck at your driveway and solutions you can trust."
              </p>
              <div className="pt-2">
                <span className="font-bold text-white text-base">Iguana Control Authority Team</span>
                <span className="text-xs text-emerald-400 block">Certified Wildlife Specialists • South Florida Headquarters</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-slate-950/80 border border-emerald-700/30 shadow-xl">
              <div className="w-20 h-24 mb-3">
                <img
                  src="/images/logo-crest.jpg"
                  alt="Iguana Control Authority Crest"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
                />
              </div>
              <h4 className="text-white font-heading text-lg uppercase font-bold">
                Iguana Control Authority
              </h4>
              <p className="text-xs text-slate-400 mt-1 mb-4">
                950 Peninsula Corporate Cir, Boca Raton, FL 33487
              </p>
              <a
                href="tel:13059224210"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                Call Hotline: (305) 922-4210
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
