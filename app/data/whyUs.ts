/**
 * "Why choose us": the one claim that separates the company from a large consultancy on one side
 * and a freelancer on the other, in the owner's own words (7 October 2026). Read by the homepage
 * section (`app/components/WhyUs.tsx`) and by `/llms.txt`, so the two cannot drift. The evidence
 * phrases carry the slug of the case that backs them; the homepage links them, the text file
 * prints them. Nothing here may claim more than the linked case pages state.
 *
 * OWNER: the forensics work is described anonymously ("a national forensics digitalisation
 * initiative with police and prosecution"), consistent with the published case, whose country and
 * customer were removed on 11 September 2026 because they identified the customer. Naming the
 * police force would identify the customer again. The owner checked the customer's confidentiality
 * agreements on 7 October 2026 and decided to keep the anonymous wording; name the police here only
 * with the customer's written consent, and record that consent in docs/why-choose-us-2026-10-07.md.
 */

export interface WhyUsSegment {
  text: string;
  /** Slug of the client case in `work.ts` that backs this phrase; the homepage links to it. */
  caseSlug?: string;
}

export const whyUs = {
  eyebrow: 'Why choose us',
  headline: 'The agility of a small company. The knowledge of a large one.',
  forYou: {
    title: 'What that means for you',
    text: 'You will always be our priority. We will always be reachable. We will tailor our approach to your needs.',
    emphasis: 'We are fast, we are surgical, we are personal.'
  },
  largeOrganisations: {
    title: 'Large corporations and government agencies',
    segments: [
      {
        text: 'At the same time, we know how to work with large corporations and government agencies. Through our work with '
      },
      { text: 'Eurofins Genomics', caseSlug: 'process-automation-lims-integration' },
      { text: ' and ' },
      { text: 'a national forensics digitalisation initiative', caseSlug: 'forensics-integration' },
      {
        text: ' with police and prosecution, we have hands-on experience with security and regulations, and the cases to show for it. Through our work with startups we have proven that we can '
      },
      { text: 'deliver solutions in days', caseSlug: 'rapid-mvp-development' },
      { text: '.' }
    ] as WhyUsSegment[]
  }
};

/** The large-organisations paragraph as plain text, for `/llms.txt` and metadata. */
export function whyUsLargeOrganisationsText() {
  return whyUs.largeOrganisations.segments.map((segment) => segment.text).join('');
}
