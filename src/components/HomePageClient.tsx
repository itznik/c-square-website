"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import { Leaf, Users, ShieldCheck, IndianRupee, ArrowRight, BarChart3, Bot } from 'lucide-react';
import BentoCard from '@/components/ui/BentoCard';
import clsx from 'clsx';
import Link from 'next/link';

// Background component for a subtle animated gradient
const GradientBackground = () => (
  <motion.div
    initial={{ backgroundPosition: "0% 50%" }}
    animate={{ backgroundPosition: "100% 50%" }}
    transition={{
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
      ease: "easeInOut",
    }}
    className="absolute inset-0 z-0"
    style={{
      backgroundSize: "200% 200%",
      backgroundImage: `linear-gradient(135deg, var(--brand-accent-cream) 0%, #ffffff 50%, var(--brand-accent-cream) 100%)`,
    }}
  />
);

const bentoItems = [
  { title: "Our Mission", subtitle: "Building India's transparent carbon market.", icon: <Leaf className="text-brand-olive" />, href: "/about", className: "col-span-1 md:col-span-2", background: <GradientBackground /> },
  { title: "Our Services", subtitle: "End-to-end sustainability solutions.", icon: <BarChart3 className="text-brand-olive" />, href: "/services", className: "col-span-1", background: <div className="absolute inset-0 bg-white" /> },
  { title: "How It Works", subtitle: "A clear, seamless journey to impact.", icon: <Bot className="text-brand-olive" />, href: "/how-it-works", className: "col-span-1", background: <div className="absolute inset-0 bg-white" /> },
  { title: "Blockchain Trust", subtitle: "Unparalleled transparency and security.", icon: <ShieldCheck className="text-brand-olive" />, href: "/about", className: "col-span-1 md:col-span-2", background: <div className="absolute inset-0 bg-white" /> },
  { title: "Meet Our Team", subtitle: "The innovators behind C².", icon: <Users className="text-brand-olive" />, href: "/team", className: "col-span-1", background: <GradientBackground /> },
];

export default function HomePageClient() {
  // Initialize smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="bg-background-light">
      {/* Hero Text Section */}
      <section className="container mx-auto px-6 py-24 md:py-32 text-center">
        <motion.h1 
          className="text-5xl lg:text-7xl font-extrabold text-brand-deep-green leading-tight" style={{ fontFamily: "'Lora', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          The Future of Carbon Offsetting is Here.
        </motion.h1>
        <motion.p 
          className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        >
          We connect businesses with high-quality carbon credits from the nation&apos;s farmers and environmental NGOs, making sustainability a credible, seamless process.
        </motion.p>
      </section>

      {/* Bento Grid Section */}
      <motion.section
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bentoItems.map((item, index) => (
             <BentoCard key={index} {...item} className={clsx("h-64", item.className)} />
          ))}
        </div>
      </motion.section>
      
      {/* Final Call to Action */}
      <section className="container mx-auto px-6 py-24 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-bold text-brand-deep-green" style={{ fontFamily: "'Lora', serif" }}>
            Ready to Make an Impact?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Partner with C² and let us help you achieve your climate and sustainability goals.
          </p>
          <motion.div 
            className="inline-block mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact" className="inline-flex items-center bg-brand-olive text-text-light font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow">
              Get Started <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
                          }
