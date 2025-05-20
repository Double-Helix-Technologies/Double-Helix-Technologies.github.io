import type { Metadata } from 'next';
import { Inter, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter'
});

const ibmPlexSans = IBM_Plex_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans'
});

export const metadata: Metadata = {
  title: 'Double Helix Technologies - Strategic Technology Partner',
  description: 'We help businesses scale by providing senior-level software engineering, IT process consulting, and digital transformation strategies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Script to avoid FOUC (Flash of Unstyled Content) when switching themes */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const themeStorage = localStorage.getItem('theme');
                const isDarkSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if ((themeStorage && themeStorage === 'dark') || (!themeStorage && isDarkSystem)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {
                console.error(e);
              }
            })();
          `
        }} />
      </head>
      <body className={`${inter.variable} ${ibmPlexSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
