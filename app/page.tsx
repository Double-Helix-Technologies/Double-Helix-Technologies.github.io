import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
} 