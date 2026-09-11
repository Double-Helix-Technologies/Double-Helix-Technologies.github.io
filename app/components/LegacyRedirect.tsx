import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { ThemeProvider } from '@/app/components/ThemeProvider';
import { Button } from '@/app/components/ui/button';

type LegacyRedirectProps = {
  /** Site-relative destination, e.g. `/work/ngs-data-delivery-automation/`. */
  to: string;
  /** Human-readable name of the destination page. */
  title: string;
};

/**
 * Static-export friendly redirect page for URLs that moved.
 *
 * GitHub Pages serves plain files, so there is no server-side 301. This page does the next best
 * thing: an immediate client-side redirect, a meta refresh fallback, and a visible link. The page
 * metadata (set by the caller) marks it noindex with a canonical pointing at the destination.
 */
export default function LegacyRedirect({ to, title }: LegacyRedirectProps) {
  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <meta httpEquiv="refresh" content={`0;url=${to}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace(${JSON.stringify(to)});`
          }}
        />
        <Navigation />
        <section className="top-section">
          <div className="container-tight max-w-3xl space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-text-secondary">This page has moved</p>
            <h1 className="text-3xl md:text-4xl">{title}</h1>
            <p className="text-lg text-text-secondary">
              You are being redirected. If nothing happens, use the link below.
            </p>
            <Button variant="gradient" asChild>
              <Link href={to}>
                Continue to {title}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
