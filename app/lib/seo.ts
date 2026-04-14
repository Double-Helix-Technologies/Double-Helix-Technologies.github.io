import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Double Helix Technologies',
  legalName: 'Double Helix Technologies SIA',
  url: 'https://doublehelix.dev',
  defaultTitle: 'Life Sciences & Healthcare IT Services',
  description:
    'Double Helix Technologies helps life sciences and healthcare teams improve operations with custom software development, system integrations, and practical AI adoption solutions.',
  ogImage: '/images/logo.png',
  email: 'hello@doublehelix.dev',
  phone: '+37129636428',
  address: {
    streetAddress: 'Bauskas iela 203 - 35',
    addressLocality: 'Riga',
    addressCountry: 'LV'
  }
} as const;

const defaultKeywords = [
  'life sciences IT services',
  'healthcare IT services',
  'custom software development',
  'system integrations',
  'data flow bottlenecks',
  'single source of truth',
  'AI adoption solutions',
  'operational workflow optimization',
  'healthcare software consulting',
  'life sciences software consulting'
];

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}

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
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage)
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl(siteConfig.ogImage)]
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
    addressCountry: siteConfig.address.addressCountry
  },
  areaServed: ['Europe', 'United States'],
  knowsAbout: [
    'Custom software development for life sciences and healthcare',
    'System integrations and data flow optimization',
    'AI adoption solutions for operational workflows'
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
