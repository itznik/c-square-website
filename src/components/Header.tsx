"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GlassPane from '@/components/ui/GlassPane'; // Ensure GlassPane is imported

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/team', label: 'Team' },
    { href: '/partners', label: 'Partners' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 p-4">
        <GlassPane className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          {/* CONTENT GOES INSIDE HERE */}
          <Link href="/" className="text-2xl font-bold text-brand-accent" style={{ fontFamily: "var(--font-lora)" }}>
            C²
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-semibold text-brand-light/80 hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="hidden md:inline-block bg-brand-accent text-brand-dark font-bold py-2 px-6 rounded-full hover:bg-brand-accent-dark transition-colors">
            Contact Us
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50 relative h-8 w-8 text-brand-light">
            <div className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out absolute top-3.5 ${isMenuOpen ? 'rotate-45' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out absolute top-5`} style={{ opacity: isMenuOpen ? 0 : 1 }}></div>
            <div className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out absolute top-3.5 ${isMenuOpen ? '-rotate-45' : ''}`}></div>
          </button>
        </GlassPane>
      </header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isMenuOpen ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden fixed inset-0 z-40 ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <GlassPane className="flex h-full w-full items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-3xl font-semibold text-brand-light">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="mt-8 bg-brand-accent text-brand-dark font-bold py-3 px-8 rounded-full text-lg">
              Contact Us
            </Link>
          </nav>
        </GlassPane>
      </motion.div>
    </>
  );
}
