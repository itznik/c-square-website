"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Rocket } from 'lucide-react';

export default function Footer() {
  const links = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/team', label: 'Our Team' },
    { href: '/partners', label: 'Partners' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-brand-charcoal text-brand-light/70 overflow-hidden relative z-10">
      {/* Incubator Banner */}
      <div className="bg-brand-stone/50">
        <div className="container mx-auto px-6 py-4">
          <Link 
            href="https://riidl.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-center text-brand-light group"
          >
            <Rocket size={16} className="mr-3 text-brand-accent group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-sm">
              Proudly incubated at <span className="font-bold underline group-hover:text-brand-accent transition-colors">riidl</span>
            </span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand & Mission */}
          <div className="md:col-span-4">
            <Link href="/" className="text-4xl font-bold text-brand-accent" style={{ fontFamily: "var(--font-lora)" }}>
              C²
            </Link>
            <p className="mt-4 max-w-xs leading-relaxed">
              Accelerating the transition to a sustainable future through a transparent carbon credit marketplace.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg text-white mb-4">Navigate</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-lg text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center"><Mail size={16} className="mr-3 text-brand-accent" /> info@csquare.co.in</li>
              <li className="flex items-center"><Phone size={16} className="mr-3 text-brand-accent" /> +91 9820199085</li>
              <li className="flex items-center"><MapPin size={16} className="mr-3 text-brand-accent" /> Mumbai, Maharashtra</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} C² | The Carbon Credit Marketplace. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
