import { execFileSync } from 'node:child_process';
import type { MetadataRoute } from 'next';
import { getServicePath, servicesContents } from './data/services';
import { clientSolutions, getClientSolutionPath, getProductPath, products } from './data/work';
import { absoluteUrl } from './lib/seo';

export const dynamic = 'force-static';

/**
 * Last-modified date for a route: the date of the last commit that touched the files the route is
 * rendered from (page, components and data). Read from git at build time; if git is not available
 * or the files have no history the date is omitted rather than invented. On a shallow clone (the
 * default for actions/checkout) every date collapses to the deploy commit, which is why the
 * deployment workflow checks out the full history.
 */
function lastCommitDate(paths: string[]): Date | undefined {
  try {
    const output = execFileSync('git', ['log', '-1', '--format=%cI', '--', ...paths], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim();
    return output ? new Date(output) : undefined;
  } catch {
    return undefined;
  }
}

/** Files the homepage is rendered from, beyond app/page.tsx. */
const HOMEPAGE_SOURCES = [
  'app/page.tsx',
  'app/components',
  'app/data/work.ts',
  'app/data/services.ts',
  'app/data/team.ts',
  'app/data/partners.ts',
  'app/lib/seo.ts'
];

const STATIC_ROUTE_SOURCES: Record<string, string[]> = {
  '/': HOMEPAGE_SOURCES,
  '/events/': ['app/events', 'app/data/events.ts'],
  '/solutions/custom-ai-software-life-sciences/': ['app/solutions'],
  '/team/': ['app/team', 'app/data/team.ts', 'app/data/partners.ts', 'app/components/ComplianceNotice.tsx'],
  '/operational-flow-risk-assessment/': ['app/operational-flow-risk-assessment'],
  '/work/': ['app/work/page.tsx', 'app/work/WorkShowcase.tsx', 'app/data/work.ts']
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = Object.entries(STATIC_ROUTE_SOURCES).map(([route, sources]) => ({
    route,
    lastModified: lastCommitDate(sources)
  }));

  const servicesModified = lastCommitDate(['app/services', 'app/data/services.ts']);
  const workModified = lastCommitDate(['app/work/[slug]', 'app/data/work.ts']);

  const serviceEntries = servicesContents.map((service) => ({ route: getServicePath(service), lastModified: servicesModified }));
  const clientSolutionEntries = clientSolutions.map((solution) => ({ route: getClientSolutionPath(solution), lastModified: workModified }));
  const productEntries = products.map((product) => ({ route: getProductPath(product), lastModified: workModified }));

  return [...staticEntries, ...serviceEntries, ...clientSolutionEntries, ...productEntries].map(({ route, lastModified }) => ({
    url: absoluteUrl(route),
    ...(lastModified ? { lastModified } : {}),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7
  }));
}
