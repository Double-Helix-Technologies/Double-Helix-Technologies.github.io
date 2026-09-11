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

export interface ClientSolutionQuote {
  text: string;
  attribution?: string;
}

export interface ClientSolution {
  slug: string;
  title: string;
  headline: string;
  summary: string;
  preview: string;
  previewOutcome: string;
  tags: string[];
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
  approach?: string;
  dataFlow?: string;
  users: string[];
  whatWasDelivered: string[];
  outcomes: string[];
  highlightStats: HighlightStat[];
  relatedServiceSlugs: string[];
  quote?: ClientSolutionQuote;
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
    headline: '50% capacity freed',
    tags: ['Automation', 'Integration', 'LIMS'],
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
  },
  {
    slug: 'process-automation-lims-integration',
    title: 'Process automation & LIMS integration',
    headline: '7 data entry points → 1',
    tags: ['Automation', 'Integration', 'LIMS'],
    summary:
      'Connected LIMS, ERP, e-commerce and reporting systems, automated the workflow between them, and created one place to manage projects and samples.',
    preview:
      'Manual work across LIMS, ERP, e-commerce and reporting was slowing down project teams.',
    previewOutcome: '75% less order setup time · 50% team capacity freed up',
    sector: 'Life sciences services / LIMS operations',
    status: 'completed',
    primaryCategory: 'Workflow automation',
    supportingThemes: ['LIMS integration', 'ERP integration', 'E-commerce integration', 'Single source of truth'],
    seo: {
      title: 'Process Automation & LIMS Integration Case Study',
      description:
        'See how Double Helix connected LIMS, ERP, e-commerce and reporting systems to cut data entry points from 7 to 1 and free up 50% of team capacity.',
      keywords: [
        'LIMS integration case study',
        'process automation life sciences',
        'ERP LIMS integration',
        'workflow automation case study',
        'sample management automation'
      ]
    },
    problem:
      'Project managers and Customer Care teams were manually moving data between multiple systems. E-commerce, LIMS, ERP and reporting weren’t connected, and there was no single view of projects and samples.',
    users: ['Project managers', 'Customer Care team'],
    whatWasDelivered: [
      'Automated the process across the different systems',
      'Integrated LIMS with surrounding business systems',
      'Created a single overview for project managers and Customer Care',
      'Reduced the number of places where people had to enter the same data'
    ],
    outcomes: [
      '7 → 1 data entry points',
      '75% reduction in order setup time',
      'Project setup backlog reduced from 1 week to 1 day',
      '75% less time spent creating WIP reports',
      '50% of team capacity freed up for revenue-generating work'
    ],
    highlightStats: [
      {
        value: '7 → 1',
        label: 'data entry points',
        detail: 'The same data no longer needs to be entered separately across LIMS, ERP, e-commerce and reporting.'
      },
      {
        value: '75%',
        label: 'less order setup time',
        detail: 'Automating the workflow between systems removed most of the manual setup work per order.'
      },
      {
        value: '50%',
        label: 'team capacity freed up',
        detail: 'Time previously spent on manual data entry is now available for revenue-generating work.'
      }
    ],
    relatedServiceSlugs: ['system-integrations', 'operational-workflow-risk-assessment', 'custom-software-development']
  },
  {
    slug: 'ngs-data-delivery-automation',
    title: 'NGS data delivery automation',
    headline: '1.5 days → 3 hours',
    tags: ['Automation', 'Data', 'Cloud', 'Monitoring'],
    summary: 'Automated, monitored and auditable data delivery and archival, replacing manual command-line transfers.',
    preview: 'A critical data delivery process depended on people copying files through command-line tools.',
    previewOutcome: 'Delivery time cut from 1.5 days to 3 hours',
    sector: 'Genomics / NGS sequencing operations',
    status: 'completed',
    primaryCategory: 'Data pipeline automation',
    supportingThemes: ['Data delivery automation', 'Cloud storage tiering', 'Audit and approval workflow', 'Monitoring and alerting'],
    seo: {
      title: 'NGS Data Delivery Automation Case Study',
      description:
        'See how Double Helix automated NGS data delivery and archival, cutting delivery time from 1.5 days to 3 hours with monitoring and a 4-eyes approval step.',
      keywords: [
        'NGS data delivery automation',
        'genomics data pipeline automation',
        'sequencing data archival',
        'FASTQ delivery automation',
        'cloud storage tiering case study'
      ]
    },
    problem:
      'Data delivery was completely manual. FASTQ files were copied through command-line terminals, with frequent problems around disk space, stalled transfers and missing notifications. The process worked — until it didn’t.',
    users: ['Bioinformatics team', 'Operations team', 'Customer care team'],
    whatWasDelivered: [
      'Automated the entire data delivery workflow',
      'Added monitoring and notifications',
      'Added an auditable process with a 4-eyes approval step',
      'Automated data archival',
      'Used different cloud storage tiers depending on customer requirements'
    ],
    outcomes: [
      'Data delivery became fully automated',
      'Delivery time dropped from 1.5 days to 3 hours',
      'Data archival happens automatically',
      'Cloud storage can be optimized based on how frequently data is accessed'
    ],
    highlightStats: [
      {
        value: '3 hrs',
        label: 'delivery time',
        detail: 'Down from 1.5 days when files were copied manually through command-line tools.'
      },
      {
        value: 'Auditable',
        label: '4-eyes approval step',
        detail: 'Every delivery is monitored, notified and approved through a repeatable, auditable process.'
      },
      {
        value: 'Tiered',
        label: 'cloud storage',
        detail: 'Archival storage tier is chosen automatically based on customer requirements and access frequency.'
      }
    ],
    relatedServiceSlugs: ['system-integrations', 'observability-workflow-monitoring', 'custom-software-development']
  },
  {
    slug: 'customer-integration-api-onboarding',
    title: 'Customer integration & API onboarding',
    headline: 'Months → under 2 weeks',
    tags: ['APIs', 'Integration', 'Onboarding'],
    summary: 'Built a standard API and onboarding process connecting customer systems with the service provider’s LIMS.',
    preview: 'Every new customer integration was becoming its own project.',
    previewOutcome: 'Customer onboarding cut from months to under two weeks',
    sector: 'B2B life sciences platform integrations',
    status: 'completed',
    primaryCategory: 'API integration & onboarding',
    supportingThemes: ['Standardized APIs', 'Sample lifecycle visibility', 'Onboarding documentation', 'System monitoring'],
    seo: {
      title: 'Customer Integration & API Onboarding Case Study',
      description:
        'See how Double Helix built a standardized API and onboarding process that cut B2B customer onboarding from months to under two weeks.',
      keywords: [
        'API onboarding case study',
        'B2B LIMS integration',
        'customer integration automation',
        'sample lifecycle visibility',
        'standardized API integration'
      ]
    },
    problem:
      'B2B customers needed their systems connected to the service provider. Each integration was effectively a one-off, making onboarding slow and expensive. Customers also had little visibility into what was happening with their samples.',
    users: ['B2B customers', 'Integration engineering team', 'Customer success team'],
    whatWasDelivered: [
      'Built a standardized API between customer applications and LIMS',
      'Added visibility into the sample lifecycle',
      'Created a repeatable onboarding process',
      'Created documentation so new customers could be onboarded without reinventing the integration every time',
      'Added system monitoring to catch issues before customers did'
    ],
    outcomes: [
      'Customer onboarding reduced from several months to under 2 weeks',
      'Issues can be identified proactively',
      'Less project-management effort required',
      'Customers get visibility into their sample lifecycle'
    ],
    highlightStats: [
      {
        value: '<2 wks',
        label: 'customer onboarding',
        detail: 'Down from several months when every integration was built as a one-off project.'
      },
      {
        value: 'Standardized',
        label: 'API and onboarding process',
        detail: 'New customers are onboarded through a repeatable process instead of a bespoke integration.'
      },
      {
        value: 'Proactive',
        label: 'issue detection',
        detail: 'System monitoring surfaces problems before customers notice them.'
      }
    ],
    relatedServiceSlugs: ['system-integrations', 'custom-software-development', 'observability-workflow-monitoring']
  },
  {
    slug: 'forensics-integration',
    title: 'Forensics integration',
    headline: '2 years late. First to launch.',
    tags: ['MVP', 'Integration', 'Digitalization'],
    summary:
      'Built a new team, delivered an MVP integration and replaced email and paper-based workflows with a connected portal.',
    preview: 'A customer joined a major government digitalization initiative two years behind schedule.',
    previewOutcome: 'First to launch despite the late start',
    sector: 'Forensics / law enforcement digitalization',
    status: 'completed',
    primaryCategory: 'Digital transformation / systems integration',
    supportingThemes: ['Government digitalization initiative', 'Drug and DNA analysis workflow', 'Back-office portal', 'Secure information exchange'],
    seo: {
      title: 'Forensics Digitalization Integration Case Study',
      description:
        'See how Double Helix formed a new delivery team and launched an MVP integration that let a customer be first to launch in a national forensics digitalization initiative, two years behind schedule.',
      keywords: [
        'forensics digitalization case study',
        'law enforcement systems integration',
        'MVP integration case study',
        'DNA analysis workflow digitalization',
        'digital forensics portal'
      ]
    },
    problem:
      'Police, prosecution and forensic organizations were working together to move drug and DNA analysis workflows into a digital, paperless environment. Our customer joined the initiative two years late, putting the opportunity at risk.',
    users: ['Police', 'Prosecution', 'Forensic laboratory staff'],
    whatWasDelivered: [
      'Formed a new delivery team',
      'Built and launched an MVP integration',
      'Developed a new back-office portal',
      'Continued development for drug and DNA analysis',
      'Worked closely with business users and external partners'
    ],
    outcomes: [
      'Despite the two-year delay, the customer was the first to launch',
      'Paper and email-based handoffs were replaced with an integrated workflow',
      'Information exchange became faster',
      'Information protection was strengthened',
      'Turnaround times were reduced'
    ],
    highlightStats: [
      {
        value: 'First',
        label: 'to launch',
        detail: 'Despite joining the national digitalization initiative two years behind schedule.'
      },
      {
        value: 'Paperless',
        label: 'workflow',
        detail: 'Paper and email-based handoffs were replaced with an integrated, connected portal.'
      },
      {
        value: 'Faster',
        label: 'information exchange',
        detail: 'Turnaround times were reduced and information protection was strengthened.'
      }
    ],
    relatedServiceSlugs: ['system-integrations', 'custom-software-development', 'operational-workflow-risk-assessment'],
    quote: {
      text: 'The automated workflow is leaner, faster, requires less manual actions and is more secure.'
    }
  },
  {
    slug: 'it-reorganization',
    title: 'IT reorganization',
    headline: '95% fewer repeat incidents',
    tags: ['IT Operations', 'Reliability', 'Support'],
    summary: 'Reworked IT processes, application ownership, monitoring and root-cause analysis across 10+ applications.',
    preview: 'IT was spending too much time fixing the same problems — while users had little idea what was going on.',
    previewOutcome: '95% fewer repeat incidents · 37% lower IT costs · NPS from -25 to +72',
    sector: 'Enterprise IT operations',
    status: 'completed',
    primaryCategory: 'IT operations transformation',
    supportingThemes: ['Application ownership', 'Root-cause analysis', 'Monitoring and alerting', 'IT process redesign'],
    seo: {
      title: 'IT Reorganization Case Study',
      description:
        'See how Double Helix reworked IT processes and application ownership across 10+ applications, cutting repeat incidents by 95% and IT costs by 37%.',
      keywords: [
        'IT reorganization case study',
        'IT operations transformation',
        'root cause analysis IT',
        'IT incident reduction',
        'application ownership case study'
      ]
    },
    problem:
      'There was little transparency around IT maintenance and development. Users were frustrated, recurring incidents were common, and problems were often fixed without addressing what caused them in the first place.',
    users: ['IT leadership', 'Support teams', 'Application owners'],
    whatWasDelivered: [
      'Established clear IT processes across 10+ applications',
      'Mapped the application landscape',
      'Introduced monitoring and alerting',
      'Investigated recurring issues at their root cause',
      'Clarified ownership',
      'Shifted the focus from simply implementing requirements to solving the underlying business problem'
    ],
    outcomes: [
      'Repeat incidents reduced by 95%',
      'Issue resolution time: 20+ days → 3 days',
      'Feature lead time: several months → 6 days',
      'IT NPS: -25 → +72',
      'Annual IT costs: -37%'
    ],
    highlightStats: [
      {
        value: '95%',
        label: 'fewer repeat incidents',
        detail: 'Root-cause analysis and clarified ownership stopped the same problems from recurring.'
      },
      {
        value: '-37%',
        label: 'annual IT costs',
        detail: 'Reworked processes and monitoring reduced the ongoing cost of running IT.'
      },
      {
        value: '-25 → +72',
        label: 'IT NPS',
        detail: 'User sentiment shifted from frustration to strong satisfaction.'
      }
    ],
    relatedServiceSlugs: ['observability-workflow-monitoring', 'operational-workflow-risk-assessment', 'custom-software-development']
  },
  {
    slug: 'observability-improvement',
    title: 'Observability improvement',
    headline: '80% fewer alerts. 4× faster response.',
    tags: ['SRE', 'Observability', 'Monitoring'],
    summary: 'Built an SRE function, mapped critical systems and redesigned monitoring around business impact.',
    preview: '30+ live systems were generating more than 200 alerts every day. The important ones were getting lost in the noise.',
    previewOutcome: '80%+ fewer alerts · 40% fewer incidents · 4× faster response',
    sector: 'Multi-region live operations / SRE',
    status: 'completed',
    primaryCategory: 'Observability & SRE',
    supportingThemes: ['Alert tuning', 'SLA definition', 'Unified dashboards', 'Business-impact prioritization'],
    seo: {
      title: 'Observability Improvement Case Study',
      description:
        'See how Double Helix built an SRE function and redesigned monitoring around business impact, cutting alert volume by 80%+ and speeding incident response 4x.',
      keywords: [
        'observability improvement case study',
        'SRE case study',
        'alert fatigue reduction',
        'incident response time improvement',
        'monitoring redesign case study'
      ]
    },
    problem:
      'Support specialists across four regions were dealing with 30+ live systems and more than 200 alerts every day. There was plenty of monitoring — but not enough useful information. Alert noise made it harder to spot real problems, and critical incidents sometimes went unresolved.',
    users: ['Support specialists', 'SRE team', 'Development teams'],
    whatWasDelivered: [
      'Established a dedicated SRE team',
      'Mapped application dependencies and business-critical flows',
      'Prioritized alerts based on business impact',
      'Redesigned alert thresholds',
      'Removed unnecessary alert noise',
      'Built unified observability dashboards',
      'Defined SLAs and system ownership',
      'Focused on root-cause fixes instead of temporary patches'
    ],
    outcomes: [
      'Alert volume reduced by 80%+',
      'False positives eliminated',
      'Incident response 4× faster',
      'Number of incidents reduced by 40%',
      'Clearer ownership across teams',
      'Support and development teams had more time for strategic work'
    ],
    highlightStats: [
      {
        value: '-80%+',
        label: 'alert volume',
        detail: 'Alert thresholds were redesigned and noise removed, leaving only alerts tied to business impact.'
      },
      {
        value: '4×',
        label: 'faster incident response',
        detail: 'Unified dashboards and clear ownership shortened the time from alert to resolution.'
      },
      {
        value: '-40%',
        label: 'fewer incidents',
        detail: 'Root-cause fixes replaced temporary patches across the mapped critical systems.'
      }
    ],
    relatedServiceSlugs: ['observability-workflow-monitoring', 'operational-workflow-risk-assessment']
  },
  {
    slug: 'rapid-mvp-development',
    title: 'Rapid MVP development',
    headline: 'Idea → working MVP in under a week',
    tags: ['MVP', 'Discovery', 'Product Development'],
    summary: 'Ran discovery workshops, built a working prototype and put it in the hands of real users.',
    preview: 'The business wanted to test a new digital scheduling process without disrupting existing operations.',
    previewOutcome: 'MVP in under a week · Pilot live in 2 months',
    sector: 'Digital scheduling / field operations',
    status: 'completed',
    primaryCategory: 'Rapid prototyping / MVP development',
    supportingThemes: ['Discovery workshops', 'Field testing', 'Product roadmap planning'],
    seo: {
      title: 'Rapid MVP Development Case Study',
      description:
        'See how Double Helix ran discovery workshops and built a working MVP in under a week, taking a digital scheduling pilot live within two months.',
      keywords: [
        'rapid MVP development case study',
        'discovery workshop case study',
        'digital scheduling MVP',
        'field pilot software',
        'MVP prototype development'
      ]
    },
    problem:
      'Management wanted to test a new digital work-scheduling process, but didn’t want to commit to a large software project before knowing whether the idea actually worked in the field.',
    users: ['Operations management', 'Field users'],
    whatWasDelivered: [
      'Ran focused discovery workshops',
      'Identified the functionality needed for a real-world test',
      'Built a working prototype',
      'Put the MVP into field testing',
      'Created a structured approach for what to build next'
    ],
    outcomes: [
      'First functional MVP ready in under 1 week',
      'Pilot went live within 2 months',
      'The process could be tested with real users',
      'Existing operations continued without disruption'
    ],
    highlightStats: [
      {
        value: '<1 wk',
        label: 'to first working MVP',
        detail: 'Discovery workshops identified exactly what was needed for a real-world test, nothing more.'
      },
      {
        value: '2 mo',
        label: 'to live pilot',
        detail: 'The prototype moved from field testing to a live pilot without disrupting existing operations.'
      },
      {
        value: 'Structured',
        label: 'roadmap for what’s next',
        detail: 'Field-tested results fed directly into a plan for further development.'
      }
    ],
    relatedServiceSlugs: ['custom-software-development', 'ai-adoption-solutions']
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
  headline?: string;
  tags?: string[];
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
      headline: solution.headline,
      tags: solution.tags,
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
