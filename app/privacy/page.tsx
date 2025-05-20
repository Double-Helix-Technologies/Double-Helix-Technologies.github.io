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
                <li>Anonymous data from cookies and analytics tools (e.g., IP address, browser, usage patterns)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">Why we collect it:</h2>
              <ul className="list-disc pl-6 text-text-secondary mb-6">
                <li>To respond to your inquiries</li>
                <li>To understand how visitors use our site and improve it</li>
                <li>To provide relevant content</li>
              </ul>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">Legal basis:</h2>
              <p className="text-text-secondary mb-6">
                We process your data under GDPR based on your consent or our legitimate interest in running the website.
              </p>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">Third-party services we may use:</h2>
              <ul className="list-disc pl-6 text-text-secondary mb-6">
                <li>Google Analytics (to analyze website usage)</li>
                <li>LinkedIn, YouTube, or other embedded content</li>
              </ul>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">Your rights:</h2>
              <p className="text-text-secondary mb-6">
                Under GDPR, you have the right to access, correct, or delete your data, or object to its processing. Contact us at{" "}
                <a href="mailto:hello@doublehelix.dev" className="text-primary hover:underline">
                  hello@doublehelix.dev
                </a>
              </p>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">Cookies:</h2>
              <p className="text-text-secondary mb-6">
                Our site may use cookies to enhance your experience. You can control cookies in your browser settings.
              </p>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">Contact:</h2>
              <p className="text-text-secondary mb-6">
                If you have any questions, reach us at:{" "}
                <a href="mailto:hello@doublehelix.dev" className="text-primary hover:underline">
                  hello@doublehelix.dev
                </a>
              </p>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-text-secondary">
                  This site is owned and operated by:<br />
                  Double Helix Technologies SIA<br />
                  Riga, Latvia
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
} 