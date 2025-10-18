"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/team', label: 'Our Team' },
  ];

  return (
    <header className="bg-background-light/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold text-brand-green">
          C²
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-text-dark hover:text-brand-green transition-colors font-semibold">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Link href="/contact" className="hidden md:inline-block bg-brand-green text-text-light font-bold py-2 px-6 rounded-full hover:opacity-90 transition-opacity">
          Enquire Now
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-green focus:outline-none">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu --- */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-background-light shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          {navLinks.map((link) => (
             <Link key={link.href} href={link.href} className="block text-text-dark hover:text-brand-green py-3 text-lg">{link.label}</Link>
          ))}
          <Link href="/contact" className="mt-4 block w-1/2 text-center bg-brand-green text-text-light font-semibold py-2 px-4 rounded-full hover:opacity-90">
            Enquire Now
          </Link>
        </div>
      </div>
    </header>
  );
}
