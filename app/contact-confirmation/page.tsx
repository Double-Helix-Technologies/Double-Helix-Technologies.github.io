import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
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
import { buildMetadata } from '@/app/lib/seo';
import ContactConfirmationContent from './ContactConfirmationContent';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Request Confirmation',
  description:
    'Confirmation page for contact requests and service consultation call requests submitted to Double Helix Technologies.',
  path: '/contact-confirmation/',
  noIndex: true
});

export default function ContactConfirmationPage() {
  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Navigation />

        <section className="top-section bg-gradient-to-t from-background-alt to-background pb-10">
          <div className="container-tight">
            <Breadcrumb className="mb-8">
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
                    <Link href="/contact-confirmation/">Confirmation</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <ContactConfirmationContent />
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
