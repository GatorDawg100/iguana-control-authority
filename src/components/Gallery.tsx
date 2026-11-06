import React, { useState } from 'react';
import { Camera, Eye, X, CheckCircle2 } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: 'waterfront' | 'trapping' | 'fleet' | 'equipment';
  image: string;
  caption: string;
  tag: string;
}

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const items: GalleryItem[] = [
    {
      id: 1,
      title: 'Waterfront Canal Dock Infestation',
      category: 'waterfront',
      image: '/images/dock-infestation-hd.jpg',
      caption: 'Real field capture: Multiple adult invasive green iguanas basking along a residential yacht dock in South Florida, threatening seawall soil stability.',
      tag: 'Dock Infestation',
    },
    {
      id: 2,
      title: 'Waterfront Seawall Live Capture',
      category: 'waterfront',
      image: '/images/canal-seawall-capture.jpg',
      caption: 'Precision capture of a large invasive green iguana along a residential yacht dock in South Florida, preventing further burrowing into the concrete seawall.',
      tag: 'Seawall Defense',
    },
    {
      id: 3,
      title: 'Humane Garden Cage Trap',
      category: 'trapping',
      image: '/images/humane-trap.jpg',
      caption: 'Humane live-capture cage trap with an adult male iguana safely secured along a residential hedge corridor. Monitored and collected according to FWC ethical guidelines.',
      tag: 'Humane Trapping',
    },
    {
      id: 4,
      title: 'Precision Authorized Equipment',
      category: 'equipment',
      image: '/images/precision-equipment.jpg',
      caption: 'State-of-the-art precision equipment utilized for swift, ethical, and pinpoint eradication in strict accordance with Florida Fish and Wildlife Conservation protocols.',
      tag: 'FWC Compliant',
    },
    {
      id: 5,
      title: 'Mobile Fleet Decal & Field Capture',
      category: 'fleet',
      image: '/images/service-truck.jpg',
      caption: 'Service truck door displaying the official Iguana Control Authority crest, direct dispatch number (305) 922-4210, and iguanas captured on site.',
      tag: 'Branded Fleet Decal',
    },
    {
      id: 6,
      title: 'Waterfront Deck Defense Trap',
      category: 'trapping',
      image: '/images/trap-patio.jpg',
      caption: 'Carefully positioned live trap on a waterfront composite deck, stopping iguanas from fouling walkways, swimming pools, and outdoor dining spaces.',
      tag: 'Deck Trapping',
    },
    {
      id: 7,
      title: 'Pool Patio Live Trap Deployment',
      category: 'trapping',
      image: '/images/pool-patio-hd.jpg',
      caption: 'Discreet humane cage trap installed beside a screened pool lanai to safely capture iguanas that drop from rooflines and damage pool screening.',
      tag: 'Pool Defense',
    },
    {
      id: 8,
      title: 'Adult Male Invasive Iguana Specimen',
      category: 'waterfront',
      image: '/images/large-green-iguana.jpg',
      caption: 'Over 5-foot adult male green iguana extracted from a South Florida residential canal hedge before it could dig breeding burrows beneath the pool deck.',
      tag: 'Invasive Control',
    },
    {
      id: 9,
      title: 'Garden Hedge Corridor Trap',
      category: 'trapping',
      image: '/images/trap-garden.jpg',
      caption: 'Multi-catch live trap placed along an active travel route between a canal seawall and prized hibiscus landscaping.',
      tag: 'Garden Protection',
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-emerald-600" />
            <span>Field Work Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading uppercase tracking-wide">
            Real Results From South Florida Properties
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            No stock photos. See authentic images from our waterfront sweeps, dock captures, humane cage traps, and dispatched service truck.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'waterfront', label: 'Waterfront & Seawalls' },
            { id: 'trapping', label: 'Humane Trapping' },
            { id: 'fleet', label: 'Fleet & Service Truck' },
            { id: 'equipment', label: 'Precision Equipment' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 hover:border-emerald-500/50 shadow-sm hover:shadow-lg transition-all flex flex-col"
            >
              <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-emerald-800 shadow-sm border border-slate-200">
                  {item.tag}
                </div>
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/95 rounded-full p-2.5 text-slate-900 shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-emerald-700 font-bold text-xs pt-2 border-t border-slate-200/60">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Field Documentation</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Zoom */}
        {activeModalItem && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveModalItem(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[65vh] bg-slate-900 flex items-center justify-center overflow-hidden">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="max-h-[65vh] w-auto object-contain"
                />
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-slate-900 p-2 rounded-full shadow-lg transition-all"
                  aria-label="Close image modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {activeModalItem.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {activeModalItem.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {activeModalItem.caption}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Iguana Control Authority • Boca Raton, FL</span>
                  <a
                    href="tel:13059224210"
                    className="text-xs font-bold text-emerald-700 hover:underline"
                  >
                    Call for Inspection: (305) 922-4210
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
