# Homepage rework for decision-makers: changes, owner-review list, verification

Date: 14 September 2026
Branch: `feat/homepage-decision-maker` (15 commits on top of `main` 87a431f; not pushed, not deployed)
Author: Claude (Cowork), at Alex's request. Draft until reviewed by a human.

## What changed and why it helps a decision-maker

The homepage now answers, in order, the questions a managing director or operations lead asks: what do you do for me, prove it, which of my problems do you solve, how do I start with limited risk, how do you deliver and who is accountable, what about our regulated context, who else says so, how do I talk to you.

Hero (`app/components/Hero.tsx`). One headline with the operational benefit ("Less manual work. More capacity for what matters."), one sentence saying what we do and for whom, two actions: book a consultation (straight to the booking page) and see our work. AI is out of the headline; the AI page stays linked from the services section. On a 390 px phone the primary action sits on the first screen even with the cookie banner open.

Named client proof (`app/components/ClientProof.tsx`). Directly under the hero: the Eurofins Genomics process automation and LIMS integration case with three verified figures (7 to 1 data entry points, 75% less order setup time, 50% of project management and Customer Care capacity freed), the attributed quote from Annika Schott, and a link to the full case study. Everything is read from `app/data/work.ts`; nothing is typed twice. No carousel.

Services (`app/components/Services.tsx`). The six-row accordion that hid every description behind a click is now a two-column list showing title and description, each linking to its detail page.

Starting engagement (`app/components/StartingEngagement.tsx`). The Operational Workflow Risk Assessment as the concrete first step: who it suits, what the customer contributes, the six deliverables as published on the assessment page, and what the customer decides with the result. The free introductory call and the paid assessment are stated separately. Tiers, timelines and currency are not repeated on the homepage (see owner item 6).

Delivery and accountability (`app/components/HowWeWork.tsx` unchanged, `app/components/Leadership.tsx` new). The four leaders from `team.ts` with role and opening biography line, framed with the /team/ wording: a small senior team, you work directly with the people building your solution, based in Riga. No headcount, no named delivery lead (owner items 4 and 5).

Safeguards (`app/components/Safeguards.tsx`). Three short columns: how we deliver (existing practice already stated on the site), what you can contract for (options), what stays with you (regulatory interpretation, decisions, access). The approved ISO wording is exported from `ComplianceNotice.tsx` and rendered here, unchanged, where a regulated buyer looks for it.

Further evidence (`app/components/CaseStudiesGrid.tsx`, `app/components/Testimonials.tsx`). The other six cases as a static list with final figures as plain text; the four Eurofins quotes as plain text in two columns, read from `work.ts` through `getPublishedQuotes()`, each linking to its case, with one sentence saying that all four are depth within one client group rather than four customers. Attributions end with "(title at the time of the project)".

Contact (`app/components/Contact.tsx`). Call description matched to the booking page (Let's meet, 30, 45 or 60 minutes, Google Meet): "Free introductory call, 30 to 60 minutes on Google Meet", replacing the outdated "15-30 min". Registration number added; a procurement mailbox named.

Design. After a first pass that the owner found crowded, all nested boxes were removed in favour of whitespace, hairline rules and shorter copy. Section side padding on phones now comes from the container only (reading width 342 px instead of 294 px at 390 px). Cookie banner measures itself, pads the page by its own height, and shows one sentence plus the three choices on phones; analytics remain off until allowed and declining is one tap.

## Defects fixed

1. `/about/` returned 404 while still indexed. `app/about/page.tsx` renders `LegacyRedirect` to `/team/`, noindex, canonical `/team/`, not in the sitemap.
2. Animated counters put start values ("0%", "Under 0 weeks") in the HTML. `AnimatedCounter` now renders the final value, animates only after mount and in view, and not at all under `prefers-reduced-motion`. The homepage no longer uses it; the component stays correct for other uses.
3. Legal notice lacked registration number, register, postal code, representatives and a data protection contact. Added legal form, registration number 50203351951, Register of Enterprises of the Republic of Latvia, registered office Lastādijas iela 12 k-3, Riga, LV-1050 (address confirmed by the owner on 14 September 2026; postal code from the register), VAT number; date updated. Representatives and data protection contact remain owner items.
4. Testimonials existed in two places with drifting attributions. Single source in `work.ts`.
5. Found during validation, not in the brief: `ConsentProvider` replaced all page content with an empty placeholder until it had read the consent cookie on the client, so every exported page had an empty `<body>` in the static HTML (nothing for crawlers that do not run JavaScript, reader mode, link previews, or the meta-refresh fallback on redirect pages). Children now render on the server; only the cookie banner waits for the stored consent. This exposed a second defect: `contact-confirmation` uses `useSearchParams()` without a Suspense boundary and could not prerender; wrapped.
6. `border-border/40` and similar opacity modifiers on `var()` colours are not generated by Tailwind 3 and silently fell back to the preflight grey. New `--divider` token for hairline rules.

## Owner-review list

Each item has a `// OWNER:` comment at the spot in the code unless stated otherwise. Nothing below is rendered until confirmed.

1. Registered office: confirmed by Alex as Lastādijas iela 12 k-3, Riga. The postal code LV-1050 was taken from the register entry cited in the credibility review; confirm it. `app/lib/seo.ts` lines 22 to 28 (`siteConfig.address`), `app/notice/page.tsx`, `app/components/Contact.tsx`.
2. Persons authorised to represent the company (board members and rights of representation as in the Register of Enterprises). `app/notice/page.tsx` line 52.
3. Data protection contact (person or role, mailbox). The privacy policy routes rights requests to hello@doublehelix.dev. `app/notice/page.tsx` line 66.
4. Current titles of the four Eurofins Genomics contacts; Reynald Vidili in particular (a third-party org chart lists him as President of Eurofins Genomics). All four attributions now say "(title at the time of the project)". `app/data/work.ts` line 359 and the four `attribution` fields.
5. Team size and a named delivery lead: neither is stated on the site, so the homepage says "a small senior team" with no number and names no lead. `app/components/Leadership.tsx` line 31.
6. Risk-assessment tiers, timelines and currency. `app/operational-flow-risk-assessment/Pricing.tsx` lines 25 to 42 publish USD tiers with timelines of roughly 14, 21 to 28 and 35 to 42 weeks; `faqData.ts` line 5 says "3-6 week diagnostic"; `app/data/services.ts` line 29 says "2-4 months". These disagree. Confirm they are current and consistent (or remove them from the assessment page) before repeating any on the homepage. `app/components/StartingEngagement.tsx` line 13.
7. Regulated-project practices not evidenced anywhere on the site and therefore omitted from the Safeguards section (`app/components/Safeguards.tsx` line 10): data handling (hosting, who can access customer data, NDAs and subprocessors, GDPR role); access control to customer environments; security testing evidence (the one-pager's penetration-test statement names no system or date); intellectual property in deliverables and source code; backup, business continuity and key-person cover; professional liability insurance.
8. `defaultKeywords` in `app/lib/seo.ts` line 43 still contains "ISO 9001 and ISO 27001 certification". Not a claim, but consider aligning with the approved "aligned with" wording.
9. `featuredStat` in `app/data/work.ts` line 127 is no longer rendered anywhere after the carousel was removed; keep or remove in a later data tidy-up.
10. `app/components/Contact.tsx` line 36 names hello@doublehelix.dev for procurement and RFP questions; confirm that mailbox is monitored for that purpose.
11. Untracked folders left in the working tree, not touched by this work: `_to_delete/`, `docs/prompts/`, `docs/homepage-credibility-review.md`, and `Claude outputs/` (created by the desktop app during this session). Decide what to commit or remove.

Owner tasks outside the code, from the brief: confirm the representing board members; confirm the four Eurofins titles against LinkedIn; confirm team size if it is to be stated; confirm the risk-assessment tiers, timelines and currency, or take them off the assessment page; ask LIAA to correct the net turnover on the English business.gov.lv company page; ask the Digital Health Association Latvia and the Latvian American Chamber of Commerce to list the company if membership is current, or remove those logos from the About page; obtain logo permission from Eurofins Genomics and any other client before any logo row is built.

## Verification

Checked on 14 September 2026, on the final commit of the branch.

`npx tsc --noEmit`: clean. `npx eslint .`: 0 errors, 8 warnings, all pre-existing and in files not touched by this work.

Build: passes and exports all routes including `/about/`. Limitation: it was run inside the Cowork Linux VM on Alex's Mac, which is linux/arm64 without native Turbopack bindings and whose network blocks fonts.googleapis.com. The build therefore used `next build --webpack` with mocked Google Fonts CSS (`NEXT_FONT_GOOGLE_MOCKED_RESPONSES`) for validation only; no project file was changed for this. `npm run build` (Turbopack, real fonts) on the Mac itself is the authoritative check and should be run before merging. A native swc binary was placed in `node_modules/next/next-swc-fallback/` by this process (Next's own fallback location, ignored by git).

`dist/about/index.html`: contains the meta refresh to `/team/`, the visible "Continue to About us" link, `noindex, nofollow`, canonical `https://doublehelix.dev/team/`; absent from `dist/sitemap.xml`.

`dist/notice/index.html`: shows legal form, registration number, register, registered office with postal code, VAT number, date 2026-09-14.

`dist/index.html`: every figure appears once in its final form (7 → 1, 75%, 50%, 1.5 days → 3 hours, Months → under 2 weeks, 2 years late. First to launch., 95% fewer repeat incidents, 80% fewer alerts. 4× faster response., Idea → working MVP in under a week); no start value ("0%", "Under 0", "36 hours", "10 week") appears; the ISO statement is present verbatim; no em dashes or middle dots anywhere in `app/` or in the rendered text. All 29 homepage links resolve to an exported page or an existing anchor; external links are the booking page, LinkedIn, two mailboxes and the phone number.

Rendering: screenshots of the exported site at 1440 × 900 and 390 × 844 in light and dark themes (Chromium via Playwright, served from the export). Primary action visible on the first screen in all four, with the cookie banner open (banner 94 px on desktop, 124 px on phones). No horizontal scroll. No JavaScript errors. Team photos and disclosure images load (lazy). Fonts in these screenshots were system fallbacks because of the mock; the production build uses Inter and Outfit.

Not validated without deploying: GitHub Pages behaviour for `/about/` (the redirect page is a static file like the other legacy redirects); Google re-crawl of `/about/`; the live cal.com destination beyond reading the booking page (no booking was made, no form submitted); Turbopack build on the deployment runner.
