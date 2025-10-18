"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

// Animation variants for the hero section
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[80vh] container mx-auto px-6 flex flex-col md:flex-row items-center justify-between py-12 overflow-hidden">
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariant} className="text-5xl md:text-7xl font-extrabold text-brand-green leading-tight">
            The Carbon Credit Marketplace
          </motion.h1>
          <motion.p variants={itemVariant} className="mt-6 text-2xl md:text-4xl text-text-dark font-semibold" style={{ fontFamily: "'Caveat', cursive" }}>
            Bye Buy Carbon!
          </motion.p>
          <motion.p variants={itemVariant} className="mt-4 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            C² is your trusted partner in the carbon market, connecting sustainable projects with businesses committed to a greener future.
          </motion.p>
          <motion.div variants={itemVariant}>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-brand-green text-text-light font-bold py-3 px-10 rounded-full text-lg hover:opacity-90 transition-transform transform hover:scale-105"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <div className="bg-accent/30 w-80 h-80 lg:w-96 lg:h-96 rounded-full flex items-center justify-center">
            <span className="text-brand-green">[Illustration Placeholder]</span>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <AnimatedSection className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-green">
              A Partnership for the Planet
            </h2>
            <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
              We provide a transparent, reliable, and impactful platform for carbon offsetting.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background-light p-8 rounded-lg text-center border border-gray-200">
              <h3 className="text-2xl font-bold text-text-dark mb-3">Verified Projects</h3>
              <p className="text-gray-600">
                Every carbon credit on our platform comes from projects that are rigorously verified by global standards.
              </p>
            </div>
            <div className="bg-background-light p-8 rounded-lg text-center border border-gray-200">
              <h3 className="text-2xl font-bold text-text-dark mb-3">Transparent Transactions</h3>
              <p className="text-gray-600">
                We ensure full transparency from purchase to credit retirement, so you know exactly where your contribution goes.
              </p>
            </div>
            <div className="bg-background-light p-8 rounded-lg text-center border border-gray-200 lg:col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-text-dark mb-3">Real Impact</h3>
              <p className="text-gray-600">
                Your investment directly supports sustainable development and empowers communities around the world.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
