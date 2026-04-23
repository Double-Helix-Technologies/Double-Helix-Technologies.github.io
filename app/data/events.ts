export type EventParticipationStatus = 'upcoming' | 'past';

export type EventParticipation = {
  slug: string;
  name: string;
  status: EventParticipationStatus;
  startDate: string;
  endDate?: string;
  city: string;
  country: string;
  venue?: string;
  summary: string;
  focus: string;
  ctaLabel?: string;
  ctaHref?: string;
  externalEventUrl?: string;
};

export const eventParticipation: EventParticipation[] = [
  {
    slug: 'health-tech-global-summit-2026',
    name: 'health.tech global summit 2026',
    status: 'past',
    startDate: '2026-03-03',
    endDate: '2026-03-05',
    city: 'Basel',
    country: 'Switzerland',
    venue: 'Messe Basel',
    summary:
      'A health technology summit focused on moving from insight to action across health systems, pharma, startups, public sector, and academia.',
    focus: 'Practical AI, healthtech execution, and care workflow modernization.',
    ctaLabel: 'View event',
    ctaHref: 'https://www.health.tech/focus-2026',
    externalEventUrl: 'https://www.health.tech/focus-2026'
  },
  {
    slug: 'whx-dubai-2026',
    name: 'WHX Dubai 2026',
    status: 'past',
    startDate: '2026-02-09',
    endDate: '2026-02-12',
    city: 'Dubai',
    country: 'United Arab Emirates',
    venue: 'Dubai Exhibition Centre',
    summary:
      'World Health Expo Dubai, formerly Arab Health, brought together the healthcare, medical, scientific, diagnostics, digital health, infrastructure, and wellness ecosystem.',
    focus: 'Healthcare technology, regional partnerships, and digital health priorities.',
    ctaLabel: 'View event',
    ctaHref: 'https://www.dubaiexhibitioncentre.com/en/whats-on/whx-dubai-2026',
    externalEventUrl: 'https://www.dubaiexhibitioncentre.com/en/whats-on/whx-dubai-2026'
  },
  {
    slug: 'swiss-biotech-day-2026',
    name: 'Swiss Biotech Day 2026',
    status: 'upcoming',
    startDate: '2026-05-04',
    endDate: '2026-05-05',
    city: 'Basel',
    country: 'Switzerland',
    venue: 'Messe Basel',
    summary:
      'A leading biotechnology conference for life sciences professionals, international collaboration, partnering, R&D, manufacturing, data management, AI, and innovative financing.',
    focus: 'Biotech partnerships, data management, AI, and operational workflow conversations.',
    ctaLabel: 'View event',
    ctaHref: 'https://www.swissbiotech.org/event/swiss-biotech-day/',
    externalEventUrl: 'https://www.swissbiotech.org/event/swiss-biotech-day/'
  },
  {
    slug: 'hlth-europe-2026',
    name: 'HLTH Europe 2026',
    status: 'upcoming',
    startDate: '2026-06-15',
    endDate: '2026-06-18',
    city: 'Amsterdam',
    country: 'Netherlands',
    venue: 'RAI Convention Centre',
    summary:
      'A major European healthcare innovation event connecting healthcare leaders, providers, pharma and life sciences teams, startups, investors, and technology partners.',
    focus: 'Healthcare innovation, interoperability, AI, and digital transformation.',
    ctaLabel: 'View event',
    ctaHref: 'https://hlth.com/events/europe/',
    externalEventUrl: 'https://hlth.com/events/europe/'
  },
  {
    slug: 'global-innovation-summit-2026',
    name: 'Global Innovation Summit 2026',
    status: 'upcoming',
    startDate: '2026-05-06',
    city: 'Basel',
    country: 'Switzerland',
    venue: 'Messe Basel',
    summary:
      'A one-day international innovation event held back-to-back with Swiss Biotech Day, focused on collaborative innovation projects, biotech, enabling technologies, and funding opportunities across Eureka countries.',
    focus: 'International innovation partnerships, funding, and enabling technologies.',
    ctaLabel: 'View event',
    ctaHref: 'https://www.b2match.com/e/global-innovation-summit-2026',
    externalEventUrl: 'https://www.b2match.com/e/global-innovation-summit-2026'
  }
];

export function formatEventDate(event: Pick<EventParticipation, 'startDate' | 'endDate'>) {
  const dateFormatter = new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const start = new Date(event.startDate);

  if (!event.endDate || event.endDate === event.startDate) {
    return dateFormatter.format(start);
  }

  const end = new Date(event.endDate);
  return `${dateFormatter.format(start)} - ${dateFormatter.format(end)}`;
}
