# ISO 9001 and ISO 27001 certification on the website (10 November 2026)

Status: approved by the owner (Alex Gusevs) on 10 November 2026.

## What changed

Both certificates were issued by BM Certification on 10 November 2026, so the "certification is in progress" statement (decision of 11 September 2026) is replaced by the certificate facts, and the BM Certification mark is added.

Certificate facts, copied from the certificates (`certification` in `app/components/ComplianceNotice.tsx`):

| Standard | System | Certificate | Issued | Expires |
| --- | --- | --- | --- | --- |
| ISO 9001:2015 | Quality management | MSC-9-1626 | 10 November 2026 | 9 November 2029 |
| ISO/IEC 27001:2022 | Information security management | MSC-27-1627 | 10 November 2026 | 9 November 2029 |

Certified entity: SIA Double Helix Technologies, Lastādijas iela 12 k-3, Riga, LV-1050 (matches the site's registered office). Scope: design, development and maintenance of IT solutions.

Where it appears: the combined ISO 9001 / ISO 27001 mark in the footer's bottom bar on every page, opposite the copyright line with the certification sentence beside it, linking to `/team/#certification`. The About page block also shows the mark, directly under its heading, at 122 x 96 px without a link (see the deviation below). A first version placed it directly under the logo, where it looked out of place; the bottom bar was chosen on 10 November 2026 from two mockups. the statement also feeds `/llms.txt` and the Organization schema's `knowsAbout`.

## How the BM Certification guidelines (V4, December 2021) are applied

- Version A1 (websites): the mark appears only in the footer, which also carries our logo. It is not used on its own elsewhere on the site. Reading "in the same footer" as "together with the logo" is our interpretation.
- At most 75% of our logo: the footer logo is 220 x 54 px and the mark 82 x 64 px, 37% of the logo's width and 44% of its area. The mark is taller than the logo, so this relies on reading "75% of the logo size" as overall size. A first version read it strictly by height (mark 40 px tall), which the owner found too small; the overall-size reading was chosen on 10 November 2026. It is our interpretation, not confirmed with BM Certification.
- Minimum online size 40 px tall: met (64 px).
- Colours: colour version on the light theme, white version (variant 3, for dark backgrounds only) on the dark theme. Artwork unchanged, no opacity or filters.
- Scope: the public statement names the certified legal entity and the standards only (owner decision, 10 November 2026: "SIA Double Helix Technologies is ISO 9001:2015 and ISO/IEC 27001:2022 certified."). The certified scope, design, development and maintenance of IT solutions, covers the services the site offers; it remains in the Organization structured data and in `certification` in the code.
- Validity: remove the mark and the statement at once if a certificate is suspended or withdrawn, and by 9 November 2029 unless renewed. Update the facts after each surveillance audit.

## Deviation: About page mark size

- Requirement: BM Certification guidelines, version A1: the mark is used together with our logo and is no larger than 75% of it.
- Deviation: on the About page the mark is 122 x 96 px with no logo beside it. The nearest logo is the 180 x 44 px header logo, so the mark is larger than the logo under any reading. Within the rule, the limit there is about 87 x 68 px.
- Risk: BM Certification could treat it as incorrect use and require us to change it; under the guidelines, persistent non-compliance can lead to suspension of the certificate and contractual action.
- Mitigation: the footer use stays within our reading of the rules; ask BM Certification about the About page size together with the other open interpretations; if they object, switch to 87 x 68 px or place our logo beside the mark (one-line change in `CertificationMark.tsx`).
- Accepted by: Alex Gusevs, board member of SIA Double Helix Technologies, 10 November 2026. Under our own policy, an exception also needs documented management approval; record it in the management system if this note is not enough.

## Open points

- Not done: ISO back in the site keywords and on the homepage "Why choose us" section; separate decisions.
- Ask BM Certification (info@bmcertification.com) to confirm the overall-size reading of the 75% rule in writing, since the mark is taller than the logo, and that a mark in the same footer as the logo, rather than directly beside it, meets the A1 rule.

## Related change: self-hosted fonts

Main's dependency upgrade of 22 October 2026 (Next.js 16.3.5 to 16.4.2) broke `next dev` with Turbopack: `next/font/google` failed with "next/font/google queries have exactly one entry" (vercel/next.js#78472, discussion #81721); `next dev --webpack` worked. Inter and Outfit are now self-hosted from @fontsource 5.3.0 (SIL Open Font License, licence files in `app/fonts/`) through `next/font/local`, in latin and latin-ext families split by Google's unicode ranges, so Latvian letters still render in the brand fonts. Verified offline: Turbopack production build and dev server on 16.4.2, precomposed Latvian letters load the latin-ext file. Side effect: builds no longer need Google Fonts. This belongs in its own commit, since main has the same problem.
