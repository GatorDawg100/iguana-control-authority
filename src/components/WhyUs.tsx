import React from 'react';
import { ShieldCheck, HeartHandshake, Truck, Target, Award, Users, Phone, ArrowRight } from 'lucide-react';
import { trackPhoneCall } from '../utils/analytics';

export const WhyUs: React.FC = () => {
  const points = [
    {
      icon: Target,
      title: 'Iguana Control Is All We Do',
      desc: 'Unlike general pest exterminators who treat iguanas as a minor side task, Iguana Control Authority specializes 100% in invasive green iguana behavior, biology, and permanent exclusion.',
    },
    {
      icon: HeartHandshake,
      title: 'Ethical & Humane Standards',
      desc: 'We strictly adhere to Florida Fish and Wildlife Conservation Commission (FWC) humane handling and anti-cruelty guidelines. Every removal is legal, safe, and ethical.',
    },
    {
      icon: Truck,
      title: 'Dispatched Dedicated Service Truck',
      desc: 'We arrive in an official branded service truck equipped with commercial live cages, telescoping catch poles, tree wrapping aluminum, and burrow remediation equipment.',
    },
    {
      icon: Award,
      title: 'Licensed & Fully Insured',
      desc: 'We maintain comprehensive commercial and residential liability insurance. You are protected whether we are working along seawalls, on high roof tiles, or around pool lanais.',
    },
    {
      icon: Users,
      title: 'Certified Wildlife Specialists',
      desc: 'Direct communication, rapid response, and professional accountability on every single property visit. No inexperienced subcontractors.',
    },
    {
      icon: ShieldCheck,
      title: 'Free On-Site Inspections & Clear Pricing',
      desc: 'No vague phone guesses or hidden fees. We walk your property, inspect the burrow networks and basking corridors, and provide a clear proposal with zero obligation.',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-emerald-700 font-extrabold uppercase tracking-widest text-xs">
            The South Florida Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading uppercase tracking-wide mt-2">
            Why Property Owners Choose Iguana Control Authority
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Invasive green iguanas are agile climbers and strong swimmers. Removing them permanently requires dedicated wildlife mastery, not standard insect sprays.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-200 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mb-2.5 group-hover:text-emerald-700 transition-colors">
                    {pt.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Strip */}
        <div className="rounded-3xl bg-emerald-700 text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
              Ready To Clear Your Property of Invasive Iguanas?
            </h3>
            <p className="text-emerald-100 text-sm sm:text-base max-w-xl">
              Call our direct dispatch line now for a free on-site property evaluation. We drive to your location with our fully equipped service truck.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="tel:13059224210"
              onClick={() => trackPhoneCall('WhyUs Banner CTA')}
              className="py-3.5 px-6 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Call (305) 922-4210</span>
            </a>
            <a
              href="sms:13059224210"
              className="py-3.5 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 border border-emerald-600 transition-all"
            >
              <span>Text Photos: (305) 922-4210</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
