# Events page: MEDICA 2026 as a past event, RIGA COMM and Techritory removed (23 November 2026)

Status: draft. Implemented at the owner's request (Alex Gusevs) on 23 November 2026, not yet reviewed.

## What changed

- RIGA COMM 2026 and Techritory 2026 are removed from `app/data/events.ts`. They had been listed as upcoming since 7 October 2026; the owner confirmed on 23 November 2026 that we did not attend either.
- MEDICA 2026 moves from upcoming to past, with a new summary, a focus line and a gallery of three photographs (`public/images/events/medica-2026/`).
- No upcoming event is listed any more, so the "Upcoming events" column on `/events/` shows its existing placeholder ("No upcoming events announced yet.").

Homepage: the team picture is in the photo mosaic of the media section, added at the owner's request the same day (`homepage: true` on the photo). As the newest event's picture it is the first of the six tiles in the server-rendered page. Not changed: the sentence of that section, which does not mention MEDICA, its credit line, which names LIAA and Photothek only, and the meta description of `/events/`, which still names only the two LIAA delegations' galleries.

## Facts behind the text

| Statement | Source |
| --- | --- |
| 16 to 19 November 2026, Messe Düsseldorf, held together with COMPAMED | Organiser's pages (medica-tradefair.com, medica.de), read 23 November 2026 |
| The MEDICA START-UP PARK is the start-up exhibition area, in hall 17 | Organiser's page on the MEDICA START-UP STAGE, read 23 November 2026 |
| We exhibited there and presented Tiltera | Owner's statement that we attended, and the stand photograph: Tiltera poster, START-UP PARK banner, stand label "17 B 45-08" |
| Focus: scientific partners, clinics and therapists, strategic investors for Tiltera | The partner invitation shown on the stand's tablet in the same photograph |

The wording is a reconstruction from the photograph, not a text the owner supplied. OWNER: confirm it.

## Photographs

All three are the company's own (credit line "Photos: Double Helix Technologies"). Stored in the three sizes the galleries use: long edge up to 1600 px, 720 px and 480 px, WebP.

| File | Picture | Changes before publication |
| --- | --- | --- |
| `tiltera-stand` | The Tiltera stand | Faces of two bystanders and a neighbouring exhibitor's name badge blurred. Phone numbers and email addresses on the tablet blurred. Bottom edge cropped off, where a business card lay. |
| `team-entrance` | Two team members on the MEDICA floor graphic at the entrance | Lower tenth cropped off, so that the thumbnail, which is cut from the centre, keeps the heads in frame. |
| `entrance-mascot` | The stand mascot on the MEDICA floor graphic | Supplied already retouched, with no visitors in it. Cropped to leave out a sign with garbled lettering and the banners above the entrance, one of which showed a wrong year. |

Captions follow the rule of 7 October 2026: organisation, place and date only. The exact days of the pictures are not known, so the captions say "November 2026".

Camera metadata, including any location data, is not in the files. Each file does carry a Content Credentials (C2PA) record added when the assistant's session wrote it into the repository; it states that Claude provided the file and may have created or modified its contents. The same is true of the other gallery pictures added since October 2026 and of the Certified Ethical Hacker badge. The note "metadata stripped" in `events.ts` therefore applies to camera metadata only.

## Open points

1. Confirm the summary and the focus line of the MEDICA card.
2. The alternative text of the team picture names nobody. If the names should be there, as in the other galleries, add them in `events.ts`.
3. Bystanders on the stand picture are blurred as a precaution. Whether a recognisable bystander may be published is for whoever owns data protection to decide; the picture can also be replaced by one without bystanders.
4. The mascot picture is a retouched photograph. Decide whether a retouched picture belongs in a gallery meant to show where we have been.
5. Add upcoming events when they are confirmed.

## Verification

Checked on a clone of `main` at `a7d1051` with `events.ts` and the nine image files applied. Type check and lint pass, the static build generates all 45 routes. On the generated `/events/` page: MEDICA 2026 is the first card under "Past participation" with a "Photos and videos" action, its gallery is the first block and shows three thumbnails, every referenced image path resolves, and neither removed event is mentioned on any page. In a headless browser at 1440 px and 390 px: no horizontal scroll, no console errors, each of the three pictures opens in the lightbox with its caption and "1 of 3" to "3 of 3", and October is greyed out in the month filter.
