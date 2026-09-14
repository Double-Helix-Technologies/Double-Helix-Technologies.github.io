'use client';

import type { HTMLAttributes } from 'react';
import FastMarquee from 'react-fast-marquee';
import type { MarqueeProps as FastMarqueeProps } from 'react-fast-marquee';
import { cn } from '@/app/utils/cn';

/**
 * Marquee primitives after Kibo UI's `marquee` component (https://www.kibo-ui.com/components/marquee),
 * a thin composition layer over `react-fast-marquee`: a clipping wrapper, the scrolling content,
 * optional edge fades and a per-item spacer.
 */

export type MarqueeProps = HTMLAttributes<HTMLDivElement>;

export const Marquee = ({ className, ...props }: MarqueeProps) => (
  <div className={cn('relative w-full overflow-hidden', className)} {...props} />
);

export type MarqueeContentProps = FastMarqueeProps;

export const MarqueeContent = ({ loop = 0, autoFill = true, pauseOnHover = true, ...props }: MarqueeContentProps) => (
  <FastMarquee loop={loop} autoFill={autoFill} pauseOnHover={pauseOnHover} {...props} />
);

export type MarqueeFadeProps = HTMLAttributes<HTMLDivElement> & {
  side: 'left' | 'right';
};

export const MarqueeFade = ({ className, side, ...props }: MarqueeFadeProps) => (
  <div
    aria-hidden="true"
    className={cn(
      'pointer-events-none absolute bottom-0 top-0 z-10 h-full w-16 from-background to-transparent sm:w-24',
      side === 'left' ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l',
      className
    )}
    {...props}
  />
);

export type MarqueeItemProps = HTMLAttributes<HTMLDivElement>;

export const MarqueeItem = ({ className, ...props }: MarqueeItemProps) => (
  <div className={cn('mx-2 flex-shrink-0 object-contain', className)} {...props} />
);
