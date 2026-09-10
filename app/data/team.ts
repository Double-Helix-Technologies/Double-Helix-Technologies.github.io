type TeamMember = {
  name: string;
  lastName?: string;
  role: string;
  description: string;
  image?: string;
  email?: string;
};

const leadershipTeam: TeamMember[] = [
  {
    name: 'Armands',
    lastName: 'Baranovskis',
    role: 'Chief Executive Officer',
    description:
      '20+ years of experience in digital transformation, management and process improvement across banking, telco, insurance, life sciences, logistics and the public sector. Former guest lecturer at Riga Technical University and co-author and educator of a RISEBA programme on Agile, Scrum, Lean and Kanban.',
    image: '/images/team/armands.jpg',
    email: 'armands.baranovskis@doublehelix.dev'
  },
  {
    name: 'Aleksandrs',
    lastName: 'Gusevs',
    role: 'Chief Strategy & Business Development Officer',
    description:
      '13 years of building software and leading engineering teams. Strong in architecture, integrations, automation and reliable systems — from APIs and delivery to DevOps, SRE and observability. Deep experience in genomics, diagnostics and digital health.',
    image: '/images/team/aleksandrs.jpg',
    email: 'aleksandrs.gusevs@doublehelix.dev'
  },
  {
    name: 'Valts',
    lastName: 'Mazurs',
    role: 'Chief Technology Officer',
    description:
      '23 years of experience across software, security and architecture. Leads IT security and architecture audits, designs critical systems, maps complex technology landscapes, and provides technical leadership to development teams.',
    image: '/images/team/valts.jpg',
    email: ''
  },
  {
    name: 'Aleksandra',
    lastName: 'Romanovska',
    role: 'Chief Operating Officer',
    description:
      '15+ years of experience across business operations, organizational transformation, people and technology. Established and scaled two IT delivery centers in Latvia, built operational functions from the ground up, and led organizational change, restructuring and process improvement across international teams.',
    image: '/images/team/aleksandra.png',
    email: ''
  }
];

export {
  leadershipTeam
};

export type { TeamMember };
