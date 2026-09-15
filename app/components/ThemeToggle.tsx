'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useTheme } from '@/app/components/ThemeProvider';

/**
 * Light and dark switch. Both icons are in the markup and the `dark` class on <html> picks one, so
 * the server-rendered button already shows the right icon and hydration has nothing to correct.
 */
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={toggleTheme}
      aria-label="Switch between light and dark mode"
    >
      <Moon className="dark:hidden" aria-hidden="true" />
      <Sun className="hidden dark:block" aria-hidden="true" />
    </Button>
  );
}
