import React, { useState } from 'react';
import { Phone, Shield, MessageSquare, Menu, X, Clock, MapPin, Mail } from 'lucide-react';
import { trackPhoneCall, trackSms } from '../utils/analytics';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top Notification / Emergency Dispatch Bar */}
      <div className="bg-emerald-800 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5">
          <div className="flex items-center gap-2 font-medium text-[11px] sm:text-xs">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-400 text-slate-950 uppercase tracking-wide">
              ⚡ RAPID DISPATCH
            </span>
            <span className="text-emerald-50">Equipped Service Truck • Palm Beach • Broward • Miami-Dade • Monroe</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-emerald-100">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              Mon–Sun: 8:00 AM – 6:30 PM (7 Days)
            </span>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 border-l border-emerald-700/80 pl-3">
              <a
                href="https://www.instagram.com/iguanacontrolauthority"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors"
                title="Follow Iguana Control Authority on Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61584350266019#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors"
                title="Follow Iguana Control Authority on Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0 group py-1">
            <div className="relative w-11 h-13 sm:w-12 sm:h-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/logo-crest.jpg"
                alt="Iguana Control Authority Crest"
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>
            <div className="flex flex-col justify-center whitespace-nowrap">
              <div className="text-lg sm:text-xl font-black tracking-tight text-slate-900 font-heading uppercase leading-none">
                Iguana Control <span className="text-emerald-700">Authority</span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-amber-600 font-bold tracking-wider uppercase mt-1 flex items-center gap-1">
                <Shield className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                <span>Humane Wildlife Defense</span>
              </div>
            </div>
          </a>

          {/* Clean Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-bold text-slate-700 flex-shrink-0">
            <a href="#services" className="hover:text-emerald-700 transition-colors py-1">Services</a>
            <a href="#gallery" className="hover:text-emerald-700 transition-colors py-1">Field Work</a>
            <a href="#why-us" className="hover:text-emerald-700 transition-colors py-1">Why Us</a>
            <a href="#service-areas" className="hover:text-emerald-700 transition-colors py-1">Service Areas</a>
            <a href="#faq" className="hover:text-emerald-700 transition-colors py-1">FAQ</a>
            <a href="#contact" className="hover:text-emerald-700 transition-colors py-1">Contact</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <a
              href="sms:13059224210"
              onClick={() => trackSms('Header SMS')}
              className="hidden md:inline-flex px-3 py-2 rounded-xl border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-emerald-700 transition-all text-xs font-bold items-center gap-1.5 shadow-xs"
              title="Text photos for a quick quote"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Text Photos</span>
            </a>

            {/* Giant Prominent Phone Call Button */}
            <a
              href="tel:13059224210"
              onClick={() => trackPhoneCall('Header Call Button')}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all whitespace-nowrap"
            >
              <Phone className="w-4 h-4 animate-bounce text-emerald-100" />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[9px] uppercase tracking-widest text-emerald-100 font-extrabold">CALL TO SCHEDULE</span>
                <span className="font-black text-sm sm:text-base tracking-wide">(305) 922-4210</span>
              </div>
            </a>

            <a
              href="#contact"
              className="px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm transition-all whitespace-nowrap"
            >
              Free Estimate
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href="tel:13059224210"
              onClick={() => trackPhoneCall('Mobile Top Phone Icon')}
              className="p-2.5 rounded-xl bg-emerald-600 text-white shadow-sm flex items-center justify-center"
              aria-label="Call (305) 922-4210"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-emerald-700 hover:bg-slate-100 border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2 text-base font-bold text-slate-800">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Services
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Field Work Photos
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Why Choose Us
            </a>
            <a
              href="#service-areas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Service Areas (Palm Beach, Broward, Dade, Keys)
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Contact & Book Estimate
            </a>
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <a
              href="tel:13059224210"
              onClick={() => trackPhoneCall('Mobile Drawer Phone CTA')}
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 text-white font-black text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call (305) 922-4210</span>
            </a>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="sms:13059224210"
                onClick={() => trackSms('Mobile Drawer SMS')}
                className="py-2.5 px-3 rounded-lg bg-slate-100 text-slate-800 font-bold text-xs text-center flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Text Photos</span>
              </a>

              <a
                href="mailto:service@iguanacontrolauthority.com"
                className="py-2.5 px-3 rounded-lg bg-slate-100 text-slate-800 font-bold text-xs text-center flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-600" />
                <span>Email Us</span>
              </a>
            </div>

            {/* Socials in mobile menu */}
            <div className="flex items-center justify-center gap-4 pt-3 border-t border-slate-100 text-slate-600 text-xs font-semibold">
              <a
                href="https://www.instagram.com/iguanacontrolauthority"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-700"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61584350266019#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-700"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
