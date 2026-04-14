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
import DiscoveryWorkshop from './components/DiscoveryWorkshop';
import CaseStudiesSlider from './components/CaseStudiesSlider';
import { buildMetadata, buildOfferCatalogSchema } from './lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Custom Software, Integrations & AI Adoption for Life Sciences',
  description:
    'IT services for life sciences and healthcare teams: custom software development, system integrations that remove data bottlenecks, and practical AI adoption solutions.',
  path: '/',
  keywords: [
    'life sciences custom software development',
    'healthcare software development',
    'system integrations for healthcare',
    'data flow automation',
    'AI adoption consulting'
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
        <Footer/>
      </main>
    </ThemeProvider>
  );
}
