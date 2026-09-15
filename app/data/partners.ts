/** One piece of a typeset wordmark. `accent` takes the brand-adjacent teal, `sup` is set small and raised. */
export interface WordmarkSegment {
  text: string;
  accent?: boolean;
  sup?: boolean;
}

/** A membership or partner organisation whose logo the company shows. */
export interface Partner {
  name: string;
  href: string;
  /** Memberships are shown on the About page; every entry is shown in the homepage marquee. */
  kind: 'membership' | 'partner';
  /** Logo image; omitted when the organisation is shown by its typeset wordmark alone. */
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  /** Typeset next to the mark (or alone) in the site font when the organisation's logo is lettering. */
  wordmark?: WordmarkSegment[];
  /** Second line under the wordmark, as the organisation sets it themselves. */
  tagline?: string;
  /**
   * The organisation's own accent colour. Where it is set, the marquee shows that entry in the
   * partner's colours instead of the grey treatment it gives every other logo, so set it only
   * where the owner has asked for it.
   */
  brandColor?: string;
}

/**
 * Memberships and partners. All appear in the homepage logo marquee; only memberships appear on the
 * About page, where they sit under "Part of something bigger" (partners are commercial arrangements,
 * not communities).
 * OWNER: the Digital Health Association Latvia and the Latvian American Chamber of Commerce could
 * not be confirmed from the organisations' own member listings (credibility review, 14 September
 * 2026). Keep them only while membership is current.
 */
export const partners: Partner[] = [
  {
    name: 'Digital Health Association Latvia',
    kind: 'membership',
    href: 'https://www.digitalaveseliba.lv/',
    logo: '/images/partners/digital-health-latvia.svg',
    logoWidth: 149,
    logoHeight: 38
  },
  {
    name: 'Latvian American Chamber of Commerce',
    kind: 'membership',
    href: 'https://latvianchamber.com/',
    logo: '/images/partners/latvian-american-chamber.svg',
    logoWidth: 258,
    logoHeight: 84
  },
  {
    name: 'Latvian IT Cluster',
    kind: 'membership',
    href: 'https://www.itbaltic.com/',
    logo: '/images/partners/latvian-it-cluster.png',
    logoWidth: 493,
    logoHeight: 657
  },
  {
    // Added at the owner's request on 14 September 2026 (same leadership as customer Krafthub).
    // OWNER: the mark is redrawn from a screenshot and the name is typeset in the site font;
    // replace with Veractis's original asset when available, and confirm they agree to being shown.
    name: 'Veractis.io',
    kind: 'partner',
    href: 'https://veractis.io',
    logo: '/images/partners/veractis-mark.svg',
    logoWidth: 100,
    logoHeight: 100,
    wordmark: [{ text: 'Veractis.io' }]
  },
  {
    // Added at the owner's request on 14 September 2026 (same leadership as customer Krafthub).
    // OWNER: the lettering is typeset in the site font from a screenshot; replace with the original
    // asset when available, and confirm they agree to being shown.
    name: 'helix.tech.bio',
    kind: 'partner',
    href: 'https://www.helixtech.bio/en',
    wordmark: [{ text: 'helix' }, { text: '.tech', accent: true }, { text: '.bio', sup: true }]
  },
  {
    // Added at the owner's request on 15 September 2026. Offensive security (IT security audits and
    // penetration testing), which sits next to our security and compliance readiness work.
    // OWNER: the crosshair is redrawn from the logo the owner supplied and the name is typeset in
    // the site font; replace with Pentests.lv's original asset when available, and confirm they
    // agree to being shown.
    name: 'Pentests.lv',
    kind: 'partner',
    href: 'https://pentests.lv',
    logo: '/images/partners/pentests-mark.svg',
    logoWidth: 100,
    logoHeight: 100,
    wordmark: [{ text: 'PENTESTS' }, { text: '.LV', accent: true }],
    tagline: 'Offensive security',
    // Sampled from the logo the owner supplied; OWNER: confirm the exact brand red.
    brandColor: '#D83236'
  }
];

export const memberships = partners.filter((partner) => partner.kind === 'membership');
