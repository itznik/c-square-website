"use client";

import { motion } from 'framer-motion';
import Link from 'next/link'; // We'll use next/image for optimal performance

type Partner = {
  name: string;
  logoUrl: string;
  website: string;
};

type PartnerMarqueeProps = {
  partners: Partner[];
  speed?: number; // Speed in seconds for a full loop
};

export default function PartnerMarquee({ partners, speed = 60 }: PartnerMarqueeProps) {
  const doubledPartners = [...partners, ...partners];

  return (
    <div className="relative w-full overflow-hidden mask-image-gradient">
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
          <div key={index} className="flex-shrink-0 w-64 p-4 mx-4">
            <Link
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 backdrop-blur-lg rounded-2xl p-8 h-40 flex items-center justify-center border border-white/10 group transition-all duration-300 hover:bg-white/10 hover:border-brand-accent"
            >
              {/* For now, we'll use a text placeholder. Replace with Image component when you have logos. */}
              <span className="text-xl font-semibold text-center text-brand-light/70 group-hover:text-white transition-colors duration-300">
                {partner.name}
              </span>
            </Link>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
