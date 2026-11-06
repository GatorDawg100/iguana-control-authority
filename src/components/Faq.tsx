import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, Mail } from 'lucide-react';
import { trackPhoneCall } from '../utils/analytics';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How much does professional iguana removal cost in South Florida?',
      a: 'Pricing depends on property size, the location of the infestation (e.g. seawall, roof, or open landscaping), and whether you need single-time trapping or ongoing barrier installation. We offer 100% Free On-Site Property Inspections where our specialist walks your property and provides a clear, fixed estimate with no hidden fees or obligations.',
    },
    {
      q: 'Why can’t iguanas just be caught and relocated to the Everglades?',
      a: 'Green iguanas are an invasive species native to Central and South America. Under Florida Fish and Wildlife Conservation Commission (FWC) regulations (Florida Statute § 379.282), it is strictly illegal to capture and release non-native reptiles back into the wild anywhere in Florida. Our services strictly follow humane, legal FWC eradication protocols.',
    },
    {
      q: 'Can iguanas really cause my seawall or pool patio to collapse?',
      a: 'Yes, absolutely. Green iguanas dig burrows up to 80 feet long behind seawalls and underneath concrete pool slabs. During high tides and summer rainstorms, water enters these tunnels and washes out the supporting sand and backfill. This leads to sudden sinkholes, cracked seawall caps, and thousands of dollars in emergency marine contractor repairs.',
    },
    {
      q: 'Are your trapping and deterrent methods safe for dogs, cats, and children?',
      a: 'Yes. Our live cage traps use natural fruit-based attractants that do not attract domestic pets. Traps are monitored and placed in secluded areas along known iguana sunning corridors. Furthermore, our tree wraps and barrier guards are 100% non-chemical and family-safe.',
    },
    {
      q: 'How fast can the Iguana Control Authority work truck arrive?',
      a: 'Our dedicated, branded service truck is on the road daily across Palm Beach, Broward, Miami-Dade, and Monroe Counties. We offer same-day emergency inspection for urgent patio intrusions, swimming pool contaminations, or attic/roof breaches. Call (305) 922-4210 for immediate dispatch.',
    },
    {
      q: 'How does tree wrapping work to stop them getting on the roof?',
      a: 'Iguanas have sharp claws designed to climb the rough bark of palm trees, sea grapes, and ficus trees. We install specialized slick-finish aluminum sheet collars on the trunks. Because iguanas cannot get a grip on the smooth metal surface, they cannot climb into the canopy to jump onto your roof tiles or screened pool enclosure.',
    },
    {
      q: 'Do you service HOAs, golf courses, and commercial properties?',
      a: 'Yes! We manage large-scale iguana populations for gated communities, condominium associations, resorts, marinas, and golf courses throughout South Florida. We provide regular sweeps, comprehensive perimeter trapping, resident education, and detailed reporting for board meetings.',
    },
    {
      q: 'What should I do if an iguana is inside my pool or home right now?',
      a: 'Do not attempt to corner or grab an adult iguana—they possess razor-sharp serrated teeth, powerful claws, and can whip their heavy tails with enough force to cut skin. Call our team immediately at (305) 922-4210 or text photos for immediate guidance.',
    },
  ];

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Got Questions? We Have Answers.</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Clear information about Florida iguana laws, humane trapping, seawall protection, and our dispatch process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-slate-50 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                >
                  <span className="text-sm sm:text-base font-heading">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Have a specific question about your property?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Call our specialists directly or text photos of your dock or garden.
            </p>
          </div>
          <a
            href="tel:13059224210"
            onClick={() => trackPhoneCall('FAQ Call CTA')}
            className="flex-shrink-0 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call (305) 922-4210</span>
          </a>
        </div>

      </div>
    </section>
  );
};
