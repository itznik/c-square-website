"use client";

import { motion } from 'framer-motion';

type DifferentiatorCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function DifferentiatorCard({ icon, title, description }: DifferentiatorCardProps) {
  return (
    <div className="relative p-8 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative z-10">
        <div className="inline-block p-4 bg-brand-accent-cream rounded-full mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-brand-deep-green mb-3" style={{ fontFamily: "'Lora', serif" }}>
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
