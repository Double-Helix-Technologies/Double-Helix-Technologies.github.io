# Four case studies added in September 2026

Date: 18 September 2026
Author: Claude (Cowork), at Alex's request. Draft until reviewed by a human.
Branch: `content/case-studies-2026-09`, uncommitted at the time of writing.

This repository is public. Nothing in this file, in `app/data/work.ts` or in any comment may connect an anonymous case to a client. The owner holds that mapping privately.

## What was added

Four client cases in `app/data/work.ts`, appended after the existing seven so the overview order is unchanged:

`marketplace-security-assessment-hardening` (client named: Mainos). Security review of the mainos.lv application, infrastructure and CI/CD process, prioritised findings, and the implementation of fixes and infrastructure hardening. Source: the client's written reference of 26 June 2026, in Latvian.

`industrial-data-visualisation-dashboards` (client named: FactoryDB.io, DFTechnology Group GmbH). User interface and real-time dashboards for an industrial data platform consolidating PLC, SCADA and CNC data. Source: the client's written reference of 18 June 2026, in English.

`electronic-laboratory-notebook-bioprocessing` (anonymous, card label "Bioprocessing R&D"). Web-based ELN delivered in under a month. Source: a case-study and consent document prepared for the client, not yet signed.

`patient-registration-test-kit-activation` (anonymous, card label "Diagnostics"). Patient registration and test kit activation platform with a dedicated PII vault. Source: a case-study and consent document prepared for the client, not yet signed.

No figure or claim goes beyond those four documents. The only numeric result in any of them is the ELN delivery time (under one month), which is the only new stat card.

## Decisions taken by Alex on 18 September 2026

Naming. Mainos and FactoryDB.io are named. Both documents are reference letters confirming the cooperation; neither says in so many words that the text may be used on the website. Alex accepted that as sufficient, on the basis that a reference is written to be shown. Mainos's logo was already approved for the marquee (14 September 2026). FactoryDB.io has no logo on the site and is not in `customers`; adding one needs the client's approval of the logo, as for the others.

Quotes. The FactoryDB.io quote is an excerpt of the reference letter with one change: "SIA “Double Helix Technologies” ability" is rendered "Double Helix Technologies’ ability". The Mainos quote is an English translation of three sentences of the Latvian letter, attributed with "(translated from Latvian)"; the translation is Claude's and must be approved before merge. Both are flagged with OWNER comments in `work.ts`. Neither quote has a `tagline`, so neither appears in the homepage testimonials; they show on their case pages only.

The two anonymous cases carry no quote. Their consent documents contain a proposed testimonial each, but the documents are unsigned, so the testimonials, names and logos stay unpublished. When a signed consent arrives: set `client`, remove `cardLabel`, add the approved `quote`, and lift the corresponding hide in `LogoMarquee.tsx` and `llms.txt/route.ts` if the logo is to be shown.

Homepage. The carousel keeps the seven cases it had, plus the Electronic Laboratory Notebook case in second place (added later the same day at Alex's request). The homepage now reads `getHomepageClientSolutions()` (an explicit slug list, `homepageCaseSlugs` in `work.ts`) instead of every case in `clientSolutions`. Reason: the two named new cases are outside life sciences, and eleven slides at twelve seconds each is too long. Also that day, the forensics result was reworded from "2 years late. First to launch." to the homepage's prose form, "First to launch, despite joining two years late", so the card, the case page and the carousel now say it the same way. To feature a case on the homepage, add its slug to the list and, optionally, a prose heading in `RESULT_HEADINGS` in `ClientCases.tsx`.

## Model changes

`featuredStat` is now optional. It was required but has not been rendered since the carousel redesign of 11 September 2026; making it optional avoids inventing a number for cases that have none. The existing seven cases keep theirs.

`regulatedContext` is a new optional field, rendered on the case page as "Security and traceability" between "How it worked" and "What changed operationally". It carries a description of the access control, audit trail or data separation that was built. It is the field the Tier 2 plan in `our-work-section-review.md` proposed. It describes; it never asserts compliance with a standard. Used on the ELN and patient-platform cases.

`/llms.txt` no longer emits "Figures: ." for cases without stat cards.

The `/work` overview intro and its meta description now mention diagnostics, bioprocessing R&D, laboratory and patient-facing software and security assessments, and no longer describe every client as a regulated environment, because the marketplace and manufacturing cases are not.

## Verification

Type check and lint pass. The static build was run from a copy of the working tree (the build has to clear `.next/` and `dist/`, which the assistant's shell may not delete in the repository folder; Google Fonts is also unreachable from that sandbox, so the two `next/font/google` calls were stubbed in the copy only). All 13 `/work/` pages generate. The homepage HTML links to exactly the seven original cases. The two anonymous case pages contain no client name, no "GmbH" and no "digital twin". The strings "Onyx" and "Lifespin" do not occur in any generated HTML. Screenshots of the overview and the anonymous patient-platform page, light and dark, are in `Claude outputs/`.

## Open items for the owner

Approve the Mainos translation, or replace it with the client's own English wording.

Decide whether FactoryDB.io should be quoted exactly as written (see the OWNER comment).

Obtain the signed consent forms for the two anonymous cases, then name them as described above.

Tell FactoryDB.io they are named and ask for a logo if the marquee should show them.

Housekeeping: `Claude outputs/site-src.tgz` is a source snapshot made for the verification build and can be deleted; `.git/index.lock` was left behind by a `git status` in the assistant's shell (which cannot delete files) and must be removed before the next commit.

## Filters by type of work (same day)

Alex asked for the overview to be categorised, because with twelve entries a visitor had to scroll and read every card to see what we have done. Decision: one filter row grouped by type of work, no sector dimension, and nothing added to the cards (the cards were reduced to three lines on 11 September and should stay that way).

The taxonomy is `workCategories` in `app/data/work.ts`: Automation & integration (LIMS and process automation, NGS data delivery, API onboarding, forensics integration); Custom software & MVPs (forensics portal, rapid MVP, industrial dashboards, ELN, patient platform); Reliability & IT operations (IT reorganisation, observability); Security & data protection (Mainos, patient platform); Our products (Tiltera). A case carries one or two categories, primary first, in `categories`; the forensics and patient-platform cases carry two. The filter is deliberately weightless: text options on a single hairline, a thin accent underline that slides to the selected one (the shared-layout motion the cards already use for their hover highlight, still for visitors who prefer reduced motion), and a one-sentence description of the selection as a caption directly beneath. Two heavier versions were tried and rejected the same day: bordered pills with a solid active state (read as raw form controls next to a stray sentence) and a boxed panel on the card surface (a separate block that added weight to the page). "All" has a description too, so the line is never empty. The options carry no counts: Alex removed them the same day, because a case in two categories makes the per-chip numbers add up to more than the total and the mismatch would read as duplication. The previous two-way filter (For clients, Our products) is gone; "Our products" is now one chip among the types of work.

The active filter is mirrored in the URL as `?type=<category>` (read after hydration, written with `history.replaceState`), so a filtered view can be linked from an email or a proposal, for example `/work/?type=automation-integration`. The static HTML always contains every card. `/llms.txt` now states the type of work for each case.

Verified: type check and lint pass; static build generates all pages; in a headless browser the chips read All, Automation & integration, Custom software & MVPs, Reliability & IT operations, Security & data protection, Our products; selecting a chip filters the grid and updates the URL; opening a `?type=` link restores the filter; checked light and dark, desktop and mobile.
