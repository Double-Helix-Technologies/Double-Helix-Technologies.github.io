import type { Metadata } from 'next';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';
import { buildMetadata, siteConfig } from '../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Legal Notice',
  description: 'Legal notice for Double Helix Technologies SIA.',
  path: '/notice/',
  noIndex: true
});

/*
 * Company facts below were confirmed against the Register of Enterprises of the Republic of
 * Latvia (Lursoft) and the LIAA company profile on 14 September 2026: legal form and name,
 * registration number, register, VAT number, registered office (confirmed by the owner the same day).
 */
const Notice = () => {
  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="container-tight">
            <h1 className="text-4xl md:text-5xl font-semibold text-text-primary mb-8">Legal Notice</h1>
            <p className="text-text-secondary mb-8">Last updated: 2026-09-14</p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">Company</h2>
              <p className="text-text-secondary mb-6">
                Double Helix Technologies SIA<br />
                Limited liability company (sabiedrība ar ierobežotu atbildību) registered in the Republic of Latvia
              </p>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">Registration</h2>
              <p className="text-text-secondary mb-6">
                Registration number: 50203351951<br />
                Register: Register of Enterprises of the Republic of Latvia (Latvijas Republikas Uzņēmumu reģistrs)
              </p>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">Registered office</h2>
              {/* Confirmed by the owner on 14 September 2026; matches siteConfig.address in app/lib/seo.ts. */}
              <p className="text-text-secondary mb-6">
                {siteConfig.address.streetAddress}<br />
                {siteConfig.address.addressLocality}, {siteConfig.address.postalCode}<br />
                Latvia
              </p>

              {/*
                OWNER: Add the persons authorised to represent the company (board members and their
                rights of representation, as recorded in the Register of Enterprises). Not rendered
                until confirmed.
              */}

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">Contact</h2>
              <p className="text-text-secondary mb-6">
                <a href="mailto:hello@doublehelix.dev" className="text-primary hover:underline">
                  hello@doublehelix.dev
                </a><br />
                +371 29636428
              </p>

              {/*
                OWNER: Add a data protection contact (named person or role and a mailbox) for
                enquiries under GDPR. The privacy policy currently routes rights requests to
                hello@doublehelix.dev; confirm whether that mailbox or a dedicated one should be named
                here. Not rendered until confirmed.
              */}

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
