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

/**
 * A quantified result shown in a large stat card. Only numeric results belong here;
 * qualitative outcomes go into `outcomes` or `whatWasDelivered`.
 */
export interface HighlightStat {
  value: string;
  label: string;
  detail: string;
}

export interface ClientSolutionQuote {
  /** Full quote exactly as approved for publication. Never edit; it is reconciled with the sales deck. */
  text: string;
  /**
   * Name, role and organisation exactly as approved for publication. Titles are the ones held at
   * the time of the project and say so, because they may have changed since.
   */
  attribution: string;
  /**
   * Optional pull-quote for the homepage testimonials: the opening sentence of `text`, shown as the
   * card heading with the remainder of `text` as the body. Must be a verbatim prefix of `text`.
   */
  tagline?: string;
}

/** Named client. Only set when the client has approved being named on this case study. */
export interface ClientReference {
  name: string;
}

export interface EngagementFact {
  label: string;
  value: string;
}

/**
 * The single number shown on the homepage slider card, animated from `from` to `value`.
 * Keep `label` to one short line; the card shows nothing else.
 */
export interface FeaturedStat {
  value: number;
  from?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface ClientSolution {
  slug: string;
  title: string;
  headline: string;
  summary: string;
  /** One sentence on the problem, shown on the overview card under the title. */
  preview: string;
  /** Further results beyond `headline`, revealed on the overview card on hover. Must not repeat `headline`. */
  moreOutcomes: string;
  tags: string[];
  sector: string;
  /** Short label for the overview card when the client is not named. Falls back to `sector`. */
  cardLabel?: string;
  status: ClientSolutionStatus;
  client?: ClientReference;
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
  featuredStat: FeaturedStat;
  engagementFacts?: EngagementFact[];
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

/**
 * Content source of truth: the Double Helix sales deck "IT service partner for life sciences
 * and healthcare" and the company one-pager. Figures and quotes must match those documents.
 * Clients are named only where `client` is set; everything else stays anonymous.
 */
export const clientSolutions: ClientSolution[] = [
  {
    slug: 'process-automation-lims-integration',
    title: 'Process automation & LIMS integration',
    headline: '7 data entry points → 1',
    tags: ['Automation', 'Integration', 'LIMS'],
    summary:
      'Connected e-commerce, LIMS, ERP and reporting systems in an NGS operation, automated the workflow between them, and gave project managers and Customer Care one place to manage projects and samples.',
    preview:
      'Manual data entry across e-commerce, LIMS, ERP and reporting was slowing down NGS project teams.',
    moreOutcomes: '75% less order setup time, 50% of team capacity freed for revenue-generating work',
    sector: 'Genomics services / NGS operations',
    status: 'completed',
    client: { name: 'Eurofins Genomics' },
    primaryCategory: 'Workflow automation',
    supportingThemes: ['LIMS integration', 'ERP integration', 'E-commerce integration', 'Sample Management System', 'Single source of truth'],
    seo: {
      title: 'Process Automation & LIMS Integration Case Study',
      description:
        'See how Double Helix connected LIMS, ERP, e-commerce and reporting systems for Eurofins Genomics, cut data entry points from 7 to 1 and freed 50% of team capacity.',
      keywords: [
        'LIMS integration case study',
        'process automation life sciences',
        'ERP LIMS integration',
        'workflow automation case study',
        'sample management automation',
        'Sample Management System',
        'sequencing workflow automation'
      ]
    },
    problem:
      'Project managers and Customer Care were entering the same data by hand across multiple IT applications in the NGS domain. E-commerce, LIMS, ERP and reporting were not connected end to end, and there was no single source of truth for project overview and sample management.',
    approach:
      'Double Helix first mapped the current-state process in detail, then designed the target workflow and rolled the change out stage by stage. The implementation combined process automation, integrations between LIMS and the surrounding business systems, and a custom Sample Management System that became the single overview for Customer Care and project managers.',
    users: ['Project managers', 'Customer Care team'],
    whatWasDelivered: [
      'Current-state process mapping and future-state workflow design with a stage-by-stage rollout',
      'Process automation across e-commerce, LIMS, ERP and reporting',
      'Integration of LIMS with the surrounding business systems',
      'Custom Sample Management System as the single overview for project managers and Customer Care',
      'One place to enter data instead of seven'
    ],
    outcomes: [
      'Data entry points reduced from 7 to 1',
      'Order setup time reduced by 75%',
      'Project setup backlog reduced from 1 week to 1 day',
      'WIP report creation time reduced by 75%',
      '50% of project management and Customer Care capacity freed for revenue-generating work'
    ],
    highlightStats: [
      {
        value: '7 → 1',
        label: 'data entry points',
        detail: 'The same data no longer needs to be entered separately across e-commerce, LIMS, ERP and reporting.'
      },
      {
        value: '75%',
        label: 'less order setup time',
        detail: 'Automating the workflow between systems removed most of the manual setup work per order.'
      },
      {
        value: '50%',
        label: 'of team capacity freed',
        detail: 'Project management and Customer Care time previously spent on data entry now goes to revenue-generating work.'
      }
    ],
    featuredStat: { value: 50, suffix: '%', label: 'of project management and Customer Care capacity freed' },
    engagementFacts: [
      { label: 'Time to MVP go-live', value: '10 months from the first developer hired' },
      { label: 'Systems connected', value: 'E-commerce, LIMS, ERP, reporting' }
    ],
    relatedServiceSlugs: ['system-integrations', 'operational-workflow-risk-assessment', 'custom-software-development'],
    quote: {
      text:
        'Working with this team was a game-changer. They don’t just code, they dive deep into your business, challenge assumptions, and co-create solutions that are both innovative and intuitive. I was impressed about their ability to translate very complex business processes into elegant, user-friendly solutions.',
      attribution: 'Annika Schott, Project Management Team Lead NGS, Eurofins Genomics Europe (title at the time of the project)',
      tagline: 'Working with this team was a game-changer.'
    }
  },
  {
    slug: 'ngs-data-delivery-automation',
    title: 'NGS data delivery automation',
    headline: '1.5 days → 3 hours',
    tags: ['Automation', 'Data', 'Cloud', 'Monitoring'],
    summary:
      'Automated, monitored and auditable delivery and archival of sequencing data, replacing manual command-line file transfers.',
    preview: 'A critical data delivery process depended on people copying FASTQ files through command-line tools.',
    moreOutcomes: 'Fully automated and auditable, with archival and cloud storage tiering handled automatically',
    sector: 'Genomics / NGS sequencing operations',
    status: 'completed',
    client: { name: 'Eurofins Genomics' },
    primaryCategory: 'Data pipeline automation',
    supportingThemes: ['Data delivery automation', 'Cloud storage tiering', 'Audit and approval workflow', 'Monitoring and alerting'],
    seo: {
      title: 'NGS Data Delivery Automation Case Study',
      description:
        'See how Double Helix automated NGS data delivery and archival for Eurofins Genomics, cutting delivery time from 1.5 days to 3 hours with monitoring and an optional 4-eyes approval.',
      keywords: [
        'NGS data delivery automation',
        'genomics data pipeline automation',
        'sequencing data archival',
        'FASTQ delivery automation',
        'cloud storage tiering case study',
        'Sanger sequencing data delivery',
        'NGS data delivery pipeline'
      ]
    },
    problem:
      'Data delivery was completely manual: FASTQ files were copied and moved through command-line terminals. The process was fragile and prone to human error, with frequent technical problems such as running out of disk space, stalled copies and missing notifications, because there was no archiving or monitoring in place. The process worked, until it didn’t.',
    dataFlow:
      'Instead of a fixed FTP-style delivery pattern, sequencing data is routed to the endpoint that fits each project setup: customer-managed storage, service-provider storage, cloud destinations, or FTP where a customer still requires it. The technical complexity stays inside the delivery pipeline, so customers get a better-fitting setup without extra manual coordination. The pipeline covers both NGS and Sanger sequencing deliveries.',
    users: ['Bioinformatics team', 'Operations team', 'Customer care team'],
    whatWasDelivered: [
      'Automated the entire data delivery workflow',
      'Monitoring and notifications for every delivery',
      'Auditable process with an optional 4-eyes approval before data reaches the end customer',
      'Automated data archival',
      'Cloud storage tiers (hot, warm, cold) chosen per customer requirements',
      'Flexible delivery endpoints: customer storage, provider storage, cloud or FTP'
    ],
    outcomes: [
      'Data delivery is fully automated',
      'Delivery time reduced from 1.5 days to 3 hours',
      'Data archival happens automatically, based on customer requirements',
      'Cloud storage cost optimised by tiering data on how often it is accessed',
      'Delivery status is visible to project managers and customer care, so client enquiries are answered faster'
    ],
    highlightStats: [
      {
        value: '3 hours',
        label: 'delivery time, down from 1.5 days',
        detail: 'Files were previously copied by hand through command-line tools.'
      }
    ],
    featuredStat: { value: 3, from: 36, suffix: ' hours', label: 'data delivery time, down from 1.5 days' },
    engagementFacts: [{ label: 'Data types', value: 'NGS and Sanger sequencing data' }],
    relatedServiceSlugs: ['system-integrations', 'observability-workflow-monitoring', 'custom-software-development'],
    quote: {
      text:
        'Working with this team has been an exceptional experience. They delivered our project management application for multiple laboratories with remarkable speed and precision, all while maintaining the highest standards of quality. What truly impressed us was their communication: always clear, responsive, and collaborative. They didn’t just build software, they took the time to understand our entire business ecosystem, not just the immediate requirements. Their approach went beyond solving surface-level problems, they actively sought out root causes and designed solutions that support both current operations and future growth. Their dedication, insight, and professionalism make them a standout partner for any organization looking to build impactful, scalable digital solutions.',
      attribution: 'Andreas Feldl, Global Business Product Owner, Eurofins Genomics (title at the time of the project)',
      tagline: 'Working with this team has been an exceptional experience.'
    }
  },
  {
    slug: 'customer-integration-api-onboarding',
    title: 'Customer integration & API onboarding',
    headline: 'Months → under 2 weeks',
    tags: ['APIs', 'Integration', 'Onboarding'],
    summary:
      'Built a standardised API and onboarding process connecting B2B customer systems with the service provider’s LIMS.',
    preview: 'Every new customer integration was becoming its own project.',
    moreOutcomes: 'Standardised API, repeatable onboarding, issues caught before customers notice them',
    sector: 'B2B life sciences platform integrations',
    status: 'completed',
    client: { name: 'Eurofins Genomics' },
    primaryCategory: 'API integration & onboarding',
    supportingThemes: ['Standardised APIs', 'Sample lifecycle visibility', 'Onboarding documentation', 'System monitoring'],
    seo: {
      title: 'Customer Integration & API Onboarding Case Study',
      description:
        'See how Double Helix built a standardised API and onboarding process for Eurofins Genomics that cut B2B customer onboarding from months to under two weeks.',
      keywords: [
        'API onboarding case study',
        'B2B LIMS integration',
        'customer integration automation',
        'sample lifecycle visibility',
        'standardized API integration'
      ]
    },
    problem:
      'B2B customers needed an automated interface between their applications and the service provider’s systems. Every integration was a one-off, so onboarding took months, customers had little visibility into sample management, and opportunities were lost while integrations were being built.',
    users: ['B2B customers', 'Integration engineering team', 'Customer success team'],
    whatWasDelivered: [
      'Standardised API between the service provider’s LIMS and customer applications',
      'Visibility into the sample management process for customers',
      'Standard onboarding process',
      'Onboarding documentation, so new customers no longer need a bespoke integration',
      'Full system monitoring'
    ],
    outcomes: [
      'Customer onboarding time reduced from several months to under two weeks',
      'Issues are resolved proactively, before end customers notice',
      'Significantly less project management capacity needed, because customers can follow their sample lifecycle themselves'
    ],
    highlightStats: [
      {
        value: 'Under 2 weeks',
        label: 'customer onboarding, down from several months',
        detail: 'Every integration used to be built as a one-off project.'
      }
    ],
    featuredStat: { value: 2, prefix: 'Under ', suffix: ' weeks', label: 'customer onboarding, down from several months' },
    relatedServiceSlugs: ['system-integrations', 'custom-software-development', 'observability-workflow-monitoring'],
    quote: {
      text:
        'Collaborating with Double Helix Technologies has greatly enhanced the efficiency and reliability of our IT integration projects. Their strong technical expertise and proactive, customer-focused approach enabled us to address potential issues early and implement solutions perfectly aligned with our user needs. The team’s ability to listen carefully and anticipate challenges ensured a smooth and efficient integration that supports our business objectives. Double Helix Technologies is a dependable partner for any organization seeking innovative and client-centered IT integration services.',
      // OWNER: Confirm Reynald Vidili's current title. A third-party org chart lists him as President of
      // Eurofins Genomics; the title below is the one approved with the quote and is now dated.
      attribution: 'Reynald Vidili, Sales Director, Eurofins Genomics France SAS (title at the time of the project)',
      tagline: 'Collaborating with Double Helix Technologies has greatly enhanced the efficiency and reliability of our IT integration projects.'
    }
  },
  {
    slug: 'forensics-integration',
    title: 'Forensics integration',
    headline: '2 years late. First to launch.',
    tags: ['MVP', 'Integration', 'Digitalization'],
    summary:
      'Formed a new team, delivered an MVP integration and replaced email and paper-based workflows with a connected portal.',
    preview: 'A customer joined a government digitalisation initiative two years behind schedule.',
    moreOutcomes: 'Paperless workflow with no emails, stronger information protection, shorter turnaround times',
    sector: 'Forensics / law enforcement digitalisation',
    cardLabel: 'Forensics',
    status: 'completed',
    primaryCategory: 'Digital transformation / systems integration',
    supportingThemes: ['Government digitalisation initiative', 'Drug and DNA analysis workflow', 'Back-office portal', 'Secure information exchange'],
    seo: {
      title: 'Forensics Digitalization Integration Case Study',
      description:
        'See how Double Helix formed a new delivery team and launched an MVP integration that let a customer be first to launch in a government forensics digitalization initiative, two years behind schedule.',
      keywords: [
        'forensics digitalization case study',
        'law enforcement systems integration',
        'MVP integration case study',
        'DNA analysis workflow digitalization',
        'digital forensics portal'
      ]
    },
    problem:
      'Police, prosecution and forensic laboratory organisations were moving their drug and DNA analysis workflows into a shared, paperless digital process. Our customer joined the initiative two years late, which put the opportunity at risk.',
    users: ['Police', 'Prosecution', 'Forensic laboratory staff'],
    whatWasDelivered: [
      'Formed a new delivery team',
      'Built and launched the MVP integration for drug analysis',
      'Developed a new back-office portal',
      'Continued development of drug and DNA analysis support, in close collaboration with the business and its partners'
    ],
    outcomes: [
      'Despite the two-year handicap, the customer was the first to launch the integration and seize the opportunity',
      'Information protection strengthened through the new architecture',
      'Paperless workflow with no emails: communication runs directly between the police base systems and the new portal',
      'Shorter turnaround times through faster information exchange'
    ],
    highlightStats: [
      {
        value: '1st',
        label: 'to launch, despite joining two years late',
        detail: 'The MVP integration went live ahead of the other participants in the initiative.'
      }
    ],
    featuredStat: { value: 2, suffix: ' years late', label: 'and still the first to launch' },
    engagementFacts: [{ label: 'Team', value: 'New delivery team formed for this project' }],
    relatedServiceSlugs: ['system-integrations', 'custom-software-development', 'operational-workflow-risk-assessment'],
    quote: {
      text:
        'For these cases no emails were exchanged, because all communication was done directly from the base systems of Police to the new Portal and vice versa. So, now the automated workflow is leaner, faster, requires less manual actions and is more secure. This is a great milestone for us and I want to thank multiple people who have made this possible. I appreciate your hard work to make this possible, both IT-wise and operationally!',
      attribution: 'Director and the management team of the customer organisation'
    }
  },
  {
    slug: 'it-reorganization',
    title: 'IT reorganization',
    headline: '95% fewer repeat incidents',
    tags: ['IT Operations', 'Reliability', 'Support'],
    summary: 'Reworked IT processes, application ownership, monitoring and root-cause analysis across 10+ applications.',
    preview: 'IT was spending too much time fixing the same problems, while users had little idea what was going on.',
    moreOutcomes: '37% lower annual IT costs, internal IT NPS from -25 to +72, issue resolution from 20+ days to 3',
    sector: 'Life sciences / genomics services IT operations',
    status: 'completed',
    client: { name: 'Eurofins Genomics' },
    primaryCategory: 'IT operations transformation',
    supportingThemes: ['Application ownership', 'Root-cause analysis', 'Monitoring and alerting', 'IT process redesign'],
    seo: {
      title: 'IT Reorganization Case Study',
      description:
        'See how Double Helix reworked IT processes and application ownership across 10+ applications at Eurofins Genomics, cutting repeat incidents by 95% and IT costs by 37%.',
      keywords: [
        'IT reorganization case study',
        'IT operations transformation',
        'root cause analysis IT',
        'IT incident reduction',
        'application ownership case study'
      ]
    },
    problem:
      'There was little transparency in how IT maintenance and development were managed, which frustrated users and stakeholders. A high volume of recurring incidents pointed to deeper issues with service quality and reliability.',
    users: ['IT leadership', 'Support teams', 'Application owners'],
    whatWasDelivered: [
      'Clear and transparent IT processes across 10+ applications',
      'Analysis of the current application landscape',
      'Monitoring and alerting to improve observability',
      'Root-cause analysis to resolve recurring issues at their source',
      'Clear ownership and documented processes',
      'A shift from coding to requirements towards analysing, proposing and delivering solutions for the business need'
    ],
    outcomes: [
      'Repeat incidents reduced by 95%',
      'Early detection of incidents, before end users or customers notice',
      'Issue resolution lead time reduced from 20+ days to 3 days',
      'Feature lead time reduced from several months to 6 days',
      'Internal IT Net Promoter Score improved from -25 to +72',
      'IT organisation’s annual costs reduced by 37%'
    ],
    highlightStats: [
      {
        value: '95%',
        label: 'fewer repeat incidents',
        detail: 'Root-cause analysis and clear ownership stopped the same problems from recurring.'
      },
      {
        value: '-37%',
        label: 'annual IT costs',
        detail: 'Reworked processes and monitoring reduced the ongoing cost of running IT.'
      },
      {
        value: '-25 → +72',
        label: 'internal IT NPS',
        detail: 'User sentiment shifted from frustration to strong satisfaction.'
      }
    ],
    featuredStat: { value: 95, suffix: '%', label: 'fewer repeat incidents' },
    engagementFacts: [{ label: 'Scope', value: '10+ applications' }],
    relatedServiceSlugs: ['observability-workflow-monitoring', 'operational-workflow-risk-assessment', 'custom-software-development'],
    quote: {
      text:
        'The IT team consistently demonstrates a solution-oriented approach and a commitment to building sustainable structures that enhance our workflow. Their valuable interactions and willingness to share knowledge significantly impact our projects. Their hard work and dedication are truly commendable, and I look forward to seeing our collective continued success.',
      attribution: 'Nadine Tappe, Head of Oligonucleotides, Eurofins Genomics Europe (title at the time of the project)',
      tagline: 'The IT team consistently demonstrates a solution-oriented approach and a commitment to building sustainable structures that enhance our workflow.'
    }
  },
  {
    slug: 'observability-improvement',
    title: 'Observability improvement',
    headline: '80% fewer alerts. 4× faster response.',
    tags: ['SRE', 'Observability', 'Monitoring'],
    summary: 'Built an SRE function, mapped critical systems and redesigned monitoring around business impact.',
    preview: '30+ live systems were generating more than 200 alerts every day. The important ones were getting lost in the noise.',
    moreOutcomes: '40% fewer incidents, false positives eliminated, SLAs and system ownership defined',
    sector: 'Global support operations / SRE',
    cardLabel: 'Global support operations',
    status: 'completed',
    primaryCategory: 'Observability & SRE',
    supportingThemes: ['Alert tuning', 'SLA definition', 'Unified dashboards', 'Business-impact prioritisation'],
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
      'Support specialists across four global regions (USA, Japan, Europe and India) were overwhelmed by incident, bug and support tickets, with little visibility into 30+ live systems. Alerts fired more than 200 times a day across all severity levels, creating noise and masking real issues. Critical incidents sometimes went unresolved, causing business disruptions that better monitoring and focus could have avoided.',
    users: ['Support specialists', 'SRE team', 'Development teams'],
    whatWasDelivered: [
      'A dedicated Site Reliability Engineering team under strong leadership',
      'Mapping of application dependencies and business-critical flows',
      'Alerts prioritised by business impact, thresholds redefined and noise removed',
      'Unified observability dashboards for preventive maintenance',
      'SLAs and system responsibilities defined across teams',
      'Root-cause analysis and sustainable fixes instead of shortcuts or temporary patches'
    ],
    outcomes: [
      'Alert volume reduced by over 80%, enabling focus on truly critical issues',
      'False positives eliminated; each alert now triggers a proper response',
      'Incident response times improved 4 times',
      'Number of incidents decreased by 40%',
      'The business regained trust in IT through proactive issue resolution',
      'Support and development teams freed up to focus on strategic improvements'
    ],
    highlightStats: [
      {
        value: '-80%+',
        label: 'alert volume',
        detail: 'Thresholds were redefined and noise removed, leaving only alerts tied to business impact.'
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
    featuredStat: { value: 4, suffix: '×', label: 'faster incident response' },
    engagementFacts: [
      { label: 'Team', value: 'Dedicated SRE team established' },
      { label: 'Scope', value: '30+ live systems across four regions (USA, Japan, Europe, India)' }
    ],
    relatedServiceSlugs: ['observability-workflow-monitoring', 'operational-workflow-risk-assessment']
  },
  {
    slug: 'rapid-mvp-development',
    title: 'Rapid MVP development',
    headline: 'Idea → working MVP in under a week',
    tags: ['MVP', 'Discovery', 'Product Development'],
    summary: 'Ran discovery workshops, built a working prototype and put it in the hands of real users.',
    preview: 'The business wanted to field-test a new digital work-scheduling process without disrupting existing operations.',
    moreOutcomes: 'Pilot live in two months with no disruption to existing operations',
    sector: 'Digital scheduling / field operations',
    cardLabel: 'Field operations',
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
      'Management wanted to validate and field-test a digital work-scheduling process, with minimal to no disruption to existing processes, before committing to a large software project.',
    users: ['Operations management', 'Field users'],
    whatWasDelivered: [
      'A series of workshops for functionality discovery',
      'A prototype application for field testing',
      'A structured approach for further development after process validation'
    ],
    outcomes: [
      'First MVP iteration ready for pilot in under a week, from idea to functional product',
      'Pilot went live in two months and is being field-tested with no disruption to existing processes',
      'The process could be validated with real users before a larger investment'
    ],
    highlightStats: [
      {
        value: 'Under 1 week',
        label: 'from idea to first working MVP',
        detail: 'Discovery workshops identified exactly what was needed for a real-world test, nothing more.'
      },
      {
        value: '2 months',
        label: 'to live pilot',
        detail: 'The prototype moved from field testing to a live pilot without disrupting existing operations.'
      }
    ],
    featuredStat: { value: 1, from: 10, prefix: 'Under ', suffix: ' week', label: 'from idea to working MVP' },
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
    ctaHref: 'https://tiltera.health',
    currentStage:
      'Currently in development, with prototype walkthroughs and early access conversations available.'
  }
];

/**
 * Old URLs that must keep resolving. Values are current client-solution slugs.
 * `/work/<old-slug>/` and `/case-studies/<old-slug>/` render a redirect page to `/work/<new-slug>/`.
 */
export const legacyWorkRedirects: Record<string, string> = {
  // Merged into the two Eurofins Genomics cases it overlapped with (decision 2026-09-11).
  'sanger-ngs-data-delivery-pipeline-automation': 'ngs-data-delivery-automation'
};

export const legacyCaseStudyRedirects: Record<string, string> = {
  'process-automation': 'process-automation-lims-integration',
  'rapid-development': 'rapid-mvp-development',
  'observability-improvement': 'observability-improvement',
  'reorganization-of-it': 'it-reorganization'
};

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

/**
 * A client quote ready for the homepage testimonials. `body` is `text` with the `tagline` removed
 * when the tagline is its opening sentence, so the two are never shown twice.
 */
export interface PublishedQuote {
  slug: string;
  caseTitle: string;
  casePath: string;
  /** Client name when the client may be named; undefined for anonymous cases. */
  clientName?: string;
  text: string;
  tagline?: string;
  body: string;
  attribution: string;
}

/**
 * Quotes for the homepage, read from the case studies so text and attribution cannot drift from
 * the /work/ pages. Only quotes with a `tagline` are returned; that is the homepage presentation
 * (heading plus body). Quotes without one stay on their case study page.
 */
export function getPublishedQuotes(): PublishedQuote[] {
  return clientSolutions.flatMap((solution) => {
    const quote = solution.quote;
    if (!quote?.tagline) return [];

    const body = quote.text.startsWith(quote.tagline)
      ? quote.text.slice(quote.tagline.length).trim()
      : quote.text;

    return [
      {
        slug: solution.slug,
        caseTitle: solution.title,
        casePath: getClientSolutionPath(solution),
        clientName: solution.client?.name,
        text: quote.text,
        tagline: quote.tagline,
        body,
        attribution: quote.attribution
      }
    ];
  });
}

/**
 * What an overview card shows, in reading order: `eyebrow` (client name, or a short sector label
 * when the client is not named), `title` (what we worked on), `problem` (one sentence on why),
 * then an emphasised result block with `result` and, on hover, `resultMore`. `name` is the entity
 * name used in structured data.
 */
export interface WorkListItem {
  slug: string;
  tag: WorkTag;
  path: string;
  name: string;
  eyebrow: string;
  title: string;
  problem: string;
  resultLabel: string;
  result: string;
  resultMore: string;
}

export function getWorkListItems(): WorkListItem[] {
  return [
    ...clientSolutions.map((solution) => ({
      slug: solution.slug,
      tag: 'for clients' as const,
      path: getClientSolutionPath(solution),
      name: solution.title,
      eyebrow: solution.client ? solution.client.name : solution.cardLabel ?? solution.sector,
      title: solution.title,
      problem: solution.preview,
      resultLabel: 'Result',
      result: solution.headline,
      resultMore: solution.moreOutcomes
    })),
    ...products.map((product) => ({
      slug: product.slug,
      tag: 'Our products' as const,
      path: getProductPath(product),
      name: product.name,
      eyebrow: 'Our product',
      title: product.name,
      problem: product.preview,
      resultLabel: 'Status',
      result: 'In development',
      resultMore: 'Prototype walkthroughs and early access conversations available'
    }))
  ];
}

export type WorkEntry =
  | { kind: 'client-solution'; data: ClientSolution }
  | { kind: 'product'; data: Product }
  | { kind: 'redirect'; to: string };

export function getAllWorkSlugs() {
  return [
    ...clientSolutions.map((solution) => solution.slug),
    ...products.map((product) => product.slug),
    ...Object.keys(legacyWorkRedirects)
  ];
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

  const redirectTarget = legacyWorkRedirects[slug];
  if (redirectTarget) {
    const target = getClientSolutionBySlug(redirectTarget);
    if (target) {
      return { kind: 'redirect', to: getClientSolutionPath(target) };
    }
  }

  return undefined;
}
