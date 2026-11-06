/**
 * Analytics & Tracking Module for Iguana Control Authority
 * Supports Google Analytics 4 (GA4), Google Tag Manager dataLayer,
 * and user consent management.
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Default GA4 Measurement ID (Can be replaced with real client ID)
export const DEFAULT_GA_ID = 'G-ICAFLORIDA1';

export function initGA(id: string = DEFAULT_GA_ID) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', id, {
    send_page_view: true,
    anonymize_ip: true,
  });

  // Inject GA script if not already present
  if (!document.getElementById('ga-script')) {
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);
  }
}

export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }

    // Also push to standard dataLayer for GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: action,
      category,
      label,
      value,
      timestamp: new Date().toISOString(),
    });

    console.log(`[Analytics Event] ${action} (${category}):`, label ?? '');
  }
}

export function trackPhoneCall(sourceLocation: string) {
  trackEvent('phone_call_click', 'Lead Generation', `Called from: ${sourceLocation}`);
}

export function trackSms(sourceLocation: string) {
  trackEvent('sms_click', 'Lead Generation', `Texted from: ${sourceLocation}`);
}

export function trackFormSubmission(serviceType: string, county: string) {
  trackEvent('estimate_form_submitted', 'Conversions', `${serviceType} in ${county}`);
}

export function trackAssessmentCompleted(propertyType: string, severity: string) {
  trackEvent('assessment_calculator_complete', 'Engagement', `${propertyType} - ${severity}`);
}

export function trackServiceView(serviceName: string) {
  trackEvent('service_view', 'Content', serviceName);
}
