"use client";

import { motion, MotionProps } from 'framer-motion';

// Combine standard div props with motion props
type GlassPaneProps = React.HTMLAttributes<HTMLDivElement> & MotionProps & {
  children: React.ReactNode;
};

export default function GlassPane({ children, className, ...props }: GlassPaneProps) {
  return (
    // This is the glassmorphism effect built with pure Tailwind utility classes
    <motion.div
      className={`
        bg-white/5 backdrop-blur-xl 
        border border-white/10 
        rounded-2xl 
        shadow-2xl 
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}
