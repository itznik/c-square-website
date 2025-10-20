"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Linkedin } from 'lucide-react';

type TeamMemberCardProps = {
  imageUrl: string;
  name: string;
  role: string;
  linkedinUrl: string;
  variants?: Variants;
};

export default function TeamMemberCard({ imageUrl, name, role, linkedinUrl, variants }: TeamMemberCardProps) {
  return (
    <motion.div
      className="relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 group"
      variants={variants}
      whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
    >
      {/* Background Image with Hover Effect */}
      <div className="relative h-96">
        <Image
          src={imageUrl}
          alt={`Photo of ${name}`}
          fill
          style={{ objectFit: 'cover' }}
          className="grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>
          {name}
        </h3>
        <p className="text-brand-accent font-semibold mt-1">{role}</p>
      </div>

      {/* LinkedIn Link on Hover */}
      <Link
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 h-12 w-12 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label={`${name}'s LinkedIn Profile`}
      >
        <Linkedin className="text-white" />
      </Link>
    </motion.div>
  );
}
