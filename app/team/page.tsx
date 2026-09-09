import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { ChevronRight, Mail } from 'lucide-react';
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
import { leadershipTeam, TeamMember } from '@/app/data/team';
import { buildMetadata } from '../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Team',
  description:
    'Get to know the senior engineering and consulting team behind Double Helix Technologies and our work in life sciences and healthcare IT.',
  path: '/team/',
  keywords: ['healthcare software team', 'life sciences engineering team']
});

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
                A small senior team solving complex problems.
              </h1>
              <p>
                We help life sciences companies simplify complicated workflows, connect fragmented systems and build
                software that makes operations easier.
              </p>
              <p>
                We’re a lean team of engineers, architects and problem-solvers. We stay close to the work, from
                understanding the problem to building and improving the solution.
              </p>

              <h2 className="text-3xl md:text-4xl mb-3">What we believe</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Understand before building',
                    description: 'We start with the workflow, not the technology.'
                  },
                  {
                    title: 'Simplify before automating',
                    description: 'There’s no point automating a broken process.'
                  },
                  {
                    title: 'Reuse before reinventing',
                    description: 'We use existing systems where they make sense and build only what’s missing.'
                  },
                  {
                    title: 'Build for the long term',
                    description: 'Reliable, maintainable software matters more than impressive demos.'
                  }
                ].map((belief) => (
                  <Card key={belief.title} className="bg-background">
                    <CardHeader>
                      <CardTitle>{belief.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-secondary">{belief.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl my-16">Core Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4">
              {leadershipTeam.map((person, index) => (
                <TeamMemberCard key={`${person.name}-${index}`} person={person}/>
              ))}
            </div>
          </div>
        </section>

        <Footer/>
      </main>
    </ThemeProvider>
  );
}
