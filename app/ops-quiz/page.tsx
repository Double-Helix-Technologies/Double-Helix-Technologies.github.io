import type { Metadata } from 'next';
import { ThemeProvider } from '@/app/components/ThemeProvider';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import OpsQuiz from '@/app/components/ops-quiz/OpsQuiz';
import { buildMetadata } from '../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Operational Flow Quiz',
  description: 'Interactive operational flow quiz by Double Helix Technologies.',
  path: '/ops-quiz/',
  noIndex: true
});

export default function OpsQuizPage() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        <Navigation />
        <OpsQuiz />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
