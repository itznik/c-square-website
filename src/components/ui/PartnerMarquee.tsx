"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

type Partner = {
  name: string;
  logoUrl: string;
  website: string;
};

type PartnerMarqueeProps = {
  partners: Partner[];
  speed?: number; // Speed in seconds for a full loop
};

export default function PartnerMarquee({ partners, speed = 40 }: PartnerMarqueeProps) {
  // Duplicate the array to create a seamless loop
  const doubledPartners = [...partners, ...partners];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Fading gradient masks on the edges */}
      <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background-light to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background-light to-transparent" />
      
      <motion.div
        className="flex"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          ease: 'linear',
          duration: speed,
          repeat: Infinity,
        }}
      >
        {doubledPartners.map((partner, index) => (
          <Link
            key={index}
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-64 p-8 mx-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
          >
            {/* Replace with <Image /> tag when you have real logos */}
            <span className="text-2xl font-semibold text-center text-gray-400">{partner.name}</span>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
