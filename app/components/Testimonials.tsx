import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { clientSolutions, getPublishedQuotes } from '@/app/data/work';

/**
 * Client quotes, read from the case studies in `app/data/work.ts` through `getPublishedQuotes()`
 * so text and attribution cannot drift from the /work/ pages. Plain quotes in two columns; every
 * quote is visible without interaction and links to the case it came from.
 */
export default function Testimonials() {
  const quotes = getPublishedQuotes();
  const clientNames = Array.from(new Set(quotes.map((quote) => quote.clientName).filter(Boolean)));
  const singleClient = clientNames.length === 1 ? clientNames[0] : undefined;
  const casesForClient = clientSolutions.filter((solution) => solution.client?.name === singleClient).length;

  return (
    <section id="testimonials" className="section bg-background">
      <div className="container-tight">
        <div className="mb-12 max-w-2xl">
          <h2 className="section-heading mb-5">In our clients&apos; words</h2>
          {singleClient ? (
            <p className="text-lg text-text-secondary">
              All {quotes.length} quotes are from {singleClient}, where we delivered {casesForClient} of our{' '}
              {clientSolutions.length} published cases: depth with one client group, not {quotes.length} separate
              customers.
            </p>
          ) : (
            <p className="text-lg text-text-secondary">
              Quotes are shown with the name, role and organisation approved for publication.
            </p>
          )}
        </div>

        <ul className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {quotes.map((quote) => (
            <li key={quote.slug} className="border-t border-divider pt-6">
              <figure>
                <blockquote>
                  <p className="text-xl font-semibold leading-snug text-text-primary">{`“${quote.tagline}”`}</p>
                  {quote.body && <p className="mt-3 leading-relaxed text-text-secondary">{quote.body}</p>}
                </blockquote>
                <figcaption className="mt-4 text-sm text-text-secondary">
                  <p>{quote.attribution}</p>
                  <Link
                    href={quote.casePath}
                    className="mt-1 inline-flex items-center gap-1 text-text-primary underline-offset-4 hover:underline"
                  >
                    Read the case: {quote.caseTitle}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
