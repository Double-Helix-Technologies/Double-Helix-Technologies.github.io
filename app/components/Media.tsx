import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PhotoMosaic from './PhotoMosaic';
import VideoEmbed from './VideoEmbed';
import { getHomepagePhotos, getHomepageVideo } from '@/app/data/events';
import { SectionBackdrop } from './ui/section-backdrop';

/**
 * Where the company has been seen: a six-tile mosaic rotating through the photographs flagged for
 * the homepage (the 2025 Hamburg and Rostock mission, the Rostock conference and the two LIAA
 * delegations of 2026) and one video, with a
 * link to the full galleries on /events. Everything is read from `app/data/events.ts`
 * (`homepage: true` on a photo, the first video of the newest event), so this section cannot show
 * something the events page does not. The sentence names only organisations the photographs show.
 * The video is a YouTube Short, so the mosaic is two by three on desktop to stand beside the
 * portrait player. Added at the owner's request on 7 October 2026 to build credibility between the
 * client quotes and the invitation to talk; the rotation replaced a fixed six the same day.
 */
export default function Media() {
  const photos = getHomepagePhotos();
  const video = getHomepageVideo();

  return (
    <section
      id="media"
      className="section relative isolate overflow-hidden bg-background lg:flex lg:min-h-[100svh] lg:items-center"
      aria-labelledby="media-heading"
    >
      <SectionBackdrop variant="dots" />
      <div className="container-tight w-full">
        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <h2 id="media-heading" className="section-heading mb-5 text-balance lg:text-6xl">
              In the room with the industry.
            </h2>
            <p className="text-lg text-text-secondary md:text-xl">
              Since 2025 we have travelled with Latvia&apos;s official trade missions to Hamburg, Rostock, Berlin and the
              US West Coast, visiting BIOTRONIK, Campus Berlin-Buch, Illumina, Thermo Fisher Scientific, Element
              Biosciences, UCLA and Caltech, and in June 2026 we presented at the National Conference on Health Economy
              in Rostock, where Latvia was partner country.
            </p>
          </div>
          <Link
            href="/events/"
            className="inline-flex shrink-0 items-center gap-1 font-medium text-text-primary underline-offset-4 hover:underline"
          >
            All events, photos and videos
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-8">
          <PhotoMosaic photos={photos} label="Photos from conferences and delegations" className="lg:col-span-8" />
          {video && <VideoEmbed video={video} showLabel={false} className="lg:col-span-4" />}
        </div>

        <p className="mt-6 text-xs text-text-secondary">
          Photos: LIAA, the Investment and Development Agency of Latvia, and Photothek (Thomas Koehler,{' '}
          <a
            href="https://www.picdrop.com/photothekmedialab2"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:underline"
          >
            Photothek Media Lab GmbH
          </a>
          ). Video: LIAA.
        </p>
      </div>
    </section>
  );
}
