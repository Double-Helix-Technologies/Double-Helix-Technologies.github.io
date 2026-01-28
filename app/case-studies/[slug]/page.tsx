import { notFound } from 'next/navigation';
import { Check, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { caseStudies, colorClasses } from '../../data/caseStudies';
import { AnimatedCounter } from '../../components/ui/AnimatedCounter';
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
import { Badge } from '@/app/components/ui/badge';
import { Separator } from '@/app/components/ui/separator';

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  const link = `/case-studies/${study.slug}`;
  const colors = colorClasses[study.color];

  const breadcrumb = <Breadcrumb className="mb-4">
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href="/#case-studies">Home</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <ChevronRight/>
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href={link}>{study.caseTitle}</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>;

  const overview = (client: any) => {
    return (
      <div className="flex flex-col gap-4">
        <p className="font-semibold ">{client.name || '<Company Name>'}</p>
        <p className="text-text-secondary text-sm">Information about the company</p>
        <p className="font-semibold">Industry</p>
        <Badge variant="custom" className={`w-fit ${colors.bg} ${colors.text}`}>Life sciences</Badge>
        <Separator className="my-2"/>
        <p className="font-semibold">Ready to transform your business?</p>
        <p className="text-text-secondary text-sm mb-2">
          Let's discuss how we can help you achieve similar results.
        </p>
        <Button variant="secondary" className={`${colors.bg} ${colors.text} w-fit`}>
          <a href="/#contact">Get in Touch</a>
        </Button>
      </div>
    );
  };

  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Navigation/>

        <section className="top-section bg-gradient-to-b from-background to-background-alt ">
          <div className="container-tight relative flex-col gap-12 lg:flex lg:flex-row pb-5 ">
            <div className="max-w-3xl">
              <div className="lg:mb-12">
                <div className="flex flex-col gap-6 mb-6">
                  {breadcrumb}
                  <h1 className="text-4xl md:text-5xl">{study.caseTitle}</h1>

                  <p className="text-text-secondary">
                    Short summary of the case - one two sentences about the case and the client</p>
                </div>
                <div id="result-grid"
                     className={`grid grid-cols-2 grid-auto-rows gap-6 rounded-xl p-8 ${colors.border} ${colors.bg}`}>
                  {
                    study.stats.map((stat) => (
                      <div key={stat.statLabel} className="flex flex-col gap-2">
                        <AnimatedCounter
                          value={stat.stat}
                          from={stat.statFrom}
                          suffix={stat.statSuffix}
                          className={`text-5xl font-semibold ${colors.text}`}
                        />
                        <p className="text-text-secondary lowercase">
                          {stat.statLabel}
                        </p>
                      </div>
                    ))
                  }
                </div>
                <div className="my-8 space-y-12">
                  <div>
                    <h2 className="text-3xl mb-6 flex items-center">
                      Problem
                    </h2>
                    <p className="text-lg text-text-secondary">
                      {study.details.problem}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl mb-6">
                      Solution
                    </h2>
                    <p className="text-lg text-text-secondary">
                      {study.details.solution}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-3xl mb-6">
                      Outcomes
                    </h2>
                    <ul className="space-y-1">
                      {study.details.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-center gap-3">
                          <Check size={20} className={`${colors.text}`}/>
                          <span className="text-lg text-text-secondary">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-fit lg:sticky lg:top-32 lg:max-w-80 lg:mt-32 z-40">
              {overview(study.client)}
            </div>
          </div>
        </section>

        <Footer/>
      </main>
    </ThemeProvider>
  );
}
