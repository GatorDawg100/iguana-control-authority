import React, { useState } from 'react';
import { Anchor, ShieldCheck, TreePine, Building2, Shovel, Sparkles, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { trackServiceView, trackPhoneCall } from '../utils/analytics';

export const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Waterfront Seawall & Dock Defense',
      tagline: 'Stop catastrophic canal bank collapse and dock fouling',
      icon: Anchor,
      image: '/images/canal-seawall-capture.jpg',
      problem: 'Iguanas dig extensive burrow networks behind seawalls, washing out backfill soil into canals. Over time, this causes concrete seawall caps to crack, lawns to cave in, and repair bills to exceed $15,000–$40,000.',
      solution: 'Our wildlife specialists conduct specialized waterfront sweeps, trap adult iguanas along dock pilings, excavate burrows, and install anti-burrow riprap barriers.',
      benefits: [
        'Protects marine seawalls from sinkholes & backfill erosion',
        'Eliminates dangerous slipping hazards on docks & boat lifts',
        'FWC compliant humane capture along waterfronts',
      ],
    },
    {
      id: 2,
      title: 'Humane Live Trapping & Eradication',
      tagline: 'Ethical, FWC-compliant capture for residential estates',
      icon: ShieldCheck,
      image: '/images/humane-trap.jpg',
      problem: 'Iguanas swarm residential yards, basking on pool decks, defecating near outdoor kitchens, eating hibiscus and orchids, and carrying Salmonella bacteria that endanger pets and young children.',
      solution: 'We deploy professional multi-catch live cages, natural bait lures, and precision capture equipment directly from our branded service truck.',
      benefits: [
        'Safe for domestic pets, children, and native wildlife',
        '100% legal under Florida Fish and Wildlife Conservation rules',
        'Daily trap monitoring and rapid removal',
      ],
    },
    {
      id: 3,
      title: 'Tree Wrapping & Anti-Climb Barriers',
      tagline: 'Prevent roof, lanai, and palm canopy infestations',
      icon: TreePine,
      image: '/images/large-green-iguana.jpg',
      problem: 'Iguanas use palm trees, ficus hedges, and sea grapes as ladders to jump onto roofs, damage barrel tiles, block gutters, and drop down inside screened pool cages.',
      solution: 'We install custom-fitted slick aluminum sheet wraps on tree trunks and dock pilings that prevent iguanas from gripping and climbing upward.',
      benefits: [
        'Permanent mechanical exclusion without harmful chemicals',
        'Weather-resistant materials matched to your landscape aesthetics',
        'Stops roof jumping and pool enclosure penetrations',
      ],
    },
    {
      id: 4,
      title: 'Commercial, HOA & Marina Programs',
      tagline: 'Proactive community-wide management & education',
      icon: Building2,
      image: '/images/service-truck.jpg',
      problem: 'HOA communities, golf courses, resorts, and commercial plazas face liability risks, landscaping damage, and resident complaints when iguana colonies multiply unchecked.',
      solution: 'Custom ongoing service agreements including recurring property inspections, colony reduction, resident educational materials, and board reporting.',
      benefits: [
        'Scheduled regular sweeps by our branded service truck',
        'Reduces HOA landscaping replacement expenditures',
        'Compliant documentation for board meetings and insurers',
      ],
    },
    {
      id: 5,
      title: 'Underground Burrow & Egg Nest Destruction',
      tagline: 'Eradicate breeding chambers before dozens of eggs hatch',
      icon: Shovel,
      image: '/images/trap-garden.jpg',
      problem: 'A single adult female iguana can lay 30 to 70 eggs per clutch in deep underground tunnels, ensuring next season’s swarm is exponentially worse.',
      solution: 'We locate active burrow openings using specialized probes, safely extract nesting females and eggs, and backfill the tunnels with compaction material to prevent re-entry.',
      benefits: [
        'Breaks the reproductive breeding cycle on your property',
        'Prevents structural foundation and sidewalk shifting',
        'Permanent soil stabilization around pools and foundations',
      ],
    },
    {
      id: 6,
      title: 'Sanitization & Dropping Decontamination',
      tagline: 'Eliminate Salmonella hazards from decks and living spaces',
      icon: Sparkles,
      image: '/images/trap-patio.jpg',
      problem: 'Iguana feces carry Salmonella and harmful pathogens. Droppings bake in the South Florida sun, staining travertine tiles, contaminating swimming pool water, and causing foul odors.',
      solution: 'Professional pressure cleaning with hospital-grade, eco-friendly sanitizing solutions to neutralize pathogens and remove territorial scent markers.',
      benefits: [
        'Protects dogs, cats, and barefoot children from bacterial illness',
        'Removes pheromone markers that attract other wandering iguanas',
        'Restores the pristine appearance of pool patios and docks',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-900 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">
              Specialized Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading uppercase tracking-wide mt-2">
              Our Professional Iguana Control Services
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              We don’t treat iguanas as a side hobby. At <strong className="text-white">Iguana Control Authority</strong>, controlling and removing invasive green iguanas is all we do. Every service is performed with dedicated equipment and strict FWC compliance.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="tel:13059224210"
              onClick={() => trackPhoneCall('Services Header CTA')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-emerald-400 font-bold text-sm shadow-md transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call For Free Estimate: (305) 922-4210</span>
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-600/50 shadow-xl overflow-hidden transition-all duration-300 flex flex-col group hover:-translate-y-1"
                onMouseEnter={() => trackServiceView(srv.title)}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 bg-emerald-950/90 backdrop-blur-md border border-emerald-500/40 p-2 rounded-lg text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading mb-1 group-hover:text-emerald-400 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-400/90 mb-3">
                      {srv.tagline}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {srv.problem}
                    </p>

                    <div className="space-y-2 border-t border-slate-800/80 pt-3">
                      {srv.benefits.map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Dispatched via Service Truck
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Get Estimate</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Estimate Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border border-emerald-800/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white font-heading uppercase">
              Need a Custom Removal or Exclusion Plan?
            </h3>
            <p className="text-sm text-slate-300">
              We provide free on-site inspections for homeowners, HOAs, and businesses across South Florida.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href="tel:13059224210"
              onClick={() => trackPhoneCall('Services Bottom CTA')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Hotline: (305) 922-4210</span>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm text-center transition-all"
            >
              Request Free Inspection
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
