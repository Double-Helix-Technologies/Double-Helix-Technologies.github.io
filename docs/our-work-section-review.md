# "Our work" section: independent review from a prospective client's perspective

Date: 11 September 2026
Reviewer: Claude (Cowork), at Alex's request
Status: draft for internal review. Tier 1 changes applied on branch `santa/content-updates` on 11 September 2026 (uncommitted); see "Decisions and changes applied" and "Tier 2 plan" at the end.

Source of truth for all case-study content: the sales deck "Double Helix Technologies, IT service partner for life sciences and healthcare" (15 pages) and the company one-pager, both supplied by Alex on 11 September 2026. Where the website disagreed with the deck, the deck won.

## What was reviewed

Two versions of the section exist right now, and the difference matters.

The live site (doublehelix.dev/work) shows one client solution (Sanger and NGS data delivery pipeline automation) and one product (Tiltera). That is what a prospect sees today.

The `santa/content-updates` branch (commit 3329322 "Add 7 new client case studies", not yet on `main`) shows eight client solutions plus Tiltera. Most of this review is about the branch version, since that is what is about to ship, but the "live today" state is itself the first finding.

I read `app/data/work.ts`, `app/work/page.tsx`, `app/work/WorkShowcase.tsx`, `app/work/[slug]/page.tsx`, the homepage `CaseStudiesSlider` and `app/data/caseStudies.tsx`, `Testimonials.tsx`, the planning notes in `.planning/`, and I opened the live overview, one live detail page and the homepage in a browser. Where I say "verified" it is in the code or visible on the live page. Where I say "looks like" or "if", I am inferring and it needs a human check.

## The buyer I am role-playing

Head of IT or Head of Operations at a sequencing service provider, a contract lab or a forensic laboratory. I have a concrete problem (a LIMS that does not talk to the rest of the estate, a manual data-delivery process, alert fatigue) and I am shortlisting two or three vendors. Behind me is a procurement or vendor-qualification person who will ask about references, security and certification before anyone signs.

What I want from an "Our work" page: have they solved my problem, in my kind of environment, for someone like me; can I believe the numbers; what will working with them actually look like (who, how long, what stack, what they need from me); and what is the low-risk first step.

## Headline verdict

The content in the branch is strong on the first question. LIMS integration, NGS data delivery, forensics digitalisation, observability and IT reorganisation are exactly the problems this buyer has, and the problem statements are written in the buyer's language, not the vendor's. "The process worked, until it didn't" is the kind of line a lab ops lead nods at.

Where the section is weak is everything after "have they done this": believability of the numbers, missing engagement facts, internal inconsistency between the homepage and the work pages, and a next step that does not match how a regulated buyer actually buys. The page currently asks me to trust eight anonymous stories with large numbers and no provenance, while the homepage tells me a different set of numbers for what look like the same projects.

## Findings

### 1. Live today, the section undermines the positioning (verified)

A prospect who clicks "Explore our work" from the hero today lands on a page with two cards: one sequencing project and an AI therapy app that is "in development". For a life-sciences buyer that reads as "one project and a side venture". Shipping the branch fixes the count, but it is worth saying plainly that the current live state is costing credibility with anyone evaluating you this month.

### 2. Two case-study systems with conflicting numbers (verified)

The homepage "Case studies" slider links to `/case-studies/<slug>` and is fed by `app/data/caseStudies.tsx`. The "Our work" nav links to `/work/<slug>` fed by `app/data/work.ts`. They describe overlapping projects with different figures:

The homepage NGS automation slide leads with "75% project management and customer care capacity freed up", while its own outcomes list, and the work page, say 50%. The homepage says "50% decrease in sequencing project setup time"; the work page says 75% less order setup time. The homepage rapid-development slide says live product usage within one month; the work page says the pilot went live within two months. The homepage observability slide says alerts were firing over 1,500 times per day and false positives fell by 90%; the work page says more than 200 alerts per day and false positives were eliminated.

A buyer who reads both (and a diligent one will, because the homepage is where they start) stops trusting all of the numbers, not just the inconsistent ones. This is the single highest-priority fix.

### 3. Three cards that look like one engagement (inference, needs confirmation)

On the work page, "Sanger and NGS data delivery pipeline automation", "Process automation & LIMS integration" and "NGS data delivery automation" sit side by side with near-identical titles and tags (Automation, Integration, LIMS). Two of them each claim "50% capacity freed". The homepage version bundles all of those outcomes (7 to 1 data entry points, 75% setup, 1 week to 1 day backlog, 1.5 days to 3 hours delivery, 50% capacity) into a single case study.

If these are three phases of one programme for one client, a buyer will either read them as three separate clients (which is misleading) or work out that the same 50% is being counted twice (which is worse). Either merge them into one case study with phases, or differentiate them clearly (different client, different lab, different year) and make sure each number appears once.

### 4. Big numbers with no provenance (verified)

95% fewer repeat incidents, IT costs down 37%, NPS from -25 to +72, 80% fewer alerts. These are excellent results and they are presented with nothing that lets me believe them: no baseline period, no measurement method, no time frame, no client attribution, no "as reported by the client's IT lead". Only one of eight cases has a quote, and that quote (forensics) is unattributed.

Meanwhile the homepage testimonials name four Eurofins Genomics people with titles. So the site is willing to name the client on the homepage but not in the case studies, which makes the anonymity look like a choice to avoid scrutiny rather than a confidentiality obligation. The planning notes record "client work must remain anonymous"; that decision is fine, but it needs to be applied consistently and explained to the reader in one sentence.

### 5. Word stats in number slots (verified)

Ten of the twenty-four big stat cards across the eight cases contain a word rather than a number: Flexible, Shared, Auditable, Tiered, Standardized, Proactive, First, Paperless, Faster, Structured. Rendered in 4xl type next to "50%", they read as padding and dilute the real figures. Five of eight cases have at least one.

### 6. Missing engagement facts (verified absence)

Nothing on any page tells me: when the work happened, how long it took, how many people from DHT were involved and in which roles, whether it was a fixed-scope project, a team embedded in the client's IT, or a managed service, what the technology stack was (which LIMS, which ERP, which cloud), what the client had to provide, and whether DHT still supports it. The data model has a `status: 'completed' | 'ongoing'` field on every entry and it is never rendered. "Formed a new delivery team" and "Established a dedicated SRE team" are the most interesting facts in the whole section for a buyer deciding on engagement model, and they are single bullets with no elaboration.

The homepage version of the NGS case includes "10 months from first developer hired to MVP go-live". That is exactly the kind of fact the work page lacks, and it was dropped.

### 7. Nothing about the regulated context (verified absence)

The buyer works in an accredited or GDPR-heavy environment. The forensics case says "information protection was strengthened" and nothing else. The NGS case mentions a 4-eyes approval step, which is good, and stops there. None of the cases say how personal or case data was handled, whether the client's QMS or validation process was involved, how access control or audit trails were designed, or what the data residency situation was. This is the section of the page a forensic lab or clinical genomics buyer would read most carefully, and it is not there. Describe what was actually done; do not assert compliance.

Related: the homepage compliance notice still says "target to become ISO 9001 / ISO 27001 certified in July 2026". It is now September. Whatever the actual status, a regulated buyer who notices a missed date on a compliance banner discounts every process claim in the case studies. Update it to the real state (certified, with scope and body, or a new date, or no date). The certification status needs to be checked against the certificate itself before the wording changes.

### 8. No visuals (verified)

Eight text-only pages. The technical evaluator on the buyer's side wants one anonymised diagram per case: before/after data flow, or the integration architecture. It does not need to reveal anything confidential; boxes labelled "LIMS", "ERP", "e-commerce", "Sample Management System" with arrows would already be more convincing than the prose.

### 9. Sector labels are inconsistent with the homepage (verified)

On the homepage the observability and IT reorganisation cases are titled "Life Sciences Observability & Incident Response" and "Life Sciences IT Reorganization". On the work page their sectors are "Multi-region live operations / SRE" and "Enterprise IT operations". Three of eight work-page cases carry no life-sciences label at all. If those clients were in life sciences, say so on the work page; that is the whole reason this buyer is on the site.

### 10. The next step does not match the buyer (verified)

Every client case ends with "Discuss a similar workflow" linking to the generic homepage contact anchor. In the light theme that button renders in a flat grey that reads as disabled (checked in the browser). There is no option that suits procurement: no "request a reference call", no "get this case study as a PDF", no link to the Operational Flow Risk Assessment, which is the productised, low-risk first step this buyer is looking for and which the site already sells elsewhere. The sidebar lists it under "Related services" as a plain text link.

### 11. Tiltera's placement (judgement call)

Tiltera is a mental-health practice product in development. Sitting as an equal card in the grid (and as the only result of the "Our products" filter) it raises the question "are they distracted?" rather than "look what they can build". Keep it, but frame it: one sentence on what it demonstrates to a client (end-to-end product delivery, sensitive personal data, GDPR) and give it a smaller strip below the client grid rather than equal billing. A filter that returns one card should not be a filter.

### 12. Smaller things

The section has four names: "Our work" in the nav, "Work" in the breadcrumb, "Work that works." as H1, "Client Solutions & Software Products" in the title tag, and the planning notes specify a fifth ("Delivered Client Solutions & Our Products"). Pick one descriptive H1; the planning notes were right that the H1 should carry the SEO meaning.

The subheading "a few things we built because we thought they should exist" is charming and tells the buyer nothing.

"Customer said" as a heading is awkward; "In the client's words" or "What the client said".

The same figure often appears four times on one page (card headline, preview outcome, stat card, outcomes list). Say it once big and once in context.

The homepage slider animates its numbers from zero; the static HTML and text extraction show "0%" and "10 week" before the animation runs. Crawlers, screen readers and AI summarisers see those values. Render the final value in the HTML and animate on top of it. (Observed via page-text extraction; confirm against the static export.)

## Prioritised suggestions

Tier 1, before or with shipping the branch, because they affect whether anything else is believed:

1. Pick one source of truth for case studies. Either point the homepage slider at `work.ts` and redirect `/case-studies/*` to `/work/*`, or retire the slider. Reconcile every figure so it appears once and matches everywhere.
2. Resolve the three automation cards: one engagement with phases, or three clearly distinct ones. Each number once.
3. Add provenance to every headline figure: baseline, period, and how it was measured, in one short line under the stat. Add a client-attributed quote per case where you can get one, or a "reference available on request" line where you cannot.
4. Apply the anonymity decision consistently and explain it once on the overview page ("Clients are not named here; references are available on request" or the equivalent that matches the actual agreements). Since the homepage already names Eurofins Genomics, ask whether the same permission covers the case studies.
5. Fix the compliance notice to the real certification status.
6. Move word-stats out of the number slots. Only numbers go big.

Tier 2, what the buyer needs to evaluate fit:

7. Add an "Engagement facts" block to the sidebar of every case: year, duration, DHT team size and roles, engagement model, stack (at the level the client permits), what the client provided, status (completed or ongoing, and since when). Render the existing `status` field.
8. Add a short "Regulated context" paragraph to every case that had one: how data was classified and protected, access control and audit trail, how the client's QMS or validation process was involved. Describe, do not certify.
9. One anonymised diagram per case.
10. Restore the life-sciences sector label on the work page wherever it is true, and consider a filter by problem type (Automation and integration, Observability and reliability, MVP and product) instead of the current two-way filter.

Tier 3, conversion:

11. Replace the single grey CTA with two: a specific one ("Book a 30-minute call about your data-delivery pipeline") and a procurement one (reference call or PDF). Link explicitly to the Operational Flow Risk Assessment as the low-risk first step.
12. Reframe Tiltera as described above.
13. One descriptive H1 and a subheading that states the scope and the anonymity policy.

## Quick wins possible inside the current branch

Removing the word-stats, rendering `status`, changing the H1 and subheading, changing the CTA label and colour, fixing the compliance notice text, and restoring sector labels are all data or copy changes in `work.ts`, `page.tsx` and `ComplianceNotice.tsx`. The number reconciliation is also mostly a data change once someone decides which figures are right.

## Decisions and changes applied (11 September 2026)

Decisions taken by Alex on 11 September 2026, recorded here so the reasoning survives. If the team keeps ADRs or a decision log elsewhere, copy these there.

Client naming. Eurofins Genomics may be named as the client on the four case studies the deck pairs with Eurofins testimonials: process automation and LIMS integration, NGS data delivery automation, customer integration and API onboarding, IT reorganization. The forensics, observability and rapid MVP cases stay anonymous; the site shows "Client: Not disclosed" for them. The overview page states that clients are named where permission exists and that references are available on request. Client logos remain unpublished (separate approval, per the May planning notes).

The Sanger case. "Sanger and NGS data delivery pipeline automation" was not in the deck and overlapped the two Eurofins genomics cases. It has been merged: its process-mapping approach and Sample Management System detail went into the process automation case; its flexible delivery endpoints and Sanger scope went into the NGS data delivery case. Its URL redirects to the NGS data delivery case. The 50% figure now appears once, on the process automation case, where the deck puts it.

Authoritative figures. Every figure on the site now matches the deck. Corrections made: capacity freed is 50% (homepage had 75% in one place); order setup time reduced by 75% (homepage had 50%); rapid MVP pilot live in two months (homepage had one month); observability baseline is more than 200 alerts a day (homepage had 1,500) and false positives were eliminated (homepage had 90% reduction). The "10 months from first developer hired to MVP go-live" figure is not in the deck but was confirmed accurate by Alex and is kept as an engagement fact on the process automation case.

ISO status. The certification audit is scheduled for the end of October 2026. The homepage notice now says certification is in progress, names the audit timing, and makes no certification claim. The meta keyword "ISO 9001 / ISO 27001 certified" was removed from the default SEO keywords for the same reason.

Single source of truth. `app/data/work.ts` now feeds the homepage slider, the Work overview and detail pages, the AI-solutions proof section and the sitemap. `app/data/caseStudies.tsx` is retired (moved to `_to_delete/`, to be deleted). The old `/case-studies/<slug>/` URLs and the old Sanger URL render a noindex redirect page whose canonical points at the `/work/` destination, since GitHub Pages cannot issue server-side redirects.

Other changes in the same pass. Word-stats were removed from the large stat slots; only numeric results remain there, and the stat grid adapts to one, two or three cards. Every case that has a deck testimonial now shows it with the deck's attribution. Engagement facts supported by the deck (team formed, SRE team established, 10+ applications, 30+ systems across four regions, systems connected, data types) appear in the sidebar. The overview H1 is now "Delivered client solutions and our own products", with a subheading that states scope and the naming policy. The homepage slider renders headlines as static text instead of animating from zero, so crawlers see the real figures. The "Discuss a similar workflow" button uses the same visible gradient as the product button. The NGS delivery case now says "optional 4-eyes approval", matching the deck's "possibility to apply the 4-eyes principle" rather than implying every delivery is approved.

Follow-up pass, same day. The homepage slider went back to its original design (title pill, one animated number, one label, nothing else), still reading from `work.ts` through a `featuredStat` field per case, so the homepage can no longer disagree with the case pages. Site-wide copy rules applied: no middle-dot separators, no em dashes, no unit abbreviations (hours, weeks and months are spelled out). The forensics case no longer mentions the national forensics institute or the country; it now speaks of police, prosecution and forensic laboratory organisations and a government digitalisation initiative, because the specific wording made the customer easy to identify.

The overview cards on `/work` were reduced to three lines each: an eyebrow (client name, or a short sector label when the client is not named), the one result worth remembering, and the title of the work. Preview text, outcome box, tags and the call-to-action text moved off the card; they are all on the detail page. On hover the title crossfades into the case's one-sentence preview (both occupy the same grid cell, so card heights never change), the card tilts a few degrees towards the pointer, a soft spotlight follows the pointer inside the card, and a highlight slides between cards. These are the shared-layout hover and 3D-tilt patterns popularised by Aceternity UI, implemented with the framer-motion dependency the site already has, so nothing new was installed. Tilt is disabled for visitors who prefer reduced motion. While doing this I found that the `accent-digital-blue` and `accent-science-teal` classes used on the work pages do not exist in the Tailwind config (the config names them `accent-blue` and `accent-teal`), so those tints had never rendered; the work pages now use the real names.

Legacy redirect pages (`/case-studies/<slug>/` and the old Sanger URL) exist because those URLs are live, indexed and linked from the homepage since 2025, and GitHub Pages cannot issue server-side redirects. Without them the URLs would return 404 and any ranking or shared links would be lost. They can be removed after a few months once search engines have picked up the canonical `/work/` URLs.

## Tier 2 plan

Tier 2 is about giving the buyer what they need to evaluate fit. The data model already has the fields; what is missing is content that only the delivery team can supply. Proposed sequence:

1. Engagement facts for all seven cases. For each case: year or period, duration, DHT team size and roles, engagement model (embedded team, fixed-scope project, managed service), technology stack at the level the client permits, what the client provided, and whether DHT still supports the system. The `engagementFacts` and `status` fields exist; `status` should be rendered once the ongoing relationships are identified. Effort: a short table from the team, then a data change.

2. Regulated context paragraph on the cases that had one. Forensics: data classification, access control, audit trail, hosting and residency. NGS delivery: handling of personal data, the 4-eyes approval, audit logging. LIMS integration: whether the client's QMS or validation process was involved. Add a `regulatedContext` field and render it as its own section. Describe what was done; do not assert compliance. The one-pager's "no high or critical issues found in penetration tests" belongs here if the team can say which case it refers to.

3. Measurement basis line under the stats. One sentence per case on where the figure comes from (who measured it, over what period, against what baseline). Add an `outcomesBasis` field. Without this the numbers rest on the testimonials alone.

4. One anonymised diagram per case, starting with LIMS integration (before/after data flow across e-commerce, LIMS, ERP, reporting and the Sample Management System) and NGS data delivery (pipeline with endpoints and the 4-eyes step). Inline SVG, theme-aware. Draft the first two for review before doing the rest.

5. Homepage testimonials should read from `work.ts` so the four Eurofins quotes and their attributions cannot drift from the case studies. Small refactor.

6. Filters by problem type on the overview (automation and integration, observability and reliability, MVP and product) in place of the current two-way filter, which returns a single card for "Our products".

Tier 3 remains as listed above: a specific CTA plus a procurement CTA (reference call, PDF) with an explicit link to the Operational Flow Risk Assessment; Tiltera reframed in one sentence and given a smaller strip; the "Our products" single-result filter replaced by a section.

## Open questions for Alex

Confirm the sentence "The pipeline covers both NGS and Sanger sequencing deliveries" on the NGS data delivery case; it comes from the approved May text, not the deck.

Confirm the compliance notice wording: "We operate a quality and information security management system aligned with ISO 9001 and ISO 27001. The certification audit is scheduled for the end of October 2026; we will publish the certificate details here once issued."

Observability case: the old homepage labelled it "Life Sciences"; the deck does not state a sector. It is now "Global support operations / SRE". Say if life sciences may be stated. Same question for rapid MVP, which the old homepage labelled "Logistics".

Forensics quote attribution now reads "Director and the management team of the customer organisation", following the deck. Adjust if the customer approved different wording.

The AI-solutions page proof section now shows the three Eurofins genomics cases (process automation, NGS delivery, API onboarding) instead of the previous three. Swap if you prefer a different set.
