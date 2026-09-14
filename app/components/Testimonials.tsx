import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AvatarPlaceholder from '@/app/components/ui/avatarPlaceholder';
import { clientSolutions, getPublishedQuotes } from '@/app/data/work';

/** "Name, role, organisation (note)" is shown as a name line and a role line. */
function splitAttribution(attribution: string) {
  const separator = attribution.indexOf(',');
  if (separator === -1) return { name: attribution, role: '' };
  return {
    name: attribution.slice(0, separator).trim(),
    role: attribution.slice(separator + 1).trim()
  };
}

/**
 * Client quotes, read from the case studies in `app/data/work.ts` through `getPublishedQuotes()`
 * so text and attribution cannot drift from the /work/ pages. Shown as a static grid rather than a
 * carousel: every quote is visible without interaction, and each links to the case it came from.
 */
export default function Testimonials() {
  const quotes = getPublishedQuotes();
  const clientNames = Array.from(new Set(quotes.map((quote) => quote.clientName).filter(Boolean)));
  const singleClient = clientNames.length === 1 ? clientNames[0] : undefined;
  const casesForClient = clientSolutions.filter((solution) => solution.client?.name === singleClient).length;

  return (
    <section id="testimonials" className="section">
      <div className="container-tight">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
            Client evidence
          </p>
          <h2 className="section-heading mb-5">In our clients&apos; words</h2>
          {singleClient ? (
            <p className="text-text-secondary">
              All {quotes.length} quotes below come from people at {singleClient}, where we delivered {casesForClient} of
              the {clientSolutions.length} client cases published on this site. Read them as depth within one client
              group rather than as {quotes.length} independent customers. Our other cases are published without the client&apos;s name;{' '}
              <Link href="/work/" className="underline underline-offset-4 hover:text-text-primary">
                references are available on request
              </Link>
              .
            </p>
          ) : (
            <p className="text-text-secondary">
              Quotes are shown with the name, role and organisation approved for publication.{' '}
              <Link href="/work/" className="underline underline-offset-4 hover:text-text-primary">
                References are available on request
              </Link>
              .
            </p>
          )}
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 items-start">
          {quotes.map((quote) => {
            const { name, role } = splitAttribution(quote.attribution);
            return (
              <li key={quote.slug} className="h-full">
                <figure className="flex h-full flex-col gap-5 rounded-2xl border border-border/30 bg-background-alt/60 p-6 md:p-8">
                  <blockquote className="flex flex-col gap-4">
                    <p className="text-xl font-semibold leading-snug text-text-primary md:text-2xl">
                      {`“${quote.tagline}”`}
                    </p>
                    {quote.body && (
                      <p className="text-text-secondary leading-relaxed">{quote.body}</p>
                    )}
                  </blockquote>
                  <figcaption className="mt-auto flex flex-col gap-4 border-t border-border/30 pt-5">
                    <div className="flex items-center gap-4">
                      <AvatarPlaceholder aria-hidden="true">{name[0]}</AvatarPlaceholder>
                      <div className="min-w-0">
                        <p className="font-medium text-text-primary">{name}</p>
                        {role && <p className="text-xs text-text-secondary">{role}</p>}
                      </div>
                    </div>
                    <Link
                      href={quote.casePath}
                      className="inline-flex items-center gap-1 text-sm font-medium text-text-primary underline-offset-4 hover:underline"
                    >
                      Read the case: {quote.caseTitle}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
