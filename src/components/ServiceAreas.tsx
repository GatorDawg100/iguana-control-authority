import React, { useState } from 'react';
import { MapPin, Navigation, Truck, Phone, CheckCircle2 } from 'lucide-react';
import { trackPhoneCall } from '../utils/analytics';

export const ServiceAreas: React.FC = () => {
  const [activeCounty, setActiveCounty] = useState<'palm-beach' | 'broward' | 'miami-dade' | 'monroe'>('palm-beach');

  const counties = {
    'palm-beach': {
      name: 'Palm Beach County',
      hq: 'Company Headquarters in Boca Raton (950 Peninsula Corporate Cir)',
      description: 'Full residential and commercial dispatch across North & South Palm Beach County. We protect luxury waterfront properties, golf course communities, and Intracoastal seawalls.',
      cities: [
        'Boca Raton (HQ)',
        'Delray Beach',
        'Palm Beach Island',
        'Highland Beach',
        'Boynton Beach',
        'Boca West',
        'Wellington',
        'Lake Worth Beach',
        'Jupiter',
        'Palm Beach Gardens',
        'Lantana',
        'Manalapan',
      ],
      dispatchTime: 'Immediate Daily Dispatch',
    },
    'broward': {
      name: 'Broward County',
      hq: 'Daily Truck Routes Across Fort Lauderdale & Surrounding Waterfronts',
      description: 'Broward County’s extensive 300+ miles of inland waterways and canals make it ground zero for iguana burrowing. We provide intensive seawall defense and HOA patrol.',
      cities: [
        'Fort Lauderdale',
        'Pompano Beach',
        'Coral Springs',
        'Lighthouse Point',
        'Hollywood',
        'Deerfield Beach',
        'Parkland',
        'Weston',
        'Dania Beach',
        'Lauderdale-by-the-Sea',
        'Plantation',
        'Davie',
      ],
      dispatchTime: 'Same-Day Dispatch Available',
    },
    'miami-dade': {
      name: 'Miami-Dade County',
      hq: 'Rapid Dispatch to Coastal Estates, Marinas & Commercial Properties',
      description: 'From Biscayne Bay docks to lush Coral Gables estates, we remediate severe green iguana infestations on roofs, lanais, and botanical gardens.',
      cities: [
        'Miami',
        'Coral Gables',
        'Key Biscayne',
        'Aventura',
        'Coconut Grove',
        'Pinecrest',
        'Sunny Isles Beach',
        'Bal Harbour',
        'Miami Beach',
        'Palmetto Bay',
        'South Miami',
        'Brickell / Downtown',
      ],
      dispatchTime: 'Daily Scheduled Sweeps',
    },
    'monroe': {
      name: 'Monroe County (Florida Keys)',
      hq: 'Island Waterfront & Resort Protection',
      description: 'The Florida Keys experience dense iguana pressure on mangroves, boat docks, and resort grounds. We provide scheduled multi-property trapping and ongoing defense.',
      cities: [
        'Key Largo',
        'Islamorada',
        'Tavernier',
        'Marathon',
        'Duck Key',
        'Lower Keys',
        'Key West (Special Request)',
      ],
      dispatchTime: 'Weekly Dedicated Island Sweeps',
    },
  };

  const current = counties[activeCounty];

  return (
    <section id="areas" className="py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
            <Navigation className="w-3.5 h-3.5" />
            <span>South Florida Regional Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading uppercase tracking-wide">
            Areas We Serve In South Florida
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Our branded work truck drives directly to your location. Based out of <strong className="text-white">Boca Raton</strong>, Avi Ezra covers Palm Beach, Broward, Miami-Dade, and Monroe Counties.
          </p>
        </div>

        {/* County Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-4xl mx-auto">
          {[
            { id: 'palm-beach', label: 'Palm Beach County', badge: 'HQ' },
            { id: 'broward', label: 'Broward County', badge: 'Daily' },
            { id: 'miami-dade', label: 'Miami-Dade County', badge: 'Daily' },
            { id: 'monroe', label: 'Monroe County (Keys)', badge: 'Keys' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCounty(tab.id as any)}
              className={`p-3.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                activeCounty === tab.id
                  ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-950'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">{tab.label}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                activeCounty === tab.id ? 'bg-emerald-950/80 text-emerald-200' : 'bg-slate-800 text-slate-400'
              }`}>
                {tab.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Selected County Details Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Info Left */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
                  {current.dispatchTime}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  {current.hq}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {current.name} Iguana Removal & Control
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {current.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Cities & Communities Covered:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {current.cities.map((city, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="font-medium">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="tel:13059224210"
                  onClick={() => trackPhoneCall(`Areas - ${current.name}`)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call For {current.name} Service</span>
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs text-center border border-slate-700 transition-all"
                >
                  Schedule On-Site Inspection
                </a>
              </div>
            </div>

            {/* Truck Dispatch Highlight Right */}
            <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-6 border border-emerald-900/40 relative overflow-hidden flex flex-col justify-between space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-white uppercase">
                    Direct Mobile Dispatch
                  </h4>
                  <p className="text-xs text-slate-400">
                    We drive to your location with all traps & tools
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-800 relative h-48 bg-slate-900">
                <img
                  src="/images/dock-infestation-hd.jpg"
                  alt="Waterfront Seawall and Dock Service Area"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-slate-950/85 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                  <span className="font-bold text-emerald-400">On-Site Dispatch Fleet</span>
                  <span className="text-amber-300">Call (305) 922-4210</span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex justify-between border-b border-slate-800/80 py-1">
                  <span className="text-slate-400">Headquarters Address:</span>
                  <span className="font-medium text-white text-right">950 Peninsula Corp, Boca Raton 33487</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 py-1">
                  <span className="text-slate-400">Owner & Lead Specialist:</span>
                  <span className="font-medium text-emerald-400">Avi Ezra</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 py-1">
                  <span className="text-slate-400">Free Estimates:</span>
                  <span className="font-medium text-amber-300">Yes, 100% Free On-Site</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
