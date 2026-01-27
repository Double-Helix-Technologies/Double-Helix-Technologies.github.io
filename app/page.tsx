import Navigation from './components/Navigation';
import PageBanner from './components/PageBanner';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhoWeServe from './components/WhoWeServe';
import HowWeWork from './components/HowWeWork';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import DiscoveryWorkshop from './components/DiscoveryWorkshop';
import CaseStudiesSlider from './components/CaseStudiesSlider';

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Navigation />
        <PageBanner />
        <CaseStudiesSlider />
        <Services />
        <Hero />
        <WhoWeServe />
        <HowWeWork />
        <About />
        <Testimonials />
        <DiscoveryWorkshop />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}