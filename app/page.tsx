import type { Metadata } from 'next';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ClientCases from './components/ClientCases';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';
import ComplianceNotice from './components/ComplianceNotice';
import Leadership from './components/Leadership';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import LiaaInfo from './components/LiaaInfo';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { buildMetadata, buildOfferCatalogSchema } from './lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Custom Software and System Integration for Life Sciences Operations',
  description:
    'Custom software and system integration for life sciences and healthcare operations in Europe and North America: higher throughput, lower running costs, named client evidence.',
  path: '/',
  keywords: [
    'custom software ai solutions in life sciences',
    'life sciences custom software development',
    'life sciences AI software solutions',
    'healthcare software development',
    'system integrations for healthcare',
    'LIMS integration',
    'laboratory workflow automation'
  ]
});

/**
 * Section order follows the questions a decision-maker asks in turn: what do you do for me
 * (Hero), prove it (ClientCases, one page-wide slide per case), which of my problems do you solve
 * (Services), who is accountable (Leadership, placed between the two text-heavy sections to break
 * them up), how do you deliver (HowWeWork), who else says so (Testimonials), and how do I talk to
 * you (Contact). Disclosures follow, with the certification
 * status last: it is in progress, so the team matters more (owner decision, 14 September 2026). The risk assessment is reachable from Services and its own page;
 * the homepage does not steer the visitor to one engagement (owner decision, 14 September 2026).
 */
export default function Home() {
  const offerCatalogSchema = buildOfferCatalogSchema();

  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
        />
        <Navigation />
        <Hero />
        <ClientCases />
        <Services />
        <Leadership />
        <HowWeWork />
        <Testimonials />
        <Contact />
        <LiaaInfo />
        <ComplianceNotice />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
