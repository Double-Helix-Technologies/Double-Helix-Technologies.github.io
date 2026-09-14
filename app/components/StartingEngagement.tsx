import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { siteConfig } from '@/app/lib/seo';

const ASSESSMENT_PATH = '/operational-flow-risk-assessment/';

/**
 * Everything below restates what `app/operational-flow-risk-assessment/` (Signals, Process,
 * Deliverables, Faq) and `app/data/services.ts` already publish. It adds no scope, deliverable,
 * timeline or price of its own.
 *
 * OWNER: The assessment page publishes tiers, price ranges in USD and timelines (Pricing.tsx),
 * while faqData.ts says "3-6 week diagnostic" and services.ts says "2-4 months". Confirm tiers,
 * timelines and currency are current and consistent before repeating any of them on the homepage.
 * Until then this section links to the assessment page and states none of them.
 */
const blocks = [
  {
    heading: 'Who it suits',
    body:
      'Operations, IT and quality leaders whose teams live with rework loops, routine expedites, exceptions that bypass the standard process, or metrics that do not match reality.'
  },
  {
    heading: 'What you contribute',
    body:
      'Time from the people who run the workflow for interviews and walkthroughs, access to SOPs, reports and incident records, and decision-makers for the readout. No system changes, no downtime.'
  },
  {
    heading: 'What you receive',
    items: [
      'End-to-end flow maps',
      'Prioritised risk register with owners',
      'Triage action plan: fix now, fix later, defer',
      'Phased remediation roadmap',
      'Stakeholder readout deck',
      'Executive summary memo (optional)'
    ]
  },
  {
    heading: 'What you decide with it',
    body:
      'Where flow breaks, who owns each issue and what to fix first. Implementation is your call: in-house, with another partner, or with us. Regulatory interpretation stays with your specialists.'
  }
];

export default function StartingEngagement() {
  return (
    <section id="starting-engagement" className="section bg-background-alt" aria-labelledby="starting-engagement-heading">
      <div className="container-tight">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
            A defined first step
          </p>
          <h2 id="starting-engagement-heading" className="section-heading mb-5">
            Start with an Operational Workflow Risk Assessment
          </h2>
          <p className="text-lg text-text-secondary">
            A time-boxed look at how work actually moves across your teams, systems and handoffs, and where delays,
            rework and compliance risk come from.
          </p>
        </div>

        <dl className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {blocks.map((block) => (
            <div key={block.heading} className="border-t border-divider pt-6">
              <dt className="text-lg font-semibold text-text-primary">{block.heading}</dt>
              {block.body && <dd className="mt-3 leading-relaxed text-text-secondary">{block.body}</dd>}
              {block.items && (
                <dd className="mt-3">
                  <ul className="space-y-1.5 text-text-secondary">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              )}
            </div>
          ))}
        </dl>

        <div className="mt-12 grid gap-x-12 gap-y-6 border-t border-divider pt-8 md:grid-cols-2">
          <p className="leading-relaxed text-text-secondary">
            <span className="font-semibold text-text-primary">The introductory call is free.</span> {siteConfig.booking.durationLabel} on{' '}
            {siteConfig.booking.channel}, to understand your situation and agree whether the assessment, or a smaller
            step, is the right start.
          </p>
          <p className="leading-relaxed text-text-secondary">
            <span className="font-semibold text-text-primary">The assessment is a paid engagement.</span> Scope and
            objectives are aligned at kickoff; packages are described on the assessment page.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 md:gap-4">
          <Button variant="cta" size="cta" asChild>
            <a href={siteConfig.booking.url} target="_blank" rel="noreferrer">
              Book the introductory call
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
          <Button variant="secondary" size="cta" asChild>
            <Link href={ASSESSMENT_PATH}>Assessment details</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
