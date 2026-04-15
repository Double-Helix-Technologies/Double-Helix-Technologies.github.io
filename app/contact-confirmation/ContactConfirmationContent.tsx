'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, CheckCircle2, Mail, PhoneCall } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { siteConfig } from '@/app/lib/seo';
import { track } from '@/app/utils/analytics';

const contentByIntent = {
  consultation: {
    eyebrow: 'Consultation request received',
    heading: 'Thanks. Your consultation request is in.',
    intro:
      'We will review your request and get back to you to schedule a service consultation call. If there is a clear fit, we will suggest the right next step and the right people to involve.',
    nextSteps: [
      'We review your request and identify the most relevant service area.',
      'We reply by email or phone to confirm timing and fit.',
      'We book a consultation call and outline the next step.'
    ]
  },
  contact: {
    eyebrow: 'Contact request received',
    heading: 'Thanks. We have your request.',
    intro:
      'A member of our team will review your message and reach out shortly. We will either answer your question directly or suggest a short call if that is the fastest path forward.',
    nextSteps: [
      'We review the request and route it to the right person.',
      'We reply by email or phone with the next step.',
      'If useful, we suggest a short consultation call.'
    ]
  },
  generic: {
    eyebrow: 'Request received',
    heading: 'Thanks. Your request has been submitted.',
    intro:
      'We will review your submission and follow up shortly. If a consultation call makes sense, we will suggest a time and the right service area to discuss.',
    nextSteps: [
      'We review your request and context.',
      'We reply by email or phone with the next step.',
      'If relevant, we schedule a service consultation call.'
    ]
  }
} as const;

function normalizeIntent(rawIntent: string | null) {
  if (rawIntent === 'consultation' || rawIntent === 'contact') {
    return rawIntent;
  }

  return 'generic';
}

export default function ContactConfirmationContent() {
  const searchParams = useSearchParams();
  const intent = normalizeIntent(searchParams.get('intent'));
  const content = contentByIntent[intent];

  useEffect(() => {
    track('generate_lead', {
      lead_source: 'website_confirmation_page',
      lead_intent: intent
    });
  }, [intent]);

  return (
    <>
      <div className="flex flex-col gap-6 mb-10 max-w-3xl">
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-background px-4 py-2 text-sm text-text-secondary shadow-sm">
          <CheckCircle2 className="h-4 w-4 text-accent-blue" />
          {content.eyebrow}
        </div>

        <h1 className="section-heading max-w-4xl">
          {content.heading}
        </h1>

        <p className="max-w-2xl text-lg text-text-secondary">
          {content.intro}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.8fr)]">
        <Card className="bg-background">
          <CardHeader>
            <CardTitle>What happens next</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              {content.nextSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-background-alt font-medium">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-text-secondary">{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-background">
          <CardHeader>
            <CardTitle>Need to share more detail?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-text-secondary">
              If your request is time-sensitive or you want to add context, you can reach us directly.
            </p>

            <div className="space-y-3 text-sm text-text-secondary">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-text-primary">
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 hover:text-text-primary">
                <PhoneCall className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="gradient" asChild>
                <Link href="/#services">
                  Explore services
                  <ArrowRight />
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/">
                  Back to homepage
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
