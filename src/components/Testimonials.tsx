import React from 'react';
import { Star, CheckCircle, Quote, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Robert C.',
      location: 'Boca Raton (Canal Waterfront)',
      rating: 5,
      date: '2 weeks ago',
      title: 'Saved our seawall from a complete washout!',
      review: 'We had massive iguanas digging underneath our seawall cap and burrowing beneath our travertine pool deck. The Iguana Control Authority team showed up with the branded truck the same afternoon we called. They set humane traps, removed 8 large iguanas in 3 days, and collapsed the tunnels. Absolutely top-tier service!',
      service: 'Seawall Defense & Trapping',
    },
    {
      id: 2,
      name: 'Elena M.',
      location: 'Fort Lauderdale (Las Olas Isles)',
      rating: 5,
      date: '1 month ago',
      title: 'Our pool deck is finally clean again',
      review: 'Iguanas were pooping all over our pool steps and patio furniture every single day—it was disgusting with grandkids visiting. The specialists installed tree wraps on our palms so they couldn’t get up to the roof and trapped the colony. Courteous, professional, and humane.',
      service: 'Pool Deck Defense & Tree Wrapping',
    },
    {
      id: 3,
      name: 'Marcus D.',
      location: 'Delray Beach (HOA Property Manager)',
      rating: 5,
      date: '3 weeks ago',
      title: 'Best wildlife contractor our HOA board has hired',
      review: 'Our community lake banks were being torn up by dozens of iguanas eating landscaping and causing bank erosion. Iguana Control Authority came out, gave us a transparent proposal, and has reduced our iguana population by over 90%. Resident complaints have vanished.',
      service: 'Commercial & HOA Management',
    },
    {
      id: 4,
      name: 'Sandra & David L.',
      location: 'Coral Gables / Miami',
      rating: 5,
      date: '2 months ago',
      title: 'Prompt, ethical, and extremely knowledgeable',
      review: 'We loved our garden orchids and hibiscus, but iguanas stripped them to the stems. The technician explained the FWC guidelines, set live cages discreetly, and took care of the problem ethically. The free on-site estimate was clear and accurate.',
      service: 'Landscape & Garden Protection',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading uppercase tracking-wide">
            Trusted By South Florida Property Owners
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Read real feedback from homeowners, dock masters, and HOA boards protected by Iguana Control Authority.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">{rev.date}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  "{rev.title}"
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {rev.review}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <div>
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-emerald-600" />
                    <span>{rev.location}</span>
                  </div>
                </div>

                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {rev.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
