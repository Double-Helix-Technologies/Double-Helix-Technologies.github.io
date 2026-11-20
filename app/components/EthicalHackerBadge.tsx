import Image from 'next/image';
import badgeSrc from '@/images/certification/ec-council-ceh.png';
import { cn } from '@/app/utils/cn';

/**
 * EC-Council Certified Ethical Hacker (CEH) badge, as supplied by the owner on 20 November 2026
 * (artwork in `public/images/certification/`, scaled down in proportion from 1501 px to 420 px,
 * otherwise unchanged). CEH is a personal certification: it belongs to one member of the team, not
 * to the company, and the wording beside the badge has to say so. The holder is not named (owner
 * decision, 20 November 2026).
 *
 * Rules applied, from the EC-Council logo usage guidelines (v3.0) and the EC-Council Trademark and
 * Brand Guidelines (file dated December 2025). They are our reading of those documents and are not
 * confirmed with EC-Council:
 *
 * - Only for a certification that is held and current. Remove the badge at once if the
 *   certification lapses, is suspended or revoked, or the holder leaves the company.
 * - Never present it as a company certification or as an endorsement by EC-Council, and never make
 *   it part of our logo, name or slogan.
 * - No changes to the artwork: no recolouring, cropping, stretching, shadows or filters.
 * - At least 80 px tall on screen. The file has transparent margins, so the 84 px box shows the
 *   badge itself about 83 px tall.
 * - Not larger or more prominent than our own name and logo. At 84 x 84 px the box is smaller in
 *   area than the 180 x 44 px header logo; like the ISO mark, this reads "larger" as overall size.
 * - Clear space around it, and never combined with another mark. On the About page it has its own
 *   row, below the ISO mark and outside that mark's clear zone.
 *
 * Open points (see `docs/ceh-badge-2026-11-20.md`): the guidelines are written for the certified
 * person's own use and do not say whether an employer may show an employee's badge, and they do
 * not settle use on a dark background. The same artwork is shown in both themes.
 */
export const ethicalHackerCertification = {
  issuer: 'EC-Council',
  /**
   * Says that a person holds the certification, never the company. One sentence at the owner's
   * request (20 November 2026); keep "a member of our team" as the subject.
   */
  statement:
    'A member of our team holds the Certified Ethical Hacker (CEH) certification from EC-Council.',
  /** Ownership legend in the form the EC-Council brand guidelines give as preferred. */
  trademarkLegend: 'Certified Ethical Hacker is the registered trademark of EC-Council.'
} as const;

/** For display: a non-breaking hyphen, so "EC-Council" never splits across two lines. */
export const keepIssuerOnOneLine = (text: string) => text.replace(/EC-Council/g, 'EC\u2011Council');

export default function EthicalHackerBadge({ className }: { className?: string }) {
  return (
    <Image
      src={badgeSrc}
      alt="EC-Council Certified Ethical Hacker (CEH) badge"
      width={84}
      height={84}
      className={cn('h-[84px] w-[84px] shrink-0', className)}
    />
  );
}
