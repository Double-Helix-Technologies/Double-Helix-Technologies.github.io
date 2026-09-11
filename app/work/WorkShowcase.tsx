'use client';

import { useMemo, useState } from 'react';
import type { MouseEvent } from 'react';
import Link from 'next/link';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { WorkListItem, WorkTag } from '@/app/data/work';

type WorkShowcaseProps = {
  items: WorkListItem[];
};

const FILTERS: Array<WorkTag | 'All'> = ['All', 'for clients', 'Our products'];

const FILTER_LABELS: Record<WorkTag | 'All', string> = {
  All: 'All',
  'for clients': 'For clients',
  'Our products': 'Our products'
};

type Accent = {
  /** Highlight that slides between cards on hover. */
  slideTint: string;
  /** Card border on hover. */
  hoverBorder: string;
  /** Eyebrow text colour. */
  eyebrow: string;
  /** Result value colour. */
  resultText: string;
  /** Spotlight colour that follows the pointer inside the card (rgba, low alpha). */
  spotlight: string;
};

const ACCENTS: Record<WorkTag, Accent> = {
  'for clients': {
    slideTint: 'bg-accent-blue/20',
    hoverBorder: 'group-hover:border-accent-blue/60',
    eyebrow: 'text-accent-blue',
    resultText: 'text-accent-blue',
    spotlight: 'rgba(51, 130, 239, 0.18)'
  },
  'Our products': {
    slideTint: 'bg-accent-teal/20',
    hoverBorder: 'group-hover:border-accent-teal/60',
    eyebrow: 'text-accent-teal',
    resultText: 'text-accent-teal',
    spotlight: 'rgba(2, 192, 186, 0.18)'
  }
};

/** Maximum tilt in degrees. Small on purpose; the card should feel like it responds, not like it moves. */
const TILT_DEGREES = 5;

/**
 * Work overview grid. Each card reads top to bottom the way a buyer thinks: what we worked on
 * (title), why (one sentence on the problem), what came out of it (emphasised result block).
 * On hover the result block reveals further outcomes, the card tilts a few degrees towards the
 * pointer, a spotlight follows the pointer, and a highlight slides between cards (shared layout
 * animation, after Aceternity UI's Card Hover Effect and 3D Card). Motion is disabled when the
 * visitor prefers reduced motion.
 */
export default function WorkShowcase({ items }: WorkShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<WorkTag | 'All'>('All');
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return items;
    return items.filter((item) => item.tag === activeFilter);
  }, [items, activeFilter]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              activeFilter === filter
                ? 'border-transparent bg-text-primary text-background'
                : 'border-border/40 text-text-secondary hover:border-border hover:text-text-primary'
            }`}
          >
            {FILTER_LABELS[filter]}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <p className="text-text-secondary">Nothing to show for this filter yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3" onMouseLeave={() => setHoveredSlug(null)}>
          {filteredItems.map((item) => (
            <WorkCard
              key={item.slug}
              item={item}
              hovered={hoveredSlug === item.slug}
              onHover={() => setHoveredSlug(item.slug)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

type WorkCardProps = {
  item: WorkListItem;
  hovered: boolean;
  onHover: () => void;
};

function WorkCard({ item, hovered, onHover }: WorkCardProps) {
  const accent = ACCENTS[item.tag];
  const reduceMotion = useReducedMotion();

  // Pointer position as a fraction of the card, centred on 0 (range -0.5 to 0.5), drives the tilt.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [TILT_DEGREES, -TILT_DEGREES]), {
    stiffness: 200,
    damping: 20
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-TILT_DEGREES, TILT_DEGREES]), {
    stiffness: 200,
    damping: 20
  });

  // Pointer position in pixels drives the spotlight.
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${spotX}px ${spotY}px, ${accent.spotlight}, transparent 75%)`;

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    spotX.set(x);
    spotY.set(y);
    if (!reduceMotion) {
      pointerX.set(x / rect.width - 0.5);
      pointerY.set(y / rect.height - 0.5);
    }
  }

  function handleMouseLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <Link
      href={item.path}
      className="group relative block h-full rounded-3xl p-2 outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
      style={{ perspective: 1000 }}
      onMouseEnter={onHover}
      onFocus={onHover}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            className={`absolute inset-0 block rounded-3xl ${accent.slideTint}`}
            layoutId="work-hover-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
          />
        )}
      </AnimatePresence>

      <motion.article
        style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={`relative z-10 flex h-full flex-col gap-6 overflow-hidden rounded-2xl border border-border/30 bg-background-alt/80 p-6 transition-colors ${accent.hoverBorder}`}
      >
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />

        {/* 1. Who it was for */}
        <div className="relative flex items-start justify-between gap-4">
          <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${accent.eyebrow}`}>{item.eyebrow}</p>
          <ArrowUpRight
            aria-hidden="true"
            className="h-5 w-5 shrink-0 text-text-secondary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text-primary"
          />
        </div>

        {/* 2. What we worked on, and why */}
        <div className="relative space-y-2">
          <h3 className="text-xl font-semibold leading-snug text-text-primary md:text-2xl">{item.title}</h3>
          <p className="text-sm leading-relaxed text-text-secondary md:text-base">{item.problem}</p>
        </div>

        {/* 3. What came out of it. Result and further outcomes share one grid cell, so the crossfade never changes the card height. */}
        <div className="relative mt-auto border-t border-border/30 pt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text-secondary">{item.resultLabel}</p>
          <div className="mt-1 grid">
            <p
              className={`col-start-1 row-start-1 text-xl font-semibold leading-snug transition-all duration-300 md:text-2xl group-hover:-translate-y-1 group-hover:opacity-0 ${accent.resultText}`}
            >
              {item.result}
            </p>
            <p
              aria-hidden={!hovered}
              className="col-start-1 row-start-1 translate-y-1 text-sm font-medium leading-snug text-text-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            >
              {item.resultMore}
            </p>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
