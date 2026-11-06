import React, { useState } from 'react';
import { MapPin, Navigation, Truck, Phone, CheckCircle2 } from 'lucide-react';
import { trackPhoneCall } from '../utils/analytics';

export const ServiceAreas: React.FC = () => {
  const [activeCounty, setActiveCounty] = useState<'palm-beach' | 'broward' | 'miami-dade' | 'monroe'>('palm-beach');

  const counties = {
    'palm-beach': {
      name: 'Palm Beach County',
      hq: 'Company Headquarters: 950 Peninsula Corporate Cir, Boca Raton, FL 33487',
      description: 'Daily residential and commercial service dispatch across Palm Beach County. We protect luxury waterfront properties, golf communities, and Intracoastal seawalls from aggressive iguana burrowing.',
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
      hq: 'Daily Truck Routes Across Fort Lauderdale & Inland Waterways',
      description: 'Broward County’s 300+ miles of inland canals make it a prime hotspot for iguana colonies. We provide specialized seawall defense, dock sweeps, and HOA population control.',
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
      hq: 'Direct Mobile Dispatch Across Coastal & Bayfront Properties',
      description: 'From Biscayne Bay seawalls to luxury estate gardens, our specialists deploy humane traps, remove mature iguanas, and install tree climb barriers across greater Miami.',
      cities: [
        'Miami',
        'Coral Gables',
        'Aventura',
        'Sunny Isles Beach',
        'Key Biscayne',
        'Miami Beach',
        'Coconut Grove',
        'Pinecrest',
        'Bal Harbour',
        'Surfside',
        'Palmetto Bay',
        'North Miami',
      ],
      dispatchTime: 'Daily Scheduled Sweeps',
    },
    'monroe': {
      name: 'Monroe County (The Florida Keys)',
      hq: 'Specialized Island & Canal Seawall Eradication',
      description: 'Serving the Upper and Middle Keys. Protecting mangrove shorelines, boat basins, private docks, and resort grounds from invasive green iguana destruction.',
      cities: [
        'Key Largo',
        'Islamorada',
        'Tavernier',
        'Marathon',
        'Duck Key',
        'Big Pine Key',
        'Key West',
        'Ocean Reef Club',
      ],
      dispatchTime: 'Weekly Dedicated Expeditions',
    },
  };

  const current = counties[activeCounty];

  return (
    <section id="service-areas" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3 shadow-sm">
            <Truck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Mobile Service Fleet Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading uppercase tracking-wide">
            Where We Dispatch In South Florida
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Our equipped work truck drives directly to your location. Based out of <strong className="text-slate-900">Boca Raton</strong>, we cover Palm Beach, Broward, Miami-Dade, and Monroe Counties.
          </p>
        </div>

        {/* County Selection Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 max-w-4xl mx-auto">
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
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">{tab.label}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                activeCounty === tab.id ? 'bg-emerald-800 text-emerald-100' : 'bg-slate-200 text-slate-600'
              }`}>
                {tab.badge}
              </span>
            </button>
          ))}
        </div>

        {/* County Detail Card */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
                  <Navigation className="w-3 h-3" />
                  {current.dispatchTime}
                </span>
                <span className="text-xs text-slate-600 font-medium">
                  {current.hq}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                {current.name} Coverage
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {current.description}
              </p>

              {/* City Pill Grid */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Cities & Communities Serviced:
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.cities.map((city, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-xs"
                    >
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:13059224210"
                  onClick={() => trackPhoneCall(`Service Area Call: ${current.name}`)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm uppercase tracking-wider shadow-md transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Dispatch: (305) 922-4210</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm uppercase tracking-wider border border-slate-300 transition-all"
                >
                  <span>Book Free Estimate</span>
                </a>
              </div>
            </div>

            {/* Right Side Info Box */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Truck className="w-5 h-5 text-emerald-600" />
                <span>Equipped Fleet On Call</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our branded service truck is outfitted with commercial-grade live traps, catch poles, burrow compaction supplies, and anti-climb aluminum sheets.
              </p>
              <div className="space-y-2.5 border-t border-slate-100 pt-3 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Serving HOAs, private estates, golf courses & marinas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>No travel or fuel surcharge for standard service zones</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Boca Raton corporate headquarters (950 Peninsula Corp)</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
