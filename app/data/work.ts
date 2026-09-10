export type ClientSolutionStatus = 'completed' | 'ongoing';
export type ProductStatus = 'live' | 'pilot' | 'in-development';
export type WorkTag = 'for clients' | 'Our products';

export interface Customer {
  name: string;
  href: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
}

export const customers: Customer[] = [
  {
    name: 'Eurofins Genomics',
    href: 'https://eurofinsgenomics.com/en/home/',
    logo: '/images/customers/eurofins-genomics.svg',
    logoWidth: 567,
    logoHeight: 213
  },
  {
    name: 'Lifespin',
    href: 'https://lifespin.health/',
    logo: '/images/customers/lifespin.svg',
    logoWidth: 773,
    logoHeight: 240
  },
  {
    name: 'Onyx Biotech',
    href: 'https://www.onyx-biotech.com/',
    logo: '/images/customers/onyx-biotech.png',
    logoWidth: 800,
    logoHeight: 315
  },
  {
    name: 'Mainos',
    href: 'https://www.mainos.lv/lv',
    logo: '/images/customers/mainos.svg',
    logoWidth: 2613,
    logoHeight: 392
  },
  {
    name: 'Krafthub',
    href: 'https://www.krafthub.ai/en',
    logo: '/images/customers/krafthub.svg',
    logoWidth: 620,
    logoHeight: 140
  }
];

export interface HighlightStat {
  value: string;
  label: string;
  detail: string;
}

export interface ClientSolution {
  slug: string;
  title: string;
  summary: string;
  preview: string;
  previewOutcome: string;
  sector: string;
  status: ClientSolutionStatus;
  primaryCategory: string;
  supportingThemes: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  problem: string;
  approach: string;
  dataFlow: string;
  users: string[];
  whatWasDelivered: string[];
  outcomes: string[];
  highlightStats: HighlightStat[];
  relatedServiceSlugs: string[];
}

export interface Product {
  slug: string;
  name: string;
  summary: string;
  preview: string;
  previewState: string;
  category: string;
  status: ProductStatus;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  audience: string;
  jobToBeDone: string;
  positioning: string;
  capabilities: string[];
  differentiators: string[];
  markets: string[];
  ctaLabel: string;
  ctaHref: string;
  currentStage: string;
}

export const clientSolutions: ClientSolution[] = [
  {
    slug: 'sanger-ngs-data-delivery-pipeline-automation',
    title: 'Sanger and NGS data delivery pipeline automation',
    summary:
      'A delivery example from high-throughput sequencing operations where manual data delivery, fragmented systems, and limited workflow visibility were replaced with a more automated and transparent pipeline.',
    preview:
      'Manual sequencing data delivery was turned into a clearer, more automated pipeline with better visibility across project and delivery status.',
    previewOutcome:
      '50% of customer care capacity freed by removing manual delivery work.',
    sector: 'High-throughput sequencing operations',
    status: 'completed',
    primaryCategory: 'Workflow automation',
    supportingThemes: [
      'Sample Management System',
      'LIMS integration',
      'Bioinformatics workflow',
      'Single source of truth'
    ],
    seo: {
      title: 'Sanger and NGS data delivery pipeline automation case study',
      description:
        'See how Double Helix automated Sanger and NGS data delivery with a custom Sample Management System, LIMS integration, flexible delivery endpoints, and a 50% customer care capacity gain.',
      keywords: [
        'sequencing workflow automation',
        'NGS data delivery pipeline',
        'Sanger sequencing automation',
        'Sample Management System',
        'LIMS integration',
        'bioinformatics workflow automation'
      ]
    },
    problem:
      'Sequencing data delivery was handled through manual steps, command-line work, fragmented systems, and poor visibility into delivery status. Teams could not reliably track what had already been delivered, what was waiting on bioinformatics steps, or how to handle the delivery technicalities efficiently for each customer setup.',
    approach:
      'Double Helix first mapped the current-state process in detail, then designed the target workflow and executed the change stage by stage. The implementation combined workflow automation, a custom Sample Management System, LIMS integration, and the necessary bioinformatics handoffs to make sequencing data delivery more reliable and easier to understand.',
    dataFlow:
      'Instead of relying on a fixed FTP-style delivery pattern, sequencing data could be routed to a more flexible endpoint based on the project setup. That could be customer-managed storage, service-provider storage, cloud-based destinations, or even FTP when it was still required. The technical complexity stayed in the delivery pipeline so customers could benefit from a better-fit infrastructure setup without extra manual coordination.',
    users: ['Project managers', 'Customer care team', 'Bioinformatics team'],
    whatWasDelivered: [
      'Full current-state process mapping for Sanger and NGS data delivery',
      'Future-state workflow design with stage-by-stage rollout planning',
      'Custom Sample Management System integrated with LIMS',
      'Automation for delivery routing and visibility across the pipeline',
      'Operational alignment with bioinformatics steps required for secondary analysis'
    ],
    outcomes: [
      '50% of customer care team capacity freed from manual data delivery work',
      'Single source of truth for project and delivery state across teams',
      'Faster response to client enquiries because delivery status became easier to understand',
      'Lower reliance on manual command-line execution and fragmented handoffs'
    ],
    highlightStats: [
      {
        value: '50%',
        label: 'customer care capacity freed',
        detail: 'Manual delivery work was removed so the team could focus on calls, enquiries, and issue resolution.'
      },
      {
        value: 'Flexible',
        label: 'delivery endpoints supported',
        detail: 'Data could be delivered to the endpoint that best fit the customer and infrastructure setup.'
      },
      {
        value: 'Shared',
        label: 'delivery visibility across teams',
        detail: 'Project managers and customer care gained clearer visibility into current delivery status.'
      }
    ],
    relatedServiceSlugs: [
      'system-integrations',
      'custom-software-development',
      'operational-workflow-risk-assessment'
    ]
  }
];

export const products: Product[] = [
  {
    slug: 'tiltera',
    name: 'Tiltera',
    summary:
      'AI-assisted mental health practice software that helps therapists and clinics run care more smoothly while helping clients stay engaged, supported, and informed between sessions.',
    preview:
      'A shared therapy workspace that helps clients stay engaged between sessions while giving therapists and clinics better structure, context, and operational clarity.',
    previewState:
      'In development, with prototype walkthroughs and early access conversations available.',
    category: 'AI-assisted mental health practice software',
    status: 'in-development',
    seo: {
      title: 'Tiltera: AI-Assisted Mental Health Practice Software',
      description:
        'Tiltera is AI-assisted mental health practice software for therapists, clinics, and clients that supports homework, progress tracking, continuity of care, and clinic operations.',
      keywords: [
        'mental health practice software',
        'therapy practice management software',
        'continuity of care software',
        'AI-assisted therapist software',
        'mental health clinic software',
        'therapy homework tracking',
        'therapy progress tracking',
        'therapist scheduling and invoicing software'
      ]
    },
    audience:
      'Therapists and clinics that want a better day-to-day system for care delivery, and clients who need therapy to stay useful, structured, and understandable between sessions.',
    jobToBeDone:
      'Help therapy continue beyond the session by giving clients clear follow-through, reminders, and progress context while giving therapists and clinics one place to manage care operations.',
    positioning:
      'Tiltera helps clients carry therapy forward between sessions, gives therapists an all-in-one desk for care delivery, and gives clinics clearer operational visibility across the practice.',
    capabilities: [
      'Client and therapist matching to improve fit at the start of care',
      'Homework assignment, reminders, and follow-through support between sessions',
      'Automatic client-file population, therapist notes, and personal notes in one workspace',
      'Scheduling, invoicing, and AI-assisted support for therapist workflow and client progress'
    ],
    differentiators: [
      'It helps clients remember what to do, understand their progress, and keep therapy feeling useful between sessions',
      'It helps preserve context if a client wants or needs to switch therapists',
      'It gives clinics better visibility into therapist load, feedback, and the operational state of care delivery',
      'It combines treatment workflow, notes, homework, scheduling, and invoicing in one therapist workspace'
    ],
    markets: ['DACH', 'BeNeLux', 'USA'],
    ctaLabel: 'Join early access',
    ctaHref: '/#contact',
    currentStage:
      'Currently in development, with prototype walkthroughs and early access conversations available.'
  }
];

export function getClientSolutionPath(solution: ClientSolution) {
  return `/work/${solution.slug}/`;
}

export function getProductPath(product: Product) {
  return `/work/${product.slug}/`;
}

export function getClientSolutionBySlug(slug: string) {
  return clientSolutions.find((solution) => solution.slug === slug);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export interface WorkListItem {
  slug: string;
  tag: WorkTag;
  title: string;
  preview: string;
  metaLabel: string;
  metaValue: string;
  path: string;
}

export function getWorkListItems(): WorkListItem[] {
  return [
    ...clientSolutions.map((solution) => ({
      slug: solution.slug,
      tag: 'for clients' as const,
      title: solution.title,
      preview: solution.preview,
      metaLabel: 'Outcome',
      metaValue: solution.previewOutcome,
      path: getClientSolutionPath(solution)
    })),
    ...products.map((product) => ({
      slug: product.slug,
      tag: 'Our products' as const,
      title: product.name,
      preview: product.preview,
      metaLabel: 'Availability',
      metaValue: product.previewState,
      path: getProductPath(product)
    }))
  ];
}

export type WorkEntry =
  | { kind: 'client-solution'; data: ClientSolution }
  | { kind: 'product'; data: Product };

export function getAllWorkSlugs() {
  return [...clientSolutions.map((solution) => solution.slug), ...products.map((product) => product.slug)];
}

export function getWorkEntryBySlug(slug: string): WorkEntry | undefined {
  const solution = getClientSolutionBySlug(slug);
  if (solution) {
    return { kind: 'client-solution', data: solution };
  }

  const product = getProductBySlug(slug);
  if (product) {
    return { kind: 'product', data: product };
  }

  return undefined;
}
