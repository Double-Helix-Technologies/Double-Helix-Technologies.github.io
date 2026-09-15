import type { WordmarkSegment } from '@/app/data/partners';

type WordmarkProps = {
  segments: WordmarkSegment[];
  /** `muted` for the grey marquee state (colour on hover via the parent `group`), `plain` for a white card. */
  tone: 'muted' | 'plain';
  className?: string;
};

/**
 * Typeset wordmark for partners whose logo is lettering. Kept as one component so the marquee and
 * the About page render the same thing.
 */
export default function Wordmark({ segments, tone, className = '' }: WordmarkProps) {
  const base = tone === 'muted' ? 'text-text-secondary group-hover:text-text-primary' : 'text-neutral-900';
  const accent = tone === 'muted' ? 'text-text-secondary group-hover:text-accent-teal' : 'text-accent-teal';

  return (
    <span className={`whitespace-nowrap font-semibold tracking-tight transition ${className}`}>
      {segments.map((segment, index) => (
        <span
          key={`${segment.text}-${index}`}
          className={`${segment.accent ? accent : base} ${segment.sup ? 'relative -top-[0.55em] ml-0.5 text-[0.5em]' : ''}`}
        >
          {segment.text}
        </span>
      ))}
    </span>
  );
}
