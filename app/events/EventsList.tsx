'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CalendarDays, ChevronDown, MapPin } from 'lucide-react';
import { Button, buttonVariants } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { cn } from '@/app/utils/cn';
import { formatEventDate, type EventCoverage } from '@/app/data/events';

/** What a card needs; the page passes this rather than the whole event, so the galleries' data is not sent twice. */
export type EventCardData = {
  slug: string;
  name: string;
  status: 'upcoming' | 'past';
  startDate: string;
  endDate?: string;
  city: string;
  country: string;
  venue?: string;
  summary: string;
  focus: string;
  ctaLabel?: string;
  ctaHref?: string;
  coverage?: EventCoverage[];
  /** Whether the event has a gallery on this page (`#gallery-<slug>`). */
  hasMedia: boolean;
};

type Props = {
  events: EventCardData[];
};

/**
 * How many past events are shown before the rest fold away. The list is collapsed by default
 * (owner, 7 October 2026) behind a native `<details>`, so it needs no JavaScript and every card is
 * still in the HTML for search engines. A month or year filter lifts the fold, since the visitor
 * has asked for a specific slice.
 */
const PAST_EVENTS_SHOWN = 4;

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

type YearFilter = number | 'all';
type MonthFilter = number | 'all';

/** The (year, month) pairs an event touches, from its first day to its last. */
function monthsCovered(event: Pick<EventCardData, 'startDate' | 'endDate'>) {
  const start = new Date(event.startDate);
  const end = new Date(event.endDate ?? event.startDate);
  const covered: { year: number; month: number }[] = [];
  for (let year = start.getFullYear(), month = start.getMonth(); ; ) {
    covered.push({ year, month });
    if (year === end.getFullYear() && month === end.getMonth()) break;
    month += 1;
    if (month === 12) {
      month = 0;
      year += 1;
    }
  }
  return covered;
}

function matches(event: EventCardData, year: YearFilter, month: MonthFilter) {
  return monthsCovered(event).some(
    (slot) => (year === 'all' || slot.year === year) && (month === 'all' || slot.month === month)
  );
}

const byStartDateAscending = (a: EventCardData, b: EventCardData) =>
  new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
const byStartDateDescending = (a: EventCardData, b: EventCardData) =>
  new Date(b.startDate).getTime() - new Date(a.startDate).getTime();

function EventCard({ event }: { event: EventCardData }) {
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
            {event.venue ? `${event.venue}, ` : ''}
            {event.city}, {event.country}
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
        {event.coverage && event.coverage.length > 0 && (
          <p className="text-sm text-text-secondary">
            <span className="font-semibold text-text-primary">Coverage:</span>{' '}
            {event.coverage.map((article, index) => (
              <span key={article.href}>
                {index > 0 && ', '}
                <a
                  href={article.href}
                  title={article.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-text-primary"
                >
                  {article.outlet}
                </a>
                {article.language && <span aria-hidden="true"> ({article.language.toUpperCase()})</span>}
                {article.language && (
                  <span className="sr-only"> (in {article.language === 'lv' ? 'Latvian' : 'German'})</span>
                )}
              </span>
            ))}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {event.hasMedia && (
            <Button asChild variant="secondary">
              <a href={`#gallery-${event.slug}`}>
                Photos and videos
                <ArrowRight size={11} aria-hidden="true" />
              </a>
            </Button>
          )}
          {event.ctaHref && event.ctaLabel && (
            <Button
              asChild
              variant={event.hasMedia ? 'link' : 'secondary'}
              className={event.hasMedia ? 'px-0' : undefined}
            >
              <a href={event.ctaHref} target="_blank" rel="noopener noreferrer">
                {event.ctaLabel}
                <ArrowRight size={11} aria-hidden="true" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function EmptyEventsState({ label, filtered }: { label: string; filtered: boolean }) {
  return (
    <Card className="bg-gray-600/10 p-6 shadow-none hover:scale-100">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">{label}</h2>
        {!filtered && (
          <p className="max-w-2xl text-text-secondary">
            Confirmed event participation will be published here with the event context, focus, and relevant
            follow-up resources.
          </p>
        )}
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

/**
 * One row of text options with an underline that slides to the selection (the Work page's filter
 * idiom). On phones the row scrolls sideways as one line instead of wrapping into four; from the
 * `sm` breakpoint it wraps. The scrollbar is hidden, the cut-off last option shows there is more.
 */
function FilterRow<T extends string | number>({
  label,
  options,
  value,
  onChange,
  layoutId,
  className
}: {
  label: string;
  options: { id: T; label: string; disabled?: boolean }[];
  value: T;
  onChange: (value: T) => void;
  layoutId: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <div
      className={cn(
        'flex items-baseline gap-x-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:gap-y-1 sm:overflow-visible',
        className
      )}
      role="group"
      aria-label={label}
    >
      {options.map((option) => {
        const active = value === option.id;
        return (
          <button
            key={String(option.id)}
            type="button"
            onClick={() => onChange(option.id)}
            aria-pressed={active}
            disabled={option.disabled}
            title={option.disabled ? 'Nothing in this period' : undefined}
            className={cn(
              'relative -mb-px shrink-0 py-2.5 text-sm outline-none transition-colors focus-visible:text-text-primary',
              active ? 'font-medium text-text-primary' : 'font-medium text-text-secondary hover:text-text-primary',
              // A plain opacity, not a colour modifier: `text-text-secondary/40` is silently dropped on
              // this theme's CSS-variable colours (see tailwind.config.ts), so greyed options looked live.
              option.disabled && 'cursor-not-allowed font-normal opacity-35 hover:text-text-secondary'
            )}
          >
            {option.label}
            {active && (
              <motion.span
                aria-hidden="true"
                layoutId={layoutId}
                className="absolute inset-x-0 bottom-0 h-0.5 bg-accent-blue"
                transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 500, damping: 40 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

/**
 * The two columns of event cards (upcoming, past) under a year and month filter (owner request,
 * 7 October 2026). Years come from the data; months with no event in the chosen year are disabled
 * so no choice leads to an empty page by accident. The selection is mirrored in `?year=` and
 * `?month=` (1 to 12) so a filtered view can be linked to; the static HTML always shows everything.
 */
export default function EventsList({ events }: Props) {
  const [year, setYear] = useState<YearFilter>('all');
  const [month, setMonth] = useState<MonthFilter>('all');
  const filtered = year !== 'all' || month !== 'all';

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedYear = Number(params.get('year'));
    const requestedMonth = Number(params.get('month'));
    if (requestedYear >= 2000 && requestedYear <= 2100) setYear(requestedYear);
    if (requestedMonth >= 1 && requestedMonth <= 12) setMonth(requestedMonth - 1);
  }, []);

  function select(nextYear: YearFilter, nextMonth: MonthFilter) {
    setYear(nextYear);
    setMonth(nextMonth);
    const url = new URL(window.location.href);
    if (nextYear === 'all') url.searchParams.delete('year');
    else url.searchParams.set('year', String(nextYear));
    if (nextMonth === 'all') url.searchParams.delete('month');
    else url.searchParams.set('month', String(nextMonth + 1));
    window.history.replaceState(null, '', url);
  }

  const years = useMemo(
    () => Array.from(new Set(events.flatMap((event) => monthsCovered(event).map((slot) => slot.year)))).sort(),
    [events]
  );
  const monthOptions = useMemo(
    () =>
      MONTHS.map((name, index) => ({
        id: index,
        label: name,
        disabled: !events.some((event) => matches(event, year, index))
      })),
    [events, year]
  );

  const upcoming = events
    .filter((event) => event.status === 'upcoming' && matches(event, year, month))
    .sort(byStartDateAscending);
  const past = events
    .filter((event) => event.status === 'past' && matches(event, year, month))
    .sort(byStartDateDescending);
  const pastShown = filtered ? past : past.slice(0, PAST_EVENTS_SHOWN);
  const pastFolded = filtered ? [] : past.slice(PAST_EVENTS_SHOWN);

  const periodLabel =
    month === 'all' ? (year === 'all' ? 'all years' : String(year)) : `${MONTHS[month]}${year === 'all' ? '' : ` ${year}`}`;
  const total = upcoming.length + past.length;

  return (
    <div className="space-y-10">
      {/* Years above months on one hairline, nothing else: the underline is the only accent, the
          "All years" and "All months" options are the reset, and the empty states in the columns say
          when a period has nothing. The count is read out to screen readers only. */}
      <div>
        <FilterRow
          label="Year"
          layoutId="events-year-underline"
          value={year}
          onChange={(next) => {
            // Keep the month only if it still has events in the new year.
            const keepMonth = month !== 'all' && events.some((event) => matches(event, next, month));
            select(next, keepMonth ? month : 'all');
          }}
          options={[{ id: 'all' as const, label: 'All years' }, ...years.map((item) => ({ id: item, label: String(item) }))]}
        />
        <FilterRow
          label="Month"
          layoutId="events-month-underline"
          value={month}
          onChange={(next) => select(year, next)}
          options={[{ id: 'all' as const, label: 'All months' }, ...monthOptions]}
          className="border-b border-divider"
        />
        <p className="sr-only" aria-live="polite">
          {filtered ? `${total} ${total === 1 ? 'event' : 'events'} in ${periodLabel}.` : `${total} events.`}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <section aria-labelledby="upcoming-events" className="space-y-4">
          <h3 id="upcoming-events" className="text-3xl">
            Upcoming events
          </h3>
          <div className="space-y-4">
            {upcoming.length > 0 ? (
              upcoming.map((event) => <EventCard key={event.slug} event={event} />)
            ) : (
              <EmptyEventsState
                label={filtered ? `No upcoming events in ${periodLabel}.` : 'No upcoming events announced yet.'}
                filtered={filtered}
              />
            )}
          </div>
        </section>

        <section aria-labelledby="past-events" className="space-y-4">
          <h3 id="past-events" className="text-3xl">
            Past participation
          </h3>
          <div className="space-y-4">
            {pastShown.length > 0 ? (
              pastShown.map((event) => <EventCard key={event.slug} event={event} />)
            ) : (
              <EmptyEventsState
                label={filtered ? `No past events in ${periodLabel}.` : 'Past event recaps will appear here.'}
                filtered={filtered}
              />
            )}
            {pastFolded.length > 0 && (
              <details className="group">
                <summary
                  className={cn(buttonVariants({ variant: 'secondary' }), 'cursor-pointer list-none [&::-webkit-details-marker]:hidden')}
                >
                  <span className="group-open:hidden">
                    Show {pastFolded.length} earlier {pastFolded.length === 1 ? 'event' : 'events'}
                  </span>
                  <span className="hidden group-open:inline">Hide earlier events</span>
                  <ChevronDown size={14} aria-hidden="true" className="transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-4 space-y-4">
                  {pastFolded.map((event) => (
                    <EventCard key={event.slug} event={event} />
                  ))}
                </div>
              </details>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
