import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter'
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit'
});

export const metadata: Metadata = {
  title: 'Double Helix Technologies - Strategic Technology Partner',
  description: 'We help businesses scale by providing senior-level software engineering, IT process consulting, and digital transformation strategies.'
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
    <head>
      <link rel="icon" href="/images/favicon.ico" sizes="any"/>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&display=swap"
        rel="stylesheet"/>
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
      }}/>
    </head>
    <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
    {children}
    </body>
    </html>
  );
}
