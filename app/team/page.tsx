'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Asterisk, ChevronRight, Mail } from 'lucide-react';
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
import { coreTeam, leadershipTeam, TeamMember } from '@/app/data/team';

const getAvatar = (person: TeamMember) => {
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
          {getAvatar(person)}
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
    <CardFooter className="flex flex-col">
      {person.email && <a href={`mailto:${person.email}`}><Mail size={20}/></a>}
    </CardFooter>
  </Card>
);

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

  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Navigation/>

        <section id="team" className="top-section bg-gradient-to-t from-background-alt to-background pb-10">
          <div className="container-tight">
            <div className="flex flex-col gap-6 mb-6 max-w-3xl">
              {breadcrumb}
              <h1 className="section-heading mb-5 max-w-3xl">
                Our People
              </h1>
              <p>
                Double Helix Technologies is a senior, lean engineering team based in Latvia.
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

            <h2 className="text-3xl md:text-4xl my-16">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4">
              {[...leadershipTeam, ...coreTeam].map((person) => (
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