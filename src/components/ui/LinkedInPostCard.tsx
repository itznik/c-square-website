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
      className="h-full bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg flex flex-col group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
    >
      <Linkedin size={28} className="text-brand-accent/50 mb-4" />
      <p className="text-brand-light/70 leading-relaxed flex-grow">
        &ldquo;{postText.substring(0, 180)}...&rdquo;
      </p>
      <Link 
        href={postUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-6 inline-flex items-center font-bold text-brand-accent group-hover:text-white transition-colors"
      >
        Read Full Post
        <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </motion.div>
  );
}
