import React, { useState } from 'react';
import { Phone, Shield, MessageSquare, Menu, X, Clock, MapPin } from 'lucide-react';
import { trackPhoneCall, trackSms } from '../utils/analytics';

interface NavbarProps {
  onOpenEstimateModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePhoneClick = (loc: string) => {
    trackPhoneCall(loc);
  };

  const handleSmsClick = (loc: string) => {
    trackSms(loc);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-emerald-900/40 shadow-xl transition-all">
      {/* Top Notification / Emergency Dispatch Bar */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-950 to-emerald-950 text-emerald-200 text-xs py-1.5 px-4 border-b border-emerald-800/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex items-center gap-2 font-medium text-[11px] sm:text-xs">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              RAPID DISPATCH
            </span>
            <span className="text-slate-200">Serving Palm Beach • Broward • Miami-Dade • Monroe</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              Mon-Sun: 8:00 AM – 6:30 PM
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Boca Raton HQ: 950 Peninsula Corp
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Brand Identity (No wrapping, fixed flex hierarchy) */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0 group py-1">
            <div className="relative w-11 h-13 sm:w-12 sm:h-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/logo-crest.jpg"
                alt="Iguana Control Authority Official Crest"
                className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]"
              />
            </div>
            <div className="flex flex-col justify-center whitespace-nowrap">
              <div className="text-lg sm:text-xl xl:text-2xl font-black tracking-tight text-white font-heading uppercase leading-none">
                Iguana Control <span className="text-emerald-400">Authority</span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-amber-400 font-semibold tracking-wider uppercase mt-1 flex items-center gap-1">
                <Shield className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                <span>Humane Wildlife Experts</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links (Responsive gap and text size) */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-semibold text-slate-200 flex-shrink-0">
            <a href="#services" className="hover:text-emerald-400 transition-colors py-1">Services</a>
            <a href="#assessment" className="hover:text-emerald-400 transition-colors py-1 flex items-center gap-1">
              <span>Cost Calculator</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold border border-emerald-500/30">Free</span>
            </a>
            <a href="#areas" className="hover:text-emerald-400 transition-colors py-1">Service Areas</a>
            <a href="#gallery" className="hover:text-emerald-400 transition-colors py-1">Field Work</a>
            <a href="#why-us" className="hover:text-emerald-400 transition-colors py-1">Why Us</a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors py-1">FAQs</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 flex-shrink-0">
            <a
              href="sms:13059224210"
              onClick={() => handleSmsClick('Header SMS')}
              className="px-3 py-2 rounded-lg border border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-emerald-400 transition-all text-xs font-semibold flex items-center gap-1.5 shadow-sm"
              title="Text photos of your iguana issue"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden md:inline">Text Us</span>
            </a>

            <a
              href="tel:13059224210"
              onClick={() => handlePhoneClick('Header Call Button')}
              className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-950/60 hover:shadow-emerald-600/30 transition-all whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-200" />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[9px] text-emerald-100 uppercase font-medium">Direct Line / Avi Ezra</span>
                <span className="font-bold tracking-wide">(305) 922-4210</span>
              </div>
            </a>

            <a
              href="#contact"
              className="px-3.5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-950/40 transition-all whitespace-nowrap"
            >
              Get Free Estimate
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href="tel:13059224210"
              onClick={() => handlePhoneClick('Mobile Top Nav')}
              className="sm:hidden px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950 border-b border-emerald-900/50 px-4 pt-3 pb-6 space-y-3 transition-all animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-2 text-base font-medium text-slate-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-emerald-400"
            >
              Our Services
            </a>
            <a
              href="#assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-emerald-400 flex items-center justify-between"
            >
              <span>Property Assessment Calculator</span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-semibold">Free</span>
            </a>
            <a
              href="#areas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-emerald-400"
            >
              Counties & Cities Served
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-emerald-400"
            >
              Real Work Showcase
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-emerald-400"
            >
              Why Choose Avi Ezra
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-emerald-400"
            >
              Frequently Asked Questions
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 font-semibold"
            >
              Request Free On-Site Inspection
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="tel:13059224210"
              onClick={() => handlePhoneClick('Mobile Drawer Call')}
              className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call Avi Ezra: (305) 922-4210</span>
            </a>
            <a
              href="sms:13059224210"
              onClick={() => handleSmsClick('Mobile Drawer SMS')}
              className="w-full py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-slate-300 font-semibold text-center flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Text Photos of Iguanas / Burrows</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
