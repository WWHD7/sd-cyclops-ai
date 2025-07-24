export type ThemeConfig = {
  name: string;
  colors: {
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    accent: string;
    accentForeground: string;
    muted: string;
    mutedForeground: string;
    destructive: string;
    destructiveForeground: string;
    border: string;
    input: string;
    ring: string;
    chart1: string;
    chart2: string;
    chart3: string;
    chart4: string;
    chart5: string;
    sidebar: string;
    sidebarForeground: string;
  };
  borderRadius: string;
};

export function applyTheme(theme: ThemeConfig) {
  const root = document.documentElement;
  
  // Convert hex colors to HSL
  const hexToHSL = (hex: string) => {
    // Remove the hash if it exists
    hex = hex.replace('#', '');
    
    // Convert hex to RGB
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
    
    // Find greatest and smallest channel values
    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;
    
    let h = 0;
    let s = 0;
    let l = 0;
    
    // Calculate hue
    if (delta === 0) h = 0;
    else if (cmax === r) h = ((g - b) / delta) % 6;
    else if (cmax === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
    
    h = Math.round(h * 60);
    if (h < 0) h += 360;
    
    // Calculate lightness
    l = (cmax + cmin) / 2;
    
    // Calculate saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
    // Convert to percentages
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    
    return `${h} ${s}% ${l}%`;
  };

  // Apply colors
  Object.entries(theme.colors).forEach(([key, value]) => {
    const cssVar = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
    root.style.setProperty(cssVar, hexToHSL(value));
  });

  // Apply border radius
  root.style.setProperty('--radius', theme.borderRadius);
}

// Example theme from tweakcn
export const exampleTheme: ThemeConfig = {
  name: "Modern Industrial",
  colors: {
    background: "#ffffff",
    foreground: "#0f172a",
    card: "#ffffff",
    cardForeground: "#0f172a",
    popover: "#ffffff",
    popoverForeground: "#0f172a",
    primary: "#3b82f6",
    primaryForeground: "#ffffff",
    secondary: "#f1f5f9",
    secondaryForeground: "#0f172a",
    accent: "#f1f5f9",
    accentForeground: "#0f172a",
    muted: "#f1f5f9",
    mutedForeground: "#64748b",
    destructive: "#ef4444",
    destructiveForeground: "#ffffff",
    border: "#e2e8f0",
    input: "#e2e8f0",
    ring: "#3b82f6",
    chart1: "#3b82f6",
    chart2: "#8b5cf6",
    chart3: "#06b6d4",
    chart4: "#f59e0b",
    chart5: "#ec4899",
    sidebar: "#ffffff",
    sidebarForeground: "#0f172a",
  },
  borderRadius: "0.5rem",
};

// Usage example:
// import { applyTheme, ThemeConfig } from '@/lib/theme-config';
//
// // When you want to apply a theme from tweakcn:
// const tweakcnTheme = {
//   name: "Your Theme Name",
//   colors: {
//     // Paste the color values from tweakcn here
//   },
//   borderRadius: "0.5rem" // Or whatever value from tweakcn
// };
//
// applyTheme(tweakcnTheme); 