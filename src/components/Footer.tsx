"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Rocket } from 'lucide-react'; // Added Rocket icon

export default function Footer() {
  const links = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/team', label: 'Our Team' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-brand-deep-green text-text-light overflow-hidden">
      {/* --- NEW INCUBATOR BANNER --- */}
      <motion.div
        className="bg-brand-accent-cream"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-6 py-6">
          <Link 
            href="https://riidl.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-center text-brand-deep-green group"
          >
            <Rocket size={20} className="mr-3 text-brand-olive group-hover:scale-110 transition-transform" />
            <span className="font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
              Proudly incubated at <span className="font-bold underline group-hover:text-brand-olive transition-colors">riidl</span>, a Startup Incubator.
            </span>
          </Link>
        </div>
      </motion.div>
      {/* --- END OF BANNER --- */}

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand & Mission */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Link href="/" className="text-4xl font-extrabold text-white">
              C²
            </Link>
            <p className="mt-4 text-brand-accent-cream/80 max-w-xs leading-relaxed">
              Accelerating the transition to a sustainable future through a transparent carbon credit marketplace.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <h3 className="font-bold text-lg text-white mb-4">Navigate</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-accent-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <h3 className="font-bold text-lg text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-brand-accent-cream/80">
              <li className="flex items-center">
                <Mail size={16} className="mr-3" /> info@csquare.co.in
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3" /> +91 9820199085
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-3" /> Mumbai, Maharashtra
              </li>
            </ul>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="md:col-span-3 bg-brand-olive p-8 rounded-xl text-center flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white">Ready to Make an Impact?</h3>
            <p className="mt-2 text-white/90">Join us in building a greener planet.</p>
            <Link href="/contact" className="mt-6 inline-block bg-white text-brand-deep-green font-bold py-3 px-6 rounded-full hover:opacity-90 transition-opacity">
              Enquire Now
            </Link>
          </motion.div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-brand-accent-light/20 text-center text-brand-accent-cream/60">
          <p>&copy; {new Date().getFullYear()} C² | The Carbon Credit Marketplace. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
