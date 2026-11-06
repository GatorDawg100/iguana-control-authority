import React from 'react';
import { Shield, Phone, Mail, MapPin, Clock, ArrowUp, CheckCircle2 } from 'lucide-react';
import { trackPhoneCall } from '../utils/analytics';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-14 flex-shrink-0">
                <img
                  src="/images/logo-crest.jpg"
                  alt="Iguana Control Authority Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white font-heading uppercase block tracking-wider">
                  Iguana Control <span className="text-emerald-400">Authority</span>
                </span>
                <span className="text-amber-400 font-semibold text-xs block">
                  Avi Ezra, Founder & Lead Specialist
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pr-6">
              South Florida’s dedicated wildlife defense team specializing exclusively in ethical, FWC-compliant invasive green iguana eradication, seawall burrow protection, and property barrier proofing. Dispatched directly to your site in our branded work truck.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-300">
              <span className="inline-flex items-center gap-1 bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                <CheckCircle2 className="w-3.5 h-3.5" /> Licensed & Insured
              </span>
              <span className="inline-flex items-center gap-1 bg-slate-900 text-slate-200 border border-slate-800 px-2.5 py-1 rounded-md">
                <Shield className="w-3.5 h-3.5 text-amber-400" /> FWC Wildlife Compliant
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Our Services</a></li>
              <li><a href="#assessment" className="hover:text-emerald-400 transition-colors">Cost Estimator</a></li>
              <li><a href="#areas" className="hover:text-emerald-400 transition-colors">Service Areas</a></li>
              <li><a href="#gallery" className="hover:text-emerald-400 transition-colors">Field Work Gallery</a></li>
              <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose Avi Ezra</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Free Estimate Form</a></li>
            </ul>
          </div>

          {/* Service Areas (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Counties Served
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li><strong className="text-white">Palm Beach County</strong> (Boca Raton HQ, Delray, Palm Beach)</li>
              <li><strong className="text-white">Broward County</strong> (Fort Lauderdale, Pompano, Coral Springs)</li>
              <li><strong className="text-white">Miami-Dade County</strong> (Miami, Coral Gables, Aventura)</li>
              <li><strong className="text-white">Monroe County</strong> (Key Largo, Islamorada, Keys)</li>
            </ul>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Corporate Office & Dispatch
            </h4>
            
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>950 Peninsula Corporate Cir<br />Boca Raton, FL 33487</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href="tel:13059224210"
                  onClick={() => trackPhoneCall('Footer Phone')}
                  className="hover:text-emerald-400 transition-colors font-bold text-white"
                >
                  (305) 922-4210
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href="mailto:service@iguanacontrolauthority.com"
                  className="hover:text-emerald-400 transition-colors truncate"
                >
                  service@iguanacontrolauthority.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Mon – Sun: 8:00 AM – 6:30 PM<br /><span className="text-emerald-400 text-[11px]">7 Days / Appointments Recommended</span></span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Subfooter */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Iguana Control Authority LLC. All Rights Reserved. Humane Wildlife Control & Property Defense.
          </div>

          <div className="flex items-center gap-4">
            <a href="https://iguanacontrolauthority.com/sitemap.xml" className="hover:text-slate-300">Sitemap</a>
            <span>•</span>
            <span>FWC Compliant Invasive Species Eradication</span>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
