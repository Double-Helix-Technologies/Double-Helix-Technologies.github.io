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
            ISO certification work is underway.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            We are currently undergoing ISO 9001 and ISO 27001 certification, with a target to become ISO 9001 / ISO 27001 certified in July 2026.
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
