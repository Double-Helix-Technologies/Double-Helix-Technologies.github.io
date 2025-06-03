import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';

export default function TermsOfUse() {
  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="container-tight">
            <h1 className="text-4xl md:text-5xl font-semibold text-text-primary mb-8">Terms of Use</h1>
            <p className="text-text-secondary mb-8">Last updated: 2025-05-20</p>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-text-secondary mb-6">
                By accessing and using www.doublehelix.dev, you agree to the following terms:
              </p>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">1. Ownership</h2>
              <p className="text-text-secondary mb-6">
                All content on this site is owned by Double Helix Technologies SIA unless otherwise stated.
              </p>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">2. Permitted Use</h2>
              <p className="text-text-secondary mb-6">
                You may browse and share content for informational purposes. Do not copy, modify, or redistribute without permission.
              </p>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">3. No Warranty</h2>
              <p className="text-text-secondary mb-6">
                This site is provided "as is". We do our best to keep it accurate and up to date, but we make no guarantees.
              </p>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">4. External Links</h2>
              <p className="text-text-secondary mb-6">
                We may link to third-party sites for convenience. We're not responsible for their content or privacy practices.
              </p>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">5. Limitation of Liability</h2>
              <p className="text-text-secondary mb-6">
                We are not liable for any losses or damages related to your use of this site.
              </p>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">6. Governing Law</h2>
              <p className="text-text-secondary mb-6">
                These terms are governed by the laws of the Republic of Latvia.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
} 