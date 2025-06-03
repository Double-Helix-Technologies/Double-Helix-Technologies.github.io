import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';

const Notice = () => {
  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="container-tight">
            <h1 className="text-4xl md:text-5xl font-semibold text-text-primary mb-8">Legal Notice</h1>
            <p className="text-text-secondary mb-8">Last updated: 2025-05-25</p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">Company Name and Address</h2>
              <p className="text-text-secondary mb-6">
                Double Helix Technologies SIA<br />
                Bauskas iela 203 - 35<br />
                Riga, Latvia
              </p>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">Contact Information</h2>
              <p className="text-text-secondary mb-6">
                <a href="mailto:hello@doublehelix.dev" className="text-primary hover:underline">
                  hello@doublehelix.dev
                </a><br />
                +371 29636428
              </p>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">VAT identification number</h2>
              <p className="text-text-secondary mb-6">
                LV50203351951
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default Notice;