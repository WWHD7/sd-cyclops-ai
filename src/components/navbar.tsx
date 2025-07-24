'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 relative">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-[280px] h-[60px]">
                {/* White logo for transparent navbar */}
                <Image
                  src="/images/Cyclops-white-logo.png"
                  alt="SD Cyclops AI"
                  fill
                  className={`object-contain object-left transition-opacity duration-300 ${
                    isScrolled ? 'opacity-0' : 'opacity-100'
                  }`}
                  priority
                />
                {/* Colored logo for white navbar */}
                <Image
                  src="/images/Cyclops-logo2.png"
                  alt="SD Cyclops AI"
                  fill
                  className={`object-contain object-left transition-opacity duration-300 absolute top-0 left-0 ${
                    isScrolled ? 'opacity-100' : 'opacity-0'
                  }`}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            {[
              { name: 'Industries', href: '/#industries' },
              { name: 'Applications', href: '/#applications' },
              { name: 'About', href: '/about' },
              { name: 'Blog', href: '/blog' },
              { name: 'Contact', href: '/#contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition-colors ${
                  isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-white/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#demo"
              className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isScrolled 
                ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-primary/20' 
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm hover:shadow-white/20 border border-white/30'
              }`}
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center rounded-md p-2.5 transition-colors ${
                isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className={`space-y-1 pb-4 pt-2 ${
              isScrolled ? 'bg-white' : 'bg-gray-900/95 backdrop-blur-lg'
            }`}>
              {[
                { name: 'Industries', href: '/#industries' },
                { name: 'Applications', href: '/#applications' },
                { name: 'About', href: '/about' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/#contact' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-lg px-3 py-2 text-base font-semibold ${
                    isScrolled 
                    ? 'text-gray-900 hover:bg-gray-50' 
                    : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/#demo"
                className={`block rounded-lg px-3 py-2 text-base font-semibold mt-4 text-center ${
                  isScrolled 
                  ? 'bg-primary text-white hover:bg-primary/90' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 