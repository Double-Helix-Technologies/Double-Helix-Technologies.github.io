import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getClientSolutionBySlug, getClientSolutionPath } from '@/app/data/work';

/** The one named case shown directly under the hero. Its figures and quote come from work.ts. */
export const FEATURED_CASE_SLUG = 'process-automation-lims-integration';

/**
 * Named client proof, visible without any interaction and without decoration: a heading, one
 * sentence, three figures, the attributed quote and a link. Everything is read from work.ts.
 */
export default function ClientProof() {
  const solution = getClientSolutionBySlug(FEATURED_CASE_SLUG);
  if (!solution?.client) return null;

  return (
    <section id="client-proof" className="section bg-background-alt" aria-labelledby="client-proof-heading">
      <div className="container-tight flex flex-col gap-10 md:gap-12">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
            Client case, {solution.client.name}
          </p>
          <h2 id="client-proof-heading" className="section-heading mb-5">
            From seven data entry points to one
          </h2>
          <p className="text-lg leading-relaxed text-text-secondary">{solution.summary}</p>
        </div>

        <dl className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          {solution.highlightStats.map((stat) => (
            <div key={stat.label} className="border-t border-divider pt-5">
              <dd className="text-4xl font-semibold text-text-primary md:text-5xl">{stat.value}</dd>
              <dt className="mt-2 text-text-secondary">{stat.label}</dt>
            </div>
          ))}
        </dl>

        {solution.quote && (
          <figure className="max-w-3xl">
            <blockquote className="text-xl leading-relaxed text-text-primary md:text-2xl">
              {`“${solution.quote.text}”`}
            </blockquote>
            <figcaption className="mt-4 text-sm text-text-secondary">{solution.quote.attribution}</figcaption>
          </figure>
        )}

        <Link
          href={getClientSolutionPath(solution)}
          className="inline-flex items-center gap-1 font-medium text-text-primary underline-offset-4 hover:underline"
        >
          Read the full case study
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
