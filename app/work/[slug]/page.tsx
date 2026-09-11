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
import { Separator } from '@/app/components/ui/separator';
import { getServiceBySlug, getServicePath } from '@/app/data/services';
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata, siteConfig } from '@/app/lib/seo';
import {
  getAllWorkSlugs,
  getClientSolutionPath,
  getProductPath,
  getWorkEntryBySlug
} from '@/app/data/work';

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

export async function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWorkEntryBySlug(slug);

  if (!entry) {
    return buildMetadata({
      title: 'Work',
      description: siteConfig.description,
      path: `/work/${slug}/`,
      type: 'article'
    });
  }

  const seo = entry.data.seo;
  const path = entry.kind === 'client-solution' ? getClientSolutionPath(entry.data) : getProductPath(entry.data);

  return buildMetadata({
    title: seo.title,
    description: seo.description,
    path,
    type: 'article',
    keywords: seo.keywords
  });
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getWorkEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  if (entry.kind === 'client-solution') {
    const solution = entry.data;
    const link = getClientSolutionPath(solution);
    const relatedServices = solution.relatedServiceSlugs.map(getServiceBySlug).filter(isDefined);
    const breadcrumbStructuredData = buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Work', path: '/work/' },
      { name: solution.title, path: link }
    ]);
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: solution.title,
      description: solution.seo.description,
      keywords: solution.seo.keywords.join(', '),
      about: [solution.primaryCategory, solution.sector, ...solution.supportingThemes],
      author: {
        '@type': 'Organization',
        name: siteConfig.name
      },
      publisher: {
        '@type': 'Organization',
        name: siteConfig.name,
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl(siteConfig.ogImage)
        }
      },
      mainEntityOfPage: absoluteUrl(link)
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
                          <Link href={link}>{solution.title}</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>

                  <span className="inline-flex w-fit rounded-full border border-accent-digital-blue/25 bg-accent-digital-blue/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-text-secondary">
                    Client work
                  </span>
                  <h1 className="text-4xl md:text-5xl">{solution.title}</h1>
                  <p className="text-2xl md:text-3xl font-semibold text-text-primary">{solution.headline}</p>
                  <p className="text-lg text-text-secondary">{solution.summary}</p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {solution.highlightStats.map((stat) => (
                    <Card key={stat.label} className="bg-background/60 border border-border/20 shadow-none">
                      <CardHeader>
                        <CardTitle className="text-4xl">{stat.value}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="font-medium text-text-secondary">{stat.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="my-8 space-y-12">
                  <div>
                    <h2 className="text-3xl mb-6">The challenge</h2>
                    <p className="text-lg text-text-secondary">{solution.problem}</p>
                  </div>

                  <div>
                    <h2 className="text-3xl mb-6">What we delivered</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      {solution.whatWasDelivered.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-border/20 bg-background/35 px-5 py-5 text-lg text-text-secondary"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {solution.approach && (
                    <div>
                      <h2 className="text-3xl mb-6">How it worked</h2>
                      <p className="text-lg text-text-secondary">{solution.approach}</p>
                    </div>
                  )}

                  {solution.dataFlow && (
                    <div>
                      <h2 className="text-3xl mb-6">Data delivery setup</h2>
                      <p className="text-lg text-text-secondary">{solution.dataFlow}</p>
                    </div>
                  )}

                  <div>
                    <h2 className="text-3xl mb-6">What changed operationally</h2>
                    <ul className="space-y-4">
                      {solution.outcomes.map((outcome) => (
                        <li key={outcome} className="text-lg text-text-secondary">
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {solution.quote && (
                    <div>
                      <h2 className="text-3xl mb-6">Customer said</h2>
                      <Card className="max-w-xl bg-gray-600/10">
                        <CardContent className="pt-6">
                          <p className="text-xl font-medium text-text-primary">{`"${solution.quote.text}"`}</p>
                          {solution.quote.attribution && (
                            <p className="mt-4 text-text-secondary">{solution.quote.attribution}</p>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              </div>

              <div className="h-fit lg:sticky lg:top-32 lg:max-w-80 lg:mt-32 z-40">
                <Card className="bg-background/90 border border-border/30 shadow-none">
                  <CardHeader className="space-y-4">
                    <CardTitle>At a glance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-text-secondary">
                    <div>
                      <p className="font-semibold text-text-primary">Sector</p>
                      <p>{solution.sector}</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="font-semibold text-text-primary">Primary users</p>
                      <p>{solution.users.join(', ')}</p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <p className="font-semibold text-text-primary">Core focus</p>
                      <p>{[solution.primaryCategory, ...solution.supportingThemes].join(', ')}</p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <p className="font-semibold text-text-primary">Tags</p>
                      <div className="flex flex-wrap gap-2">
                        {solution.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border/20 bg-background/30 px-2.5 py-1 text-xs text-text-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <p className="font-semibold text-text-primary">Related services</p>
                      <div className="flex flex-col gap-2">
                        {relatedServices.map((service) => (
                          <Link
                            key={service.slug}
                            href={getServicePath(service)}
                            className="text-text-secondary hover:text-primary transition-colors"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <Button variant="gradient" asChild>
                      <Link href="/#contact">
                        Discuss a similar workflow
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

  const product = entry.data;
  const link = getProductPath(product);
  const breadcrumbStructuredData = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work/' },
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
                        <Link href={link}>{product.name}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>

                <span className="inline-flex w-fit rounded-full border border-accent-science-teal/25 bg-accent-science-teal/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-text-secondary">
                  Our products
                </span>
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
                  <p>Join if you want an early look at the product and a chance to shape how it develops.</p>
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
