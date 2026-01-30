import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
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
        <Navigation/>
        <Hero/>
        <CaseStudiesSlider/>
        <Services/>
        <HowWeWork/>
        {/* <DiscoveryWorkshop/> */}
        <Testimonials/>
        <Contact/>
        <Footer/>
      </main>
    </ThemeProvider>
  );
}