'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import Lightbox from './Lightbox';
import { thumbSize, thumbSrcSet, type EventPhoto } from '@/app/data/events';
import { cn } from '@/app/utils/cn';

const SLOTS = 6;
/** One tile changes every SWAP_MS, so each tile holds its picture for SLOTS times as long. */
const SWAP_MS = 4000;

type Slot = { current: number; previous: number | null };

type Props = {
  /** The pool to rotate through; the first six are in the server-rendered HTML. */
  photos: EventPhoto[];
  /** Accessible name of the mosaic, for example "Photos from the delegations". */
  label: string;
  className?: string;
};

/** Tile width per breakpoint, for the thumbnail `srcset`: two columns of the 8/12 grid on desktop. */
const TILE_SIZES = '(min-width: 1024px) 360px, (min-width: 640px) 33vw, 50vw';

/**
 * One thumbnail of a tile. A picture swapped in after the first render starts transparent and fades
 * in once it has loaded, over the picture it replaces, so a slow connection never shows an empty
 * tile; it is fetched at low priority so the rotation never competes with what the visitor is
 * reading. Plain `<img>` with a hand-written `srcset`, as in PhotoGallery.
 */
function TileImage({ photo, fade }: { photo: EventPhoto; fade: boolean }) {
  const [shown, setShown] = useState(!fade);
  const size = thumbSize(photo);
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export, hand-written srcset
    <img
      src={photo.thumb}
      srcSet={thumbSrcSet(photo)}
      sizes={TILE_SIZES}
      alt={photo.alt}
      width={size.width}
      height={size.height}
      loading={fade ? 'eager' : 'lazy'}
      fetchPriority={fade ? 'low' : 'auto'}
      decoding="async"
      ref={(element) => {
        // A cached picture can be complete before React attaches onLoad; show it at once.
        if (element?.complete && element.naturalWidth > 0) setShown(true);
      }}
      onLoad={() => setShown(true)}
      className={cn(
        'absolute inset-0 h-full w-full object-cover object-center',
        fade && 'transition-opacity duration-700 ease-out',
        shown ? 'opacity-100' : 'opacity-0'
      )}
    />
  );
}

/**
 * Six photographs in a grid that rotates through a larger pool: every four seconds one tile, in
 * turn, cross-fades to the next picture that is not on screen, so every picture in the pool gets
 * its time without the grid ever changing shape. The rotation pauses while the pointer or keyboard
 * focus is on the mosaic, while the lightbox is open, while the mosaic is off screen or the tab is
 * hidden, and does not run at all for visitors who prefer reduced motion (they see the first six).
 * A click on a tile opens the picture it shows at that moment in the lightbox, which then moves
 * through the whole pool. The first six pictures are in the server-rendered HTML.
 */
export default function PhotoMosaic({ photos, label, className }: Props) {
  const count = Math.min(SLOTS, photos.length);
  const [slots, setSlots] = useState<Slot[]>(() =>
    Array.from({ length: count }, (_, index) => ({ current: index, previous: null }))
  );
  const slotsRef = useRef(slots);
  const queueRef = useRef<number[]>(Array.from({ length: Math.max(0, photos.length - count) }, (_, i) => i + count));
  const tickRef = useRef(0);
  const [open, setOpen] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    slotsRef.current = slots;
  }, [slots]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !visible || reduceMotion || open !== null || queueRef.current.length === 0) return;

    const interval = setInterval(() => {
      if (document.hidden) return;
      const slot = tickRef.current % count;
      tickRef.current += 1;
      const incoming = queueRef.current.shift();
      if (incoming === undefined) return;
      queueRef.current.push(slotsRef.current[slot].current);
      setSlots((prev) => prev.map((item, index) => (index === slot ? { current: incoming, previous: item.current } : item)));
    }, SWAP_MS);
    return () => clearInterval(interval);
  }, [paused, visible, reduceMotion, open, count]);

  return (
    <div
      ref={rootRef}
      className={className}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-2" aria-label={label}>
        {slots.map((slot, slotIndex) => {
          const photo = photos[slot.current];
          const layers = [slot.previous, slot.current].filter((index): index is number => index !== null);
          return (
            <li key={slotIndex}>
              <button
                type="button"
                onClick={(event) => {
                  openerRef.current = event.currentTarget;
                  setOpen(slot.current);
                }}
                className="group relative block aspect-[3/2] w-full overflow-hidden rounded-xl bg-background-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lilac focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`Open photo: ${photo.caption}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 block motion-safe:transition-transform motion-safe:duration-500 can-hover:group-hover:scale-[1.04]"
                >
                  {layers.map((index, layer) => (
                    <TileImage key={index} photo={photos[index]} fade={layer === 1} />
                  ))}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <Lightbox
        photos={photos}
        index={open}
        label={label}
        onNavigate={setOpen}
        onClose={() => {
          setOpen(null);
          openerRef.current?.focus();
        }}
      />
    </div>
  );
}
