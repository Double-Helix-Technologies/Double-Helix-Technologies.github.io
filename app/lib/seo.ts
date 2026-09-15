import type { Metadata } from 'next';
import { getServicePath, servicesContents } from '../data/services';
import { siteKeywords } from './keywords';

export const siteConfig = {
  name: 'Double Helix Technologies',
  legalName: 'Double Helix Technologies SIA',
  url: 'https://doublehelix.dev',
  // Site-wide fallbacks, aligned with the homepage headline and sub line (15 September 2026).
  defaultTitle: 'Custom Software and System Integrations for Life Sciences and Healthcare',
  description:
    'Double Helix Technologies builds custom software and system integrations for life sciences and healthcare operations in Europe and North America.',
  ogImage: '/images/logo.png',
  email: 'hello@doublehelix.dev',
  phone: '+37129636428',
  /**
   * Consultation booking. Wording must match the booking page, which on 14 September 2026 offered
   * "Let's meet" as a 30, 45 or 60 minute Google Meet call and nothing else.
   */
  booking: {
    url: 'https://cal.com/aleksandrs-gusevs/let-s-meet',
    durationLabel: '30 to 60 minutes',
    channel: 'Google Meet'
  },
  // Registered office, confirmed by the owner on 14 September 2026 against the Register of Enterprises.
  address: {
    streetAddress: 'Lastādijas iela 12 k-3',
    addressLocality: 'Riga',
    postalCode: 'LV-1050',
    addressCountry: 'LV'
  }
} as const;

/**
 * Site-wide keywords, added to every page. The library they come from, and the reasoning behind
 * the targets, are in `app/lib/keywords.ts` and `docs/keyword-targeting.md`.
 */
const defaultKeywords = siteKeywords;


export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}

/**
 * Social preview image. `logo.png` is 1244 by 1300, so the Twitter card is `summary` (square
 * image beside the text); `summary_large_image` expects about 2:1 and would crop the mark.
 * OWNER: a purpose-made 1200 by 630 image with the headline would preview better on LinkedIn.
 */
export const ogImage = {
  url: absoluteUrl('/images/logo.png'),
  width: 1244,
  height: 1300,
  alt: 'Double Helix Technologies logo'
};
export const twitterCard = 'summary' as const;

type MetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  type?: 'website' | 'article';
};

export function buildMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  noIndex = false,
  type = 'website'
}: MetadataOptions): Metadata {
  return {
    title,
    description,
    keywords: Array.from(new Set([...defaultKeywords, ...keywords])),
    alternates: {
      canonical: absoluteUrl(path)
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: 'en_US',
      type,
      images: [ogImage]
    },
    twitter: {
      card: twitterCard,
      title,
      description,
      images: [ogImage.url]
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false
          }
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1
          }
        }
  };
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl(siteConfig.ogImage),
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry
  },
  areaServed: ['Europe', 'Germany', 'Austria', 'Belgium', 'Switzerland', 'Netherlands', 'United States'],
  sameAs: ['https://www.linkedin.com/company/double-helix-technologies'],
  knowsAbout: [
    'Custom software development for life sciences and healthcare',
    'System integrations and data flow optimization, including LIMS, ERP and e-commerce integration',
    'Laboratory workflow automation and NGS data delivery',
    'Customer integration and API onboarding',
    'Observability, workflow monitoring and site reliability engineering',
    'Operational workflow risk assessment',
    'Custom AI solutions and AI governance readiness for regulated operations',
    'ISO 9001 and ISO 27001 certification in progress'
  ]
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: 'en'
};

export const workPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Delivered Client Solutions & Our Products',
  description:
    'Client solutions and software products from Double Helix Technologies, spanning workflow automation, systems integration, and AI-assisted care software.',
  url: absoluteUrl('/work/')
};

export function buildBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function buildFAQSchema(items: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}

/** All services from `app/data/services.ts`, so the catalogue cannot drift from the pages. */
export function buildOfferCatalogSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Services for life sciences and healthcare operations',
    itemListElement: servicesContents.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        url: absoluteUrl(getServicePath(service))
      }
    }))
  };
}
