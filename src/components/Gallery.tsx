import React, { useState } from 'react';
import { Camera, Eye, X, ZoomIn, CheckCircle2 } from 'lucide-react';

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
      title: 'Invasive Iguana in Palm Canopy',
      category: 'trapping',
      image: '/images/palm-tree-iguana.jpg',
      caption: 'Green iguana perched in palm fronds. Our custom aluminum tree wrap barriers prevent iguanas from scaling trees and jumping onto roof tiles.',
      tag: 'Tree Barrier Target',
    },
    {
      id: 8,
      title: 'Large Male Invasive Specimen',
      category: 'waterfront',
      image: '/images/large-green-iguana.jpg',
      caption: 'Mature invasive green iguana measuring over 4.5 feet removed from a residential turf lawn before it could burrow underneath an adjacent seawall cap.',
      tag: 'Invasive Control',
    },
    {
      id: 9,
      title: 'Multi-Iguana Landscape Remediation',
      category: 'trapping',
      image: '/images/successful-removal.jpg',
      caption: 'Multiple invasive iguanas safely removed in a single dispatch from a residential property suffering from heavy ornamental plant and flower damage.',
      tag: 'Multi-Removal',
    },
    {
      id: 10,
      title: 'Residential Lawn Live Trapping',
      category: 'trapping',
      image: '/images/trap-lawn.jpg',
      caption: 'Safe, humane cage trap deployed on a residential turf lawn to protect families and pets from Salmonella-contaminated droppings.',
      tag: 'Lawn Trapping',
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Field Work Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading uppercase tracking-wide">
            Real Results From South Florida Jobs
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            No stock photos or generic promises. See authentic photos of our waterfront captures, dock infestations, humane cage traps, and field operations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'waterfront', label: 'Waterfront & Seawalls' },
            { id: 'trapping', label: 'Humane Trapping' },
            { id: 'fleet', label: 'Fleet & Dispatch' },
            { id: 'equipment', label: 'Professional Equipment' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group cursor-pointer rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-emerald-500/50 shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="p-2.5 rounded-full bg-emerald-600/90 text-white shadow-lg backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-bold text-amber-400 border border-slate-800">
                  {item.tag}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-heading text-base font-bold text-white group-hover:text-emerald-400 transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-emerald-400 font-semibold">Click to enlarge</span>
                  <Eye className="w-3.5 h-3.5 text-slate-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeModalItem && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveModalItem(null)}
          >
            <div
              className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 hover:bg-slate-800 text-white border border-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[65vh] bg-slate-950 flex items-center justify-center overflow-hidden">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-contain max-h-[65vh]"
                />
              </div>

              <div className="p-6 space-y-2 bg-slate-900 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                    {activeModalItem.tag}
                  </span>
                  <span className="text-xs text-slate-400">FWC Compliant Field Work</span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading">
                  {activeModalItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModalItem.caption}
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Free on-site estimate available for your property</span>
                  </div>
                  <a
                    href="tel:13059224210"
                    className="w-full sm:w-auto px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center"
                  >
                    Call: (305) 922-4210
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
