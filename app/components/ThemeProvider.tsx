'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark' | null

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: 'light' | 'dark') => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(null)

  useEffect(() => {
    // Initialize theme only on the client side
    const storedTheme = localStorage.getItem('theme') as Theme
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    
    setTheme(storedTheme || systemTheme)
  }, [])

  useEffect(() => {
    // Only apply theme after initialization
    if (theme === null) return

    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Store theme preference
    localStorage.setItem('theme', theme)
  }, [theme])

  // Provide a stable context value
  const value = {
    theme,
    setTheme: (newTheme: 'light' | 'dark') => setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext)
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  
  return context
} 