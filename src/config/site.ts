export const siteConfig = {
  name: "SD Cyclops AI",
  shortName: "Cyclops AI",
  description: "Transform your quality control with SD Cyclops AI's advanced defect detection. Our AI-powered solution offers real-time inspection for assembly, cosmetic, dimensioning, and label verification.",
  company: "ShakeDeal",
  parentSite: "https://shakedeal.com",
  keywords: [
    "AI defect detection",
    "quality control automation",
    "machine vision inspection",
    "automated quality assurance",
    "manufacturing AI",
    "visual inspection system",
    "assembly inspection",
    "cosmetic inspection",
    "dimensioning AI",
    "label verification",
    "quality control software",
    "industrial automation",
    "computer vision QC",
    "smart manufacturing",
    "Industry 4.0",
    "ShakeDeal quality control",
    "industrial quality inspection",
    "manufacturing defect detection"
  ],
  mainNav: [
    { name: 'Industries', href: '/#industries' },
    { name: 'Applications', href: '/#applications' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ],
  emails: {
    notifications: {
      from: "notifications@sdcyclops.ai",
      replyTo: "support@sdcyclops.ai",
      templates: {
        contact: {
          subject: "New Contact Form Submission from {name}",
          userSubject: "Thank you for contacting SD Cyclops AI",
        }
      }
    }
  },
  social: {
    linkedin: "https://linkedin.com/company/sdcyclops",
  }
} as const;

// SEO Configuration
export const seoConfig = {
  title: {
    default: `${siteConfig.name} - Advanced AI-Powered Defect Detection`,
    template: `%s | ${siteConfig.name}`
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Advanced AI-Powered Defect Detection`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Advanced AI-Powered Defect Detection`,
    description: siteConfig.description,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
} as const; 