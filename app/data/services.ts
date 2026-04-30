export interface Service {
  timeline: string;
  title: string;
  key: string;
  slug: string;
  description: string;
  items: string[];
  deliverables: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    category:
      | 'custom-software-development'
      | 'system-integrations'
      | 'ai-adoption-solutions'
      | 'workflow-assessment'
      | 'observability-monitoring'
      | 'security-compliance';
  };
}

export const servicesContents: Service[] = [
  {
    title: 'Operational Workflow Risk Assessment',
    key: 'Discovery',
    slug: 'operational-workflow-risk-assessment',
    description: 'We trace how work moves across teams, systems, spreadsheets, and handoffs so you can see where delays, rework, and compliance risk are introduced. The result is a prioritized remediation plan for healthcare and life sciences operations before incidents, audit findings, or missed deadlines force action.',
    timeline: '2-4 months',
    items: [
      'Kickoff to confirm scope, workflow boundaries, and business risk',
      'Interviews with the people who run and support the workflow',
      'On-site or remote walkthroughs to see how work is actually performed',
      'Review of SOPs, operational reports, incidents, and exception paths',
      'Mapping of handoffs, ownership, decisions, and system touchpoints end to end',
      'Prioritization workshops to align on the highest-impact fixes',
    ],
    deliverables: [
      'End-to-end flow maps',
      'Handoff matrix and exception overlay',
      'Risk register with scoring and owners',
      'Prioritized remediation plan',
      'Executive readout deck',
      'Board-ready one-page memo'    
    ],
    seo: {
      title: 'Operational Workflow & Risk Assessment',
      description:
        'Map workflows, uncover hidden handoff risk, and identify data bottlenecks across life sciences and healthcare operations.',
      keywords: [
        'operational workflow assessment',
        'workflow bottleneck analysis',
        'process risk assessment',
        'healthcare operations consulting'
      ],
      category: 'workflow-assessment'
    }
  },
  {
    title: 'System Integrations & Data Flow Optimization',
    key: 'Integration',
    slug: 'system-integrations',
    description: 'We connect disconnected systems so critical data moves automatically, accurately, and with clear ownership. That means fewer manual handoffs, less duplicate entry, and a dependable source of truth across regulated workflows.',
    timeline: '2-4 months',
    items: [
      'Review of the systems involved and how data currently moves between them',
      'Definition of source-of-truth rules for critical records and fields',
      'Interface, mapping, and error-handling design for each integration point',
      'Incremental implementation with validation at each stage',
      'End-to-end testing for main flows, edge cases, and failure scenarios',
      'Monitoring and alerting so integration issues surface early',
      'Handover documentation for operations, support, and troubleshooting',
    ],
    deliverables: [
      'Integration architecture and system map',
      'Interface specification and data mapping',
      'Production-ready integrations',
      'Automated end-to-end tests',
      'Monitoring dashboards and alerts',
      'Handover documentation',
    ],
    seo: {
      title: 'System Integration & Data Flow Optimization',
      description:
        'Reduce manual handoffs, connect fragmented systems, and create a reliable single source of truth with end-to-end integration services.',
      keywords: [
        'system integration consulting',
        'single source of truth',
        'data flow bottlenecks',
        'manual handoff reduction',
        'healthcare system integrations'
      ],
      category: 'system-integrations'
    }
  },
  {
    title: 'Custom Software Development for Life Sciences & Healthcare',
    key: 'Architecture',
    slug: 'custom-software-development',
    description: 'We design and improve custom software for regulated operational workflows that off-the-shelf tools cannot support well. We identify architectural risk, delivery blockers, and integration constraints, then define practical next steps for life sciences and healthcare teams.',
    timeline: '2-4 months',
    items: [
      'Review of the current product, architecture, and key technical dependencies',
      'Assessment of scalability, maintainability, reliability, and security',
      'Identification of high-risk components and technical debt slowing delivery',
      'Workshops to compare options such as improve, refactor, split, or replace',
      'Recommendations grounded in operational constraints and delivery reality',
      'A step-by-step roadmap for what to build, fix, or retire next',
    ],
    deliverables: [
      'Architecture and dependency map',
      'Risk and technical debt register',
      'Scalability and maintainability findings',
      'Future-state options and recommendations',
      'Improvement roadmap and priorities',
      'Decision memo for leadership',      
    ],
    seo: {
      title: 'Custom Software Development for Life Sciences & Healthcare',
      description:
        'Design, modernize, and improve custom software for life sciences and healthcare workflows where off-the-shelf tools fall short.',
      keywords: [
        'custom software ai solutions in life sciences',
        'custom software development consulting',
        'software architecture assessment',
        'healthcare software architecture',
        'life sciences software development'
      ],
      category: 'custom-software-development'
    }
  },
  {
    title: 'Observability & Workflow Monitoring',
    key: 'System',
    slug: 'observability-workflow-monitoring',
    description: 'We help teams see how workflows, integrations, and operational systems behave in real life. That includes the telemetry, dashboards, and alerting needed to spot failures early, trace issues across handoffs, and keep critical operational flows visible.',
    timeline: '1-2 months',
    items: [
      'Review of current visibility, logging, and monitoring gaps',
      'Selection of the workflows and integrations to track end to end',
      'Definition of the key events, thresholds, and exception conditions to monitor',
      'Setup or improvement of dashboards for workflow, integration, and system health',
      'Alert rules and escalation logic so the right teams are notified quickly',
      'Operational playbooks for troubleshooting, incident response, and follow-up',
    ],
    deliverables: [
      'Visibility gap assessment',
      'Workflow monitoring plan',
      'Dashboards for flow, exceptions, and system health',
      'Alert rules and escalation paths',
      'Incident and troubleshooting playbooks',
      'Operational reporting template',
    ],
    seo: {
      title: 'Observability & Workflow Monitoring',
      description:
        'Improve workflow visibility, observability, and operational telemetry across connected systems in healthcare and life sciences.',
      keywords: [
        'workflow monitoring',
        'observability consulting',
        'operational telemetry',
        'system observability'
      ],
      category: 'observability-monitoring'
    }
  },
  {
    title: 'Custom AI Solutions for Life Sciences & Healthcare',
    key: 'AI',
    slug: 'ai-adoption-solutions',
    description: 'We help teams identify, shape, and govern practical AI solutions for regulated workflows. That includes use-case discovery, readiness assessment, human review controls, and rollout planning for life sciences and healthcare environments.',
    timeline: '1-2 months',
    items: [
      'Discovery sessions to identify high-value AI opportunities',
      'Assessment of workflow, data quality, and system readiness',
      'Prioritization of use cases by value, feasibility, and risk',
      'Definition of governance, review, and human-in-the-loop controls',
      'Pilot design for one or two practical AI implementations',
      'Implementation roadmap aligned to operational constraints',
    ],
    deliverables: [
      'AI opportunity map',
      'Prioritized use case shortlist',
      'Readiness and risk assessment',
      'Governance guardrails',
      'Pilot implementation plan',
      'AI adoption roadmap',
    ],
    seo: {
      title: 'Custom AI Solutions for Life Sciences & Healthcare',
      description:
        'Identify, design, and roll out practical AI solutions safely across life sciences and healthcare workflows.',
      keywords: [
        'custom software ai solutions in life sciences',
        'custom AI solutions for life sciences',
        'AI adoption consulting',
        'healthcare AI adoption',
        'life sciences AI consulting',
        'AI readiness assessment',
        'AI implementation roadmap'
      ],
      category: 'ai-adoption-solutions'
    }
  },
  {
    title: 'Security, Compliance & AI Governance Readiness',
    key: 'Security',
    slug: 'ai-governance-compliance',
    description: 'We assess the controls that protect systems, integrations, data flows, and AI-enabled processes. You get a prioritized plan to reduce operational risk, support audit readiness, and strengthen day-to-day governance in regulated environments.',
    timeline: '1-2 months',
    items: [
      'Inventory of critical systems, users, interfaces, and data flows',
      'Review of access control, privileged actions, and sensitive data movement',
      'Assessment of security and compliance risks that can disrupt operations',
      'Prioritized recommendations that are practical to implement',
      'Audit-readiness support with an evidence checklist and gap list',
      'Optional incident simulation to test detection and response readiness',
    ],
    deliverables: [
      'System and data flow inventory',
      'Security risk register and priorities',
      'Practical improvement plan',
      'Audit readiness checklist',
      'Security hardening checklist',
      'Optional incident simulation summary',
    ],
    seo: {
      title: 'Security, Compliance & AI Governance Readiness',
      description:
        'Assess security, compliance, and governance risks across systems, integrations, and data flows in regulated healthcare and life sciences environments.',
      keywords: [
        'healthcare IT security',
        'compliance risk assessment',
        'regulated system governance',
        'AI governance readiness'
      ],
      category: 'security-compliance'
    }
  }
];

export function getServiceBySlug(slug: string) {
  return servicesContents.find((service) => service.slug === slug || service.key === slug);
}

export function isLegacyServiceSlug(service: Service, slug: string) {
  return slug === service.key;
}

export function getServicePath(service: Service) {
  return `/services/${service.slug}/`;
}
