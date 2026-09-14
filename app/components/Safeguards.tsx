import Link from 'next/link';
import { complianceAreas, complianceStatement } from './ComplianceNotice';

/**
 * Practical safeguards for regulated projects. Each line restates something the site already
 * publishes: the "How we work" steps, the service pages (`app/data/services.ts`), the case
 * studies (`app/data/work.ts`) or the assessment page. Existing practice, contractual options and
 * customer responsibilities are kept apart so nobody reads an option as a promise.
 *
 * OWNER: The following buyer questions are not answered anywhere on the site and are therefore
 * not stated here. Confirm each before adding it:
 *   - Data handling: where customer data and systems are hosted, who at Double Helix can access
 *     them, how NDAs and subprocessors are handled, and the company's GDPR role (processor for
 *     client data, controller for its own).
 *   - Access control to customer environments (named accounts, least privilege, offboarding).
 *   - Security testing evidence (the one-pager mentions penetration tests with no high or critical
 *     findings; the site does not say which system or when).
 *   - Intellectual property: who owns deliverables and source code after handover.
 *   - Backup, business continuity and key-person cover on engagements.
 *   - Professional liability insurance.
 */
const groups = [
  {
    heading: 'How we deliver',
    description: 'Existing practice on client engagements.',
    items: [
      'Small increments with demos, automated tests and CI/CD, so each release is checked against clear acceptance criteria before it moves on.',
      'Change control where your process requires it, with releases planned against clear acceptance criteria.',
      'Validation at each integration stage, with end-to-end tests covering main flows, edge cases and failure scenarios.',
      'Approval and audit steps designed into the workflow where the data warrants it, such as the optional 4-eyes approval before sequencing data reaches the end customer.',
      'Monitoring and alerting so integration and workflow issues surface early, before users or customers notice.',
      'Handover documentation for operations, support and troubleshooting, with runbooks and training for the people who run the system.'
    ]
  },
  {
    heading: 'What you can contract for',
    description: 'Options agreed per engagement, not included by default.',
    items: [
      'Staying on to operate the system under agreed service levels after handover, instead of handing over completely.',
      'Ongoing maintenance and execution of a remediation roadmap after an assessment.',
      'Training and SOP advisory for the teams who run the workflow.'
    ]
  },
  {
    heading: 'What stays with you',
    description: 'Responsibilities that remain with your organisation.',
    items: [
      'Regulatory interpretation and compliance frameworks. We show where compliance risk sits in the operational flow; your quality and regulatory specialists decide how it is addressed.',
      'Decisions on what to implement and in what order. You own the plan and choose who executes it.',
      'Access and availability. At kickoff we agree which systems, documents and people we need, and you arrange that access.'
    ]
  }
];

export default function Safeguards() {
  return (
    <section id="safeguards" className="section bg-gradient-to-b from-background to-background-alt" aria-labelledby="safeguards-heading">
      <div className="container-tight">
        <div className="mb-10 max-w-3xl md:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
            Working in regulated environments
          </p>
          <h2 id="safeguards-heading" className="section-heading mb-5">
            Practical safeguards for regulated projects
          </h2>
          <p className="text-text-secondary">
            What you can expect in how we deliver, what you can contract for beyond delivery, and what remains your
            organisation&apos;s responsibility. We describe what we do; we do not claim compliance on your behalf.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.heading} className="flex flex-col gap-4 rounded-2xl border border-border/30 bg-background/70 p-6">
              <div>
                <h3 className="text-lg font-semibold text-text-primary">{group.heading}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-text-secondary">{group.description}</p>
              </div>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="border-l-2 border-accent-blue/40 pl-3 text-sm leading-relaxed text-text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section
          className="mt-6 grid gap-6 rounded-2xl border border-border/30 bg-background p-6 md:grid-cols-3 md:items-center md:p-8"
          aria-labelledby="compliance-heading"
        >
          <div className="md:col-span-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">Compliance</p>
            <h3 id="compliance-heading" className="text-2xl text-text-primary md:text-3xl">
              {complianceStatement.heading}
            </h3>
            <p className="mt-3 text-text-secondary">{complianceStatement.body}</p>
            <p className="mt-3 text-sm text-text-secondary">
              Company details, registration number and VAT number are in the{' '}
              <Link href="/notice/" className="underline underline-offset-4 hover:text-text-primary">
                legal notice
              </Link>
              .
            </p>
          </div>
          <ul className="flex flex-row flex-wrap gap-4 md:flex-col md:gap-3" aria-label="Management system areas">
            {complianceAreas.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-text-secondary">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background-alt/70">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
