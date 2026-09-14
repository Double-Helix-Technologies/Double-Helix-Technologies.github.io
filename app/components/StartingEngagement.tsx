import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
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
const deliverables = [
  'End-to-end flow maps of how work actually moves, exceptions included',
  'Prioritised risk register, scored by impact and probability, with owners assigned',
  'Triage action plan: fix now, fix later or defer, with the rationale for each',
  'Phased remediation roadmap, sequenced by dependency',
  'Stakeholder readout deck for your leadership team',
  'Executive summary memo (optional)'
];

export default function StartingEngagement() {
  return (
    <section
      id="starting-engagement"
      className="section bg-gradient-to-b from-background-alt to-background"
      aria-labelledby="starting-engagement-heading"
    >
      <div className="container-tight">
        <div className="mb-10 max-w-3xl md:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
            A defined first engagement
          </p>
          <h2 id="starting-engagement-heading" className="section-heading mb-5">
            Start with an Operational Workflow Risk Assessment
          </h2>
          <p className="text-text-secondary">
            A time-boxed assessment that maps how work actually moves across your teams, systems, spreadsheets and
            handoffs, and shows where delays, rework and compliance risk are introduced. You get a prioritised plan
            you can execute internally, with another partner, or with us.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border/30 bg-background-alt/60 p-6">
            <h3 className="text-lg font-semibold text-text-primary">Who it suits</h3>
            <p className="mt-3 text-text-secondary">
              Operations, IT and quality leaders in life sciences and healthcare whose teams live with rework
              loops, routine expedites, exceptions that bypass the standard process or metrics that do not match
              reality, and who want to fix the right things in the right order before committing to a larger
              project.
            </p>
          </div>

          <div className="rounded-2xl border border-border/30 bg-background-alt/60 p-6">
            <h3 className="text-lg font-semibold text-text-primary">What we investigate</h3>
            <p className="mt-3 text-text-secondary">
              The end-to-end operational and system flow: handoffs, ownership, system touchpoints, data movements
              and exceptions. We interview the people who run and support the workflow, walk through how the work
              is actually performed, and review SOPs, operational reports, incidents and exception paths.
            </p>
          </div>

          <div className="rounded-2xl border border-border/30 bg-background-alt/60 p-6">
            <h3 className="text-lg font-semibold text-text-primary">What you contribute</h3>
            <p className="mt-3 text-text-secondary">
              Time from the people who run and support the workflow for interviews and walkthroughs, access to
              SOPs, operational reports and incident records, and decision-makers for the prioritisation workshop
              and the final readout. The work involves no system changes and no downtime.
            </p>
          </div>

          <div className="rounded-2xl border border-border/30 bg-background-alt/60 p-6">
            <h3 className="text-lg font-semibold text-text-primary">What you receive</h3>
            <ul className="mt-3 space-y-2">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2 text-text-secondary">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent-teal" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border/30 bg-background p-6 md:p-8">
          <h3 className="text-lg font-semibold text-text-primary">How it supports your implementation decision</h3>
          <p className="mt-3 max-w-3xl text-text-secondary">
            Every deliverable is built for internal execution. You leave knowing where flow breaks, who owns each
            issue and what to fix first, and you decide how to implement: in-house, with another partner, or with us
            in a follow-on engagement. Regulatory interpretation stays with your specialists; the assessment shows
            them where compliance risk sits in the flow.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border/30 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">Free</p>
              <h4 className="mt-2 font-semibold text-text-primary">Introductory call</h4>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                A {siteConfig.booking.durationLabel} call on {siteConfig.booking.channel} to understand your
                situation and agree whether the assessment, or a smaller step, is the right start. The call does
                not include assessment work.
              </p>
            </div>
            <div className="rounded-xl border border-border/30 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">Paid</p>
              <h4 className="mt-2 font-semibold text-text-primary">The assessment</h4>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                A scoped, time-boxed engagement that delivers the items above. Scope, objectives and decision
                criteria are aligned at kickoff, before mapping starts. Packages and what they cover are set out on
                the assessment page.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 md:gap-5">
            <Button variant="cta" asChild>
              <a href={siteConfig.booking.url} target="_blank" rel="noreferrer">
                Book the introductory call
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <Link href={ASSESSMENT_PATH}>Assessment details</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
