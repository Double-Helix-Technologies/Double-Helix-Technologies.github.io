'use client';

import { ThemeProvider } from '@/app/components/ThemeProvider';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import OpsQuiz from '@/app/components/ops-quiz/OpsQuiz';

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
