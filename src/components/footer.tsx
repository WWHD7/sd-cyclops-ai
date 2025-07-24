'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and description */}
          <div className="space-y-8">
            <div className="relative w-40 h-10">
              <Image
                src="/images/Cyclops-logo2.png"
                alt="SD Cyclops AI"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-6 text-foreground/70">
              Advanced AI-powered defect detection for modern manufacturing
            </p>
            <div className="flex space-x-6">
              <a href="https://linkedin.com" className="text-foreground/70 hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/#industries" className="text-sm leading-6 text-foreground/70 hover:text-foreground">
                      Industries
                    </Link>
                  </li>
                  <li>
                    <Link href="/#applications" className="text-sm leading-6 text-foreground/70 hover:text-foreground">
                      Applications
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/#contact" className="text-sm leading-6 text-foreground/70 hover:text-foreground">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a href="https://your-about-page-url.com" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-foreground/70 hover:text-foreground">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/blog" className="text-sm leading-6 text-foreground/70 hover:text-foreground">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-sm leading-6 text-foreground/70 hover:text-foreground">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/privacy" className="text-sm leading-6 text-foreground/70 hover:text-foreground">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-sm leading-6 text-foreground/70 hover:text-foreground">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-foreground/70">&copy; {new Date().getFullYear()} SD Cyclops AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 