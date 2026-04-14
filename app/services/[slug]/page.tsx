import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronRight, MonitorCog, Plus } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { ThemeProvider } from '../../components/ThemeProvider';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/app/components/ui/breadcrumb';
import { Button } from '@/app/components/ui/button';
import { Service, servicesContents } from '@/app/data/services';
import { Card, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Separator } from '@/app/components/ui/separator';
import { absoluteUrl, buildMetadata, siteConfig } from '@/app/lib/seo';

export async function generateStaticParams() {
  return servicesContents.map((service: Service) => ({
    slug: service.key
  }));
}

const serviceMetadataByKey: Record<string, { title: string; description: string; keywords: string[] }> = {
  Discovery: {
    title: 'Operational Workflow & Risk Assessment',
    description:
      'Map workflows, uncover hidden handoff risk, and identify data bottlenecks across life sciences and healthcare operations.',
    keywords: [
      'operational workflow assessment',
      'workflow bottleneck analysis',
      'process risk assessment'
    ]
  },
  Integration: {
    title: 'System Integration & Data Flow Optimization',
    description:
      'Reduce manual handoffs, connect fragmented systems, and create a reliable single source of truth with end-to-end integration services.',
    keywords: [
      'system integration consulting',
      'single source of truth',
      'data flow bottlenecks',
      'manual handoff reduction'
    ]
  },
  Architecture: {
    title: 'Software Architecture Assessment',
    description:
      'Assess software architecture, scalability, and delivery risk for healthcare and life sciences systems that need to evolve safely.',
    keywords: [
      'software architecture assessment',
      'healthcare software architecture',
      'custom software consulting'
    ]
  },
  System: {
    title: 'Observability & Workflow Monitoring',
    description:
      'Improve observability across systems and workflows so teams can detect issues earlier and reduce operational friction.',
    keywords: [
      'observability consulting',
      'workflow monitoring',
      'system health dashboards'
    ]
  },
  Security: {
    title: 'Security & Compliance Risk Assessment',
    description:
      'Strengthen security posture and audit readiness across systems, integrations, and data flows in regulated environments.',
    keywords: [
      'compliance risk assessment',
      'healthcare IT security',
      'regulated system compliance'
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesContents.find((item) => item.key === slug);

  if (!service) {
    return buildMetadata({
      title: 'Service',
      description: siteConfig.description,
      path: `/services/${slug}/`
    });
  }

  const metadata = serviceMetadataByKey[service.key] ?? {
    title: service.title,
    description: service.description,
    keywords: [service.title]
  };

  return buildMetadata({
    title: metadata.title,
    description: metadata.description,
    path: `/services/${service.key}/`,
    keywords: metadata.keywords
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesContents.find((s) => s.key === slug);

  if (!service) {
    notFound();
  }

  const link = `/services/${service.key}`;
  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url
    },
    areaServed: ['Europe', 'United States'],
    serviceType: service.title,
    url: absoluteUrl(link)
  };

  const breadcrumb = <Breadcrumb className="mb-4">
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href="/#services">Home</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <ChevronRight/>
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href={link}>{service.key}</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>;

  const deliverableCard = (deliverable: string) => {
    return (<Card className="bg-background">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center gap-4">
            <MonitorCog/> {deliverable}
          </div>
        </CardTitle>
      </CardHeader>
    </Card>);
  };

  const overview = () => {
    return (
      <div className="grid flex-cols-1 frid-rows-3 gap-4">
        <div className="space-y-2">
          <p className="font-semibold">Starting at {service.price}</p>
          <p className="text-text-secondary text-sm">custom quotes available</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold row-start-2">Timeline</p>
          <p className="text-text-secondary text-sm">{service.timeline}</p>
        </div>
        <Separator className="my-2"/>
        <Button variant="gradient" className="w-fit">
          <Link href="/#contact">Get started</Link><ArrowRight/>
        </Button>
      </div>
    );
  };

  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
        />
        <Navigation/>

        <section className="top-section bg-gradient-to-b from-background to-background-alt ">
          <div className="container-tight relative flex-col gap-12 lg:flex lg:flex-row pb-5">
            <div className="max-w-3xl">
              <div className="lg:mb-12">
                <div className="flex flex-col gap-6 mb-6">
                  {breadcrumb}
                  <h1 className="text-4xl md:text-5xl">{service.title}</h1>

                  <p className="text-text-secondary">
                    {service.description}
                  </p>
                </div>
                <div className="my-8 space-y-12">
                  <div>
                    <h2 className="text-3xl mb-6 flex items-center gap-2">
                      What's included
                    </h2>
                    <ul className="space-y-1">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <Plus size={20} className="flex-shrink-0"/>
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-3xl mb-6 flex items-center gap-2">
                      Deliverables
                    </h2>
                    <div className="flex flex-wrap gap-4">
                      {service.deliverables.map((deliverable) => (
                        deliverableCard(deliverable)
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-fit lg:sticky lg:top-32 lg:max-w-80 lg:mt-32 z-40">
              {overview()}
            </div>
          </div>
        </section>

        <Footer/>
      </main>
    </ThemeProvider>
  );
}
