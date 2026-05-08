import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { ThemeProvider } from '@/app/components/ThemeProvider';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/app/components/ui/breadcrumb';
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from '@/app/lib/seo';
import { clientSolutions } from '@/app/data/work';
import ClientSolutionsShowcase from './ClientSolutionsShowcase';

export const metadata: Metadata = buildMetadata({
  title: 'Client Solutions for Workflow Automation & Systems Integration',
  description:
    'Browse client solutions from Double Helix across sequencing operations, workflow automation, LIMS integration, and software delivery for complex operational environments.',
  path: '/work/client-solutions/',
  keywords: [
    'workflow automation case studies',
    'systems integration case studies',
    'sequencing operations automation',
    'LIMS integration case study'
  ]
});

export default function ClientSolutionsPage() {
  const breadcrumbStructuredData = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work/' },
    { name: 'Client solutions', path: '/work/client-solutions/' }
  ]);
  const collectionStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Client solutions',
    description:
      'Delivered client solutions from Double Helix Technologies covering workflow automation, systems integration, and operational visibility.',
    url: absoluteUrl('/work/client-solutions/'),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: clientSolutions.map((solution, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: solution.title,
        url: absoluteUrl(`/work/client-solutions/${solution.slug}/`)
      }))
    }
  };

  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
        <Navigation />

        <section className="top-section bg-gradient-to-b from-background to-background-alt">
          <div className="container-tight max-w-5xl space-y-6">
            <Breadcrumb className="mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/work">Work</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/work/client-solutions">Client solutions</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <h1 className="section-heading">Client solutions</h1>
            <p className="max-w-3xl text-lg text-text-secondary">
              Browse selected client solutions that show how we simplify complex workflows, connect critical systems,
              and make operational work easier to run.
            </p>

            <ClientSolutionsShowcase solutions={clientSolutions} />
          </div>
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
