"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Linkedin, ArrowRight } from 'lucide-react';

type LinkedInPostCardProps = {
  postText: string;
  postUrl: string;
};

export default function LinkedInPostCard({ postText, postUrl }: LinkedInPostCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-full flex flex-col group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="p-8 flex-grow flex flex-col">
        <Linkedin size={28} className="text-brand-accent-light mb-4" />
        <p className="text-gray-600 leading-relaxed flex-grow">
          "{postText.substring(0, 180)}..."
        </p>
        <Link 
          href={postUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-6 inline-flex items-center font-bold text-brand-olive group-hover:text-brand-deep-green transition-colors"
        >
          Read Full Post
          <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
}
