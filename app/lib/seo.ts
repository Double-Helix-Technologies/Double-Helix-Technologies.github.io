import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Double Helix Technologies',
  legalName: 'Double Helix Technologies SIA',
  url: 'https://doublehelix.dev',
  defaultTitle: 'Life Sciences & Healthcare IT Services',
  description:
    'Double Helix Technologies helps life sciences and healthcare teams deliver custom software, system integrations, and practical AI solutions for regulated workflows.',
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
  'custom AI software solutions',
  'system integrations',
  'data flow bottlenecks',
  'single source of truth',
  'AI adoption solutions',
  'operational workflow optimization',
  'healthcare software consulting',
  'life sciences software consulting',
  'ISO 9001 and ISO 27001 certification',
  'ISO 9001 / ISO 27001 certified',
  'quality management and information security'
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
  areaServed: ['Europe', 'Germany', 'Austria', 'Belgium', 'Switzerland', 'Netherlands', 'United States'],
  sameAs: ['https://www.linkedin.com/company/double-helix-technologies'],
  knowsAbout: [
    'Custom software development for life sciences and healthcare',
    'Custom AI software solutions for life sciences and healthcare',
    'System integrations and data flow optimization',
    'AI adoption solutions for operational workflows',
    'ISO 9001 and ISO 27001 certification in progress',
    'Quality management and information security for regulated software delivery'
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

export function buildOfferCatalogSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Life Sciences & Healthcare IT Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Software Development for Life Sciences & Healthcare',
          description:
            'Custom software design, modernization, scalable architecture and infrastructure delivery for life sciences and healthcare organizations.',
          url: absoluteUrl('/services/custom-software-development/')
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'System Integrations & Data Flow Optimization',
          description:
            'System integrations that reduce manual handoffs, remove data bottlenecks, and establish a single source of truth.',
          url: absoluteUrl('/services/system-integrations/')
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom AI Solutions for Life Sciences & Healthcare',
          description:
            'Practical AI solution design, governance, and rollout planning for regulated operational environments.',
          url: absoluteUrl('/services/ai-adoption-solutions/')
        }
      }
    ]
  };
}
