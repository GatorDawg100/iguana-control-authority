import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ThreatEducation } from './components/ThreatEducation';
import { Services } from './components/Services';
import { AssessmentCalculator } from './components/AssessmentCalculator';
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white pb-14 lg:pb-0">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Quick Credibility Trust Bar */}
        <TrustBar />

        {/* Why Green Iguanas Are a Costly Threat (Educational & Legal Guidance) */}
        <ThreatEducation />

        {/* Core Specialized Services */}
        <Services />

        {/* Interactive Property Assessment & Cost Guidance Calculator */}
        <AssessmentCalculator />

        {/* Real Field Showcase / Authentic Photo Gallery */}
        <Gallery />

        {/* Why Choose Iguana Control Authority & Avi Ezra */}
        <WhyUs />

        {/* South Florida Service Areas & Dispatch Truck Coverage */}
        <ServiceAreas />

        {/* Verified Customer Reviews & Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Estimate Booking & Direct Contact Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Call & Estimate Bar */}
      <StickyMobileBar />

      {/* Privacy Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

export default App;
