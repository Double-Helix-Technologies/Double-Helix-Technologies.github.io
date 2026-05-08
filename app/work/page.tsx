import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
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
import { Card } from '@/app/components/ui/card';
import { CardSpotlight } from '@/app/components/ui/CardSpotlight';
import { buildBreadcrumbSchema, buildMetadata, workPageSchema } from '@/app/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Client Solutions & Software Products',
  description:
    'Explore client solutions and software products from Double Helix, including workflow automation, systems integration, sequencing operations support, and AI-assisted care software.',
  path: '/work/',
  keywords: [
    'life sciences client solutions',
    'workflow automation case studies',
    'systems integration case studies',
    'healthcare software products'
  ]
});

export default function WorkPage() {
  const breadcrumbStructuredData = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work/' }
  ]);

  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(workPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
        <Navigation />

        <section className="top-section bg-gradient-to-b from-background to-background-alt">
          <div className="container-tight">
            <div className="max-w-4xl space-y-6">
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

              <h1 className="section-heading max-w-4xl">Delivered Client Solutions &amp; Our Products</h1>
              <p className="max-w-3xl text-lg text-text-secondary">
                Explore the client solutions we deliver and the products we are building around complex operational,
                data, and care workflows.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <Link href="/work/client-solutions" className="group block">
                <Card className="h-full shadow-none bg-transparent">
                  <CardSpotlight
                    className="h-full border border-accent-digital-blue/25 bg-accent-digital-blue/10 backdrop-blur-[2px] p-10 transition-all duration-300"
                    color="rgba(51, 130, 239, 0.22)"
                  >
                    <div className="relative z-20 flex h-full flex-col gap-6">
                      <h2 className="text-3xl">Client solutions we have delivered</h2>
                      <p className="text-text-secondary">
                        Examples of how we simplify difficult workflows, connect critical systems, and make day-to-day
                        operations easier to run.
                      </p>
                      <p className="inline-flex items-center gap-2 font-medium text-text-primary transition-transform group-hover:translate-x-1">
                        Explore client solutions
                        <ArrowRight />
                      </p>
                    </div>
                  </CardSpotlight>
                </Card>
              </Link>

              <Link href="/work/products" className="group block">
                <Card className="h-full shadow-none bg-transparent">
                  <CardSpotlight
                    className="h-full border border-accent-science-teal/25 bg-accent-science-teal/10 backdrop-blur-[2px] p-10 transition-all duration-300"
                    color="rgba(2, 192, 186, 0.22)"
                  >
                    <div className="relative z-20 flex h-full flex-col gap-6">
                      <h2 className="text-3xl">Our products</h2>
                      <p className="text-text-secondary">
                        Products we are building where continuity of care, operational clarity, and practical software
                        matter most.
                      </p>
                      <p className="inline-flex items-center gap-2 font-medium text-text-primary transition-transform group-hover:translate-x-1">
                        Explore products
                        <ArrowRight />
                      </p>
                    </div>
                  </CardSpotlight>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
