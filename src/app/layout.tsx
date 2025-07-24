import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { exampleTheme } from "@/lib/theme-config";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "SD Cyclops AI - Advanced AI-Powered Defect Detection",
    template: "%s | SD Cyclops AI"
  },
  description: "Transform your quality control with SD Cyclops AI's advanced defect detection. Our AI-powered solution offers real-time inspection for assembly, cosmetic, dimensioning, and label verification.",
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
    "Industry 4.0"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "SD Cyclops AI",
    title: "SD Cyclops AI - Advanced AI-Powered Defect Detection",
    description: "Transform your quality control with SD Cyclops AI's advanced defect detection. Our AI-powered solution offers real-time inspection for assembly, cosmetic, dimensioning, and label verification.",
    images: [
      {
        url: "/images/og-image.jpg", // You'll need to create this
        width: 1200,
        height: 630,
        alt: "SD Cyclops AI Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SD Cyclops AI - Advanced AI-Powered Defect Detection",
    description: "Transform your quality control with SD Cyclops AI's advanced defect detection. Our AI-powered solution offers real-time inspection for assembly, cosmetic, dimensioning, and label verification.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add this when you have it
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SD Cyclops AI",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "description": "Advanced AI-powered defect detection system for manufacturing quality control",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Assembly Inspection",
    "Cosmetic Inspection",
    "Dimensioning",
    "Label Verification",
    "Real-time Analysis",
    "Automated Quality Control"
  ],
  "creator": {
    "@type": "Organization",
    "name": "SD Cyclops AI",
    "url": process.env.NEXT_PUBLIC_SITE_URL
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme={exampleTheme}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
