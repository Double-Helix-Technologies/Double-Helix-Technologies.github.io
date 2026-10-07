import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { ThemeProvider } from '@/app/components/ThemeProvider';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/app/components/ui/breadcrumb';
import { buildMetadata } from '@/app/lib/seo';
import { eventParticipation, formatEventDate, getEventsWithMedia } from '@/app/data/events';
import PhotoGallery from '@/app/components/PhotoGallery';
import VideoEmbed from '@/app/components/VideoEmbed';
import EventsList, { type EventCardData } from './EventsList';

export const metadata: Metadata = buildMetadata({
  title: 'Healthcare & Life Sciences Events',
  description:
    'Upcoming and past healthcare, biotech, and life sciences events where Double Helix Technologies meets teams improving regulated workflows, with photos and videos from the LIAA delegations to Berlin and the US West Coast.',
  path: '/events/'
});

const galleryId = (slug: string) => `gallery-${slug}`;

/** The cards' data, without the galleries' photo and video lists (those render on the server below). */
const eventCards: EventCardData[] = eventParticipation.map((event) => ({
  slug: event.slug,
  name: event.name,
  status: event.status,
  startDate: event.startDate,
  endDate: event.endDate,
  city: event.city,
  country: event.country,
  venue: event.venue,
  summary: event.summary,
  focus: event.focus,
  ctaLabel: event.ctaLabel,
  ctaHref: event.ctaHref,
  coverage: event.coverage,
  hasMedia: (event.photos?.length ?? 0) > 0 || (event.videos?.length ?? 0) > 0
}));

const eventsWithMedia = getEventsWithMedia();

/**
 * One event's photographs and videos: the videos first (they carry the most), then the grid of
 * thumbnails with the lightbox, then the credit line. Reached from the "Photos and videos" action
 * on the event's card and from the homepage media section.
 */
function EventGallery({ event }: { event: (typeof eventParticipation)[number] }) {
  const videos = event.videos ?? [];
  const photos = event.photos ?? [];
  return (
    <article id={galleryId(event.slug)} className="scroll-mt-28" aria-labelledby={`${galleryId(event.slug)}-heading`}>
      <div className="mb-6 max-w-3xl">
        <h3 id={`${galleryId(event.slug)}-heading`} className="text-3xl">
          {event.name}
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          {formatEventDate(event)}, {event.city}, {event.country}
        </p>
      </div>

      {videos.length > 0 && (
        <div className={`mb-8 grid gap-8 ${videos.length > 1 ? 'sm:grid-cols-2 lg:grid-cols-3' : ''}`}>
          {videos.map((video) => (
            <VideoEmbed key={video.youtubeId} video={video} />
          ))}
        </div>
      )}

      {photos.length > 0 && <PhotoGallery photos={photos} label={`Photos: ${event.name}`} />}

      {event.photoCredit && (
        <p className="mt-4 text-xs text-text-secondary">
          {event.photoCreditUrl ? (
            <a href={event.photoCreditUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
              {event.photoCredit}
            </a>
          ) : (
            event.photoCredit
          )}
        </p>
      )}
    </article>
  );
}

export default function EventsPage() {
  const breadcrumb = (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/events">Events</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );

  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Navigation />
        <section className="top-section bg-gradient-to-t from-background-alt to-background pb-10">
          <div className="container-tight">
            <div className="mb-6 flex max-w-3xl flex-col gap-6">
              {breadcrumb}
              <h1 className="section-heading mb-3 max-w-3xl">
                Where we meet quality-driven teams, partners, and operators.
              </h1>
              <p className="text-text-secondary">
                We use events to learn from life sciences and healthcare operators, share practical integration and AI adoption lessons, and connect with teams improving regulated workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-gradient-to-b from-background to-background-alt" aria-labelledby="events-list">
          <div className="container-tight">
            <div className="mb-10 max-w-3xl">
              <h2 id="events-list" className="section-heading mb-3">
                Events
              </h2>
              <p className="text-text-secondary">
                Conferences and industry gatherings where we connect with healthcare, biotech and life sciences teams.
              </p>
            </div>

            <EventsList events={eventCards} />
          </div>
        </section>

        {eventsWithMedia.length > 0 && (
          <section className="section bg-background-alt" aria-labelledby="events-media">
            <div className="container-tight">
              <div className="mb-10 max-w-3xl">
                <h2 id="events-media" className="section-heading mb-3">
                  Photos and videos
                </h2>
                <p className="text-text-secondary">
                  From the conferences, delegations and site visits we have taken part in. Captions name the
                  organisation, the place and the date.
                </p>
              </div>
              <div className="space-y-16 lg:space-y-20">
                {eventsWithMedia.map((event) => (
                  <EventGallery key={event.slug} event={event} />
                ))}
              </div>
            </div>
          </section>
        )}
        <Footer />
      </main>
    </ThemeProvider>
  );
}
