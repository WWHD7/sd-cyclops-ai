import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function to merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Design System Constants
export const designSystem = {
  // Color Patterns
  colors: {
    primary: {
      base: 'bg-primary',
      hover: 'hover:bg-primary/90',
      light: 'bg-primary/10',
      text: 'text-primary',
      border: 'border-primary/10',
    },
    glass: {
      light: 'bg-white/5',
      medium: 'bg-white/10',
      border: 'border-white/10',
      hoverBorder: 'hover:border-white/30',
    },
    overlay: {
      dark: 'bg-black/15',
      gradient: 'bg-gradient-to-b from-blue-950/25 via-blue-950/20 to-background/90',
    },
  },

  // Common Layout Patterns
  layout: {
    section: 'relative py-24',
    container: 'mx-auto max-w-7xl px-6 lg:px-8',
    gridPattern: 'absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]',
  },

  // Component Styles
  components: {
    // Card Patterns
    card: {
      base: 'group relative rounded-lg border border-foreground/10 bg-white/5 p-6 transition duration-300',
      hover: 'group-hover:border-foreground/20',
      glow: {
        wrapper: 'group relative',
        effect: 'absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-lg blur opacity-5 group-hover:opacity-10 transition duration-500',
      },
    },

    // Button Patterns
    button: {
      primary: 'rounded-lg px-8 py-4 text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg',
      secondary: 'group relative rounded-lg px-8 py-4 text-sm font-semibold bg-white/10 text-white ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-white/20',
      underline: 'absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-white/0 via-white/70 to-white/0 transition-opacity opacity-0 group-hover:opacity-100',
    },

    // Badge/Tag Patterns
    badge: {
      base: 'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm',
      primary: 'bg-primary/5 text-primary border border-primary/10',
      glass: 'bg-white/10 backdrop-blur-sm text-white border border-white/10',
    },

    // Input Fields
    input: {
      base: 'mt-2 block w-full rounded-md border border-foreground/10 bg-white/5 px-4 py-2.5 text-foreground placeholder-muted-foreground/50',
      focus: 'focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary',
    },

    // Icon Container
    iconContainer: {
      base: 'flex h-12 w-12 items-center justify-center rounded-lg',
      primary: 'bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors',
    },
  },

  // Animation Patterns
  animations: {
    hover: {
      scale: 'hover:scale-105',
      glow: 'hover:shadow-lg hover:shadow-primary/20',
    },
    transition: {
      base: 'transition-all duration-300',
      color: 'transition-colors duration-300',
      opacity: 'transition-opacity duration-300',
    },
  },

  // Common Background Effects
  effects: {
    grid: {
      primary: 'bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]',
      secondary: 'bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:1rem_1rem]',
    },
    glow: {
      primary: 'absolute -inset-x-20 -inset-y-20 bg-primary/20 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500',
      accent: 'absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 rounded-lg blur opacity-5 group-hover:opacity-10 transition duration-500',
    },
  },

  // Typography Patterns
  typography: {
    heading: {
      h1: 'text-4xl font-bold tracking-tight sm:text-6xl',
      h2: 'text-3xl font-bold tracking-tight sm:text-4xl',
      h3: 'text-xl font-semibold',
    },
    body: {
      base: 'text-base leading-7',
      large: 'text-lg leading-8',
      muted: 'text-muted-foreground',
    },
  },
};

// Example usage patterns for common UI components
export const patterns = {
  // Hero Section Pattern
  heroSection: {
    wrapper: cn(
      designSystem.layout.section,
      'relative isolate'
    ),
    background: {
      wrapper: 'absolute inset-0 -z-10',
      image: 'object-cover object-center brightness-[0.85]',
      overlay: designSystem.colors.overlay.gradient,
    },
  },

  // Feature Card Pattern
  featureCard: {
    wrapper: cn(
      designSystem.components.card.glow.wrapper,
      designSystem.components.card.base,
      designSystem.components.card.hover
    ),
    icon: designSystem.components.iconContainer.primary,
  },

  // Section Header Pattern
  sectionHeader: {
    wrapper: 'mx-auto max-w-2xl text-center',
    badge: cn(
      designSystem.components.badge.base,
      designSystem.components.badge.primary,
      'mb-8'
    ),
    heading: designSystem.typography.heading.h2,
    description: cn(
      designSystem.typography.body.large,
      designSystem.typography.body.muted,
      'mt-6'
    ),
  },
}; 