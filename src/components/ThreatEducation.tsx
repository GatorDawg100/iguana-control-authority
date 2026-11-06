import React from 'react';
import { AlertTriangle, ShieldCheck, DollarSign, Bug, Home, Waves } from 'lucide-react';

export const ThreatEducation: React.FC = () => {
  const threats = [
    {
      icon: Waves,
      title: 'Seawall Collapse & Sinkholes',
      damageCost: '$10,000 – $40,000+ in repairs',
      description: 'Iguana burrows can exceed 80 feet in length. When dug behind concrete seawalls, incoming tides erode the loose backfill soil, causing pool patios, lawns, and concrete seawall caps to collapse into canals.',
    },
    {
      icon: Bug,
      title: 'Salmonella & Pet Health Hazards',
      damageCost: 'Severe bacterial sickness for pets & family',
      description: 'Iguanas defecate on pool ledges, patios, docks, and outdoor furniture. Their droppings routinely test positive for Salmonella bacteria, presenting serious health risks to curious dogs, cats, and barefoot children.',
    },
    {
      icon: Home,
      title: 'Roof, Gutter & Attic Damage',
      damageCost: '$2,000 – $10,000 in roof repairs',
      description: 'Using overhanging trees, iguanas scale roofs to bask in heat. They displace barrel tiles, rip insulation, drop into open vents, and deposit corrosive droppings that block gutter drainage systems.',
    },
    {
      icon: DollarSign,
      title: 'Costly Landscape Destruction',
      damageCost: '$1,500 – $8,000 in lost plants',
      description: 'South Florida prized landscaping (hibiscus, orchids, bougainvillea, vegetable gardens, and impatiens) are prime food sources. A small swarm can decimate years of expensive landscape investments overnight.',
    },
  ];

  return (
    <section className="py-20 bg-slate-900 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Property Owner Advisory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading uppercase tracking-wide">
            The True Cost Of Ignoring An Iguana Infestation
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            In South Florida, green iguanas are classified by the <strong className="text-white">FWC</strong> as an invasive species. What begins as a single lizard basking on your dock can rapidly escalate into severe structural instability and sanitation hazards.
          </p>
        </div>

        {/* Threat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {threats.map((threat, idx) => {
            const Icon = threat.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-amber-950/60 border border-amber-500/30 text-amber-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-amber-300 bg-amber-950/70 border border-amber-600/30 px-3 py-1 rounded-full uppercase tracking-wider">
                      {threat.damageCost}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading mb-2">
                    {threat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {threat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* FWC Legal Education Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border border-emerald-700/40 flex flex-col lg:flex-row items-center gap-6 shadow-2xl">
          <div className="p-4 rounded-2xl bg-emerald-900/50 border border-emerald-500/40 text-emerald-400 flex-shrink-0">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <div className="space-y-2 text-center lg:text-left flex-1">
            <h4 className="text-lg font-bold text-white font-heading uppercase tracking-wide">
              Florida Wildlife Laws: Why DIY Trapping & Relocation Is Illegal
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Under Florida Statute § 379.282 and Florida Fish and Wildlife Conservation Commission (FWC) regulations, <strong className="text-white">it is illegal to release captured green iguanas anywhere in the state of Florida</strong>. DIY relocations to parks, golf courses, or the Everglades carry heavy fines. Iguana Control Authority operates with full state compliance, ensuring lawful, ethical, and permanent eradication.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              Get Free Protection Plan
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
