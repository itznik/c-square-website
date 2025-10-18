"use client";

import { motion } from 'framer-motion';

type TextLayoutProps = {
  title: string;
  children: React.ReactNode;
  illustration: React.ReactNode;
  reverse?: boolean; // To alternate the layout
};

export default function TextLayout({ title, children, illustration, reverse = false }: TextLayoutProps) {
  return (
    <div className={`container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-row-dense' : ''}`}>
      {/* Illustration */}
      <motion.div
        className={`flex justify-center ${reverse ? 'md:col-start-2' : ''}`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {illustration}
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-bold text-brand-deep-green mb-4" style={{ fontFamily: "'Lora', serif" }}>
          {title}
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
