"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { Leaf, Users, ShieldCheck, IndianRupee } from 'lucide-react';
import { Metadata } from 'next';
import CtaButton from '@/components/ui/CtaButton';
import DifferentiatorCard from '@/components/ui/DifferentiatorCard';

// SEO Metadata for the Home Page
export const metadata: Metadata = {
  title: 'C² | The Transparent Carbon Credit Marketplace for India',
  description: 'C² connects businesses with high-quality carbon credits from Indian farmers and environmental projects. Our blockchain-powered platform ensures transparency, trust, and real impact.',
  keywords: ['carbon credits India', 'blockchain carbon market', 'sustainability goals', 'farmer-centric', 'net zero India', 'ESG reporting'],
};

export default function HomePage() {
  // Initialize smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }, []);

  const differentiators = [
    [span_0](start_span)[span_1](start_span){ icon: <Users size={32} className="text-brand-olive" />, title: "Farmer-Centric", description: "Empowering India's agricultural communities is at the core of our mission, ensuring they receive fair value.[span_0](end_span)[span_1](end_span)" },
    [span_2](start_span)[span_3](start_span){ icon: <ShieldCheck size={32} className="text-brand-olive" />, title: "Blockchain Trust", description: "Delivering unparalleled transparency, traceability, and security for every carbon credit.[span_2](end_span)[span_3](end_span)" },
    [span_4](start_span)[span_5](start_span){ icon: <Leaf size={32} className="text-brand-olive" />, title: "Impact-Driven", description: "We focus on high-quality projects that deliver verifiable carbon removal and clear environmental and social co-benefits.[span_4](end_span)[span_5](end_span)" },
    [span_6](start_span){ icon: <IndianRupee size={32} className="text-brand-olive" />, title: "India Focused", description: "Leveraging deep expertise in the Indian agricultural and carbon landscape to catalyze the journey to Net Zero.[span_6](end_span)" },
  ];

  return (
    <main className="bg-background-light">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-deep-green leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              Building India's Transparent Carbon Market.
            </h1>
            <p className="mt-6 text-xl text-gray-700 max-w-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              [span_7](start_span)[span_8](start_span)We connect businesses with high-quality carbon credits from the nation's farmers and environmental NGOs, making sustainability a credible, seamless process.[span_7](end_span)[span_8](end_span)
            </p>
            <CtaButton href="/contact" className="mt-10">
              Achieve Your Climate Goals
            </CtaButton>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="absolute w-full h-full bg-brand-accent-cream rounded-full blur-3xl opacity-60"></div>
              <p className="z-10 text-brand-olive">[Animated SVG Illustration of Blockchain & Nature Intertwined]</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-deep-green" style={{ fontFamily: "'Lora', serif" }}>
              Why C²?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              [span_9](start_span)Navigating the carbon market can be complex.[span_9](end_span) [span_10](start_span)Our blockchain-powered platform simplifies the entire lifecycle to ensure trust and impact.[span_10](end_span)
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
          >
            {differentiators.map((item, index) => (
              <motion.div key={index} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}>
                <DifferentiatorCard {...item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
