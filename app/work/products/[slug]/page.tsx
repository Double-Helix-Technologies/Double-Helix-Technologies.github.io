import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { notFound } from 'next/navigation';
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
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata, siteConfig } from '@/app/lib/seo';
import { getProductBySlug, getProductPath, products } from '@/app/data/work';

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return buildMetadata({
      title: 'Product',
      description: siteConfig.description,
      path: `/work/products/${slug}/`,
      type: 'article'
    });
  }

  return buildMetadata({
    title: product.seo.title,
    description: product.seo.description,
    path: getProductPath(product),
    type: 'article',
    keywords: product.seo.keywords
  });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const link = getProductPath(product);
  const breadcrumbStructuredData = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work/' },
    { name: 'Products', path: '/work/products/' },
    { name: product.name, path: link }
  ]);
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    applicationCategory: product.category,
    applicationSubCategory: 'Mental health practice software',
    operatingSystem: 'Web',
    description: product.summary,
    featureList: product.capabilities,
    audience: {
      '@type': 'Audience',
      audienceType: 'Therapists, clinics, and therapy clients'
    },
    areaServed: product.markets,
    url: absoluteUrl(link)
  };

  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
        <Navigation />

        <section className="top-section bg-gradient-to-b from-background to-background-alt">
          <div className="container-tight relative flex-col gap-12 lg:flex lg:flex-row pb-5">
            <div className="max-w-3xl">
              <div className="flex flex-col gap-6 mb-6">
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
                    <BreadcrumbSeparator>
                      <ChevronRight />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href={link}>{product.name}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>

                <h1 className="text-4xl md:text-5xl">{product.name}</h1>
                <p className="text-lg text-text-secondary">{product.summary}</p>
                <p className="max-w-2xl text-text-secondary">{product.positioning}</p>
              </div>

              <div className="my-8 space-y-12">
                <div>
                  <h2 className="text-3xl mb-6">Built for therapists, clinics, and clients</h2>
                  <p className="text-lg text-text-secondary">{product.audience}</p>
                </div>

                <div>
                  <h2 className="text-3xl mb-6">How it supports care between sessions</h2>
                  <p className="text-lg text-text-secondary">{product.jobToBeDone}</p>
                </div>

                <div>
                  <h2 className="text-3xl mb-6">What it includes</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {product.capabilities.map((capability) => (
                      <div
                        key={capability}
                        className="rounded-2xl border border-border/20 bg-background/35 px-5 py-5 text-lg text-text-secondary"
                      >
                        {capability}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl mb-6">Why it stands out</h2>
                  <ul className="space-y-4">
                    {product.differentiators.map((item) => (
                      <li key={item} className="text-lg text-text-secondary">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="h-fit lg:sticky lg:top-32 lg:max-w-80 lg:mt-32 z-40">
              <Card className="bg-background/90 border border-border/30 shadow-none">
                <CardHeader className="space-y-4">
                  <CardTitle>Early access</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-text-secondary">
                  <p>{product.currentStage}</p>
                  <p>
                    Join if you want an early look at the product and a chance to shape how it develops.
                  </p>
                  <Button variant="gradient" asChild>
                    <Link href={product.ctaHref}>
                      {product.ctaLabel}
                      <ArrowRight />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
