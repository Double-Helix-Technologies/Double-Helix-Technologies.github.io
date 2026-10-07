# "Why choose us" section on the homepage

Date: 7 October 2026
Author: Claude (Cowork), at Alex's request. Draft until reviewed by a human; nothing here is deployed until the owner commits and merges it.

This repository is public. Nothing in this file, in `app/data/whyUs.ts` or in any comment may connect an anonymous case to a client. The owner holds that mapping privately.

## What was asked and what was decided

The owner asked for a prominent, clear statement of why a buyer should choose the company over the alternatives, in his own words: the agility of a small company with the knowledge of a large one; for the customer that means being the priority, always reachable, and an approach tailored to their needs, fast, surgical and personal; at the same time, experience with large corporations and government agencies, security and regulations, and delivery for startups in days.

Four decisions were taken with the owner before and during the build:

1. Placement: a dedicated full-screen section directly after the client cases and before "What we help with". A visitor who has just seen the proof asks "why you" before "what exactly do you offer". The alternative, folding the claim into the team section, was offered and not taken. The section-order comment in `app/page.tsx` records the new step.
2. Wording: the owner's text is used as written. Three edits only, each for a reason rather than style: "Eurofins" became "Eurofins Genomics", the entity named and approved elsewhere on the site; the forensics work is described as "a national forensics digitalisation initiative with police and prosecution", consistent with the published case (see below); and "proven track record when it comes to security and regulations" became "hands-on experience with security and regulations, and the cases to show for it", with the phrases linked to the cases so the claim is checkable in one click and the section cannot say more than the case pages do. Headline wording "knowledge" (not "experience") is the owner's choice.
3. Naming the police force: not done. The published forensics case had its country and customer removed on 11 September 2026 because that wording identified the customer, and naming the police force would identify the customer again. The owner read the customer's confidentiality agreements on 7 October 2026 and kept the anonymous wording. Naming them needs the customer's written consent; if it arrives, record it here and change the one segment in `app/data/whyUs.ts`.
4. Single source: the copy lives in `app/data/whyUs.ts` and is read by the homepage section and by `/llms.txt`, following the pattern used for cases, services and events, so the two cannot drift.

## What was built

`app/data/whyUs.ts`: the eyebrow, headline, the "What that means for you" text and its emphasised closing line, and the large-organisations paragraph as a list of segments, three of which carry the slug of the case that backs them (`process-automation-lims-integration`, `forensics-integration`, `rapid-mvp-development`). `whyUsLargeOrganisationsText()` joins the segments for plain-text use.

`app/components/WhyUs.tsx`: the section (`id="why-us"`), sized like the other main sections (`lg:min-h-[100svh]`, content centred): eyebrow, headline up to 60 px, then two columns, "What that means for you" with the closing line set large, and "Large corporations and government agencies" with the linked paragraph and a "See the cases" link to /work/. The mesh backdrop, otherwise used behind the hero and the contact section, gives the claim the same weight as the first screen; the section keeps `bg-background`, so the section before it (cases, alternate background) and after it (services, grid backdrop) still read as separate starts. Server-rendered, no client JavaScript.

`app/page.tsx`: `WhyUs` rendered between `ClientCases` and `Services`; the section-order comment updated.

`app/llms.txt/route.ts`: a "Why choose us" section after the introduction, printed from the same data file.

`app/sitemap.ts`: `app/data/whyUs.ts` added to the homepage's source files, so the homepage `lastmod` follows changes to this copy.

## Owner-review list

1. Police naming, as above. `app/data/whyUs.ts` carries the OWNER note.
2. The two column headings ("What that means for you", "Large corporations and government agencies") are Claude's; the body text is the owner's. Change them freely.
3. "We are fast, we are surgical, we are personal." is set at 30 px as the closing line of the left column. If it reads as too loud, drop it to body size by removing the `text-2xl md:text-3xl` classes in `WhyUs.tsx`.
4. The /llms.txt section repeats the homepage copy verbatim. Remove it there if a plainer, one-paragraph statement is preferred for answer engines.

## Verification

Checked on 7 October 2026. `npx tsc --noEmit` clean; `npx eslint` on the changed files clean. Build and export run in the cloud sandbox from a snapshot of the working tree with `next build --webpack` and mocked Google Fonts responses (the sandbox cannot reach fonts.googleapis.com); `npm run build` on the deployment runner remains the authoritative check. Export: `dist/index.html` contains the section once with the three case links; `dist/llms.txt` carries the new section; no em dash or middle dot in any changed file. Rendering (Chromium via Playwright, 1440 by 900 light and dark, 390 by 844 light): the section measures exactly 900 px on desktop and 1,078 px on the phone, no horizontal scroll, no JavaScript errors. Screenshots were reviewed. Not validated: the Turbopack build with real fonts.
