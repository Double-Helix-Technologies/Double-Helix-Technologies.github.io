'use client';

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * The theme the pre-paint script in `app/layout.tsx` has already applied to <html> (stored choice,
 * otherwise the system preference). On the server there is no document, so the answer is 'light';
 * nothing rendered on the server may depend on it. Theme-specific markup (the wordmark, the toggle
 * icon) is therefore switched by the `dark` class in CSS, see `BrandLogo` and `ThemeToggle`.
 */
function themeFromDocument(): Theme {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function ThemeProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [theme, setTheme] = useState<Theme>(themeFromDocument);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Same rule as the pre-paint script, re-applied after mount in case that script did not run.
    const storedTheme = localStorage.getItem('theme');
    const systemTheme = globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    setTheme(storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : systemTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [mounted, theme]);

  const value = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
