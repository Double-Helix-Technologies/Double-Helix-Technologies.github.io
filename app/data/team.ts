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
    role: 'Chief Information Officer',
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

const coreTeam = [
  {
    name: 'Santa',
    role: 'Product Owner',
    description: '', //'Experienced software development project management, product owner, professional, and team lead',
    image: '', //'/images/team/santa.jpg',
    email: ''
  },  
  {
    name: 'Agnis',
    role: 'Software Engineer',
    description: '',
    image: '',
    email: ''
  },  
  {
    name: 'Agris',
    role: 'Software Engineer',
    description: '',
    image: '',
    email: ''
  },  
  {
    name: 'Tamāra',
    role: 'Solution Architect',
    description: '',
    image: '',
    email: ''
  },
  {
    name: 'Anastasia',
    role: 'Software Engineer',
    description: '',
    image: '',
    email: ''
  },
  {
    name: 'Jānis',
    role: 'Software Engineer',
    description: '', //'Full-stack engineer, particularly specialized on AI adoption',
    image: '',
    email: ''
  },
  {
    name: 'Gints',
    role: 'System Administrator',
    description: '', //'Ensuring smooth operations of our and your infrastructure',
    image: '',
    email: ''
  },
  {
    name: 'Marts',
    role: 'Software Reliability Engineer',
    description: '',
    image: '',
    email: ''
  },
  {
    name: 'Harijs',
    role: 'Software Engineer',
    description: '',
    image: '',
    email: ''
  },
  {
    name: 'Lauris',
    role: 'Software Engineer',
    description: '', //'Full-stack developer with expertise in complex systems',
    image: '',
    email: ''
  },
  {
    name: 'Murathan',
    role: 'DevSecOps Engineer',
    description: '', //'Building resilient infrastructure with a security-first mindset',
    image: '',
    email: ''
  },
  {
    name: 'Jānis',
    role: 'Software Engineer',
    description: '',
    image: '',
    email: ''
  },
  {
    name: 'Konstantins',
    role: 'System Administrator',
    description: '',
    image: '',
    email: ''
  }
];

export {
  leadershipTeam,
  coreTeam
};

export type { TeamMember };
