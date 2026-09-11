import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, FlaskConical, GitBranch, ShieldCheck, Sparkles } from 'lucide-react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { ThemeProvider } from '@/app/components/ThemeProvider';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/app/components/ui/breadcrumb';
import { clientSolutions, getClientSolutionPath } from '@/app/data/work';
import { absoluteUrl, buildBreadcrumbSchema, buildFAQSchema, buildMetadata, siteConfig } from '@/app/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Custom AI Software Solutions for Life Sciences',
  description:
    'Custom AI software solutions for life sciences teams that need regulated workflow software, connected systems, practical AI with human-in-the-loop, auditability and operational clarity.',
  path: '/solutions/custom-ai-software-life-sciences/',
  keywords: [
    'custom software ai solutions in life sciences',
    'custom AI software solutions for life sciences',
    'life sciences AI software development',
    'regulated AI workflow software',
    'LIMS ERP CRM integration life sciences'
  ]
});

const faqItems = [
  {
    question: 'What kinds of AI software solutions make sense in life sciences?',
    answer:
      'The best candidates are workflow bottlenecks where teams already have repeated manual review, fragmented systems or inconsistent decisions. Typical examples include intake triage, exception handling, document support, data reconciliation, and operational visibility.'
  },
  {
    question: 'Do we need full autonomy to get value from AI?',
    answer:
      'No. In regulated environments, the highest-value pattern is often human-in-the-loop AI. Teams keep oversight while software helps summarize, classify, route, or prepare decisions faster.'
  },
  {
    question: 'How do you handle compliance and auditability?',
    answer:
      'We design around traceability, role-based access, clear ownership, review checkpoints, and audit-ready logging. The goal is to make AI-enabled workflows easier to govern, not harder to explain.'
  },
  {
    question: 'When should we build custom software instead of buying a tool?',
    answer:
      'Custom software makes sense when your workflow crosses multiple systems, needs domain-specific rules, or cannot fit standard tools without fragile workarounds. It is especially useful when operations, quality, and data ownership all need to stay aligned.'
  },
  {
    question: 'Can you work with our existing LIMS, ERP, CRM, and data systems?',
    answer:
      'Yes. We focus on practical integration work so AI and workflow improvements fit the systems teams already rely on instead of forcing a disruptive rip-and-replace program.'
  }
] as const;

const useCases = [
  {
    title: 'Workflow copilots for regulated teams',
    description:
      'Support intake, triage, review preparation, and exception handling without removing human accountability.',
    icon: Sparkles
  },
  {
    title: 'Connected lab and operational systems',
    description:
      'Link LIMS, ERP, CRM, portals, and internal tools so data moves automatically and stays consistent across teams.',
    icon: GitBranch
  },
  {
    title: 'Audit-ready process automation',
    description:
      'Replace spreadsheet relays and email handoffs with software that makes ownership, status, and change history visible.',
    icon: ShieldCheck
  },
  {
    title: 'Operational software built around real work',
    description:
      'Create custom applications when generic tools cannot reflect your workflow, controls, or system boundaries.',
    icon: FlaskConical
  }
] as const;

const deliveryCapabilities = [
  'Custom workflow applications for regulated operations',
  'API and integration design across LIMS, ERP, CRM, and portals',
  'Human-in-the-loop AI flows with review checkpoints',
  'Role-based access, audit trails, and change visibility',
  'Observability, alerting, and operational dashboards',
  'Incremental rollout plans that avoid disruptive rewrites'
] as const;

const fitSignals = [
  'Your workflow crosses several systems and teams',
  'Manual handoffs create delay, rework, or compliance risk',
  'Generic AI tools do not fit your process or governance needs',
  'You need practical AI with clear ownership and traceability'
] as const;

const LIFE_SCIENCES_PROOF_SLUGS = ['process-automation-lims-integration', 'ngs-data-delivery-automation', 'customer-integration-api-onboarding'];
const lifeSciencesCaseStudies = clientSolutions.filter((study) => LIFE_SCIENCES_PROOF_SLUGS.includes(study.slug));

export default function CustomAiSoftwareLifeSciencesPage() {
  const faqSchema = buildFAQSchema(faqItems);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Custom AI Software Solutions for Life Sciences', path: '/solutions/custom-ai-software-life-sciences/' }
  ]);
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom AI Software Solutions for Life Sciences',
    serviceType: 'Custom AI software development and systems integration',
    description:
      'Custom AI software solutions for life sciences teams that need regulated workflow software, connected systems, and practical AI with human review, auditability, and operational clarity.',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Life sciences & Healthcare organizations'
    },
    areaServed: ['Europe', 'Germany', 'Austria', 'Belgium', 'Switzerland', 'Netherlands', 'United States'],
    category: 'Life sciences AI software development',
    url: absoluteUrl('/solutions/custom-ai-software-life-sciences/')
  };

  const breadcrumb = (
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
            <Link href="/solutions/custom-ai-software-life-sciences/">AI for life sciences</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );

  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <Navigation />

        <section className="top-section bg-gradient-to-t from-background-alt to-background pb-8">
          <div className="container-tight">
            <div className="flex max-w-4xl flex-col gap-6">
              {breadcrumb}
              <h1 className="section-heading max-w-4xl">
                Custom AI software solutions for life sciences.
              </h1>
              <p className="max-w-3xl text-lg text-text-secondary">
                We design custom software, connected data flows, and practical AI solutions for life sciences teams that
                need clearer operations, stronger traceability, and less friction across regulated workflows.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="gradient" asChild>
                  <Link href="/#contact">
                    Discuss your workflow
                    <ArrowRight />
                  </Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/services/custom-software-development/">
                    See software delivery services
                  </Link>
                </Button>
              </div>
              <div className="grid gap-3 pt-2 md:grid-cols-2">
                {fitSignals.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/40 bg-background-alt/50 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-green" />
                    <p className="text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-gradient-to-b from-background to-background-alt">
          <div className="container-tight">
            <div className="mb-10 max-w-3xl">
              <h2 className="section-heading mb-3">Where custom AI fits best</h2>
              <p className="text-text-secondary">
                The strongest projects usually sit at the intersection of fragmented systems, domain-specific rules, and
                workflows where teams still need reviewable, explainable decisions.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {useCases.map(({ title, description, icon: Icon }) => (
                <Card key={title} className="bg-background">
                  <CardHeader>
                    <CardTitle>
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-primary" />
                        {title}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-background">
          <div className="container-tight">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="section-heading mb-4">Technical delivery capabilities</h2>
                <p className="mb-8 max-w-3xl text-text-secondary">
                  We focus on delivery patterns that make AI and software useful inside real operational environments:
                  connected systems, visible ownership, controlled rollout, and enough observability to support the work
                  after go-live.
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  {deliveryCapabilities.map((item) => (
                    <Card key={item} className="bg-background shadow-none hover:scale-100">
                      <CardHeader>
                        <CardTitle>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-green" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
              <Card className="bg-background-alt shadow-none hover:scale-100">
                <CardHeader>
                  <CardTitle>Why teams choose custom over a generic AI tool</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-text-secondary">
                  <p>
                    Generic tools can help with isolated tasks, but life sciences workflows usually span several systems,
                    several owners, and several points where review still matters.
                  </p>
                  <p>
                    Custom software becomes the better option when the real problem is not only AI output quality, but
                    also routing, approvals, traceability, and integration with the systems people already use every day.
                  </p>
                  <p>
                    That is where custom workflow software, practical AI, and system integration need to be designed
                    together.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="section bg-gradient-to-b from-background-alt to-background">
          <div className="container-tight">
            <div className="mb-10 max-w-3xl">
              <h2 className="section-heading mb-3">Relevant proof from life sciences work</h2>
              <p className="text-text-secondary">
                These case studies are the closest proof points on the site today for potential customers researching custom
                software, integration, and AI-readiness work in life sciences environments.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {lifeSciencesCaseStudies.map((study) => (
                <Card key={study.slug} className="bg-background">
                  <CardHeader>
                    <CardTitle>{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-text-secondary">{study.summary}</p>
                    <Button variant="secondary" asChild>
                      <Link href={getClientSolutionPath(study)}>
                        Read case study
                        <ArrowRight />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-background" aria-labelledby="ai-life-sciences-faq">
          <div className="container-tight">
            <div className="mb-10 max-w-3xl">
              <h2 id="ai-life-sciences-faq" className="section-heading mb-3">FAQ</h2>
              <p className="text-text-secondary">
                Short answers to the questions potential customers ask when evaluating custom AI software solutions for life sciences.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full border-b border-b-gray-700">
              {faqItems.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-text-secondary">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
