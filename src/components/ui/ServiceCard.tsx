"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      className="relative p-8 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
    >
      {/* Background decorative flare */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-brand-accent-cream rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="inline-block p-4 bg-white border-2 border-brand-accent-cream rounded-full mb-6 shadow-sm">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-brand-deep-green mb-3" style={{ fontFamily: "'Lora', serif" }}>
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
        <div className="inline-flex items-center font-bold text-brand-olive group-hover:text-brand-deep-green transition-colors">
          Learn More
          <ArrowRight size={20} className="ml-2 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
}
