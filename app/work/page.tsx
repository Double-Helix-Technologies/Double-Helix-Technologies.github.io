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
import { getWorkListItems } from '@/app/data/work';
import WorkShowcase from './WorkShowcase';

export const metadata: Metadata = buildMetadata({
  title: 'Client Solutions & Software Products',
  description:
    'Delivered client work from Double Helix Technologies in genomics, forensics and lab operations: workflow automation, LIMS and system integration, sequencing data delivery, observability and IT operations, plus our own software products.',
  path: '/work/',
  keywords: [
    'life sciences client solutions',
    'workflow automation case studies',
    'systems integration case studies',
    'LIMS integration case studies',
    'healthcare software products'
  ]
});

export default function WorkPage() {
  const workItems = getWorkListItems();
  const breadcrumbStructuredData = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work/' }
  ]);
  const collectionStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Work',
    description:
      'Delivered client solutions and software products from Double Helix Technologies.',
    url: absoluteUrl('/work/'),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: workItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.path)
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
              </BreadcrumbList>
            </Breadcrumb>

            <h1 className="section-heading max-w-4xl">Delivered client solutions and our own products</h1>
            <p className="max-w-3xl text-lg text-text-secondary">
              Workflow automation, LIMS and system integration, sequencing data delivery, observability and IT operations,
              delivered for genomics, forensics and other regulated environments.
            </p>
            <p className="max-w-3xl text-text-secondary">
              Clients are named where we have their permission to do so. References are available on request.
            </p>

            <div className="mt-12">
              <WorkShowcase items={workItems} />
            </div>

            {/* Temporarily hidden - customers section
            <div className="mt-20">
              <h2 className="text-3xl md:text-4xl mb-8">Teams we&rsquo;ve worked with</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {customers.map((customer) => (
                  <a
                    key={customer.name}
                    href={customer.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={customer.name}
                    className="flex h-28 items-center justify-center rounded-xl border border-[var(--border)]/20 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <Image
                      src={customer.logo}
                      alt={customer.name}
                      width={customer.logoWidth}
                      height={customer.logoHeight}
                      className="h-full w-full object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
            */}
          </div>
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
