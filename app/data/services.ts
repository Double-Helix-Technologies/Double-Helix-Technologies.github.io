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
    title: 'End-to-end integration design & implementation',
    key: 'Integration',
    description: 'We ensure that data is reliable, complete, and consistent across your entire application landscape. ' +
      'By implementing integrations end-to-end, we eliminate gaps between systems, establish a single source of truth, ' +
      'and provide a unified, auditable view of operations. Built-in observability ensures that issues ' +
      'are detected early - often before users or customers notice, ensuring stable day-to-day operations in regulated environments.',
    price: '€9000',
    items: [
      'Review of existing systems',
      'Operation audit',
      'Another item',
      'Fourth item audit',
    ],
    deliverables: [
      'Integration design',
      'Deliverable 2',
      'Deliverable 3',
      'Deliverable 4',
      'Deliverable 5',
    ]
  },
  {
    title: 'Software architecture assessment & future-readiness advisory',
    key: 'Architecture',
    description: 'We assess your current software architecture with a focus on scalability, maintainability, security, ' +
      'and regulatory fit. We identify structural risks, technical debt, and growth blockers, then provide clear, ' +
      'pragmatic recommendations to evolve the system without unnecessary rewrites. ' +
      'The goal is a future-ready architecture that supports business change, integrations, and long-term operations.',
    price: '€10 000',
    items: [],
    deliverables: []
  },
  {
    title: 'System observability setup or improvement',
    key: 'System',
    description: 'We design or improve system observability to give teams clear, actionable insight into workflows, ' +
      'integrations, and system health. By making data flows, failures, and bottlenecks visible end-to-end, ' +
      'we help laboratories detect issues earlier, reduce downtime, and improve traceability.',
    price: '€9000',
    items: [],
    deliverables: []
  },
  {
    title: 'Compliance & Security',
    key: 'Security',
    description: 'A pragmatic cyber-security risk assessment focused on real operational impact. ' +
      'We identify and classify risks across machines, systems, data flows, and integrations, then deliver clear, ' +
      'prioritized recommendations that are practical to implement. The result is improved security posture, ' +
      'audit readiness, and confidence in everyday operations. Each step is a deliverable.',
    price: '€8000',
    items: [],
    deliverables: []
  }
];