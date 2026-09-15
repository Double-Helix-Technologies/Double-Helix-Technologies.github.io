import type { CSSProperties } from 'react';
import type { WordmarkSegment } from '@/app/data/partners';

type WordmarkProps = {
  segments: WordmarkSegment[];
  /** `muted` for the grey marquee state (colour on hover via the parent `group`), `plain` for a white card. */
  tone: 'muted' | 'plain';
  /**
   * The partner's own accent colour for the accent segments and the tagline. In the `muted` tone it
   * behaves like every other logo in the marquee: grey at rest, the partner's colour on hover.
   */
  accentColor?: string;
  /** Second line under the name, set small and letterspaced, as the partner sets it themselves. */
  tagline?: string;
  className?: string;
};

/**
 * Typeset wordmark for partners whose logo is lettering. Kept as one component so the marquee and
 * the About page render the same thing. The lettering is the site font, not the partner's own
 * typeface; see the OWNER notes in `app/data/partners.ts`.
 */
export default function Wordmark({ segments, tone, accentColor, tagline, className = '' }: WordmarkProps) {
  const base = tone === 'muted' ? 'text-text-secondary group-hover:text-text-primary' : 'text-neutral-900';
  const siteAccent = tone === 'muted' ? 'text-text-secondary group-hover:text-accent-teal' : 'text-accent-teal';
  // The brand colour is carried as a custom property so it can be applied on hover only.
  const brandAccent = tone === 'muted' ? 'text-text-secondary group-hover:text-[var(--brand)]' : 'text-[var(--brand)]';
  const accent = accentColor ? brandAccent : siteAccent;
  const brandStyle = accentColor ? ({ '--brand': accentColor } as CSSProperties) : undefined;

  return (
    <span className={`inline-flex flex-col items-start leading-none transition ${className}`} style={brandStyle}>
      <span className="whitespace-nowrap font-semibold tracking-tight">
        {segments.map((segment, index) => (
          <span
            key={`${segment.text}-${index}`}
            className={`${segment.accent ? accent : base} ${segment.sup ? 'relative -top-[0.55em] ml-0.5 text-[0.5em]' : ''}`}
          >
            {segment.text}
          </span>
        ))}
      </span>
      {tagline && (
        <span className={`mt-[0.15em] whitespace-nowrap text-[0.4em] font-semibold uppercase tracking-[0.2em] ${accent}`}>
          {tagline}
        </span>
      )}
    </span>
  );
}
