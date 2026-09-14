import type { Metadata } from 'next';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ClientProof from './components/ClientProof';
import Services from './components/Services';
import StartingEngagement from './components/StartingEngagement';
import HowWeWork from './components/HowWeWork';
import Leadership from './components/Leadership';
import Safeguards from './components/Safeguards';
import CaseStudiesGrid from './components/CaseStudiesGrid';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import LiaaInfo from './components/LiaaInfo';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { buildMetadata, buildOfferCatalogSchema } from './lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Custom Software and System Integration for Life Sciences Operations',
  description:
    'Custom software and system integration for regulated life sciences and healthcare operations: connected systems, less manual administration, named client evidence and a defined first engagement.',
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
 * (Hero), prove it (ClientProof), which of my problems do you solve (Services), how do I start
 * with limited risk (StartingEngagement), how do you deliver and who is accountable (HowWeWork,
 * Leadership), what about our regulated context (Safeguards, with the ISO statement), who else
 * says so (CaseStudiesGrid, Testimonials), and how do I talk to you (Contact). Disclosures follow.
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
        <ClientProof />
        <Services />
        <StartingEngagement />
        <HowWeWork />
        <Leadership />
        <Safeguards />
        <CaseStudiesGrid />
        <Testimonials />
        <Contact />
        <LiaaInfo />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
