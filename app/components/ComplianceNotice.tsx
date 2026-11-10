import { ClipboardCheck, LockKeyhole, ShieldCheck } from 'lucide-react';

/**
 * Certificate facts, copied from the two BM Certification certificates issued on 10 November 2026.
 * Keep them identical to the certificates: entity name, standards with their year, scope and dates.
 * The public statement names only the entity and standards (owner decision, 10 November 2026); the
 * scope stays in the structured data. Update after each surveillance audit or recertification;
 * remove the mark and this statement if a certificate is suspended, withdrawn or expires.
 */
export const certification = {
  body: 'BM Certification',
  verifyEmail: 'info@bmcertification.com',
  entity: 'SIA Double Helix Technologies',
  scope: 'Design, development and maintenance of IT solutions.',
  issued: '10 November 2026',
  expires: '9 November 2029',
  certificates: [
    { standard: 'ISO 9001:2015', system: 'Quality management system', number: 'MSC-9-1626' },
    { standard: 'ISO/IEC 27001:2022', system: 'Information security management system', number: 'MSC-27-1627' }
  ]
} as const;

/**
 * Public ISO wording, built from `certification`. Replaces the "certification in progress"
 * statement (decision of 11 September 2026) now that both certificates are issued. Kept short at
 * the owner's request (10 November 2026).
 */
export const complianceStatement = {
  body: `${certification.entity} is ISO 9001:2015 and ISO/IEC 27001:2022 certified.`
} as const;

export const complianceAreas = [
  {
    label: 'Quality management',
    icon: ClipboardCheck
  },
  {
    label: 'Information security',
    icon: LockKeyhole
  },
  {
    label: 'Independently certified',
    icon: ShieldCheck
  }
];

/** Standalone compliance section. Not currently rendered; the statement is on /team/ and the mark in the footer. */
export default function ComplianceNotice() {
  return (
    <section className="section pt-10 pb-12" aria-labelledby="compliance-heading">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl border-t border-divider px-6 py-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
            Compliance
          </p>
          <h2 id="compliance-heading" className="mx-auto max-w-2xl text-3xl md:text-4xl">
            {complianceStatement.body}
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            {complianceAreas.map(({ label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-text-secondary">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-divider bg-background-alt">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
