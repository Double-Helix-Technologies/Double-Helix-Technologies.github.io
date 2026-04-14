import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { ConsentProvider } from './components/ConsentProvider';
import CookieBanner from './components/CookieBanner';
import CookiePreferencesModal from './components/CookiePreferencesModal';
import GA4Script from './components/GA4Script';
import { absoluteUrl, organizationSchema, siteConfig, websiteSchema } from './lib/seo';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter'
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit'
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
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage)
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.defaultTitle}`,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)]
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
    <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
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
