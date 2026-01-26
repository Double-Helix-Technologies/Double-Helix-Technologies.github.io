import { notFound } from "next/navigation";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { caseStudies, colorClasses } from "../../data/caseStudies";
import { AnimatedCounter } from "../../components/ui/AnimatedCounter";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { ThemeProvider } from "../../components/ThemeProvider";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  const colors = colorClasses[study.color];

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative bg-background-alt py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-6 mb-6">
            <Link 
              href="/#case-studies" 
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors w-fit"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>

            <div className={`inline-flex px-4 py-2 rounded-full ${colors.bg} ${colors.border} border w-fit`}>
              <span className={`text-sm font-medium tracking-wide uppercase ${colors.text}`}>
                {study.caseTitle}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <AnimatedCounter
              value={study.stat}
              from={study.statFrom}
              suffix={study.statSuffix}
              className={`text-5xl md:text-7xl font-bold ${colors.text}`}
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            {study.statLabel}
          </h1>

          <p className="text-xl text-text-secondary">
            {study.subtitle}
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Problem */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
              <span className={`w-2 h-8 ${colors.bg} rounded`}></span>
              The Problem
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {study.details.problem}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
              <span className={`w-2 h-8 ${colors.bg} rounded`}></span>
              Our Solution
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {study.details.solution}
            </p>
          </div>

          {/* Outcomes */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
              <span className={`w-2 h-8 ${colors.bg} rounded`}></span>
              Key Outcomes
            </h2>
            <ul className="space-y-4">
              {study.details.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className={`h-6 w-6 mt-1 flex-shrink-0 ${colors.text}`} />
                  <span className="text-lg text-text-secondary">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className={`mt-12 p-8 rounded-2xl border ${colors.border} ${colors.bg} bg-opacity-5`}>
            <h3 className="text-2xl font-bold text-text-primary mb-3">
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

      <Footer />
    </main>
    </ThemeProvider>
  );
}
