"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type TeamMemberCardProps = {
  imageUrl: string;
  name: string;
  role: string;
  linkedinUrl: string;
  variants?: Variants; // Accept animation variants from the parent
};

export default function TeamMemberCard({ imageUrl, name, role, linkedinUrl, variants }: TeamMemberCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-transparent hover:border-brand-accent-light transition-colors duration-300 group"
      variants={variants}
      whileHover={{ y: -8, boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="relative h-80">
        <Image
          src={imageUrl}
          alt={`Photo of ${name}`}
          fill
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="p-6 text-left">
        <h3 className="text-2xl font-bold text-brand-deep-green" style={{ fontFamily: "'Lora', serif" }}>
          {name}
        </h3>
        <p className="text-brand-olive font-semibold mt-1">{role}</p>
        <Link
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-4 font-bold text-text-dark group-hover:text-brand-olive transition-colors"
        >
          View Profile <ArrowUpRight size={20} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
}
