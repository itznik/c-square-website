"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis'; // Updated import name
import { Leaf, Users, ShieldCheck, IndianRupee } from 'lucide-react';
import CtaButton from '@/components/ui/CtaButton';
import DifferentiatorCard from '@/components/ui/DifferentiatorCard';

// This is the clean, correct data structure
const differentiators = [
  { icon: <Users size={32} className="text-brand-olive" />, title: "Farmer-Centric", description: "Empowering India's agricultural communities is at the core of our mission, ensuring they receive fair value." },
  { icon: <ShieldCheck size={32} className="text-brand-olive" />, title: "Blockchain Trust", description: "Delivering unparalleled transparency, traceability, and security for every carbon credit." },
  { icon: <Leaf size={32} className="text-brand-olive" />, title: "Impact-Driven", description: "We focus on high-quality projects that deliver verifiable carbon removal and clear environmental and social co-benefits." },
  { icon: <IndianRupee size={32} className="text-brand-olive" />, title: "India Focused", description: "Leveraging deep expertise in the Indian agricultural and carbon landscape to catalyze the journey to Net Zero." },
];

export default function HomePage() {
  // Initialize smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }, []);

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
  We connect businesses with high-quality carbon credits from the nation&apos;s farmers and environmental NGOs, making sustainability a credible, seamless process.
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
  Navigating the carbon market can be complex. Our blockchain-powered platform simplifies the entire lifecycle to ensure trust and impact.
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
