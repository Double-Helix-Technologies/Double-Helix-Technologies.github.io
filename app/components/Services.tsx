import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getServicePath, servicesContents } from '../data/services';
import { SectionBackdrop } from './ui/section-backdrop';

/**
 * Business problems we solve. A plain two-column list: every service shows its title and
 * description without a click; the detail page lists what is included and delivered.
 */
export default function Services() {
  return (
    <section id="services" className="section relative isolate overflow-hidden bg-background lg:flex lg:min-h-[100svh] lg:items-center">
      <SectionBackdrop variant="grid" className="opacity-70" />
      <div className="container-tight w-full">
        <div className="mb-12 max-w-2xl lg:mb-16">
          <h2 className="section-heading mb-5 lg:text-6xl">What we help with</h2>
          <p className="text-lg text-text-secondary md:text-xl">
            Six kinds of work for regulated operations, each with a defined scope and deliverables.
          </p>
        </div>

        <ul className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
          {servicesContents.map((service) => (
            <li key={service.slug}>
              <h3 className="text-xl font-semibold leading-snug text-text-primary lg:text-2xl">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-text-secondary">{service.description}</p>
              <Link
                href={getServicePath(service)}
                className="mt-4 inline-flex items-center gap-1 font-medium text-text-primary underline-offset-4 hover:underline"
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
