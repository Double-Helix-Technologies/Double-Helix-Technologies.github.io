import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';

export default function PrivacyPolicy() {
  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="container-tight">
            <h1 className="text-4xl md:text-5xl font-semibold text-text-primary mb-8">Privacy Policy</h1>
            <p className="text-text-secondary mb-8">Last updated: 2025-05-20</p>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-text-secondary mb-6">
                We at Double Helix Technologies value your privacy. This Privacy Policy explains how we collect, use, and protect your data when you use our website www.doublehelix.dev.
              </p>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">What we collect:</h2>
              <ul className="list-disc pl-6 text-text-secondary mb-6">
                <li>Information you provide via contact forms or email (e.g., name, email, company)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">Why we collect it:</h2>
              <ul className="list-disc pl-6 text-text-secondary mb-6">
                <li>To respond to your inquiries</li>
              </ul>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">Legal basis:</h2>
              <p className="text-text-secondary mb-6">
                We process your data under GDPR based on your consent or our legitimate interest in running the website.
              </p>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">Your rights:</h2>
              <p className="text-text-secondary mb-6">
                Under GDPR, you have the right to access, correct, or delete your data, or object to its processing. Contact us at{" "}
                <a href="mailto:hello@doublehelix.dev" className="text-primary hover:underline">
                  hello@doublehelix.dev
                </a>
              </p>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">Cookies:</h2>
              <p className="text-text-secondary mb-6">
                Our site does not use cookies or track users in any way.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
}