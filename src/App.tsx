import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { WhyUs } from './components/WhyUs';
import { ServiceAreas } from './components/ServiceAreas';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { CookieConsent } from './components/CookieConsent';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white pb-14 lg:pb-0">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Clearly Visible Florida Environment Background & Giant CTA */}
        <Hero />

        {/* Quick Credibility Trust Bar */}
        <TrustBar />

        {/* Core Specialized Services */}
        <Services />

        {/* Real Field Showcase / Authentic Photo Gallery */}
        <Gallery />

        {/* Why Choose Iguana Control Authority */}
        <WhyUs />

        {/* South Florida Service Areas & Dispatch Truck Coverage */}
        <ServiceAreas />

        {/* Verified Customer Reviews & Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Estimate Booking & Direct Contact Form with Social Links */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Call & Estimate Bar */}
      <StickyMobileBar />

      {/* Privacy & Cookie Consent */}
      <CookieConsent />
    </div>
  );
}

export default App;
