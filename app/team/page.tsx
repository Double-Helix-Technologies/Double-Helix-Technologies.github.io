'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Asterisk, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Navigation from '@/app/components/Navigation';
import { ThemeProvider } from '../components/ThemeProvider';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/app/components/ui/breadcrumb';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import AvatarPlaceholder from '@/app/components/ui/avatarPlaceholder';

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
    email: ''
  },
  {
    name: 'Aleksandrs',
    lastName: 'Gusevs',
    role: 'Chief Strategy & Business Development Officer',
    description: 'Drives growth through strategy, partnerships, and meaningful client relationships.',
    image: '/images/team/aleksandrs.jpg',
    email: ''
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
    name: 'Jānis',
    role: 'Software Engineer',
    description: 'Full-stack developer with expertise in cloud architecture',
    image: '',
    email: ''
  },
  {
    name: 'Lauris',
    role: 'Software Engineer',
    description: 'Full-stack developer with expertise in complex systems',
    image: '',
    email: ''
  },
  {
    name: 'Murathan',
    role: 'DevSecOps Engineer',
    description: 'Infrastructure and automation specialist',
    image: '',
    email: ''
  },
  {
    name: 'Gints',
    role: 'System Administrator',
    description: 'Ensuring smooth operations of our and your infrastructure',
    image: '',
    email: ''
  },
  {
    name: 'Santa',
    role: 'Business Analyst',
    description: 'Bridging business needs with technical solutions',
    image: '',
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
    name: 'Dmitrijs',
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
  }
];

export default function TeamPage() {

  const breadcrumb = <Breadcrumb className="mb-4">
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href="/">Home</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <ChevronRight/>
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href="/team">About us</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>;

  const avatarTeam = (person: TeamMember) => {
    return person.image ? (
      <Image
        src={person.image}
        alt={person.name}
        width={64}
        height={64}
        className="h-16 w-16 rounded-full object-cover object-center bg-primary border-0 flex-shrink-0"
        priority={false}
      />
    ) : (
      <AvatarPlaceholder>{person.name[0]}</AvatarPlaceholder>
    );
  };

  const TeamMemberCard = ({ person }: { person: TeamMember }) => (

    <Card className="bg-background">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center mb-5">
            {avatarTeam(person)}
            <div className="ml-4 space-y-2 min-w-0">
              <h3>{person.name}</h3>
              {person.lastName && <h3>{person.lastName}</h3>}
            </div>
          </div>
        </CardTitle>
        <CardDescription className="text-xs">
          {person.role}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-text-secondary">{person.description}</p>
      </CardContent>
      <CardFooter className="text-sm flex flex-col">
        {person.email}
      </CardFooter>
    </Card>
  );

  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Navigation/>
        <section id="team" className="top-section bg-gradient-to-t from-background-alt to-background pb-5">
          <div className="container-tight">
            <div className="flex flex-col gap-6 mb-6 max-w-3xl">
              {breadcrumb}
              <h1 className="text-5xl text-text-primary text-left mb-5 max-w-3xl">
                People of Double Helix
              </h1>
              <p>
                Double Helix is a senior, lean engineering team based in Latvia.
              </p>
              <ul className="space-y-2">
                {[
                  'Multilingual engineers proficient in modern frameworks.',
                  'Business‑minded, proactive problem solvers with ownership.',
                  'Agile teams that integrate seamlessly with client stakeholders.'
                ].map((v) => (
                  <li key={v} className="flex gap-2"><Asterisk
                    className="h-6 w-7 flex-shrink-0"/>{v}</li>
                ))}
              </ul>
            </div>

            <h2 className="text-3xl md:text-4xl my-16">The Founding Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4">
              {leadershipTeam.map((person) => (
                <TeamMemberCard key={person.name} person={person}/>
              ))}
            </div>

              <h2 className="text-3xl md:text-4xl my-16">Our Tech Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {coreTeam.map((person) => (
                  <TeamMemberCard key={person.name} person={person}/>
                ))}
              </div>
          </div>
        </section>
        <Footer/>
      </main>
    </ThemeProvider>
  );
}