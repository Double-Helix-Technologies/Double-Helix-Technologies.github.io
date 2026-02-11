export interface ConsentPreferences {
  analytics: boolean;
}

export type ConsentStatus = 'pending' | 'accepted' | 'declined' | 'custom';

const CONSENT_COOKIE_NAME = 'dht_consent';
const CONSENT_COOKIE_MAX_AGE = 365 * 24 * 60 * 60;

function getConsentCookie(): string | null {
  if (typeof document === 'undefined') return null;
  
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === CONSENT_COOKIE_NAME) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

function setConsentCookie(value: string): void {
  if (typeof document === 'undefined') return;
  
  const isSecure = window.location.protocol === 'https:';
  const maxAge = CONSENT_COOKIE_MAX_AGE;
  
  document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(value)}; ` +
    `max-age=${maxAge}; ` +
    `path=/; ` +
    `SameSite=Lax${isSecure ? '; Secure' : ''}`;
}

function deleteConsentCookie(): void {
  if (typeof document === 'undefined') return;
  document.cookie = `${CONSENT_COOKIE_NAME}=; max-age=0; path=/; SameSite=Lax`;
}

function parseConsent(value: string): { status: ConsentStatus; preferences: ConsentPreferences } | null {
  try {
    const parsed = JSON.parse(value);
    return {
      status: parsed.status || 'pending',
      preferences: {
        analytics: parsed.preferences?.analytics ?? false,
      },
    };
  } catch {
    return null;
  }
}

function serializeConsent(status: ConsentStatus, preferences: ConsentPreferences): string {
  return JSON.stringify({ status, preferences });
}

export function getConsent(): { status: ConsentStatus; preferences: ConsentPreferences } | null {
  const cookieValue = getConsentCookie();
  if (!cookieValue) {
    return { status: 'pending', preferences: { analytics: false } };
  }
  
  const parsed = parseConsent(cookieValue);
  return parsed || { status: 'pending', preferences: { analytics: false } };
}

export function setConsent(preferences: ConsentPreferences): void {
  const status: ConsentStatus = 
    preferences.analytics ? 'accepted' : 'declined';
  
  const serialized = serializeConsent(status, preferences);
  setConsentCookie(serialized);
  updateConsentMode(preferences);
}

export function setCustomConsent(preferences: ConsentPreferences): void {
  const serialized = serializeConsent('custom', preferences);
  setConsentCookie(serialized);
  updateConsentMode(preferences);
}

export function resetConsent(): void {
  deleteConsentCookie();
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }
}

function disableGA4(): void {
  if (typeof window === 'undefined') return;
  
  if (window.gtag) {
    try {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    } catch (e) {}
  }
  
  const script = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
  if (script) {
    script.remove();
  }
  
  if (window.dataLayer) {
    window.dataLayer.length = 0;
  }
  
  window.gtag = function() {};
}

function updateConsentMode(preferences: ConsentPreferences): void {
  if (typeof window === 'undefined') return;
  
  if (!preferences.analytics) {
    disableGA4();
    return;
  }
  
  if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }
}

export function clearAnalyticsCookies(): void {
  if (typeof document === 'undefined') return;
  const cookiesToClear = ['_ga', '_ga_', '_gid', '_gat', '_gat_gtag_'];
  document.cookie.split(';').forEach((cookie) => {
    const cookieName = cookie.split('=')[0].trim();
    cookiesToClear.forEach((prefix) => {
      if (cookieName.startsWith(prefix)) {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
        const domainParts = window.location.hostname.split('.');
        if (domainParts.length > 1) {
          const rootDomain = '.' + domainParts.slice(-2).join('.');
          document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${rootDomain};`;
        }
      }
    });
  });
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
