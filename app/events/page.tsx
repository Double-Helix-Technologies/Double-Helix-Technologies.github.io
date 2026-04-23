import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CalendarDays, ChevronRight, MapPin } from 'lucide-react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { ThemeProvider } from '@/app/components/ThemeProvider';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/app/components/ui/breadcrumb';
import { buildMetadata } from '@/app/lib/seo';
import { eventParticipation, formatEventDate } from '@/app/data/events';

export const metadata: Metadata = buildMetadata({
  title: 'Healthcare & Life Sciences Events',
  description:
    'Upcoming and past healthcare, biotech, and life sciences events where Double Helix Technologies meets teams improving regulated workflows.',
  path: '/events/'
});

const byStartDateAscending = (a: (typeof eventParticipation)[number], b: (typeof eventParticipation)[number]) =>
  new Date(a.startDate).getTime() - new Date(b.startDate).getTime();

const byStartDateDescending = (a: (typeof eventParticipation)[number], b: (typeof eventParticipation)[number]) =>
  new Date(b.startDate).getTime() - new Date(a.startDate).getTime();

const upcomingEvents = eventParticipation
  .filter((event) => event.status === 'upcoming')
  .sort(byStartDateAscending);

const pastEvents = eventParticipation
  .filter((event) => event.status === 'past')
  .sort(byStartDateDescending);

function EventCard({ event }: { event: (typeof eventParticipation)[number] }) {
  return (
    <Card className="bg-background shadow-none">
      <CardHeader>
        <div className="mb-4 flex flex-wrap gap-4 text-sm text-text-secondary">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            {formatEventDate(event)}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {event.venue ? `${event.venue}, ` : ''}{event.city}, {event.country}
          </span>
        </div>
        <CardTitle>
          <h2 className="text-2xl md:text-3xl">{event.name}</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-text-secondary">{event.summary}</p>
        <p className="text-sm text-text-secondary">
          <span className="font-semibold text-text-primary">Focus:</span> {event.focus}
        </p>
        {event.ctaHref && event.ctaLabel && (
          <Button asChild variant="secondary">
            <a href={event.ctaHref} target="_blank" rel="noopener noreferrer">
              {event.ctaLabel}
              <ArrowRight size={11} aria-hidden="true" />
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

function EmptyEventsState({ label }: { label: string }) {
  return (
    <Card className="bg-gray-600/10 p-6 shadow-none hover:scale-100">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">{label}</h2>
        <p className="max-w-2xl text-text-secondary">
          Confirmed event participation will be published here with the event context, focus, and relevant follow-up resources.
        </p>
        <Button asChild variant="secondary" className="w-fit">
          <a href="mailto:hello@doublehelix.dev?subject=Event%20collaboration">
            Suggest an event or meeting
            <ArrowRight size={11} aria-hidden="true" />
          </a>
        </Button>
      </div>
    </Card>
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

            <div className="grid gap-8 lg:grid-cols-2">
              <section aria-labelledby="upcoming-events" className="space-y-4">
                <h3 id="upcoming-events" className="text-3xl">
                  Upcoming events
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.length > 0
                    ? upcomingEvents.map((event) => <EventCard key={event.slug} event={event} />)
                    : <EmptyEventsState label="No upcoming events announced yet." />}
                </div>
              </section>

              <section aria-labelledby="past-events" className="space-y-4">
                <h3 id="past-events" className="text-3xl">
                  Past participation
                </h3>
                <div className="space-y-4">
                  {pastEvents.length > 0
                    ? pastEvents.map((event) => <EventCard key={event.slug} event={event} />)
                    : <EmptyEventsState label="Past event recaps will appear here." />}
                </div>
              </section>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </ThemeProvider>
  );
}
