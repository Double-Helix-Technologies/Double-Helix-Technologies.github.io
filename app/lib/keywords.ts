/**
 * Keyword library for page metadata, from the keyword work of 15 September 2026.
 *
 * The groups below are the vocabulary the site targets: laboratory integration and workflow
 * automation first, because that is where the published client evidence is, then the broader
 * life sciences, healthcare and AI terms. The order inside `primaryTargets` is a relevance
 * ranking against the work we can show, not a search-volume ranking: no volume data has been
 * checked. OWNER: validate these against Search Console and a keyword tool, and judge them by
 * qualified enquiries rather than traffic.
 *
 * Not every phrase is emitted. Each page takes the subset that matches what that page is about
 * (`pageKeywords` below); the library is the content plan behind them. A phrase must never
 * contain a comma: the keywords meta tag is comma separated, so a comma would split one phrase
 * into two meaningless ones.
 *
 * Clinic-side terms (LIS, EHR and EMR integration, HL7, FHIR, laboratory order and result
 * exchange) are deliberately absent. They describe work we have not published evidence for; see
 * `docs/keyword-targeting.md` before adding them.
 */

export const keywordLibrary = {
  core: [
    'laboratory software development',
    'custom laboratory software development',
    'life sciences software development',
    'laboratory workflow automation',
    'laboratory process automation',
    'laboratory systems integration',
    'laboratory data integration'
  ],
  limsAndBusinessSystems: [
    'LIMS integration services',
    'LIMS integration company',
    'LIMS ERP integration',
    'LIMS API integration',
    'laboratory information management system integration',
    'laboratory ecommerce integration',
    'laboratory reporting automation',
    'laboratory customer portal development'
  ],
  customWorkflows: [
    'custom sample management software',
    'laboratory sample tracking software development',
    'laboratory workflow software development',
    'laboratory project management software',
    'laboratory workflow assessment',
    'laboratory process improvement consulting'
  ],
  genomics: [
    'genomics workflow automation',
    'NGS workflow automation',
    'NGS data delivery automation',
    'sequencing data delivery automation',
    'sequencing data transfer automation',
    'genomics data integration',
    'sequencing data archiving'
  ],
  supportingServices: [
    'healthcare software development',
    'healthcare system integration services',
    'custom software for regulated operations',
    'laboratory integration monitoring',
    'forensic laboratory systems integration',
    'AI workflow automation for life sciences'
  ]
} as const;

/**
 * The six targets closest to the work and the evidence already published. Relevance ranking,
 * not search volume.
 */
export const primaryTargets = [
  'LIMS integration services',
  'laboratory workflow automation',
  'laboratory systems integration',
  'custom laboratory software development',
  'LIMS ERP integration',
  'laboratory data integration'
] as const;

/**
 * Site-wide keywords, added to every page by `buildMetadata`. Deliberately short: the keywords
 * meta tag carries little or no weight with search engines, so the work is done by titles,
 * descriptions, headings and the page text. This list says what the company is, once.
 */
export const siteKeywords = [
  'laboratory software development',
  'life sciences software development',
  'laboratory systems integration',
  'LIMS integration services',
  'laboratory workflow automation',
  'healthcare software development',
  'custom software for regulated operations'
];

/** Keywords for pages whose metadata is not built from `services.ts` or `work.ts`. */
export const pageKeywords = {
  home: [
    'custom laboratory software development',
    'laboratory data integration',
    'laboratory process automation',
    'LIMS ERP integration',
    'genomics workflow automation',
    'NGS data delivery automation',
    'healthcare system integration services'
  ],
  work: [
    'LIMS integration case study',
    'laboratory workflow automation case study',
    'NGS data delivery automation',
    'forensic laboratory systems integration',
    'laboratory data integration'
  ],
  team: [
    'life sciences software consulting',
    'laboratory software development team',
    'healthcare software consulting'
  ],
  aiSolutions: [
    'AI workflow automation for life sciences',
    'custom AI solutions for life sciences',
    'life sciences AI software solutions',
    'AI readiness assessment'
  ],
  workflowAssessment: [
    'laboratory workflow assessment',
    'laboratory process improvement consulting',
    'operational workflow assessment',
    'workflow bottleneck analysis'
  ]
};
