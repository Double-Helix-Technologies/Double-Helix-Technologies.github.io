'use client';

import { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { thumbSize, type EventPhoto } from '@/app/data/events';

type Props = {
  photos: EventPhoto[];
  /** Index into `photos` of the picture shown, or null when closed. */
  index: number | null;
  /** Accessible name of the dialog, for example "Photos: Berlin delegation". */
  label: string;
  onNavigate: (index: number) => void;
  /** Called whenever the dialog closes, by button, Escape or a click on the surround. */
  onClose: () => void;
};

/**
 * One photograph at full size over a dark surround, as a native `<dialog>`: Escape closes it, focus
 * stays inside it, and the page behind it does not scroll. Left and right arrows move between
 * pictures; a click on the dark surround closes. The caller owns the state (which picture is open)
 * and gives focus back to whatever opened the dialog in `onClose`. The dark surface is on the dialog
 * box itself rather than on `::backdrop`, which headless Chromium did not paint reliably. The
 * picture is a plain `<img>` whose `srcset` offers the 720 px thumbnail (the whole picture, not a
 * crop) for small screens and the full size otherwise.
 */
export default function Lightbox({ photos, index, label, onNavigate, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = photos.length;
  const photo = index === null ? null : photos[index];

  const next = () => {
    if (index !== null) onNavigate((index + 1) % count);
  };
  const prev = () => {
    if (index !== null) onNavigate((index - 1 + count) % count);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (index !== null && !dialog.open) {
      dialog.showModal();
      closeRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else if (index === null && dialog.open) {
      dialog.close();
    }
  }, [index]);

  // If the page navigates away while the lightbox is open, give the body its scrolling back.
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClose={() => {
        document.body.style.overflow = '';
        onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          next();
        } else if (event.key === 'ArrowLeft') {
          event.preventDefault();
          prev();
        }
      }}
      onClick={(event) => {
        // The figure fills the dialog, so a click on either (and not on the picture, the caption
        // or a button inside them) is a click on the dark surround.
        const target = event.target as HTMLElement;
        if (target === event.currentTarget || target.tagName === 'FIGURE') dialogRef.current?.close();
      }}
      aria-label={label}
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none border-0 bg-black/85 p-0 text-white backdrop:bg-transparent"
    >
      {photo && (
        <figure className="flex h-full w-full flex-col items-center justify-center gap-4 p-4 md:p-10">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, hand-written srcset */}
          <img
            key={photo.src}
            src={photo.src}
            srcSet={`${photo.thumb} ${thumbSize(photo).width}w, ${photo.src} ${photo.width}w`}
            sizes="100vw"
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            decoding="async"
            className="h-auto max-h-[78svh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          />
          <figcaption className="flex max-w-3xl flex-col items-center gap-1 text-center">
            <p className="text-sm text-white/95 md:text-base">{photo.caption}</p>
            <p className="text-xs text-white/60">
              {(index ?? 0) + 1} of {count}
            </p>
          </figcaption>
        </figure>
      )}

      <button
        ref={closeRef}
        type="button"
        onClick={() => dialogRef.current?.close()}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Close"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-6"
            aria-label="Previous photo"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-6"
            aria-label="Next photo"
          >
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </>
      )}
    </dialog>
  );
}
