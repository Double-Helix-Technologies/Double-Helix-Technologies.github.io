export type EventParticipationStatus = 'upcoming' | 'past';

/**
 * A photograph from an event. Files live under `public/images/events/<event folder>/`: the full
 * size (long edge up to 1600 px, or the original size when smaller) next to a `thumbs/` copy with a
 * 720 px long edge and a `thumbs/sm/` copy with a 480 px long edge, for the thumbnail `srcset`.
 * All are WebP with metadata stripped. `width` and `height` are the full-size dimensions; the
 * thumbnails keep the same aspect ratio (see `thumbSize`).
 *
 * `alt` says what is in the picture for people who cannot see it; `caption` is the visible line
 * under it. Captions name the organisation, the place and the date only, never an individual other
 * than our own people: an owner decision of 7 October 2026, so no per-person consent is needed.
 */
export type EventPhoto = {
  src: string;
  thumb: string;
  thumbSmall: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  /**
   * Eligible for the homepage mosaic, which shows six at a time and rotates through all the eligible
   * photographs of every event (see `getHomepagePhotos`). Flag the strong, landscape pictures.
   */
  homepage?: boolean;
};

/**
 * A video hosted on YouTube. Nothing is requested from YouTube until the visitor presses play:
 * the page shows `poster` (a local image) and then loads the privacy-enhanced
 * `youtube-nocookie.com` player. `aspect` is the player's shape: the three LIAA recap videos are
 * YouTube Shorts, so 9:16 (owner, 7 October 2026). The Shorts player is the ordinary embed, so the
 * same URL works for both shapes.
 */
export type EventVideo = {
  youtubeId: string;
  title: string;
  /** Short label shown over the poster, for example "Day one". */
  label?: string;
  poster: string;
  aspect: '16/9' | '9/16';
};

export type EventParticipation = {
  slug: string;
  name: string;
  status: EventParticipationStatus;
  startDate: string;
  endDate?: string;
  city: string;
  country: string;
  venue?: string;
  summary: string;
  focus: string;
  ctaLabel?: string;
  ctaHref?: string;
  externalEventUrl?: string;
  photos?: EventPhoto[];
  videos?: EventVideo[];
  /** Credit line under the gallery, for example "Photos: LIAA" or "Photos and videos: LIAA". */
  photoCredit?: string;
  /** Where the credit line links, for example the photographer's page. */
  photoCreditUrl?: string;
  /** Press and organiser coverage of the event, shown on the event card as "Coverage: ...". */
  coverage?: EventCoverage[];
};

/**
 * One article about an event. `outlet` is the visible link text, so keep it to the publication's
 * name; `title` is the link's title attribute. `namesUs` records whether the article names Double
 * Helix Technologies, which is what makes a link worth having on a credibility section: list those
 * first. Prefer English-language coverage, then the organiser's own release, then local press.
 */
export type EventCoverage = {
  outlet: string;
  title: string;
  href: string;
  /** Two-letter language code shown in brackets when it is not English. */
  language?: 'lv' | 'de';
  namesUs?: boolean;
};

/** Thumbnail dimensions for a photo: the same aspect ratio as the full size, 720 px long edge. */
export function thumbSize(photo: Pick<EventPhoto, 'width' | 'height'>) {
  const scale = Math.min(1, 720 / Math.max(photo.width, photo.height));
  return { width: Math.round(photo.width * scale), height: Math.round(photo.height * scale) };
}

/**
 * `srcset` for a thumbnail: the 480 px and 720 px copies, so a phone fetches a third of the bytes
 * a desktop does. The caller passes `sizes` for its own layout.
 */
export function thumbSrcSet(photo: Pick<EventPhoto, 'thumb' | 'thumbSmall' | 'width' | 'height'>) {
  const long = Math.max(photo.width, photo.height);
  const small = Math.round(photo.width * Math.min(1, 480 / long));
  const regular = thumbSize(photo).width;
  return `${photo.thumbSmall} ${small}w, ${photo.thumb} ${regular}w`;
}

const BERLIN = '/images/events/berlin-2026';
const US = '/images/events/us-west-coast-2026';
const ROSTOCK = '/images/events/rostock-2026';
const HAMBURG = '/images/events/hamburg-rostock-2025';

/** Builds the two paths from one file name so the full and the thumbnail cannot drift apart. */
function photo(
  folder: string,
  file: string,
  width: number,
  height: number,
  alt: string,
  caption: string,
  homepage = false
): EventPhoto {
  return {
    src: `${folder}/${file}.webp`,
    thumb: `${folder}/thumbs/${file}.webp`,
    thumbSmall: `${folder}/thumbs/sm/${file}.webp`,
    width,
    height,
    alt,
    caption,
    ...(homepage ? { homepage } : {})
  };
}

/**
 * The 21st Nationale Branchenkonferenz Gesundheitswirtschaft (National Conference on Health
 * Economy), Rostock, 11 to 12 June 2026, organised by BioCon Valley GmbH on behalf of the state of
 * Mecklenburg-Vorpommern, with Latvia as partner country (conference website and idw-online).
 * Armands Baranovskis presented on stage and the team was at the Latvian stand (owner, 7 October
 * 2026; both visible in the photographs). The professional photographs are by Photothek Media Lab
 * GmbH (owner, 7 October 2026, from the files' metadata, which dates them 11 June 2026); the credit
 * links to the photographer's page the owner supplied.
 * OWNER: confirm the licence covers use on this website. The last two photographs (the evening on
 * the Warnow and the institute entrance) are phone pictures from the delegation, not from that set.
 */
/**
 * LIAA's trade mission to Hamburg and Rostock, 23 to 26 September 2025: Latvia's largest trade
 * mission to Germany at the time, led by the Minister of Economics, with the Prime Minister joining
 * the Rostock business day. The LIAA announcement names Double Helix Technologies in the
 * participant list. Photographs are by Thomas Koehler, photothek.de (from the files' metadata,
 * which dates them 24 and 25 September 2025); the programme places 23 to 25 September in Hamburg
 * and 25 to 26 September in Rostock, so the 24 September pictures are captioned Hamburg.
 * OWNER: confirm the licence covers use on this website, and the city of the reception on the 25th.
 */
const hamburgRostockMission: EventParticipation = {
  slug: 'liaa-trade-mission-hamburg-rostock-2025',
  name: 'Latvian trade mission to Hamburg and Rostock',
  status: 'past',
  startDate: '2025-09-23',
  endDate: '2025-09-26',
  city: 'Hamburg and Rostock',
  country: 'Germany',
  summary:
    'Latvia\'s largest trade mission to Germany, organised by the Investment and Development Agency of Latvia (LIAA) and led by the Minister of Economics, with more than 180 participants from over 100 companies. Double Helix Technologies joined the programme in Hamburg and the Latvia-Germany Business Day in Rostock.',
  focus: 'First contacts with the north German health and research ecosystem, a year before Latvia became partner country of the Rostock health industry conference.',
  ctaLabel: 'View event',
  ctaHref: 'https://www.liaa.gov.lv/lv/jaunums/latvijas-lielaka-tirdzniecibas-misija-uz-vaciju-vairak-neka-180-uznemeji-dodas-uz-hamburgu-un-rostoku',
  externalEventUrl: 'https://www.liaa.gov.lv/lv/jaunums/latvijas-lielaka-tirdzniecibas-misija-uz-vaciju-vairak-neka-180-uznemeji-dodas-uz-hamburgu-un-rostoku',
  coverage: [
    {
      outlet: 'LIAA',
      title: 'Latvijas lielākā tirdzniecības misija uz Vāciju: vairāk nekā 180 uzņēmēji dodas uz Hamburgu un Rostoku',
      href: 'https://www.liaa.gov.lv/lv/jaunums/latvijas-lielaka-tirdzniecibas-misija-uz-vaciju-vairak-neka-180-uznemeji-dodas-uz-hamburgu-un-rostoku',
      language: 'lv',
      namesUs: true
    }
  ],
  photoCredit: 'Photos: Thomas Koehler, photothek.de',
  photos: [
    photo(
      HAMBURG,
      'delegation-steps',
      1600,
      1052,
      'The full Latvian delegation of more than 180 people on the wide steps in front of a modern building with a cantilevered upper floor, in low autumn sun.',
      'Latvian delegation, LIAA trade mission to Germany, Hamburg, 24 September 2025',
      true
    ),
    photo(
      HAMBURG,
      'evening-reception',
      1600,
      998,
      'Aleksandrs Gusevs and Armands Baranovskis of Double Helix Technologies in conversation with two other guests at an evening reception on a terrace by the water.',
      'Evening reception, LIAA trade mission to Germany, 25 September 2025',
      true
    ),
    photo(
      HAMBURG,
      'delegation-group',
      1600,
      1051,
      'The front rows of the Latvian delegation, with the mission leadership in the centre, closer up.',
      'Latvian delegation, LIAA trade mission to Germany, Hamburg, 24 September 2025'
    ),
    photo(
      HAMBURG,
      'programme-session',
      1600,
      1074,
      'Delegation members seated in rows listening to a speaker at a standing table in a bright room with large windows.',
      'Programme session, LIAA trade mission to Germany, Hamburg, 24 September 2025'
    )
  ]
};

const rostockConference: EventParticipation = {
  slug: 'nationale-branchenkonferenz-gesundheitswirtschaft-2026',
  name: 'National Conference on Health Economy 2026',
  status: 'past',
  startDate: '2026-06-11',
  endDate: '2026-06-12',
  city: 'Rostock',
  country: 'Germany',
  summary:
    'The 21st Nationale Branchenkonferenz Gesundheitswirtschaft, the annual conference of the German health industry, organised by BioCon Valley on behalf of the state of Mecklenburg-Vorpommern, with Latvia as partner country. Double Helix Technologies presented on the conference stage and met visitors at the Latvian stand.',
  focus: 'German health industry, medical technology and AI in care, and partners in Mecklenburg-Vorpommern.',
  ctaLabel: 'View event',
  ctaHref: 'https://www.konferenz-gesundheitswirtschaft.de/en/',
  externalEventUrl: 'https://www.konferenz-gesundheitswirtschaft.de/en/',
  photoCredit: 'Photos: Photothek Media Lab GmbH',
  photoCreditUrl: 'https://www.picdrop.com/photothekmedialab2',
  // Neither names Double Helix Technologies; both cover Latvia as partner country.
  coverage: [
    {
      outlet: 'Nordkurier (dpa)',
      title: 'Konferenz: Gesundheitswirtschaft im Wandel',
      href: 'https://www.nordkurier.de/regional/mecklenburg-vorpommern/konferenz-gesundheitswirtschaft-im-wandel-4628100',
      language: 'de'
    },
    {
      outlet: 'BioCon Valley via idw',
      title: 'Laipni lūdzam Latvijā! Herzlich willkommen, Lettland!',
      href: 'https://idw-online.de/en/news871256'
    }
  ],
  photos: [
    photo(
      ROSTOCK,
      'stage-presentation',
      1600,
      1066,
      'Armands Baranovskis, CEO of Double Helix Technologies, at the lectern; the screen beside him reads "Local fragmentation becomes systemic and compounds" under the Double Helix Technologies logo.',
      'Double Helix Technologies on stage, National Conference on Health Economy, Rostock, June 2026',
      true
    ),
    photo(
      ROSTOCK,
      'latvian-stand',
      1600,
      1066,
      'Aleksandrs Gusevs of Double Helix Technologies handing a card to a visitor at the Latvian stand, under the banner "Lettland, Innovation für die Gesundheitswirtschaft".',
      'Latvian stand, National Conference on Health Economy, Rostock, June 2026',
      true
    ),
    photo(
      ROSTOCK,
      'delegation-terrace',
      1600,
      1066,
      'Aleksandrs Gusevs and Armands Baranovskis of Double Helix Technologies with a representative of the Latvian delegation, thumbs up on a rooftop terrace above the Warnow.',
      'Latvian delegation, National Conference on Health Economy, Rostock, June 2026',
      true
    ),
    photo(
      ROSTOCK,
      'delegation-rooftop',
      1600,
      1066,
      'The Latvian partner-country delegation on a rooftop terrace with the Warnow and the port of Rostock behind them.',
      'Latvian delegation, National Conference on Health Economy, Rostock, June 2026',
      true
    ),
    photo(
      ROSTOCK,
      'stage-speaker',
      1600,
      1066,
      'Armands Baranovskis, CEO of Double Helix Technologies, speaking at the conference lectern with a presenter remote in his hand.',
      'Double Helix Technologies on stage, National Conference on Health Economy, Rostock, June 2026',
      true
    ),
    photo(
      ROSTOCK,
      'stage-ai-slide',
      1600,
      1066,
      'Armands Baranovskis of Double Helix Technologies presenting to the audience; the screen reads "Artificial intelligence" with an arrow to "Precision health".',
      'Double Helix Technologies on stage, National Conference on Health Economy, Rostock, June 2026',
      true
    ),
    photo(
      ROSTOCK,
      'evening-on-the-warnow',
      1280,
      853,
      'Conference participants gathered on the open deck of a ship on the Warnow, seen from above.',
      'Conference evening on the Warnow, Rostock, June 2026',
      true
    ),
    photo(
      ROSTOCK,
      'partner-country-stage',
      1600,
      1066,
      'A speaker at the conference lectern in front of the backdrop reading "Nationale Branchenkonferenz Gesundheitswirtschaft 2026" and "Partnerland Lettland".',
      'Partner country Latvia on stage, National Conference on Health Economy, Rostock, 11 June 2026'
    ),
    photo(
      ROSTOCK,
      'partner-country-stage-2',
      1600,
      1066,
      'The orange "Partnerland Lettland" badge on the conference backdrop, with a speaker at the lectern out of focus in the foreground.',
      'Partner country Latvia on stage, National Conference on Health Economy, Rostock, 11 June 2026'
    ),
    // OWNER: the institute and the date are read from the picture (IIB bags, the Friedrich-Barnewitz-
    // Strasse entrance); confirm both.
    photo(
      ROSTOCK,
      'iib-warnemuende',
      1600,
      1200,
      'The Latvian delegation in front of the entrance of the Institute for Implant Technology and Biomaterials in Rostock-Warnemünde.',
      'Institute for Implant Technology and Biomaterials (IIB), Rostock-Warnemünde, June 2026'
    )
  ]
};

/**
 * The two LIAA delegations of September 2026. Dates and the programme come from the press
 * coverage (nra.lv and jauns.lv for Berlin, the LIAA press release for the US mission) and the
 * photographs' own timestamps; the captions name organisations, places and dates only.
 * Photographs were shared by the organisers for participants' use (owner statement, 7 October
 * 2026); the credit line follows the one used in the press coverage.
 */
const LIAA_PHOTO_CREDIT = 'Photos: LIAA';

const berlinDelegation: EventParticipation = {
  slug: 'liaa-life-sciences-delegation-berlin-2026',
  name: 'Latvian life sciences delegation to Berlin',
  status: 'past',
  startDate: '2026-09-16',
  endDate: '2026-09-17',
  city: 'Berlin',
  country: 'Germany',
  summary:
    'A trade mission of 53 Latvian companies organised by the Investment and Development Agency of Latvia (LIAA) and led by the Minister of Economics. Double Helix Technologies was one of the eight companies in the life sciences group, whose programme included Campus Berlin-Buch, BIOTRONIK, the German Heart Centre at Charité and a Latvia-Germany life sciences roundtable at the Haus der Deutschen Wirtschaft.',
  focus: 'Medical technology and research partners, and the German market for laboratory and clinical software.',
  // Each of these names Double Helix Technologies among the eight life sciences companies.
  coverage: [
    {
      outlet: 'Baltic News',
      title: 'Latvian medical technologies and digital health solutions advance into the German market',
      href: 'https://balticnews.com/latvian-medical-technologies-and-digital-health-solutions-advance-into-the-german-market/',
      namesUs: true
    },
    {
      outlet: 'nra.lv',
      title: 'Latvijas medicīnas tehnoloģijas un digitālās veselības risinājumus virza Vācijas tirgū',
      href: 'https://nra.lv/veseliba/530271-latvijas-medicinas-tehnologijas-un-digitalas-veselibas-risinajumus-virza-vacijas-tirgu.htm',
      language: 'lv',
      namesUs: true
    },
    {
      outlet: 'jauns.lv',
      title: 'Latvijas medicīnas inovācijas meklē izrāviena iespējas Vācijas tirgū: ko mūsu uzņēmumi piedāvā Berlīnē?',
      href: 'https://jauns.lv/raksts/bizness/729254-foto-latvijas-medicinas-inovacijas-mekle-izraviena-iespejas-vacijas-tirgu-ko-musu-uznemumi-piedava-berline',
      language: 'lv',
      namesUs: true
    }
  ],
  photoCredit: LIAA_PHOTO_CREDIT,
  photos: [
    photo(
      BERLIN,
      'bdi-group',
      1600,
      1067,
      'The Latvian delegation in the glass-roofed atrium of the Haus der Deutschen Wirtschaft, under the BDI and BDA signs.',
      // The event was the Latvia-Germany Life Sciences Networking Roundtable, 17 September 2026,
      // 15:00 to 17:30, at the Haus der Deutschen Wirtschaft (participant list published by the
      // German Eastern Business Association, which names Double Helix Technologies).
      'Latvia-Germany life sciences roundtable, Haus der Deutschen Wirtschaft, Berlin, 17 September 2026',
      true
    ),
    photo(
      BERLIN,
      'biotronik-group',
      1600,
      1067,
      'The life sciences group standing behind the BIOTRONIK sign under autumn trees.',
      'BIOTRONIK, Berlin, 17 September 2026',
      true
    ),
    photo(
      BERLIN,
      'biotronik-tour',
      1600,
      1067,
      'Delegation members listening to their host outside the BIOTRONIK site.',
      'BIOTRONIK, Berlin, 17 September 2026'
    ),
    photo(
      BERLIN,
      'campus-berlin-buch',
      1200,
      1600,
      'Delegation members gathered at the entrance of the Käthe-Beutler-Haus on Campus Berlin-Buch while a host speaks.',
      'Campus Berlin-Buch, Käthe-Beutler-Haus, Berlin, 16 September 2026'
    ),
    photo(
      BERLIN,
      'mission-opening',
      1067,
      1600,
      'The full trade mission delegation on a staircase at the opening event in Berlin.',
      'Opening of the LIAA trade mission, Berlin, 16 September 2026'
    )
  ]
};

const usWestCoastDelegation: EventParticipation = {
  slug: 'liaa-trade-mission-us-west-coast-2026',
  name: 'Latvian trade mission to the US West Coast',
  status: 'past',
  startDate: '2026-09-24',
  endDate: '2026-09-25',
  city: 'Los Angeles and San Diego',
  country: 'United States',
  summary:
    'LIAA took 44 Latvian companies and organisations to New York, Los Angeles and San Diego alongside the official visit of the President of Latvia. Double Helix Technologies joined the biomedicine group for two days of site visits: UCLA Technology Development Group and Caltech in Los Angeles, then Thermo Fisher Scientific in Carlsbad, Element Biosciences and Illumina in San Diego, where Latvian research and medical institutions signed cooperation memoranda with Illumina and Element Biosciences.',
  focus: 'Genomics and sequencing partners, laboratory operations at scale, and introductions to US laboratories, CROs and CDMOs.',
  ctaLabel: 'View event',
  ctaHref: 'https://www.liaa.gov.lv/en/event/meet-latvian-presidential-business-delegation-usa',
  externalEventUrl: 'https://www.liaa.gov.lv/en/event/meet-latvian-presidential-business-delegation-usa',
  // The first two name Double Helix Technologies in the biomedicine delegation; the LIAA release
  // on the mission's conclusion does not, but is the organiser's own account.
  coverage: [
    {
      outlet: 'Baltic News',
      title: 'Latvian researchers and innovation specialists build partnerships in genomics and technology commercialisation in California',
      href: 'https://balticnews.com/latvian-researchers-and-innovation-specialists-build-partnerships-in-genomics-and-technology-commercialisation-in-california/',
      namesUs: true
    },
    {
      outlet: 'jauns.lv',
      title: 'Latvijas pētnieki un inovāciju speciālisti Kalifornijā veido sadarbību genomikā un tehnoloģiju komercializācijā',
      href: 'https://jauns.lv/raksts/bizness/730328-latvijas-petnieki-un-inovaciju-specialisti-kalifornija-veido-sadarbibu-genomika-un-tehnologiju-komercializacija',
      language: 'lv',
      namesUs: true
    },
    {
      outlet: 'LIAA press release',
      title: 'Latvian Companies and Researchers Sign Defense Technology and Genomics Agreements as LIAA US Trade Mission Concludes',
      href: 'https://www.prnewswire.co.uk/news-releases/latvian-companies-and-researchers-sign-defense-technology-and-genomics-agreements-as-liaa-us-trade-mission-concludes-302894085.html'
    }
  ],
  photoCredit: 'Photos and videos: LIAA',
  videos: [
    {
      youtubeId: 'ycQdZD58W0s',
      title: 'Latvian companies visit US biomedical companies: recap video',
      label: 'Day one',
      poster: `${US}/posters/recap-day-one.webp`,
      aspect: '9/16'
    },
    // OWNER: the day-two and day-three posters are portrait crops of the 25 September photographs,
    // because only the day-one video file was to hand. Replace them with a frame from each video
    // (720 by 1280 WebP) when the files are available.
    {
      youtubeId: 'Q3H15zFFDlI',
      title: 'Latvian companies visit US biomedical companies: recap video, day two',
      label: 'Day two',
      poster: `${US}/posters/recap-day-two.webp`,
      aspect: '9/16'
    },
    {
      // OWNER: YouTube lists this video under the same title as the first one. Confirm it is the
      // third day's recap (or a different cut) and correct the label; remove it if it duplicates the first.
      youtubeId: 'yfq8fmKDdjM',
      title: 'Latvian companies visit US biomedical companies: recap video, day three',
      label: 'Day three',
      poster: `${US}/posters/recap-day-three.webp`,
      aspect: '9/16'
    }
  ],
  photos: [
    photo(
      US,
      'illumina-signing',
      1024,
      683,
      'Representatives of the Latvian institutions and of Illumina holding the signed memoranda, with the US and Latvian flags behind them.',
      'Illumina, San Diego, 25 September 2026',
      true
    ),
    photo(
      US,
      'illumina-lab',
      1024,
      683,
      'Aleksandrs Gusevs of Double Helix Technologies and other delegation members listening to an Illumina specialist in the laboratory.',
      'Illumina, San Diego, 25 September 2026',
      true
    ),
    photo(
      US,
      'illumina-flags',
      1024,
      683,
      'A small US flag and a small Latvian flag side by side on the signing table.',
      'Illumina, San Diego, 25 September 2026'
    ),
    photo(
      US,
      'element-biosciences-group',
      1024,
      683,
      'The delegation and its hosts in front of the Element Biosciences backdrop.',
      'Element Biosciences, San Diego, 25 September 2026',
      true
    ),
    photo(
      US,
      'element-biosciences-group-2',
      1024,
      683,
      'The biomedicine group with the signed memorandum in front of the Element Biosciences backdrop.',
      'Element Biosciences, San Diego, 25 September 2026'
    ),
    photo(
      US,
      'thermo-fisher-lab',
      1600,
      1200,
      'Delegation members in blue laboratory coats and safety glasses during the tour of the Thermo Fisher Scientific site.',
      'Thermo Fisher Scientific, Carlsbad, 25 September 2026',
      true
    ),
    photo(
      US,
      'thermo-fisher-welcome',
      1600,
      1200,
      'The delegation and its hosts in front of a screen reading Welcome to Thermo Fisher Scientific.',
      'Thermo Fisher Scientific, Carlsbad, 25 September 2026'
    ),
    photo(
      US,
      'caltech-hall',
      1024,
      683,
      'The biomedicine group in front of the Caltech Hall lettering.',
      'Caltech, Pasadena, 24 September 2026',
      true
    ),
    photo(
      US,
      'caltech-interview',
      1024,
      683,
      'Aleksandrs Gusevs of Double Helix Technologies being interviewed on camera in a Caltech courtyard.',
      'Interview for the LIAA recap video, Caltech, Pasadena, 24 September 2026',
      true
    ),
    photo(
      US,
      'caltech-interview-2',
      1024,
      683,
      'Aleksandrs Gusevs of Double Helix Technologies smiling during the on-camera interview at Caltech.',
      'Interview for the LIAA recap video, Caltech, Pasadena, 24 September 2026'
    ),
    photo(
      US,
      'ucla-technology-development-group',
      1024,
      683,
      'The delegation around a boardroom table during a presentation on the UCLA tech transfer and innovation ecosystem.',
      'UCLA Technology Development Group, Los Angeles, 24 September 2026',
      true
    ),
    // OWNER: the venue is reconstructed, not confirmed: the coverage lists ProteoGenex among the Los
    // Angeles visits and the picture shows a biobank freezer room; the time stamp is the morning of
    // 24 September, before UCLA. Correct the caption if it was elsewhere.
    photo(
      US,
      'los-angeles-lab-visit',
      1024,
      683,
      'Delegation members in a biobank freezer room, beside liquid nitrogen tanks, listening to their host.',
      'ProteoGenex, Los Angeles, 24 September 2026'
    )
  ]
};

export const eventParticipation: EventParticipation[] = [
  usWestCoastDelegation,
  berlinDelegation,
  rostockConference,
  hamburgRostockMission,
  {
    slug: 'health-tech-global-summit-2026',
    name: 'health.tech global summit 2026',
    status: 'past',
    startDate: '2026-03-03',
    endDate: '2026-03-05',
    city: 'Basel',
    country: 'Switzerland',
    venue: 'Messe Basel',
    summary:
      'A health technology summit focused on moving from insight to action across health systems, pharma, startups, public sector, and academia.',
    focus: 'Practical AI, healthtech execution, and care workflow modernization.',
    ctaLabel: 'View event',
    ctaHref: 'https://www.health.tech/focus-2026',
    externalEventUrl: 'https://www.health.tech/focus-2026'
  },
  {
    slug: 'whx-dubai-2026',
    name: 'WHX Dubai 2026',
    status: 'past',
    startDate: '2026-02-09',
    endDate: '2026-02-12',
    city: 'Dubai',
    country: 'United Arab Emirates',
    venue: 'Dubai Exhibition Centre',
    summary:
      'World Health Expo Dubai, formerly Arab Health, brought together the healthcare, medical, scientific, diagnostics, digital health, infrastructure, and wellness ecosystem.',
    focus: 'Healthcare technology, regional partnerships, and digital health priorities.',
    ctaLabel: 'View event',
    ctaHref: 'https://www.dubaiexhibitioncentre.com/en/whats-on/whx-dubai-2026',
    externalEventUrl: 'https://www.dubaiexhibitioncentre.com/en/whats-on/whx-dubai-2026'
  },
  {
    slug: 'swiss-biotech-day-2026',
    name: 'Swiss Biotech Day 2026',
    status: 'past',
    startDate: '2026-05-04',
    endDate: '2026-05-05',
    city: 'Basel',
    country: 'Switzerland',
    venue: 'Messe Basel',
    summary:
      'A leading biotechnology conference for life sciences professionals, international collaboration, partnering, R&D, manufacturing, data management, AI, and innovative financing.',
    focus: 'Biotech partnerships, data management, AI, and operational workflow conversations.',
    ctaLabel: 'View event',
    ctaHref: 'https://www.swissbiotech.org/event/swiss-biotech-day/',
    externalEventUrl: 'https://www.swissbiotech.org/event/swiss-biotech-day/'
  },
  {
    slug: 'hlth-europe-2026',
    name: 'HLTH Europe 2026',
    status: 'past',
    startDate: '2026-06-15',
    endDate: '2026-06-18',
    city: 'Amsterdam',
    country: 'Netherlands',
    venue: 'RAI Convention Centre',
    summary:
      'A major European healthcare innovation event connecting healthcare leaders, providers, pharma and life sciences teams, startups, investors, and technology partners.',
    focus: 'Healthcare innovation, interoperability, AI, and digital transformation.',
    ctaLabel: 'View event',
    ctaHref: 'https://hlth.com/events/europe/',
    externalEventUrl: 'https://hlth.com/events/europe/'
  },
  {
    slug: 'global-innovation-summit-2026',
    name: 'Global Innovation Summit 2026',
    status: 'past',
    startDate: '2026-05-06',
    city: 'Basel',
    country: 'Switzerland',
    venue: 'Messe Basel',
    summary:
      'A one-day international innovation event held back-to-back with Swiss Biotech Day, focused on collaborative innovation projects, biotech, enabling technologies, and funding opportunities across Eureka countries.',
    focus: 'International innovation partnerships, funding, and enabling technologies.',
    ctaLabel: 'View event',
    ctaHref: 'https://www.b2match.com/e/global-innovation-summit-2026',
    externalEventUrl: 'https://www.b2match.com/e/global-innovation-summit-2026'
  },
  {
    slug: 'riga-comm-2026',
    name: 'RIGA COMM 2026',
    status: 'upcoming',
    startDate: '2026-10-08',
    endDate: '2026-10-09',
    city: 'Riga',
    country: 'Latvia',
    venue: 'International Exhibition Centre Ķīpsala',
    summary:
      'The Baltic business technology trade show and conference, bringing together ICT companies and the businesses that buy from them, with a programme on AI, cybersecurity and digital operations.',
    focus: 'Meeting Baltic companies and public bodies that run laboratories and regulated workflows.',
    ctaLabel: 'View event',
    ctaHref: 'https://rigacomm.com/en/',
    externalEventUrl: 'https://rigacomm.com/en/'
  },
  {
    slug: 'techritory-2026',
    name: 'Techritory 2026',
    status: 'upcoming',
    startDate: '2026-10-21',
    endDate: '2026-10-22',
    city: 'Riga',
    country: 'Latvia',
    summary:
      'The ninth Techritory forum, organised by the Electronic Communications Office of Latvia, on Europe\'s digital security, sovereignty and competitiveness, with over 600 speakers and guests from policy and industry.',
    focus: 'Secure data infrastructure and the policy context for health and research data in Europe.',
    ctaLabel: 'View event',
    ctaHref: 'https://www.techritory.com/',
    externalEventUrl: 'https://www.techritory.com/'
  },
  {
    slug: 'medica-2026',
    name: 'MEDICA 2026',
    status: 'upcoming',
    startDate: '2026-11-16',
    endDate: '2026-11-19',
    city: 'Düsseldorf',
    country: 'Germany',
    venue: 'Messe Düsseldorf',
    summary:
      'The international trade fair for medical technology, imaging, health IT, laboratory equipment and diagnostics, with a 2026 programme on smart hospitals, AI in diagnostics, point-of-care testing and resilient health systems.',
    focus: 'Laboratory and diagnostics vendors, health IT integration partners, and hospital groups across Europe.',
    ctaLabel: 'View event',
    ctaHref: 'https://www.medica-tradefair.com/',
    externalEventUrl: 'https://www.medica-tradefair.com/'
  }
];

export function formatEventDate(event: Pick<EventParticipation, 'startDate' | 'endDate'>) {
  const dateFormatter = new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const start = new Date(event.startDate);

  if (!event.endDate || event.endDate === event.startDate) {
    return dateFormatter.format(start);
  }

  const end = new Date(event.endDate);
  return `${dateFormatter.format(start)} - ${dateFormatter.format(end)}`;
}

/** Events that have photographs or videos, newest first, for the gallery on /events. */
export function getEventsWithMedia() {
  return eventParticipation
    .filter((event) => (event.photos?.length ?? 0) > 0 || (event.videos?.length ?? 0) > 0)
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
}

/**
 * The photographs flagged for the homepage, taken in turn from each event (newest event first), so
 * the six the mosaic shows first are a mix of events rather than one event's first six.
 */
export function getHomepagePhotos() {
  const perEvent = getEventsWithMedia().map((event) => (event.photos ?? []).filter((photo) => photo.homepage));
  const longest = Math.max(0, ...perEvent.map((photos) => photos.length));
  const pool: EventPhoto[] = [];
  for (let i = 0; i < longest; i += 1) {
    for (const photos of perEvent) if (photos[i]) pool.push(photos[i]);
  }
  return pool;
}

/** The first video of the newest event with one, for the homepage. */
export function getHomepageVideo() {
  return getEventsWithMedia().find((event) => event.videos?.length)?.videos?.[0];
}
