"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';

type LinkedInPostCardProps = {
  text: string;
  url: string;
};

export default function LinkedInPostCard({ text, url }: LinkedInPostCardProps) {
  return (
    <motion.div
      className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <p className="text-gray-600 mb-6 flex-grow">"{text.substring(0, 150)}..."</p>
      <Link href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-brand-olive group">
        <Linkedin size={20} className="mr-2 group-hover:text-[#0A66C2] transition-colors" />
        Read on LinkedIn
      </Link>
    </motion.div>
  );
}
