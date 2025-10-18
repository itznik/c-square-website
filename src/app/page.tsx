"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { Leaf, ShieldCheck, Globe } from 'lucide-react';

export default function HomePage() {

  // Initialize smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const features = [
    {
      icon: <ShieldCheck size={40} className="text-brand-olive" />,
      title: 'Verified Projects',
      description: 'Every carbon credit on our platform comes from projects that are rigorously verified by global standards.',
    },
    {
      icon: <Leaf size={40} className="text-brand-olive" />,
      title: 'Transparent Transactions',
      description: 'We ensure full transparency from purchase to credit retirement, so you know exactly where your contribution goes.',
    },
    {
      icon: <Globe size={40} className="text-brand-olive" />,
      title: 'Global Impact',
      description: 'Your investment directly supports sustainable development and empowers communities around the world.',
    },
  ];

  return (
    <main className="bg-background-light">
      {/* Hero Section */}
      <section className="min-h-screen container mx-auto px-6 flex items-center overflow-hidden">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-deep-green leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              The Future of Carbon Offsetting is Here.
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              C² provides a transparent, reliable, and impactful marketplace connecting sustainable projects with businesses committed to a greener future.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="mt-10 inline-block bg-brand-olive text-text-light font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
                Explore the Marketplace
              </Link>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="absolute w-full h-full bg-brand-accent-cream rounded-full blur-2xl opacity-50"></div>
              <p className="z-10 text-brand-olive">[High-Quality SVG Illustration Placeholder]</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        className="py-24 bg-white"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-brand-deep-green text-center mb-16"
            style={{ fontFamily: "'Lora', serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            A Partnership for the Planet.
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-background-light p-8 rounded-xl text-center border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <div className="inline-block p-4 bg-brand-accent-cream rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
