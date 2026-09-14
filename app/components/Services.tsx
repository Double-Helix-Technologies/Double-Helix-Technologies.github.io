import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getServicePath, servicesContents } from '../data/services';

/**
 * Business problems we solve. Every service shows its problem statement and description without
 * a click; the detail page lists what is included and what is delivered. The AI solutions page
 * stays reachable from here.
 */
export default function Services() {
  return (
    <section id="services" className="section bg-background-alt">
      <div className="container-tight text-left">
        <div className="mb-10 max-w-3xl md:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
            What we do
          </p>
          <h2 className="section-heading mb-5">Business problems we solve</h2>
          <p className="text-text-secondary">
            Six kinds of work for life sciences and healthcare operations. Each has a defined scope and a list of
            deliverables on its own page, so you can see what you would receive before we talk.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {servicesContents.map((service) => (
            <li key={service.slug} className="h-full">
              <article className="flex h-full flex-col gap-4 rounded-2xl border border-border/30 bg-background p-6">
                {service.problem && (
                  <p className="text-sm font-medium text-accent-blue">{service.problem}</p>
                )}
                <h3 className="text-xl font-semibold leading-snug text-text-primary">{service.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary md:text-base">{service.description}</p>
                <Link
                  href={getServicePath(service)}
                  className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-text-primary underline-offset-4 hover:underline"
                >
                  What is included
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-text-secondary">
          Looking specifically at AI-enabled workflows? See our{' '}
          <Link
            href="/solutions/custom-ai-software-life-sciences/"
            className="underline underline-offset-4 hover:text-text-primary"
          >
            custom AI software solutions for life sciences
          </Link>{' '}
          page.
        </p>
      </div>
    </section>
  );
}
