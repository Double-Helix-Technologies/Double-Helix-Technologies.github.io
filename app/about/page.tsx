import type { Metadata } from 'next';
import LegacyRedirect from '@/app/components/LegacyRedirect';
import { buildMetadata } from '@/app/lib/seo';

const TARGET = '/team/';

/**
 * `/about/` is still indexed by Google with the title "About Our Life Sciences & Healthcare IT Team"
 * and returned 404 after the page moved to `/team/`. This page only redirects; it is deliberately
 * not in the sitemap, and its canonical points at the destination.
 */
export const metadata: Metadata = buildMetadata({
  title: 'About us',
  description:
    'Get to know the senior engineering and consulting team behind Double Helix Technologies and our work in life sciences and healthcare IT.',
  path: TARGET,
  noIndex: true
});

export default function LegacyAboutPage() {
  return <LegacyRedirect to={TARGET} title="About us" />;
}
