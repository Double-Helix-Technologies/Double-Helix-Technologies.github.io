import Image from 'next/image';
import Link from 'next/link';
import colourMarkSrc from '@/images/certification/bmc-iso-9001-27001.svg';
import whiteMarkSrc from '@/images/certification/bmc-iso-9001-27001-white.svg';
import { cn } from '@/app/utils/cn';

/**
 * BM Certification combined mark for ISO 9001 and ISO 27001, used as supplied (artwork in
 * `public/images/certification/`, from BM Certification, file names shortened). Rules from the
 * BM Certification mark usage guidelines (V4, December 2021), version A1 (websites):
 *
 * - Only in the same footer as our own logo (bottom bar), and no larger than 75% of it. We read "size" as overall size: in the
 *   footer the logo is 220 x 54 px and the mark 82 x 64 px, 37% of the logo's width and 44% of its
 *   area (owner decision, 10 November 2026; not yet confirmed with BM Certification).
 * - At least 40 px tall online. Never resize below `h-10`.
 * - No changes to the artwork: no opacity, filters, recolouring or cropping.
 * - Keep the clear zone around it free of other elements (the parent's gap-4 provides it).
 * - Colour version on light backgrounds; the white version only on dark backgrounds. Both are in
 *   the HTML and the `dark` class chooses, as in `BrandLogo`.
 * - Valid only while the certificates are in force. Remove the mark at once if a certificate is
 *   suspended or withdrawn, and at the latest on the expiry date in `ComplianceNotice.tsx`.
 *
 * `shrink-0` keeps flex parents from squeezing the mark out of proportion on narrow screens.
 *
 * Two sizes:
 * - `footer` (default): 82 x 64 px, sized against the 220 x 54 px footer logo. Links to the
 *   certificate details on the About page, so they are one click away.
 * - `page`: 122 x 96 px, for the About page block, under its heading. Not a link, since it sits in
 *   the block it would link to. DEVIATION: this is larger than the page's nearest logo (the
 *   180 x 44 px header logo), so it does not meet the 75% rule. Accepted by the owner on
 *   10 November 2026 and recorded in `docs/iso-certification-2026-11-10.md`. If BM Certification
 *   objects, use 87 x 68 px (75% of the header logo's area) or place our logo beside the mark.
 */
const sizes = {
  footer: { width: 82, height: 64, className: 'h-16' },
  page: { width: 122, height: 96, className: 'h-24' }
} as const;

export default function CertificationMark({ className, size = 'footer' }: { className?: string; size?: keyof typeof sizes }) {
  const alt = 'BM Certification mark: ISO 9001 and ISO 27001 system certification';
  const { width, height, className: heightClass } = sizes[size];
  const images = (
    <>
      <Image src={colourMarkSrc} alt={alt} width={width} height={height} className={cn(heightClass, 'w-auto dark:hidden')} />
      <Image src={whiteMarkSrc} alt={alt} width={width} height={height} className={cn(heightClass, 'hidden w-auto dark:block')} />
    </>
  );
  const wrapperClass = cn('inline-block w-fit shrink-0', className);
  if (size === 'page') return <div className={wrapperClass}>{images}</div>;
  return (
    <Link href="/team/#certification" className={wrapperClass} aria-label="ISO 9001 and ISO 27001 certification details">
      {images}
    </Link>
  );
}
