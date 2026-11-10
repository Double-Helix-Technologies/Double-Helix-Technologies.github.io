import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ReactNode } from 'react';
import { ConsentProvider } from './components/ConsentProvider';
import CookieBanner from './components/CookieBanner';
import CookiePreferencesModal from './components/CookiePreferencesModal';
import GA4Script from './components/GA4Script';
import { absoluteUrl, ogImage, organizationSchema, siteConfig, twitterCard, websiteSchema } from './lib/seo';

/**
 * Inter and Outfit, self-hosted from the @fontsource 5.3.0 packages (SIL Open Font License, see
 * the LICENSE files in `app/fonts/`). Replaces next/font/google, which fails under Turbopack in Next.js 16.4.2
 * ("next/font/google queries have exactly one entry") and needed Google Fonts at build time.
 * Each typeface has two families: latin, preloaded, and latin-ext for Latvian and other accented
 * letters, split by the same unicode-range values Google Fonts uses, so the browser downloads
 * latin-ext only for pages that need it. `globals.css` chains them into --font-inter and
 * --font-outfit on <body>. The latin families have no generated fallback: an Arial fallback there
 * would also cover accented letters and stop the browser reaching latin-ext. The latin-ext
 * families keep theirs, which then serves as the metric-matched fallback for the whole chain.
 * next/font only accepts literal options, hence the repeated ranges.
 */
const interLatin = localFont({
  src: [
    { path: './fonts/inter/inter-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/inter/inter-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/inter/inter-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: './fonts/inter/inter-latin-700-normal.woff2', weight: '700', style: 'normal' }
  ],
  variable: '--font-inter-latin',
  declarations: [{ prop: 'unicode-range', value: 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD' }],
  adjustFontFallback: false,
  display: 'swap',
  preload: true
});

const interLatinExt = localFont({
  src: [
    { path: './fonts/inter/inter-latin-ext-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/inter/inter-latin-ext-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/inter/inter-latin-ext-600-normal.woff2', weight: '600', style: 'normal' },
    { path: './fonts/inter/inter-latin-ext-700-normal.woff2', weight: '700', style: 'normal' }
  ],
  variable: '--font-inter-latin-ext',
  declarations: [{ prop: 'unicode-range', value: 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF' }],
  display: 'swap',
  preload: false
});

const outfitLatin = localFont({
  src: [
    { path: './fonts/outfit/outfit-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/outfit/outfit-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/outfit/outfit-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: './fonts/outfit/outfit-latin-700-normal.woff2', weight: '700', style: 'normal' }
  ],
  variable: '--font-outfit-latin',
  declarations: [{ prop: 'unicode-range', value: 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD' }],
  adjustFontFallback: false,
  display: 'swap',
  preload: true
});

const outfitLatinExt = localFont({
  src: [
    { path: './fonts/outfit/outfit-latin-ext-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/outfit/outfit-latin-ext-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/outfit/outfit-latin-ext-600-normal.woff2', weight: '600', style: 'normal' },
    { path: './fonts/outfit/outfit-latin-ext-700-normal.woff2', weight: '700', style: 'normal' }
  ],
  variable: '--font-outfit-latin-ext',
  declarations: [{ prop: 'unicode-range', value: 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF' }],
  display: 'swap',
  preload: false
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.defaultTitle}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  alternates: {
    canonical: absoluteUrl('/')
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.defaultTitle}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [ogImage]
  },
  twitter: {
    card: twitterCard,
    title: `${siteConfig.name} | ${siteConfig.defaultTitle}`,
    description: siteConfig.description,
    images: [ogImage.url]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
    <head>
      <link rel="icon" href="/images/favicon.ico" sizes="any"/>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script dangerouslySetInnerHTML={{
        __html: `
            (function() {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
              try {
                const consentCookie = document.cookie.split(';').find(c => c.trim().startsWith('dht_consent='));
                if (consentCookie) {
                  const consentValue = decodeURIComponent(consentCookie.split('=')[1]);
                  const consent = JSON.parse(consentValue);
                  if (consent.preferences && consent.preferences.analytics) {
                    gtag('consent', 'update', {
                      'analytics_storage': 'granted'
                    });
                  }
                }
              } catch (e) {}
            })();
          `
      }}/>
      <script dangerouslySetInnerHTML={{
        __html: `
            (function() {
              try {
                const themeStorage = localStorage.getItem('theme');
                const isDarkSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if ((themeStorage && themeStorage === 'dark') || (!themeStorage && isDarkSystem)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {
                console.error(e);
              }
            })();
          `
      }}/>
    </head>
    <body
      className={`${interLatin.variable} ${interLatinExt.variable} ${outfitLatin.variable} ${outfitLatinExt.variable} font-sans antialiased`}
    >
      <ConsentProvider>
        <CookieBanner />
        <CookiePreferencesModal />
        <GA4Script />
        {children}
      </ConsentProvider>
    </body>
    </html>
  );
}
