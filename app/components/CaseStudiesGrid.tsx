import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { clientSolutions, getClientSolutionPath } from '@/app/data/work';
import { FEATURED_CASE_SLUG } from './ClientProof';

/**
 * The remaining client cases as a static grid: no carousel, no auto-advance, and every figure is
 * the final figure in the server-rendered HTML. Reads the same data as /work/ so nothing drifts.
 */
export default function CaseStudiesGrid() {
  const cases = clientSolutions.filter((solution) => solution.slug !== FEATURED_CASE_SLUG);
  const namedClients = Array.from(new Set(cases.map((solution) => solution.client?.name).filter(Boolean)));
  const namedCount = cases.filter((solution) => solution.client).length;
  const namedLine =
    namedClients.length === 1
      ? `${namedCount} of these are also for ${namedClients[0]}.`
      : `${namedCount} of these name the client.`;

  return (
    <section id="case-studies" className="section bg-background" aria-labelledby="case-studies-heading">
      <div className="container-tight">
        <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
              More client work
            </p>
            <h2 id="case-studies-heading" className="section-heading mb-5">
              {cases.length} further cases, from genomics to forensics
            </h2>
            <p className="text-text-secondary">
              {namedLine} Clients are named where we have their permission; the others are published without a
              name, and references are available on request. Each page states the problem, what was delivered and
              the outcome.
            </p>
          </div>
          <Link
            href="/work/"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-text-primary underline-offset-4 hover:underline"
          >
            All work, including our own products
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cases.map((solution) => {
            const eyebrow = solution.client ? solution.client.name : solution.cardLabel ?? solution.sector;
            return (
              <li key={solution.slug} className="h-full">
                <Link
                  href={getClientSolutionPath(solution)}
                  className="group flex h-full flex-col gap-5 rounded-2xl border border-border/30 bg-background-alt/60 p-6 transition-colors can-hover:hover:border-accent-blue/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-blue">{eyebrow}</p>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-text-secondary transition-transform can-hover:group-hover:-translate-y-0.5 can-hover:group-hover:translate-x-0.5"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold leading-snug text-text-primary">{solution.title}</h3>
                    <p className="text-sm leading-relaxed text-text-secondary">{solution.preview}</p>
                  </div>
                  <div className="mt-auto border-t border-border/30 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text-secondary">Result</p>
                    <p className="mt-1 text-xl font-semibold leading-snug text-text-primary">{solution.headline}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
