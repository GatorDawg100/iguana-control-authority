import React from 'react';
import { Anchor, ShieldCheck, TreePine, Building2, Shovel, Home, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { trackServiceView, trackPhoneCall } from '../utils/analytics';

export const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Waterfront Seawall & Dock Defense',
      tagline: 'Stop catastrophic canal bank collapse and dock fouling',
      icon: Anchor,
      image: '/images/canal-seawall-capture.jpg',
      problem: 'Iguanas dig deep burrow networks behind concrete seawalls, causing soil erosion, sinkholes, and costly seawall collapses exceeding $15,000–$40,000.',
      solution: 'We conduct waterfront captures, extract iguanas along dock pilings, excavate active burrows, and reinforce vulnerable points.',
      benefits: [
        'Protects seawall caps and backfill soil',
        'Eliminates dock slipping and hygiene hazards',
        'FWC compliant humane waterfront capture',
      ],
    },
    {
      id: 2,
      title: 'Humane Live Trapping & Eradication',
      tagline: 'Safe, ethical capture for residential yards & pool patios',
      icon: ShieldCheck,
      image: '/images/humane-trap.jpg',
      problem: 'Invasive iguanas take over pool decks, defecate in swimming pools, strip expensive ornamental flowers, and transmit Salmonella to pets and children.',
      solution: 'We deploy professional multi-catch live cages, natural food lures, and precision capture equipment directly from our branded service truck.',
      benefits: [
        'Safe for domestic pets, children, and native wildlife',
        '100% legal under Florida state wildlife rules',
        'Routine trap monitoring and rapid removal',
      ],
    },
    {
      id: 3,
      title: 'Tree Wrapping & Roof Exclusion',
      tagline: 'Stop iguanas from climbing palms, roofs, and pool cages',
      icon: TreePine,
      image: '/images/large-green-iguana.jpg',
      problem: 'Iguanas climb palm trees, sea grapes, and ficus hedges to access roofs, break barrel tiles, clog rain gutters, and drop into screened pool lanais.',
      solution: 'We install custom-cut aluminum sheet barriers around tree trunks and dock pilings that physically block iguanas from climbing upward.',
      benefits: [
        'Permanent mechanical exclusion without harsh chemicals',
        'Aesthetic finish that blends seamlessly with palms',
        'Prevents roof jumping and pool cage penetrations',
      ],
    },
    {
      id: 4,
      title: 'Commercial, HOA & Marina Programs',
      tagline: 'Comprehensive population control for communities & resorts',
      icon: Building2,
      image: '/images/service-truck.jpg',
      problem: 'HOA communities, golf courses, resorts, and commercial marinas face liability, landscape replacement costs, and resident complaints.',
      solution: 'Tailored recurring service plans with scheduled service truck visits, proactive population suppression, and clear documentation.',
      benefits: [
        'Scheduled sweeps by our equipped service truck',
        'Reduces HOA landscaping replacement expenditures',
        'Transparent reporting for board meetings & insurers',
      ],
    },
    {
      id: 5,
      title: 'Burrow Excavation & Nest Destruction',
      tagline: 'Destroy underground tunnels before female iguanas lay 40+ eggs',
      icon: Shovel,
      image: '/images/dock-infestation-hd.jpg',
      problem: 'Single female iguanas dig massive underground chambers to deposit up to 70 eggs each spring, creating large subterranean voids under sidewalks.',
      solution: 'We locate active burrow openings, extract nesting iguanas, and pack tunnels with structural compaction material to prevent re-colonization.',
      benefits: [
        'Breaks the rapid breeding cycle on your property',
        'Prevents sidewalk and pool foundation cracking',
        'Permanent soil stabilization around foundations',
      ],
    },
    {
      id: 6,
      title: 'Long-Term Property Control Solutions',
      tagline: 'Humane, legal removal for homes & businesses across South Florida',
      icon: Home,
      image: '/images/trap-garden.jpg',
      problem: 'Invasive green iguanas multiply rapidly across residential yards, waterfront estates, and commercial grounds, damaging costly vegetation and invading private living spaces.',
      solution: 'We provide humane, legal iguana removal and long-term control solutions for homes and businesses across Broward County and surrounding South Florida communities.',
      benefits: [
        'Customized control programs for private homes and estates',
        'Humane, ethical removal adhering to Florida FWC protocols',
        'Direct mobile dispatch across Broward, Palm Beach, Dade & Monroe',
      ],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-emerald-700 font-extrabold uppercase tracking-widest text-xs">
              Specialized Property Protection
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading uppercase tracking-wide mt-2">
              Our Professional Iguana Removal Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              We specialize 100% in invasive green iguana behavior, habitats, and exclusion. Every job is handled with dedicated equipment and strict FWC compliance.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="tel:13059224210"
              onClick={() => trackPhoneCall('Services Header Call CTA')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call For Free Estimate: (305) 922-4210</span>
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
              >
                {/* Service Card Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-emerald-800 text-xs font-bold border border-slate-200 shadow-sm flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Specialized Service</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 font-heading mb-2 group-hover:text-emerald-700 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-700 mb-3">
                      {srv.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                      {srv.solution}
                    </p>

                    {/* Bullet Benefits */}
                    <div className="space-y-2 border-t border-slate-100 pt-3 mb-5">
                      {srv.benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="tel:13059224210"
                    onClick={() => trackPhoneCall(`Service Card Call: ${srv.title}`)}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white border border-emerald-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all mt-auto"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call To Schedule: (305) 922-4210</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
