'use client';

import { ChevronRight } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import Navigation from '@/app/components/Navigation';
import { ThemeProvider } from '../components/ThemeProvider';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/app/components/ui/breadcrumb';
import Link from 'next/link';
import Footer from '@/app/components/Footer';

export default function AboutPage() {

  const breadcrumb = <Breadcrumb className="mb-4">
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href="/">Home</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <ChevronRight/>
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href="/about">About us</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>;

  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Navigation/>
        <section id="about" className="top-section bg-gradient-to-t from-background-alt to-background pb-5">
          <div className="container-tight">
            <div className="flex flex-col gap-6 mb-6 max-w-3xl">
              {breadcrumb}
              <h1 className="text-5xl text-text-primary text-left mb-5 max-w-3xl">
                We create a healthier, safer & better organized world by solving IT challenges for companies making a
                positive impact
              </h1>
              <p>
                Double Helix is a senior, lean engineering team based in Latvia.
              </p>
              <p><b>Our mission</b> is to help businesses transform complexity into clarity through
                tailored IT solutions—guided by technical excellence, empathy, and strategic thinking.
              </p>
              <p>
                We believe that by solving IT challenges for companies making a positive impact <b>we create</b> a
                healthier, safer & better organized
                world.
              </p>
              <p>
                Every transformation starts with discovery and a comprehensive map of the
                bottlenecks and risks. We strive to deliver right‑sized software, integrations, and automation. We
                prioritize
                reuse over reinvention, reliability over novelty, and audit‑readiness by default. With partners in BI,
                compliance, and security, we cover the full path from problem to production—and we stay to operate it.
              </p>

              <h2 className="text-4xl md:text-5xl">Our Core Values</h2>
              <p>How we show up with clients and each other.</p>
              <div className="mt-3 flex flex-wrap gap-2 max-w-md">
                {['Sustainability', 'Adaptability', 'Competence', 'Empathy', 'Collaboration', 'Autonomy', 'Reliability'].map((v) => (
                  <Badge key={v} className="rounded-xl">{v}</Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </main>
    </ThemeProvider>
  );
} 