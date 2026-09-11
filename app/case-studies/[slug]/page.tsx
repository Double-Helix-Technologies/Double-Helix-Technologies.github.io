import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LegacyRedirect from '@/app/components/LegacyRedirect';
import { buildMetadata } from '@/app/lib/seo';
import { getClientSolutionBySlug, getClientSolutionPath, legacyCaseStudyRedirects } from '@/app/data/work';

/**
 * `/case-studies/<slug>/` was the original home of the case studies. The content now lives under
 * `/work/`, fed by `app/data/work.ts` (single source of truth). These pages only redirect.
 */
export async function generateStaticParams() {
  return Object.keys(legacyCaseStudyRedirects).map((slug) => ({ slug }));
}

function resolveTarget(slug: string) {
  const targetSlug = legacyCaseStudyRedirects[slug];
  return targetSlug ? getClientSolutionBySlug(targetSlug) : undefined;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const target = resolveTarget(slug);

  if (!target) {
    return buildMetadata({
      title: 'Case Study',
      description: 'This case study has moved.',
      path: `/case-studies/${slug}/`,
      noIndex: true,
      type: 'article'
    });
  }

  // Canonical points at the destination so search engines consolidate on the /work/ URL.
  return buildMetadata({
    title: target.seo.title,
    description: target.seo.description,
    path: getClientSolutionPath(target),
    noIndex: true,
    type: 'article'
  });
}

export default async function LegacyCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const target = resolveTarget(slug);

  if (!target) {
    notFound();
  }

  return <LegacyRedirect to={getClientSolutionPath(target)} title={target.title} />;
}
