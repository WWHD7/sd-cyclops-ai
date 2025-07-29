'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: "#features", label: "Features" },
    { href: "#industries", label: "Industries" },
    { href: "#applications", label: "Applications" },
    { href: "https://www.shakedeal.com/about-us", label: "About Us", external: true },
    { href: "https://www.shakedeal.com/case-studies", label: "Blog", external: true },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || mobileMenuOpen ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative flex items-center">
            <div className="relative w-[180px] h-[50px]">
              {/* White Logo (visible when not scrolled) */}
              <Image
                src="/images/Cyclops-white-logo.png"
                alt="SD Cyclops AI Logo"
                fill
                className={`object-contain transition-opacity duration-300 ${
                  scrolled || mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
                priority
              />
              {/* Colored Logo (visible when scrolled) */}
              <Image
                src="/images/Cyclops-logo2.png"
                alt="SD Cyclops AI Logo"
                fill
                className={`object-contain transition-opacity duration-300 ${
                  scrolled || mobileMenuOpen ? 'opacity-100' : 'opacity-0'
                }`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? 'text-gray-600' : 'text-white'
                }`}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#demo"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                scrolled
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              Request Demo
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled || mobileMenuOpen ? 'text-gray-600' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              // Close icon
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="py-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#demo"
              className="block px-4 py-2 mt-4 text-center text-white bg-primary hover:bg-primary/90 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 