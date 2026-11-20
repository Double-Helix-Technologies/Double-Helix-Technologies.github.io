# Lifespin named as a client (20 November 2026)

Status: draft. Implemented at the owner's request (Alex Gusevs) on 20 November 2026, not yet reviewed.

## Basis

The owner stated on 20 November 2026 that Lifespin has permitted Double Helix Technologies to use its name, its logo and the case study on the website, and that the permission was given in writing, by email. The permission does not cover a testimonial.

The email was not seen when this change was made. OWNER: file it with the customer records and add its date here, together with any conditions it sets (wording, logo use, approval of the final text).

## What changed

- `app/data/work.ts`: the case "Patient registration & test kit activation platform" (`/work/patient-registration-test-kit-activation/`) now has `client: { name: 'Lifespin' }` and no anonymous card label. The case text is unchanged. No quote.
- `app/components/LogoMarquee.tsx`: Lifespin is no longer hidden from the homepage band of customer and partner logos. Its logo file was already in the repository (`public/images/customers/lifespin.svg`).
- `app/llms.txt/route.ts`: Lifespin is listed among the customers named on the site, and the case entry reads "Client: Lifespin".

The name now appears on the case page (header and "At a glance"), on the case's card on `/work/`, in the homepage logo band and in `/llms.txt`. The "Teams we've worked with" grid on `/work/` has been off since 14 September 2026 (`SHOW_CUSTOMERS_GRID`) and stays off. Turning it on is a separate decision.

## Open points

1. Approval of the text. The case text was written in September 2026 for anonymous publication. Now that the client is named, its description ("a diagnostics company", "patients", "test results") is a public statement about Lifespin, whose own website says its products are for research use only. Ask Lifespin to confirm the published wording, or confirm that it matches the text they approved.
2. Spelling. The site writes "Lifespin". On its own website the company writes "lifespin" and "lifespin GmbH" in lowercase. Confirm the form they want.
3. Logo treatment. Like every logo in the band, theirs is grey until hovered and a light silhouette on the dark theme. Check that against any logo rules in their permission.
4. Testimonial. Not covered. Add a `quote` only after written approval of the exact wording and attribution.
5. Homepage carousel. The case appears on `/work/` only (`homepageCaseSlugs`). Featuring it on the homepage is a separate decision.

## Verification

Type check and lint pass. Static build run from a clone of `main` at `58251e0` with the changed files applied: all 45 routes generate. In the generated HTML, "Lifespin" occurs on three pages (homepage, `/work/`, the case page) and nowhere else, and the case page no longer says "Not disclosed". The name of the customer that is still hidden from the logo band occurs in no generated HTML page. `/llms.txt` lists "Eurofins Genomics, Lifespin, Mainos, Krafthub" as customers named on the site. Screenshots checked: case page header and sidebar, the `/work/` card, the logo band in light and dark.
