import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { clientSolutions, getClientSolutionPath } from '@/app/data/work';
import { FEATURED_CASE_SLUG } from './ClientProof';

/**
 * The remaining client cases as a plain list: client or sector, what we worked on, the result as
 * static text. No carousel, no animation. Reads the same data as /work/ so nothing drifts.
 */
export default function CaseStudiesGrid() {
  const cases = clientSolutions.filter((solution) => solution.slug !== FEATURED_CASE_SLUG);

  return (
    <section id="case-studies" className="section bg-background" aria-labelledby="case-studies-heading">
      <div className="container-tight">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 id="case-studies-heading" className="section-heading mb-5">
              More client work
            </h2>
            <p className="text-lg text-text-secondary">
              Clients are named where we have their permission. References are available on request.
            </p>
          </div>
          <Link
            href="/work/"
            className="inline-flex shrink-0 items-center gap-1 font-medium text-text-primary underline-offset-4 hover:underline"
          >
            All work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((solution) => {
            const eyebrow = solution.client ? solution.client.name : solution.cardLabel ?? solution.sector;
            return (
              <li key={solution.slug} className="border-t border-divider pt-5">
                <Link href={getClientSolutionPath(solution)} className="group block">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">{eyebrow}</p>
                  <h3 className="mt-2 text-xl font-semibold leading-snug text-text-primary underline-offset-4 group-hover:underline">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-lg text-text-secondary">{solution.headline}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
