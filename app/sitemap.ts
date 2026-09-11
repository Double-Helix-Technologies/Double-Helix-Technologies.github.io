import type { MetadataRoute } from 'next';
import { getServicePath, servicesContents } from './data/services';
import { clientSolutions, getClientSolutionPath, getProductPath, products } from './data/work';
import { absoluteUrl } from './lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/events/',
    '/solutions/custom-ai-software-life-sciences/',
    '/team/',
    '/operational-flow-risk-assessment/',
    '/work/'
  ];

  const serviceRoutes = servicesContents.map((service) => getServicePath(service));
  const clientSolutionRoutes = clientSolutions.map((solution) => getClientSolutionPath(solution));
  const productRoutes = products.map((product) => getProductPath(product));

  return [...staticRoutes, ...serviceRoutes, ...clientSolutionRoutes, ...productRoutes].map((route) => ({
    url: absoluteUrl(route),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7
  }));
}
