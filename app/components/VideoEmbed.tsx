'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import type { EventVideo } from '@/app/data/events';
import { cn } from '@/app/utils/cn';

type Props = {
  video: EventVideo;
  className?: string;
  /** Load the poster eagerly (for a video on the first screen). Off by default. */
  priority?: boolean;
  /** Show `video.label` over the poster. On by default; the homepage turns it off (owner, 7 October 2026). */
  showLabel?: boolean;
};

/**
 * A YouTube video behind a local poster. Until the visitor presses play the page contains only
 * our own image and a link, so YouTube receives no request and sets no cookie on a visit that
 * never plays the video. Play swaps in the privacy-enhanced `youtube-nocookie.com` player with
 * autoplay, so one press starts the video. "Watch on YouTube" works without JavaScript and for
 * anyone who prefers not to load the embedded player.
 */
export default function VideoEmbed({ video, className, priority = false, showLabel = true }: Props) {
  const [playing, setPlaying] = useState(false);
  const embedUrl = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`;
  const watchUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;

  const portrait = video.aspect === '9/16';

  return (
    // A portrait video is capped at 24rem wide so it never towers over the page on its own row.
    <figure className={cn('flex flex-col gap-3', portrait && 'mx-auto w-full max-w-sm lg:mx-0', className)}>
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-xl bg-black',
          portrait ? 'aspect-[9/16]' : 'aspect-video'
        )}
      >
        {playing ? (
          <iframe
            src={embedUrl}
            title={video.title}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-lilac"
            aria-label={`Play video: ${video.title}`}
          >
            <Image
              src={video.poster}
              alt=""
              fill
              priority={priority}
              className="object-cover object-center motion-safe:transition-transform motion-safe:duration-500 can-hover:group-hover:scale-[1.03]"
            />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            {showLabel && video.label && (
              <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                {video.label}
              </span>
            )}
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-black shadow-lg motion-safe:transition-transform can-hover:group-hover:scale-105"
            >
              <Play className="ml-1 h-7 w-7 fill-current" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm text-text-secondary">
        <span>{video.title}</span>
        <a href={watchUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 underline-offset-4 hover:underline">
          Watch on YouTube
        </a>
      </figcaption>
    </figure>
  );
}
