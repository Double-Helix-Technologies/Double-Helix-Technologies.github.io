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

export async function generateStaticParams() {
  return servicesContents.map((service: Service) => ({
    slug: service.key
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const service = servicesContents.find((s) => s.key === params.slug);

  if (!service) {
    notFound();
  }

  const link = `/case-studies/${service.key}`;

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
          <p className="text-text-secondary text-sm">2-4 months</p>
        </div>
        <Separator className="my-2"/>
        <Button variant="gradient" className="w-fit">
          <a href="/#contact">Get started</a><ArrowRight/>
        </Button>
      </div>
    );
  };

  return (
    <ThemeProvider>
      <main className="min-h-screen">
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
                          <Plus size={20}/>
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
