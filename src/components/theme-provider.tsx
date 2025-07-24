'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeConfig, applyTheme } from '@/lib/theme-config';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeConfig;
};

type ThemeContextType = {
  theme: ThemeConfig | null;
  setTheme: (theme: ThemeConfig) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeConfig | null>(defaultTheme || null);

  useEffect(() => {
    if (theme) {
      applyTheme(theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
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