export interface Service {
  title: string;
  key: string;
  description: string;
  price: string;
  items: string[];
  deliverables: string[];
}

export const servicesContents: Service[] = [
  {
    title: 'Operational System Flow and Risk Assessment',
    key: 'Discovery',
    description: 'We help you understand how work actually flows across your organization by mapping people, processes, and systems end to end. We identify where execution breaks down, where risk hides, and where ownership or visibility is unclear. The result is a decision grade view of operational risk, and a clear, prioritized & actionable remediation plan you can execute internally or with partners before incidents force action.',
    price: '€15000',
    items: [
      'Kickoff to confirm scope, goals, process walkthrough',
      'Interviews with key people across the workflow',
      'On-site walkthroughs to see how work is actually done',
      'Review of operational reports and historical incidents',
      'Mapping of handoffs, ownership, and system touchpoints end to end',
      'Prioritization sessions',
    ],
    deliverables: [
      'End-to-end flow maps',
      'Handoff matrix and exception overlay',
      'Risk register with scoring and owners',
      '30/60/90 day actionable remediation plan',
      'Executive readout deck',
      'Board-ready one-page memo'    
    ]
  },
  {
    title: 'End-to-end integration design & implementation',
    key: 'Integration',
    description: 'We design and implement integrations that ensure data is reliable, complete, and consistent across your application landscape. By connecting systems end to end, we eliminate gaps, reduce manual workarounds, and establish a single source of truth with a clear audit trail. Built-in observability ensures issues are detected early, often before users or customers notice, supporting stable day-to-day operations in complex and regulated environments.',
    price: '€10000',
    items: [
      'Review of all systems involved and how they currently exchange data',
      'Agreement on what data “source of truth” is for key records',
      'Design of interfaces and data mappings between systems',
      'Implementation in small steps with testing after each step',
      'End-to-end testing including main exceptions and failure cases',
      'Setup of monitoring so issues are detected early',
      'Handover documentation so teams can operate and troubleshoot',
    ],
    deliverables: [
      'Integration architecture and system map',
      'Specification and data mapping',
      'Production-ready integrations',
      'Automated end-to-end tests',
      'Monitoring dashboards and alerts',
      'Handover documentation',
    ]
  },
  {
    title: 'Software architecture assessment & future-readiness advisory',
    key: 'Architecture',
    description: 'We assess your current software architecture with a focus on scalability, maintainability, security, and long-term fit. We identify structural risks, technical debt, and growth blockers, then provide clear, pragmatic recommendations to evolve your systems without unnecessary rewrites. The goal is a future-ready architecture that supports business change, integrations, and reliable operations over time.',
    price: '€10 000',
    items: [
      'Review of the current system structure and key dependencies',
      'Assessment of scalability, maintainability, reliability, and security',
      'Identification of high-risk areas and technical debt that slows delivery',
      'Workshop to discuss options and trade-offs (improve, refactor, split, replace)',
      'Clear recommendations focused on avoiding unnecessary rewrites',
      'A step-by-step roadmap for what to do next',
    ],
    deliverables: [
      'Architecture and dependency map',
      'Risk and technical debt register',
      'Scalability and maintainability findings',
      'Future options and recommendations',
      'Improvement roadmap and priorities',
      'Decision memo for leadership',      
    ]
  },
  {
    title: 'System observability setup and improvement',
    key: 'System',
    description: 'We design or improve observability so teams can see how workflows, integrations, and systems behave in real life. By making data flows, failures, and bottlenecks visible end to end, we help teams detect issues earlier, reduce downtime, and improve traceability across operations.',
    price: '€5000',
    items: [
      'Review of what you can see today and where visibility is missing',
      'Agreement on the most important workflows to track end to end',
      'Plan for what to measure and how to connect events across systems',
      'Setup or improvement of dashboards for workflow and system health',
      'Alert rules so issues reach the right people fast',
      'Clear procedures for incident response and troubleshooting',
    ],
    deliverables: [
      'Visibility gap assessment',
      'Workflow monitoring plan',
      'Dashboards for flow and health',
      'Alert rules and escalation paths',
      'Incident and troubleshooting playbooks',
      'Operational reporting template',      
    ]
  },
  {
    title: 'Compliance & Security',
    key: 'Security',
    description: 'We perform pragmatic security and compliance risk assessments focused on real operational impact. We identify and classify risks across machines, systems, data flows, and integrations, then deliver clear, prioritized recommendations that are practical to implement. Each step produces concrete deliverables that support audit readiness, security posture, and confidence in everyday operations.',
    price: '€7500',
    items: [
      'Inventory of key systems, users, and data flows',
      'Review of access control and sensitive data movement',
      'Assessment of real security risks that can disrupt operations',
      'Prioritized recommendations that are practical to implement',
      'Audit readiness support with an evidence checklist and gap list',
      'Optional incident simulation to test response readiness',      
    ],
    deliverables: [
      'System and data flow inventory',
      'Security risk register and priorities',
      'Practical improvement plan',
      'Audit readiness checklist',
      'Security hardening checklist',
      'Optional incident simulation summary',
    ]
  }
];