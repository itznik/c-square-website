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
      className="relative p-8 bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 group h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
    >
      {/* Glowing border effect on hover */}
      <div className="absolute inset-0 border-2 border-brand-accent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="inline-block p-4 bg-white/10 rounded-full mb-6 self-start">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>
          {title}
        </h3>
        <p className="text-brand-light/70 leading-relaxed flex-grow">
          {description}
        </p>
        <div className="mt-6 inline-flex items-center font-bold text-brand-accent group-hover:text-white transition-colors">
          Learn More
          <ArrowRight size={20} className="ml-2 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
}
