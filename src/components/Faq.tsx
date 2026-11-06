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
      a: 'Our dedicated, branded RAM service truck is on the road daily across Palm Beach, Broward, Miami-Dade, and Monroe Counties. We offer same-day emergency inspection for urgent patio intrusions, swimming pool contaminations, or attic/roof breaches. Call (305) 922-4210 for immediate dispatch.',
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
    <section id="faq" className="py-20 bg-slate-900 border-b border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers.</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Everything you need to know about invasive iguana removal, FWC regulations, and protecting your South Florida property.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden transition-all shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-900/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-white tracking-wide">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-900 border border-slate-700 text-emerald-400 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-emerald-950' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-900 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-950 border border-emerald-900/40 text-center space-y-4 shadow-xl">
          <h3 className="font-heading text-xl font-bold text-white uppercase">
            Have a Specific Question About Your Property?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Speak directly with our certified wildlife specialists. We are happy to answer your questions and evaluate photos of your iguana damage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="tel:13059224210"
              onClick={() => trackPhoneCall('FAQ Direct Call')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Hotline: (305) 922-4210</span>
            </a>
            <a
              href="mailto:service@iguanacontrolauthority.com"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Email Service Desk</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
