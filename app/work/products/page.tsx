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
import { products } from '@/app/data/work';
import ProductsShowcase from './ProductsShowcase';

export const metadata: Metadata = buildMetadata({
  title: 'Software Products for Care & Operations',
  description:
    'Explore software products from Double Helix, including Tiltera, an AI-assisted mental health practice platform for therapists, clinics, and clients.',
  path: '/work/products/',
  keywords: [
    'software products',
    'mental health practice software',
    'AI-assisted therapist software',
    'therapy practice management software'
  ]
});

export default function ProductsPage() {
  const breadcrumbStructuredData = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work/' },
    { name: 'Products', path: '/work/products/' }
  ]);
  const collectionStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Products',
    description: 'Software products from Double Helix Technologies.',
    url: absoluteUrl('/work/products/'),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: product.name,
        url: absoluteUrl(`/work/products/${product.slug}/`)
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
                    <Link href="/work/products">Products</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <h1 className="section-heading">Products</h1>
            <p className="max-w-3xl text-lg text-text-secondary">
              Explore the products we are building around care delivery and operational complexity, starting with tools
              designed to make therapy more continuous and easier to manage.
            </p>

            <ProductsShowcase products={products} />
          </div>
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
