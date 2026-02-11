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
            <p className="text-text-secondary mb-8">Last updated: 11/02/2026</p>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-text-secondary mb-6">
                We at Double Helix Technologies value your privacy. This Privacy Policy explains how we collect, use, and protect your data when you use our website www.doublehelix.dev.
              </p>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">What we collect:</h2>
              <ul className="list-disc pl-6 text-text-secondary mb-6">
                <li>Information you provide via contact forms or email (e.g., name, email, company)</li>
                <li>Anonymous usage analytics (if you consent) - page views, navigation patterns, and general site usage statistics</li>
              </ul>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">Why we collect it:</h2>
              <ul className="list-disc pl-6 text-text-secondary mb-6">
                <li>To respond to your inquiries</li>
                <li>To understand how visitors use our website and improve the user experience (analytics data only, with your consent)</li>
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

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">Cookies and Analytics:</h2>
              <p className="text-text-secondary mb-6">
                We use cookies to manage your consent preferences and, with your permission, to collect anonymous usage analytics through Google Analytics 4 (GA4).
              </p>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">Cookie Categories:</h3>
              
              <h4 className="text-lg font-semibold text-text-primary mt-4 mb-2">Necessary Cookies</h4>
              <p className="text-text-secondary mb-4">
                These cookies are essential for the website to function properly. They store your cookie consent preferences and cannot be disabled.
              </p>

              <h4 className="text-lg font-semibold text-text-primary mt-4 mb-2">Analytics Cookies (Optional)</h4>
              <p className="text-text-secondary mb-4">
                If you consent, we use Google Analytics 4 to collect anonymous information about how visitors use our website. This helps us understand what's working and improve the site. We do not use advertising cookies, and analytics data is not used for advertising purposes or shared with third parties for advertising.
              </p>
              <p className="text-text-secondary mb-4">
                Analytics cookies collect information such as:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4">
                <li>Pages visited and time spent on pages</li>
                <li>Navigation patterns and user interactions</li>
                <li>General location data (country/city level, not precise location)</li>
                <li>Device and browser information</li>
              </ul>
              <p className="text-text-secondary mb-6">
                All analytics data is anonymized and aggregated. We cannot identify individual users from this data.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">Managing Your Cookie Preferences:</h3>
              <p className="text-text-secondary mb-4">
                You can control your cookie preferences at any time:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4">
                <li>When you first visit our site, you'll see a cookie banner where you can accept, reject, or customize your preferences</li>
                <li>You can change your preferences at any time by clicking "Cookie Settings" in the footer</li>
                <li>If you revoke analytics consent, we will stop collecting analytics data and remove existing analytics cookies</li>
              </ul>
              <p className="text-text-secondary mb-6">
                Your consent preferences are stored in a cookie for one year, after which you'll be asked again. You can update or revoke your consent at any time.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
}