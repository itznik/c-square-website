"use client";

import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';

// Placeholder data for testimonials - this will be moved to the CMS
const testimonials = [
  { quote: "C²'s platform is a game-changer for transparency in the carbon market. Their commitment to empowering farmers is truly inspiring.", author: "Amrit Om Nayak", title: "CEO & Co-Founder, Indra" },
  { quote: "Navigating the new Green Credit rules was complex. C² provided the expert guidance we needed to integrate them into our ESG strategy effectively.", author: "Ruchi Sharma", title: "Co-founder, C²" },
  { quote: "The integrity and traceability provided by their blockchain-powered system are unparalleled. We can finally trust the impact of our investments.", author: "Harjas Sethi", title: "Founder, C²" },
  { quote: "As an early-stage startup, the mentorship and support from the team have been invaluable. They're not just a platform; they're a partner.", author: "Krisha Devannavar", title: "CBO, C²" },
];

export default function HomePageClient() {
  // State and effect for particles engine initialization
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
    
    // Smooth scrolling initialization
    const lenis = new Lenis();
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }, []);

  // Memoized particle configuration for performance
  const particleOptions: ISourceOptions = useMemo(() => ({
    background: { color: { value: '#0a0a0a' } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' } },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: '#2c2c2c' },
      links: { color: '#2c2c2c', distance: 150, enable: true, opacity: 0.2, width: 1 },
      move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: false, speed: 1, straight: false },
      number: { density: { enable: true }, value: 80 },
      opacity: { value: 0.2 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  return (
    <main>
      {/* Layer 1: Animated Particle Background */}
      <div className="fixed inset-0 z-0">
        <Particles id="tsparticles" options={particleOptions} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="relative z-10 p-8 max-w-4xl mx-auto">
          {/* Layer 2: Glassmorphism Container */}
          <motion.div 
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Layer 3: Animated Content */}
            <motion.h1
              className="text-5xl lg:text-7xl font-extrabold leading-tight text-brand-light"
              style={{ fontFamily: "'Lora', serif", textShadow: '0 0 20px rgba(0, 255, 153, 0.3)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            >
              <span className="text-brand-accent">C²:</span> The Future of Carbon Offsetting is Here.
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-brand-light/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            >
              We connect businesses with high-quality carbon credits from the nation&apos;s farmers and environmental NGOs, making sustainability a credible, seamless process.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center bg-brand-accent text-brand-dark font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:bg-brand-accent-dark transition-all duration-300 mt-10 group"
              >
                Achieve Your Climate Goals
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Lora', serif", textShadow: '0 0 20px rgba(0, 255, 153, 0.3)' }}>
              Trusted by Innovators
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <TestimonialCarousel testimonials={testimonials} />
          </motion.div>
        </div>
      </section>
    </main>
  );
          }
