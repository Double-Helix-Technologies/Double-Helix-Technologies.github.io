'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

interface AnimatedCounterProps {
  /** Final value. This is what the static HTML contains. */
  value: number;
  /** Value the count-up starts from once the element is mounted and in view. Defaults to 0. */
  from?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  /** Duration of the count-up in seconds. */
  duration?: number;
}

/**
 * Renders `prefix + value + suffix` in the server-rendered HTML, so crawlers, reader mode, screen
 * readers and anyone without JavaScript see the real figure, never the start value. The count-up
 * from `from` to `value` starts only after mount and once the element is in view, and is skipped
 * entirely when the visitor prefers reduced motion.
 */
export function AnimatedCounter({
  value,
  from,
  prefix = '',
  suffix = '',
  className = '',
  duration = 1.2
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView || reduceMotion) {
      setDisplayValue(value);
      return;
    }

    const startValue = from ?? 0;
    if (startValue === value) return;

    const controls = animate(startValue, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplayValue(Math.round(latest))
    });

    return () => controls.stop();
  }, [isInView, reduceMotion, from, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
