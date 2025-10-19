"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface BentoCardProps {
  className?: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  background: React.ReactNode;
  href: string;
}

export default function BentoCard({ className, title, subtitle, icon, background, href }: BentoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 shadow-xl border border-gray-200 ${className}`}
    >
      {/* Background Element */}
      <div className="absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        {background}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-black/5 shadow-sm">
          {icon}
        </div>
        <div className="flex-grow"></div>
        <div>
          <h3 className="text-xl font-bold text-brand-deep-green" style={{ fontFamily: "'Lora', serif" }}>
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
        </div>
      </div>
      
      {/* Invisible Link Overlay */}
      <Link href={href} className="absolute inset-0 z-20" aria-label={title}></Link>
    </motion.div>
  );
}
