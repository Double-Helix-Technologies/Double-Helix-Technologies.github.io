import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getServicePath, servicesContents } from '../data/services';

/**
 * Business problems we solve. A plain two-column list: every service shows its title and
 * description without a click; the detail page lists what is included and delivered.
 */
export default function Services() {
  return (
    <section id="services" className="section bg-background">
      <div className="container-tight">
        <div className="mb-12 max-w-2xl">
          <h2 className="section-heading mb-5">What we help with</h2>
          <p className="text-lg text-text-secondary">
            Six kinds of work for regulated operations, each with a defined scope and deliverables.
          </p>
        </div>

        <ul className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {servicesContents.map((service) => (
            <li key={service.slug} className="border-t border-divider pt-6">
              <h3 className="text-xl font-semibold leading-snug text-text-primary">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-text-secondary">{service.description}</p>
              <Link
                href={getServicePath(service)}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-text-primary underline-offset-4 hover:underline"
              >
                What is included
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-sm text-text-secondary">
          Looking specifically at AI-enabled workflows?{' '}
          <Link
            href="/solutions/custom-ai-software-life-sciences/"
            className="underline underline-offset-4 hover:text-text-primary"
          >
            Custom AI software solutions for life sciences
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
