import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { getClientSolutionBySlug, getClientSolutionPath } from '@/app/data/work';

/** The one named case shown directly under the hero. Its figures and quote come from work.ts. */
export const FEATURED_CASE_SLUG = 'process-automation-lims-integration';

/**
 * Named client proof, visible without any carousel interaction. Everything rendered here is read
 * from `app/data/work.ts`: the problem, the summary, the three highlight figures with their
 * operational context, the engagement facts and the attributed quote.
 */
export default function ClientProof() {
  const solution = getClientSolutionBySlug(FEATURED_CASE_SLUG);
  if (!solution?.client) return null;

  const path = getClientSolutionPath(solution);

  return (
    <section
      id="client-proof"
      className="section bg-gradient-to-b from-background to-background-alt"
      aria-labelledby="client-proof-heading"
    >
      <div className="container-tight">
        <div className="rounded-3xl border border-border/30 bg-background/70 p-6 md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
            <div className="flex flex-col gap-5 lg:col-span-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-blue">
                Client case: {solution.client.name}
              </p>
              <h2 id="client-proof-heading" className="text-3xl text-text-primary md:text-4xl">
                Connected NGS operations at {solution.client.name}
              </h2>
              <p className="leading-relaxed text-text-secondary">{solution.problem}</p>
              <p className="leading-relaxed text-text-primary">{solution.summary}</p>

              {solution.engagementFacts && solution.engagementFacts.length > 0 && (
                <dl className="grid gap-3 text-sm sm:grid-cols-2">
                  {solution.engagementFacts.map((fact) => (
                    <div key={fact.label} className="rounded-xl border border-border/30 px-4 py-3">
                      <dt className="text-xs uppercase tracking-[0.14em] text-text-secondary">{fact.label}</dt>
                      <dd className="mt-1 font-medium text-text-primary">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <div className="pt-1">
                <Button variant="secondary" asChild>
                  <Link href={path}>
                    Read the full case study
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            <ul className="flex flex-col gap-4 lg:col-span-2" aria-label="Results">
              {solution.highlightStats.map((stat) => (
                <li key={stat.label} className="rounded-2xl border border-border/30 bg-background-alt/80 p-5">
                  <p className="text-3xl font-bold text-accent-blue md:text-4xl">{stat.value}</p>
                  <p className="mt-1 font-medium text-text-primary">{stat.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{stat.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          {solution.quote && (
            <figure className="mt-10 border-t border-border/30 pt-8">
              <blockquote className="max-w-4xl text-lg leading-relaxed text-text-primary md:text-xl">
                {`“${solution.quote.text}”`}
              </blockquote>
              <figcaption className="mt-4 text-sm text-text-secondary">{solution.quote.attribution}</figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
