import { getConsent } from '@/app/lib/consent';

const GA4_MEASUREMENT_ID = 'G-N0NYCS4995';

function hasAnalyticsConsent(): boolean {
  const consent = getConsent();
  return consent?.preferences.analytics ?? false;
}

function ensureGA4Initialized(): void {
  if (!hasAnalyticsConsent()) {
    return;
  }
  
  const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`);
  if (window.gtag && existingScript && typeof window.gtag === 'function' && !window.gtag.toString().includes('function() {}')) {
    return;
  }
  
  if (existingScript) {
    existingScript.remove();
  }
  
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag || (typeof window.gtag === 'function' && window.gtag.toString() === 'function() {}')) {
    window.gtag = function(...args: any[]) {
      window.dataLayer!.push(args);
    };
  }
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  window.gtag('js', new Date());
  window.gtag('config', GA4_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  });
}

export function initializeGA4(): void {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) return;
  ensureGA4Initialized();
}

export function track(eventName: string, props?: Record<string, any>): void {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) return;
  if (!window.gtag) {
    ensureGA4Initialized();
    setTimeout(() => {
      if (window.gtag) {
        window.gtag('event', eventName, props || {});
      }
    }, 300);
    return;
  }
  window.gtag('event', eventName, props || {});
}

export function trackPageView(path: string): void {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) return;
  if (!window.gtag) {
    ensureGA4Initialized();
    setTimeout(() => {
      if (window.gtag) {
        window.gtag('config', GA4_MEASUREMENT_ID, {
          page_path: path,
        });
      }
    }, 300);
    return;
  }
  window.gtag('config', GA4_MEASUREMENT_ID, {
    page_path: path,
  });
}
