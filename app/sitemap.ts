import type { MetadataRoute } from 'next';
import { caseStudies } from './data/caseStudies';
import { servicesContents } from './data/services';
import { absoluteUrl } from './lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/about/',
    '/team/',
    '/operational-flow-risk-assessment/'
  ];

  const serviceRoutes = servicesContents.map((service) => `/services/${service.key}/`);
  const caseStudyRoutes = caseStudies.map((study) => `/case-studies/${study.slug}/`);

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes].map((route) => ({
    url: absoluteUrl(route),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7
  }));
}
