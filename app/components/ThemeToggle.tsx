'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useTheme } from '@/app/components/ThemeProvider';

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
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (<Moon/>) : (<Sun/>)}
    </Button>
  );
} 