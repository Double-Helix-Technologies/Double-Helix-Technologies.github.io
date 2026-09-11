import { ClipboardCheck, LockKeyhole, ShieldCheck } from 'lucide-react';

const complianceAreas = [
  {
    label: 'Quality management',
    icon: ClipboardCheck
  },
  {
    label: 'Information security',
    icon: LockKeyhole
  },
  {
    label: 'Audit readiness',
    icon: ShieldCheck
  }
];

export default function ComplianceNotice() {
  return (
    <section className="section pt-10 pb-12" aria-labelledby="compliance-heading">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl border-t border-border/30 px-6 py-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
            Compliance
          </p>
          <h2 id="compliance-heading" className="mx-auto max-w-2xl text-3xl md:text-4xl">
            ISO 9001 and ISO 27001 certification is in progress.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            We operate a quality and information security management system aligned with ISO 9001 and ISO 27001. The certification audit is scheduled for the end of October 2026; we will publish the certificate details here once issued.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            {complianceAreas.map(({ label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-text-secondary">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border/40 bg-background-alt/70">
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
