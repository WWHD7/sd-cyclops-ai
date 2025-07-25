'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
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
                  scrolled ? 'opacity-0' : 'opacity-100'
                }`}
                priority
              />
              {/* Colored Logo (visible when scrolled) */}
              <Image
                src="/images/Cyclops-logo2.png"
                alt="SD Cyclops AI Logo"
                fill
                className={`object-contain transition-opacity duration-300 ${
                  scrolled ? 'opacity-100' : 'opacity-0'
                }`}
                priority
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="#features" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              Features
            </Link>
            <Link 
              href="#industries" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              Industries
            </Link>
            <Link 
              href="#applications" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              Applications
            </Link>
            <Link 
              href="https://www.shakedeal.com/about-us" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? 'text-gray-600' : 'text-white'
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              About Us
            </Link>
            <Link 
              href="https://www.shakedeal.com/case-studies" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? 'text-gray-600' : 'text-white'
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </Link>
            <Link 
              href="#contact" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              Contact
            </Link>
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

          {/* Mobile menu button */}
          <button 
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? 'text-gray-600' : 'text-white'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 