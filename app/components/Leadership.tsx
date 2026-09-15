import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import AvatarPlaceholder from '@/app/components/ui/avatarPlaceholder';
import { leadershipTeam, type TeamMember } from '@/app/data/team';
import { SectionBackdrop } from './ui/section-backdrop';

function Avatar({ person }: { person: TeamMember }) {
  return person.image ? (
    <Image
      src={person.image}
      alt={`${person.name} ${person.lastName ?? ''}`.trim()}
      width={128}
      height={128}
      className="h-24 w-24 shrink-0 rounded-full bg-background-alt object-cover object-center lg:h-32 lg:w-32"
    />
  ) : (
    <AvatarPlaceholder aria-hidden="true">{person.name[0]}</AvatarPlaceholder>
  );
}

/**
 * Leadership on the homepage: the four people, each with photo, role and the full biography from
 * `app/data/team.ts` (the same text as on /team/; the owner asked for the complete biographies here
 * on 14 September 2026). The framing sentences are the ones already published on /team/. "Meet the rest
 * of the team" goes to the company's LinkedIn people page, as on /team/ (owner request, 15 September 2026).
 *
 * Team size: "around 20" was added at the owner's request on 14 September 2026. It matches the
 * sales deck ("team of 20") and the LIAA company profile (20 employees).
 * OWNER: confirm the figure stays right as the team changes; it is stated only here. No single
 * named delivery lead is stated on the site; add one only if confirmed.
 */
export default function Leadership() {
  return (
    <section
      id="leadership"
      className="section relative isolate overflow-hidden bg-background-alt lg:flex lg:min-h-[100svh] lg:items-center"
      aria-labelledby="leadership-heading"
    >
      <SectionBackdrop variant="glow" />
      <div className="container-tight w-full">
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <h2 id="leadership-heading" className="section-heading mb-5 text-balance lg:text-6xl">
              A small senior team for complex problems.
            </h2>
            <p className="text-lg text-text-secondary md:text-xl">
              A team of around 20, led by the four people here. You work directly with the people building your
              solution. Based in Riga, working with customers across Europe and North America.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/company/double-helix-technologies/people/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 font-medium text-text-primary underline-offset-4 hover:underline"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
            Meet the rest of the team
          </a>
        </div>

        <ul className="grid gap-10 md:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
          {leadershipTeam.map((person) => (
            <li key={`${person.name}-${person.lastName ?? ''}`} className="flex flex-col gap-5 sm:flex-row sm:gap-6">
              <Avatar person={person} />
              <div className="min-w-0">
                <h3 className="text-xl font-semibold leading-tight text-text-primary lg:text-2xl">
                  {person.name} {person.lastName}
                </h3>
                <p className="mt-1 text-text-secondary">{person.role}</p>
                <p className="mt-3 leading-relaxed text-text-secondary">{person.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
