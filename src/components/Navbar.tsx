import React, { useState } from 'react';
import { Phone, Shield, MessageSquare, Menu, X, Clock, MapPin } from 'lucide-react';
import { trackPhoneCall, trackSms } from '../utils/analytics';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-emerald-900/50 shadow-2xl transition-all">
      {/* Top Notification / Emergency Dispatch Bar */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-950 to-emerald-950 text-emerald-200 text-xs py-1.5 px-4 border-b border-emerald-800/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex items-center gap-2 font-medium text-[11px] sm:text-xs">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wide">
              ⚡ RAPID DISPATCH TRUCK
            </span>
            <span className="text-slate-200">Serving Palm Beach • Broward • Miami-Dade • Monroe</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              Mon-Sun: 8:00 AM – 6:30 PM (7 Days)
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              HQ: 950 Peninsula Corp, Boca Raton
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0 group py-1">
            <div className="relative w-11 h-13 sm:w-12 sm:h-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/logo-crest.jpg"
                alt="Iguana Control Authority Crest"
                className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]"
              />
            </div>
            <div className="flex flex-col justify-center whitespace-nowrap">
              <div className="text-lg sm:text-xl xl:text-2xl font-black tracking-tight text-white font-heading uppercase leading-none">
                Iguana Control <span className="text-emerald-400">Authority</span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-amber-400 font-bold tracking-wider uppercase mt-1 flex items-center gap-1">
                <Shield className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                <span>Humane Wildlife Experts</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-bold text-slate-200 flex-shrink-0">
            <a href="#services" className="hover:text-emerald-400 transition-colors py-1">Services</a>
            <a href="#assessment" className="hover:text-emerald-400 transition-colors py-1 flex items-center gap-1.5">
              <span>Cost Calculator</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-extrabold border border-emerald-500/30">Free</span>
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
              onClick={() => trackSms('Header SMS')}
              className="px-3 py-2.5 rounded-xl border border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-emerald-400 transition-all text-xs font-bold flex items-center gap-1.5 shadow-sm"
              title="Text photos of your iguana problem"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden md:inline">Text Us</span>
            </a>

            {/* Prominent Direct Phone Button */}
            <a
              href="tel:13059224210"
              onClick={() => trackPhoneCall('Header Call Button')}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-black text-sm flex items-center gap-2 shadow-lg shadow-emerald-950/80 hover:shadow-emerald-600/40 transition-all whitespace-nowrap border border-emerald-400/40 transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[9px] text-emerald-100 uppercase tracking-widest font-extrabold">24/7 Rapid Hotline</span>
                <span className="font-extrabold text-sm tracking-wide">(305) 922-4210</span>
              </div>
            </a>

            <a
              href="#contact"
              className="px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-950/50 transition-all whitespace-nowrap transform hover:-translate-y-0.5"
            >
              Free Estimate
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href="tel:13059224210"
              onClick={() => trackPhoneCall('Mobile Top Nav')}
              className="sm:hidden px-3 py-2 rounded-xl bg-emerald-600 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(305) 922-4210</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none"
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
          <div className="flex flex-col space-y-2 text-base font-semibold text-slate-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-emerald-400"
            >
              Our Services
            </a>
            <a
              href="#assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-emerald-400 flex items-center justify-between"
            >
              <span>Property Assessment Calculator</span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">Free</span>
            </a>
            <a
              href="#areas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-emerald-400"
            >
              Counties & Cities Served
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-emerald-400"
            >
              Real Work Showcase
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-emerald-400"
            >
              Why Choose Us
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-emerald-400"
            >
              Frequently Asked Questions
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 font-bold"
            >
              Request Free On-Site Inspection
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href="tel:13059224210"
              onClick={() => trackPhoneCall('Mobile Drawer Call')}
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-center flex items-center justify-center gap-2 shadow-lg text-base"
            >
              <Phone className="w-5 h-5" />
              <span>Call Hotline: (305) 922-4210</span>
            </a>
            <a
              href="sms:13059224210"
              onClick={() => trackSms('Mobile Drawer SMS')}
              className="w-full py-3 rounded-xl border border-slate-700 bg-slate-900 text-slate-200 font-bold text-center flex items-center justify-center gap-2 text-sm"
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
