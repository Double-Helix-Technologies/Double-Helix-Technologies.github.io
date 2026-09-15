import type { Metadata } from 'next';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ClientCases from './components/ClientCases';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';
import Leadership from './components/Leadership';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { buildMetadata, buildOfferCatalogSchema } from './lib/seo';

/**
 * The root page shares its segment with the root layout, so the layout's title template does not
 * apply here; the company name is therefore part of the title itself. Title and description restate
 * the hero; the keywords name the kinds of work in the published cases (`app/data/work.ts`).
 */
export const metadata: Metadata = buildMetadata({
  title: 'Custom Software and System Integrations for Life Sciences | Double Helix Technologies',
  description:
    'Custom software and system integrations for life sciences and healthcare operations in Europe and North America. LIMS and ERP integration, NGS data delivery, API onboarding.',
  path: '/',
  keywords: [
    'LIMS and ERP integration',
    'NGS data delivery automation',
    'customer API onboarding',
    'forensics system integration',
    'IT operations cost reduction',
    'SRE and observability improvement',
    'rapid MVP development',
    'custom software for regulated operations'
  ]
});

/**
 * Section order follows the questions a decision-maker asks in turn: what do you do for me
 * (Hero, with the customer and partner marquee at the foot of the first screen), prove it (ClientCases, one page-wide slide per case), which of my problems do you solve
 * (Services), who is accountable (Leadership, placed between the two text-heavy sections to break
 * them up), how do you deliver (HowWeWork), who else says so (Testimonials), and how do I talk to
 * you (Contact). The funding disclosure and the certification status live in the footer, on every
 * page: certification is in progress, so the team matters more. The risk assessment is reachable
 * from Services and its own page; the homepage does not steer the visitor to one engagement.
 * (Owner decisions of 14 September 2026.)
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
        <Footer />
      </main>
    </ThemeProvider>
  );
}
