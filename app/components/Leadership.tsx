import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AvatarPlaceholder from '@/app/components/ui/avatarPlaceholder';
import { leadershipTeam, type TeamMember } from '@/app/data/team';

/** The opening sentence of the biography, so the entry stays short. Full text is on /team/. */
function firstSentence(text: string) {
  const match = text.match(/^.*?\.(?=\s|$)/);
  return match ? match[0] : text;
}

function Avatar({ person }: { person: TeamMember }) {
  return person.image ? (
    <Image
      src={person.image}
      alt={`${person.name} ${person.lastName ?? ''}`.trim()}
      width={64}
      height={64}
      className="h-16 w-16 shrink-0 rounded-full bg-background-alt object-cover object-center"
    />
  ) : (
    <AvatarPlaceholder aria-hidden="true">{person.name[0]}</AvatarPlaceholder>
  );
}

/**
 * Leadership on the homepage. Names, roles and biographies come from `app/data/team.ts`; the
 * framing sentences are the ones already published on /team/.
 *
 * Team size: "around 20" was added at the owner's request on 14 September 2026. It matches the
 * sales deck ("team of 20") and the LIAA company profile (20 employees).
 * OWNER: confirm the figure stays right as the team changes; it is stated only here. No single
 * named delivery lead is stated on the site; add one only if confirmed.
 */
export default function Leadership() {
  return (
    <section id="leadership" className="section bg-background-alt" aria-labelledby="leadership-heading">
      <div className="container-tight grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="max-w-md lg:col-span-2">
          <h2 id="leadership-heading" className="section-heading mb-5">
            A small senior team for complex problems.
          </h2>
          <p className="text-lg text-text-secondary">
            A team of around 20, led by the four people here. You work directly with the people building your
            solution. Based in Riga, working with customers across Europe and North America.
          </p>
          <Link
            href="/team/"
            className="mt-6 inline-flex items-center gap-1 font-medium text-text-primary underline-offset-4 hover:underline"
          >
            Meet the rest of the team
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid gap-8 sm:grid-cols-2 lg:col-span-3">
          {leadershipTeam.map((person) => (
            <li key={`${person.name}-${person.lastName ?? ''}`} className="flex gap-4">
              <Avatar person={person} />
              <div className="min-w-0">
                <h3 className="font-semibold leading-tight text-text-primary">
                  {person.name} {person.lastName}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">{person.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{firstSentence(person.description)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
