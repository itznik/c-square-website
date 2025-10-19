"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function CtaButton({ href, children, className }: CtaButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className={`inline-block bg-brand-olive text-text-light font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-shadow duration-300 hover:shadow-xl ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
