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
    description: 'Keeps us aligned, focused, and moving in the right direction.',
    image: '/images/team/armands.jpg',
    email: 'armands.baranovskis@doublehelix.dev'
  },
  {
    name: 'Aleksandrs',
    lastName: 'Gusevs',
    role: 'Chief Strategy & Business Development Officer',
    description: 'Drives growth through strategy, partnerships, and meaningful client relationships.',
    image: '/images/team/aleksandrs.jpg',
    email: 'aleksandrs.gusevs@doublehelix.dev'
  },
  {
    name: 'Valts',
    lastName: 'Mazurs',
    role: 'Chief Technology Officer',
    description: 'Connects the dots between business needs and smart tech choices.',
    image: '/images/team/valts.jpg',
    email: ''
  },
  {
    name: 'Aleksandra',
    lastName: 'Romanovska',
    role: 'Chief Operating Officer',
    description: 'Ensures smooth operations and delivery across teams and engagements.',
    image: '/images/team/aleksandra.png',
    email: ''
  }
];

export {
  leadershipTeam
};

export type { TeamMember };
