import { notFound } from 'next/navigation';
import { CheckCircle2, ChevronRight } from 'lucide-react';
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

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        <Navigation/>

        {/* Hero Section */}
        <section className="section content-wide px-4 md:px-8 mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-6 mb-6">
              {breadcrumb}
              <h1 className={'text-5xl'}>{study.caseTitle}</h1>
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
                      className={`text-5xl font-medium ${colors.text}`}
                    />
                    <p className="text-text-secondary">
                      {stat.statLabel}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="pb-4 px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Problem */}
            <div>
              <h2 className="text-3xl mb-4 flex items-center gap-2">
                Problem
              </h2>
              <p className="text-lg text-text-secondary">
                {study.details.problem}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl mb-4">
                Solution
              </h2>
              <p className="text-lg text-text-secondary">
                {study.details.solution}
              </p>
            </div>

            {/* Outcomes */}
            <div>
              <h2 className="text-3xl mb-6">
                Outcomes
              </h2>
              <ul className="space-y-4">
                {study.details.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <CheckCircle2 className={`h-7 w-5 ${colors.text}`}/>
                    <span className="text-lg text-text-secondary">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className={`p-8 rounded-xl ${colors.bg}`}>
              <h3 className="text-xl text-text-primary mb-2">
                Ready to transform your business?
              </h3>
              <p className="text-text-secondary mb-6">
                Let's discuss how we can help you achieve similar results.
              </p>
              <Link
                href="/#contact"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg ${colors.bg} ${colors.text} hover:scale-105 transition-all font-medium`}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        <Footer/>
      </main>
    </ThemeProvider>
  );
}
