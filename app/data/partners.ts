/** A membership or partner organisation whose logo the company shows. */
export interface Partner {
  name: string;
  href: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
}

/**
 * Memberships shown on the About page and in the homepage logo marquee.
 * OWNER: the Digital Health Association Latvia and the Latvian American Chamber of Commerce could
 * not be confirmed from the organisations' own member listings (credibility review, 14 September
 * 2026). Keep them only while membership is current.
 */
export const partners: Partner[] = [
  {
    name: 'Digital Health Association Latvia',
    href: 'https://www.digitalaveseliba.lv/',
    logo: '/images/partners/digital-health-latvia.svg',
    logoWidth: 149,
    logoHeight: 38
  },
  {
    name: 'Latvian American Chamber of Commerce',
    href: 'https://latvianchamber.com/',
    logo: '/images/partners/latvian-american-chamber.svg',
    logoWidth: 258,
    logoHeight: 84
  },
  {
    name: 'Latvian IT Cluster',
    href: 'https://www.itbaltic.com/',
    logo: '/images/partners/latvian-it-cluster.png',
    logoWidth: 493,
    logoHeight: 657
  }
];
