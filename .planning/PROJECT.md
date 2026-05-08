# Double Helix Technologies Website

## What This Is

This is the public website for Double Helix Technologies, built to attract and qualify buyers in life sciences and healthcare. It explains the company's services, showcases selected proof, and now expands into a dedicated Work section for anonymized client solutions and owned products.

## Core Value

Make Double Helix credible and easy to understand for regulated-workflow buyers who need a trustworthy partner for software, integrations, and practical AI.

## Requirements

### Validated

- [x] Present core services for life sciences and healthcare buyers
- [x] Publish case studies and trust-building content for operational transformation work

### Active

- [ ] Launch a Work section that separates delivered client solutions from owned products
- [ ] Publish the first detailed client solution page using approved anonymous content
- [ ] Publish the first detailed product page for Tiltera with an early-access CTA

### Out of Scope

- Full portfolio publication for all 7 client solutions and 4 products — content is not ready yet
- Public Partnership page — intentionally deferred to a separate future page
- Client-specific logos, screenshots, and confidential implementation details — not approved for publication

## Context

The site already includes service pages, case studies, events, and general company/about content. Discovery for this task established that Work must serve three goals in order: credibility, organic search visibility, and future Google Ads support. Work needs two content tracks because buyer intent differs between anonymized client delivery examples and owned products.

## Constraints

- **Content approval**: Only the first client solution and Tiltera have enough approved detail for publication right now
- **Confidentiality**: Client work must remain anonymous and stay at the level of general description
- **Architecture**: New pages should follow the established Next.js App Router patterns already used by services and case studies
- **SEO**: Titles and page copy should use descriptive market language rather than vague labels such as "portfolio"

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use `Work` in navigation with a more descriptive on-page H1 | Keeps header navigation short while preserving SEO clarity on the page itself | ✓ Good |
| Split Work into client solutions and products | Different buyer intent, stronger SEO targeting, better future ad-to-page relevance | ✓ Good |
| Publish only one detailed entry per section in v1 | Approved content exists for one client solution and one product, avoiding thin or risky pages | ✓ Good |

---
*Last updated: 2026-05-07 after Work section discovery and v1 implementation kickoff*
