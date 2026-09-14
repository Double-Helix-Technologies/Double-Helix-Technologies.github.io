import Link from 'next/link';
import { complianceStatement } from './ComplianceNotice';

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
    items: [
      'Small increments with demos, automated tests and CI/CD.',
      'Change control where your process requires it.',
      'End-to-end tests for main flows, edge cases and failure scenarios.',
      'Approval and audit steps built into the workflow where the data warrants it.',
      'Monitoring and alerting so issues surface before users notice.',
      'Handover documentation, runbooks and training.'
    ]
  },
  {
    heading: 'What you can contract for',
    items: [
      'Staying on to operate the system under agreed service levels.',
      'Ongoing maintenance and execution of a remediation roadmap.',
      'Training and SOP advisory for the teams who run the workflow.'
    ]
  },
  {
    heading: 'What stays with you',
    items: [
      'Regulatory interpretation and compliance frameworks; we show where the risk sits, your specialists decide.',
      'Decisions on what to implement and in what order.',
      'Access to the systems, documents and people agreed at kickoff.'
    ]
  }
];

export default function Safeguards() {
  return (
    <section id="safeguards" className="section bg-background-alt" aria-labelledby="safeguards-heading">
      <div className="container-tight">
        <div className="mb-12 max-w-2xl">
          <h2 id="safeguards-heading" className="section-heading mb-5">
            Working in regulated environments
          </h2>
          <p className="text-lg text-text-secondary">
            What we do on every engagement, what you can add, and what remains yours. We describe practice; we do not
            claim compliance on your behalf.
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.heading} className="border-t border-divider pt-6">
              <h3 className="text-lg font-semibold text-text-primary">{group.heading}</h3>
              <ul className="mt-4 space-y-2.5 leading-relaxed text-text-secondary">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl border-t border-divider pt-8" aria-labelledby="compliance-heading">
          <h3 id="compliance-heading" className="text-2xl text-text-primary md:text-3xl">
            {complianceStatement.heading}
          </h3>
          <p className="mt-4 leading-relaxed text-text-secondary">{complianceStatement.body}</p>
          <p className="mt-3 text-sm text-text-secondary">
            Company registration and VAT details are in the{' '}
            <Link href="/notice/" className="underline underline-offset-4 hover:text-text-primary">
              legal notice
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
