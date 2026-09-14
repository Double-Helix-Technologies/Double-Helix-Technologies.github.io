import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AvatarPlaceholder from '@/app/components/ui/avatarPlaceholder';
import { leadershipTeam, type TeamMember } from '@/app/data/team';

/** The opening sentence of the biography, so the card stays compact. Full text is on /team/. */
function firstSentence(text: string) {
  const match = text.match(/^.*?\.(?=\s|$)/);
  return match ? match[0] : text;
}

function Avatar({ person }: { person: TeamMember }) {
  return person.image ? (
    <Image
      src={person.image}
      alt={`${person.name} ${person.lastName ?? ''}`.trim()}
      width={56}
      height={56}
      className="h-14 w-14 shrink-0 rounded-full bg-primary object-cover object-center"
    />
  ) : (
    <AvatarPlaceholder aria-hidden="true">{person.name[0]}</AvatarPlaceholder>
  );
}

/**
 * Compact leadership block. Names, roles and biographies come from `app/data/team.ts`; the
 * framing sentences are the ones already published on /team/.
 *
 * OWNER: Team size is not stated anywhere on the site and is treated as unconfirmed, so this
 * block describes a small senior team without a number. If a headcount is to be published,
 * confirm it and add it here and on /team/. Likewise, no single named delivery lead is stated on
 * the site; add one here only if the owner confirms who leads delivery on client engagements.
 */
export default function Leadership() {
  return (
    <section id="leadership" className="section bg-background" aria-labelledby="leadership-heading">
      <div className="container-tight">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="flex flex-col gap-5 lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
              Who you work with
            </p>
            <h2 id="leadership-heading" className="section-heading">
              A small senior team for complex problems.
            </h2>
            <p className="text-text-secondary">
              You work directly with the people building your solution. Our senior team works closely with each
              customer, combining deep expertise with a hands-on approach from problem to solution.
            </p>
            <p className="text-text-secondary">
              Double Helix Technologies SIA is based in Riga, Latvia, and works with customers across Europe and
              North America.
            </p>
            <Link
              href="/team/"
              className="inline-flex items-center gap-1 text-sm font-medium text-text-primary underline-offset-4 hover:underline"
            >
              Meet the leadership team
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {leadershipTeam.map((person) => (
              <li key={`${person.name}-${person.lastName ?? ''}`}>
                <article className="flex h-full flex-col gap-4 rounded-2xl border border-border/30 bg-background-alt/60 p-5">
                  <div className="flex items-center gap-4">
                    <Avatar person={person} />
                    <div className="min-w-0">
                      <h3 className="font-semibold leading-tight text-text-primary">
                        {person.name} {person.lastName}
                      </h3>
                      <p className="mt-1 text-xs text-text-secondary">{person.role}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">{firstSentence(person.description)}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
