import type { MetadataRoute } from 'next';
import { absoluteUrl } from './lib/seo';

export const dynamic = 'force-static';

/**
 * Crawlers used by AI search and assistants when they fetch pages to answer a question or to cite
 * a source. Listed explicitly so the intent is recorded even though the wildcard rule already
 * allows them.
 */
const AI_SEARCH_AND_ASSISTANT_CRAWLERS = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'DuckAssistBot',
  'Amazonbot',
  'Bingbot',
  'Applebot'
];

/**
 * Crawlers whose stated purpose is collecting training data rather than answering queries.
 * Allowed for now, the same as everything else. OWNER: decide whether the company wants its
 * content used for model training; if not, change `allow: '/'` to `disallow: '/'` for this group
 * and record the decision (an ADR or the project log).
 */
const AI_TRAINING_CRAWLERS = ['Google-Extended', 'Applebot-Extended', 'CCBot', 'Bytespider', 'meta-externalagent'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/'
      },
      {
        userAgent: AI_SEARCH_AND_ASSISTANT_CRAWLERS,
        allow: '/'
      },
      {
        userAgent: AI_TRAINING_CRAWLERS,
        allow: '/'
      }
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: absoluteUrl('/')
  };
}
