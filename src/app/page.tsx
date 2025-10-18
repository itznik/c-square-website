"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { Leaf, ShieldCheck, Globe } from 'lucide-react';
import CtaButton from '@/components/ui/CtaButton';
import FeatureCard from '@/components/ui/FeatureCard';

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }, []);

  const features = [
    { icon: <ShieldCheck size={40} className="text-brand-olive" />, title: 'Verified Projects', description: 'Our credits come from rigorously verified projects meeting global standards.' },
    { icon: <Leaf size={40} className="text-brand-olive" />, title: 'Transparent Transactions', description: 'Full transparency from purchase to credit retirement, ensuring you know your impact.' },
    { icon: <Globe size={40} className="text-brand-olive" />, title: 'Global Impact', description: 'Your investment directly supports sustainable development and empowers communities.' },
  ];

  return (
    <main className="bg-background-light">
      {/* Hero Section */}
      <section className="min-h-screen container mx-auto px-6 flex items-center overflow-hidden">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-deep-green leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              The Future of Carbon Offsetting is Here.
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              C² provides a transparent and impactful marketplace connecting sustainable projects with businesses committed to a greener future.
            </p>
            <CtaButton href="/contact" className="mt-10">
              Explore the Marketplace
            </CtaButton>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="absolute w-full h-full bg-brand-accent-cream rounded-full blur-2xl opacity-50"></div>
              <p className="z-10 text-brand-olive">[High-Quality SVG Illustration Placeholder]</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 className="text-4xl md:text-5xl font-extrabold text-brand-deep-green text-center mb-16" style={{ fontFamily: "'Lora', serif" }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
            A Partnership for the Planet.
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} index={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
