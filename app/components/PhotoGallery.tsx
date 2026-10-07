'use client';

import { useRef, useState } from 'react';
import Lightbox from './Lightbox';
import { thumbSize, thumbSrcSet, type EventPhoto } from '@/app/data/events';

type Props = {
  photos: EventPhoto[];
  /** Accessible name of the gallery, for example "Photos: Berlin delegation". */
  label: string;
  className?: string;
};

/**
 * Photographs as a grid of cropped thumbnails (two to four columns), each opening the full picture
 * in the lightbox. The thumbnails are in the server-rendered HTML; only the lightbox needs
 * JavaScript. Thumbnails are cropped to 3:2 so the grid is even; the lightbox shows the whole
 * picture. Focus returns to the thumbnail that opened the lightbox when it closes. Hover zoom is
 * skipped under reduced motion. Thumbnails are plain `<img>` elements with a hand-written `srcset`
 * (480 px and 720 px copies), because the site exports statically with `images.unoptimized` and
 * next/image would send every visitor the 720 px file.
 */
export default function PhotoGallery({ photos, label, className }: Props) {
  const [current, setCurrent] = useState<number | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className={className}>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4" aria-label={label}>
        {photos.map((item, index) => {
          const size = thumbSize(item);
          return (
            <li key={item.src}>
              <button
                type="button"
                onClick={(event) => {
                  openerRef.current = event.currentTarget;
                  setCurrent(index);
                }}
                className="group relative block aspect-[3/2] w-full overflow-hidden rounded-xl bg-background-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lilac focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`Open photo: ${item.caption}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- static export, hand-written srcset */}
                <img
                  src={item.thumb}
                  srcSet={thumbSrcSet(item)}
                  sizes="(min-width: 1024px) 270px, (min-width: 640px) 33vw, 50vw"
                  alt={item.alt}
                  width={size.width}
                  height={size.height}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center motion-safe:transition-transform motion-safe:duration-500 can-hover:group-hover:scale-[1.04]"
                />
              </button>
            </li>
          );
        })}
      </ul>

      <Lightbox
        photos={photos}
        index={current}
        label={label}
        onNavigate={setCurrent}
        onClose={() => {
          setCurrent(null);
          openerRef.current?.focus();
        }}
      />
    </div>
  );
}
