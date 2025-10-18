"use client"; // <-- Required for animations

import Link from 'next/link';
import { motion } from 'framer-motion'; // <-- Import motion

// Animation variants for the container to orchestrate children animations
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
    },
  },
};

// Animation variants for individual text/button elements
const itemVariant = {
  hidden: { opacity: 0, y: 20 }, // Start invisible and slightly down
  visible: { opacity: 1, y: 0 },   // Animate to fully visible and original position
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[80vh] container mx-auto px-6 flex flex-col md:flex-row items-center justify-between py-12 overflow-hidden">
        
        {/* Left Side: Text Content (now with animations) */}
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

        {/* Right Side: Illustration */}
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
      
    </main>
  );
}
