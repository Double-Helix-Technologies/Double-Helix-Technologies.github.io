import type { Metadata } from 'next';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiaaInfo from './components/LiaaInfo';
import { ThemeProvider } from './components/ThemeProvider';
import CaseStudiesSlider from './components/CaseStudiesSlider';
import { buildMetadata, buildOfferCatalogSchema } from './lib/seo';
import ComplianceNotice from './components/ComplianceNotice';

export const metadata: Metadata = buildMetadata({
  title: 'Custom Software, System Integrations and AI Adoption for Life Sciences',
  description:
    'Custom software, system integrations, and AI solutions for life sciences and healthcare teams working in regulated environments.',
  path: '/',
  keywords: [
    'custom software ai solutions in life sciences',
    'life sciences custom software development',
    'life sciences AI software solutions',
    'healthcare software development',
    'system integrations for healthcare'
  ]
});

export default function Home() {
  const offerCatalogSchema = buildOfferCatalogSchema();

  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
        />
        <Navigation/>
        <Hero/>
        <CaseStudiesSlider/>
        <Services/>
        <HowWeWork/>
        {/* <DiscoveryWorkshop/> */}
        <Testimonials/>
        <Contact/>
        <LiaaInfo/>
        <ComplianceNotice/>
        <Footer/>
      </main>
    </ThemeProvider>
  );
}
