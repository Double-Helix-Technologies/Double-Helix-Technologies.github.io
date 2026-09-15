import { complianceStatement } from '@/app/components/ComplianceNotice';
import { partners } from '@/app/data/partners';
import { getServicePath, servicesContents } from '@/app/data/services';
import { leadershipTeam } from '@/app/data/team';
import { clientSolutions, customers, getClientSolutionPath, getProductPath, products } from '@/app/data/work';
import { absoluteUrl, siteConfig } from '@/app/lib/seo';

export const dynamic = 'force-static';

/**
 * /llms.txt: a plain-text summary of the site for AI assistants and answer engines, after the
 * llmstxt.org convention (a Markdown file at the site root). Everything here is generated from the
 * same data files as the pages (`services.ts`, `work.ts`, `team.ts`, `partners.ts`, `seo.ts`), so
 * it cannot say anything the site does not say. Figures and quotes come from `work.ts` unchanged;
 * a client is named only where `client` is set; the ISO wording is the approved statement from
 * `ComplianceNotice.tsx`. Regenerated on every build.
 */

const HIDDEN_CUSTOMERS = new Set(['Lifespin', 'Onyx Biotech']); // same temporary exclusion as LogoMarquee

function caseEntry(solution: (typeof clientSolutions)[number]) {
  const headline = /[.!?]$/.test(solution.headline) ? solution.headline : `${solution.headline}.`;
  const who = solution.client ? `Client: ${solution.client.name}.` : `Sector: ${solution.sector}.`;
  const figures = solution.highlightStats.map((stat) => `${stat.value} ${stat.label}`).join('; ');
  return `- [${solution.title}](${absoluteUrl(getClientSolutionPath(solution))}): ${headline} ${who} ${solution.summary} Figures: ${figures}.`;
}

function buildLlmsTxt() {
  const named = customers.filter((customer) => !HIDDEN_CUSTOMERS.has(customer.name)).map((customer) => customer.name);
  const memberships = partners.filter((partner) => partner.kind === 'membership').map((partner) => partner.name);
  const commercialPartners = partners.filter((partner) => partner.kind === 'partner').map((partner) => partner.name);

  const sections = [
    `# ${siteConfig.name}`,
    '',
    `> ${siteConfig.name} (${siteConfig.legalName}) builds custom software and system integrations for life sciences and healthcare operations in Europe and North America. Based in ${siteConfig.address.addressLocality}, Latvia. A team of around 20, led by the four people named below. Higher throughput and lower running costs are the outcomes the published client cases evidence.`,
    '',
    `Website: ${siteConfig.url}`,
    `Contact: ${siteConfig.email}, ${siteConfig.phone}. Free introductory call (${siteConfig.booking.durationLabel}, ${siteConfig.booking.channel}): ${siteConfig.booking.url}`,
    `Registered office: ${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.postalCode}, Latvia. Company details and legal notice: ${absoluteUrl('/notice/')}`,
    '',
    '## Services',
    '',
    ...servicesContents.map((service) => `- [${service.title}](${absoluteUrl(getServicePath(service))}): ${service.description}`),
    '',
    '## Client cases',
    '',
    `All figures below are the ones published on the case pages. Clients are named only where they have agreed to be named; other cases are described by sector.`,
    '',
    ...clientSolutions.map(caseEntry),
    '',
    `Overview of all work: ${absoluteUrl('/work/')}`,
    '',
    '## Products',
    '',
    ...products.map((product) => `- [${product.name}](${absoluteUrl(getProductPath(product))}): ${product.summary} (${product.category}; status: ${product.status.replace('-', ' ')})`),
    '',
    '## Customers and partners',
    '',
    `Customers named on the site: ${named.join(', ')}.`,
    `Memberships: ${memberships.join(', ')}.`,
    `Partners: ${commercialPartners.join(', ')}.`,
    '',
    '## Leadership',
    '',
    ...leadershipTeam.map((person) => `- ${person.name} ${person.lastName ?? ''}, ${person.role}. ${person.description}`.replace('  ', ' ')),
    '',
    `About the team: ${absoluteUrl('/team/')}`,
    '',
    '## Quality and information security',
    '',
    `${complianceStatement.heading} ${complianceStatement.body}`,
    '',
    '## Other pages',
    '',
    `- [Operational workflow risk assessment](${absoluteUrl('/operational-flow-risk-assessment/')})`,
    `- [Custom AI software for life sciences](${absoluteUrl('/solutions/custom-ai-software-life-sciences/')})`,
    `- [Events](${absoluteUrl('/events/')})`,
    `- [Privacy policy](${absoluteUrl('/privacy/')})`,
    `- [Terms](${absoluteUrl('/terms/')})`,
    `- [Sitemap](${absoluteUrl('/sitemap.xml')})`,
    ''
  ];

  return sections.join('\n');
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
