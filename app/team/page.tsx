import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { ChevronRight, Linkedin, Mail } from 'lucide-react';
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
import { partners } from '@/app/data/partners';
import Wordmark from '@/app/components/Wordmark';
import { buildMetadata, siteConfig } from '../lib/seo';
import { complianceStatement } from '@/app/components/ComplianceNotice';


export const metadata: Metadata = buildMetadata({
  title: 'About us',
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

        <section id="about-us" className="top-section bg-gradient-to-t from-background-alt to-background pb-10">
          <div className="container-tight">
            <div className="flex flex-col gap-6 mb-6 max-w-3xl">
              {breadcrumb}
              <h1 className="section-heading mb-5 max-w-3xl">
                A small senior team for complex problems.
              </h1>
              <p>
                We help life sciences companies simplify workflows, connect systems and build software that
                makes operations easier.
              </p>
              <p>
                Based in Europe, we work with customers across Europe and North America. Our senior team works
                closely with each customer, combining deep expertise with a hands-on approach from problem to
                solution.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl mt-16 mb-3">The people behind the work</h2>
            <p className="text-text-secondary mb-8">You work directly with the people building your solution.</p>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4">
              {leadershipTeam.map((person, index) => (
                <TeamMemberCard key={`${person.name}-${index}`} person={person}/>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://www.linkedin.com/company/double-helix-technologies/people/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary"
              >
                <Linkedin size={20}/>
                Meet the whole team
              </a>
            </div>

            <h2 className="text-3xl md:text-4xl mt-16 mb-3">Part of something bigger</h2>
            <p className="text-text-secondary mb-8">
              Memberships in Latvia&apos;s health tech and business communities, and partners we work alongside.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {partners.map((affiliation) => (
                <a
                  key={affiliation.name}
                  href={affiliation.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={affiliation.name}
                  className="flex h-28 items-center justify-center rounded-xl border border-[var(--border)]/20 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  {affiliation.logo && (
                    <Image
                      src={affiliation.logo}
                      alt={affiliation.wordmark ? '' : affiliation.name}
                      width={affiliation.logoWidth ?? 160}
                      height={affiliation.logoHeight ?? 48}
                      className={affiliation.wordmark ? 'h-10 w-auto object-contain' : 'h-full w-full object-contain'}
                    />
                  )}
                  {affiliation.wordmark && <Wordmark segments={affiliation.wordmark} tone="plain" className="ml-3 text-2xl" />}
                </a>
              ))}
            </div>

            {/* Small print: company details and the approved ISO wording (complianceStatement), side by side. */}
            <div className="mt-16 grid gap-8 border-t border-divider pt-8 text-sm text-text-secondary md:grid-cols-2 md:gap-12">
              <div className="space-y-1">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-text-primary">Company details</h2>
                <p className="pt-2 font-medium text-text-primary">{siteConfig.legalName}</p>
                <p>
                  Registered office: {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality},{' '}
                  {siteConfig.address.postalCode}, Latvia
                </p>
                <p>Registration number 50203351951, VAT LV50203351951</p>
                <p>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-text-primary">
                    {siteConfig.email}
                  </a>
                  {', '}
                  <a href="tel:+37129636428" className="hover:text-text-primary">
                    +371 29636428
                  </a>
                </p>
                <p className="pt-1">
                  <Link href="/notice/" className="underline underline-offset-4 hover:text-text-primary">
                    Full legal notice
                  </Link>
                </p>
              </div>
              <div className="space-y-1">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-text-primary">Quality and information security</h2>
                <p className="pt-2 font-medium text-text-primary">{complianceStatement.heading}</p>
                <p>{complianceStatement.body}</p>
              </div>
            </div>
          </div>
        </section>

        <Footer/>
      </main>
    </ThemeProvider>
  );
}
