# Marketing Discoverability Enhancement Plan

Date: 2026-04-20

## Current Site Notes

- The site already has a clean standalone page pattern in `app/` with centralized metadata in `app/lib/seo.ts`.
- Navigation is intentionally small today: `Services`, `About`, `Team`, `Contact`.
- The sitemap currently includes the homepage, `/about/`, `/team/`, `/operational-flow-risk-assessment/`, service pages, and case studies.
- LinkedIn is currently linked only from the footer; there is no on-site updates or events area.

## Recommendation Summary

### Priority 1: Add a certification progress notice

Goal:
Build trust for regulated buyers without implying certification has already been completed.

Recommended UX:

- Add a compact "Trust & Compliance" block on the homepage, ideally below the hero or near the contact section.
- Repeat the same message on the `About` page and optionally in the footer.
- Keep the wording factual and low-drama.

Recommended copy direction:

- `We are currently undergoing ISO 9001 and ISO 27001 certification, with a target to become ISO 9001 & ISO 27001 certified in July 2026.`

Important compliance note:

- Do not use wording like `ISO certified` before certification is completed.
- Do not show official certification marks unless granted by the certification body and used according to their rules.

SEO impact:

- Low as a direct ranking factor.
- High as a trust and conversion signal for buyers comparing vendors in healthcare, life sciences, and regulated environments.

Implementation shape:

- Add a reusable component such as `TrustSignals` or `ComplianceNotice`.
- Link to a short page section explaining what this means in practice: quality management, security controls, audit-readiness, and operational rigor.

### Priority 2: Launch an Events hub

Goal:
Create an indexable place for event participation, outreach goals, and post-event credibility signals.

Recommended information architecture:

- Add a top-level route: `/events/`
- Add individual event detail pages: `/events/[slug]/`

Why both are useful:

- The list page helps users browse upcoming and past participation.
- The detail pages are better for search, internal linking, and structured data.
- Google event guidance is strongest when each event has its own dedicated page rather than only appearing in a list.

Recommended page content for `/events/`:

- Upcoming events
- Past events
- For each event: name, date, city, event type, short description, and primary goal
- CTA such as `Meet us there`, `Book time with us`, or `Request follow-up`

Recommended content for each event detail page:

- Event title
- Dates
- Venue and city
- Why Double Helix is attending
- Specific goals, for example:
  - Meet life sciences and healthcare operations leaders
  - Validate integration and observability pain points
  - Explore partner and distributor relationships
  - Share practical AI adoption and compliance-readiness perspectives
- Relevant services or case studies
- Optional post-event recap after the event

SEO recommendations:

- Add metadata with event-specific titles and descriptions.
- Add breadcrumb schema and visible breadcrumbs.
- Add the detail pages to `app/sitemap.ts`.
- Add internal links from the homepage, footer, About page, and relevant service pages.
- Use `Event` structured data on single event pages when the page focuses on one event.

Suggested initial nav treatment:

- Add `Events` to the footer immediately.
- Add `Events` to the top navigation if events will be maintained regularly.
- If the section will stay small, keep it in the footer first and link to it from the homepage trust/social proof areas.

Content model suggestion:

- Create `app/data/events.ts` with an array of event objects:
  - `slug`
  - `name`
  - `status` (`upcoming`, `past`)
  - `startDate`
  - `endDate`
  - `city`
  - `country`
  - `venue`
  - `summary`
  - `goals`
  - `ctaLabel`
  - `ctaHref`
  - `externalEventUrl`

### Priority 3: Do not use a LinkedIn feed as the SEO strategy

Goal:
Avoid spending effort on a feature that looks active but contributes little to discoverability.

Recommendation:

- Do not add a live embedded LinkedIn feed primarily for indexing.
- If social proof is needed, use a curated on-site updates section instead.

Reasoning:

- Embedded social content is often JavaScript-driven or duplicated from the source platform.
- Even when Google can render JavaScript, that does not mean the embedded feed content will become a strong source of unique indexable value for `doublehelix.dev`.
- If the same content exists on LinkedIn and on your site, Google may treat your page as lower-value or duplicate-heavy unless the page adds original context.

Better alternative:

- Create a lightweight `Insights` or `Latest Updates` section on your own domain.
- For each LinkedIn post worth preserving, publish a short native website entry with:
  - a unique headline
  - a 2-4 paragraph summary or commentary
  - a link to the LinkedIn post
  - related service or event links
- If desired, visually label these as `From LinkedIn` without relying on a full embed.

When a LinkedIn embed still makes sense:

- Social proof on a page where engagement matters more than SEO.
- A small manual highlight card for 1-3 recent updates.
- Cases where the website copy around the embed is unique and useful on its own.

## Recommended Rollout Order

1. Add the certification progress notice and supporting trust section.
2. Add the Events list page and include it in the footer and sitemap.
3. Add the first 2-3 event detail pages with structured data and strong internal links.
4. Only after that, decide whether a curated `Latest from LinkedIn` section is still useful for visitors.

## Concrete Next Implementation Slice

If implemented as the next batch, the smallest high-value scope is:

1. Homepage trust/compliance block
2. Footer link to `/events/`
3. New `/events/` list page
4. `app/data/events.ts`
5. Sitemap update for the Events hub

The second slice can add:

1. `/events/[slug]/`
2. Event structured data
3. About page trust reinforcement
4. Curated on-site updates or event recaps

## Source Notes

Current recommendations were aligned to:

- Google Search Central guidance on JavaScript rendering and indexing
- Google Search Central guidance on canonicalization and duplicate content
- Google Search Central guidance for `Event` structured data
- LinkedIn help documentation showing that LinkedIn public profiles and Pages can surface in search, but that does not imply an embedded LinkedIn feed meaningfully improves indexing for your own domain
