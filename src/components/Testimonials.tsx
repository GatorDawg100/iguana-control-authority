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
    <section className="py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading uppercase tracking-wide">
            Trusted By South Florida Property Owners
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            See what homeowners, HOA managers, and waterfront estate owners say about our rapid dispatch and humane results.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 shadow-xl transition-all flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-800 group-hover:text-emerald-900/40 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 ml-2 font-medium">{rev.date}</span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading mb-2">
                  "{rev.title}"
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {rev.review}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    {rev.location}
                  </p>
                </div>

                <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
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
