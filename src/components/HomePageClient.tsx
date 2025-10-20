"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import { ArrowRight, Leaf, Users, ShieldCheck, IndianRupee } from 'lucide-react';
import Link from 'next/link';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import GlassPane from '@/components/ui/GlassPane'; // Import the new component

// --- DATA ---
const pillars = [
  { icon: <Users size={32} className="text-brand-accent" />, title: "Farmer-Centric", description: "Empowering India's agricultural communities is at the core of our mission." },
  { icon: <ShieldCheck size={32} className="text-brand-accent" />, title: "Blockchain Trust", description: "Delivering unparalleled transparency and security for every carbon credit." },
  { icon: <Leaf size={32} className="text-brand-accent" />, title: "Impact-Driven", description: "Focusing on high-quality projects with verifiable carbon removal and co-benefits." },
  { icon: <IndianRupee size={32} className="text-brand-accent" />, title: "India Focused", description: "Leveraging deep expertise in the Indian agricultural and carbon landscape." },
];

const testimonials = [
  { quote: "C²'s platform is a game-changer for transparency in the carbon market. Their commitment to empowering farmers is truly inspiring.", author: "Amrit Om Nayak", title: "CEO & Co-Founder, Indra" },
  { quote: "Navigating the new Green Credit rules was complex. C² provided the expert guidance we needed to integrate them into our ESG strategy effectively.", author: "Ruchi Sharma", title: "Co-founder, C²" },
  { quote: "The integrity and traceability provided by their blockchain-powered system are unparalleled. We can finally trust the impact of our investments.", author: "Harjas Sethi", title: "Founder, C²" },
];

// --- MAIN COMPONENT ---
export default function HomePageClient() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <div className="fixed inset-0 z-0 gradient-background"></div>
      <div className="relative z-10">
        {/* SECTION 1: HERO */}
        <section className="min-h-screen flex items-center justify-center text-center p-4">
          <div className="w-full max-w-4xl">
            <GlassPane 
              className="p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-brand-light" style={{ fontFamily: "var(--font-lora)", textShadow: '0 0 25px rgba(0, 255, 153, 0.4)' }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}>
                <span className="text-brand-accent">C²:</span> The Future of Carbon Offsetting is Here.
              </motion.h1>
              <motion.p className="mt-6 text-xl text-brand-light/80 max-w-2xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}>
                We connect businesses with high-quality carbon credits from the nation&apos;s farmers and environmental NGOs, making sustainability a credible, seamless process.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}>
                <Link href="/contact" className="inline-flex items-center bg-brand-accent text-brand-dark font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:bg-brand-accent-dark transition-all duration-300 mt-10 group">
                  Achieve Your Climate Goals <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </GlassPane>
          </div>
        </section>

        {/* SECTION 2: CORE PILLARS (CORRECTED) */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ staggerChildren: 0.15 }}
            >
              {pillars.map((pillar) => (
                // The 'as' prop is removed. GlassPane is already a motion.div
                // and can accept animation variants directly.
                <GlassPane 
                  key={pillar.title} 
                  className="p-8 text-center" 
                  variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }} 
                  transition={{ ease: 'easeOut', duration: 0.7 }}
                >
                  <div className="inline-block mb-4">{pillar.icon}</div>
                  <h3 className="text-xl font-bold text-brand-light mb-2" style={{ fontFamily: "var(--font-lora)" }}>{pillar.title}</h3>
                  <p className="text-brand-light/70">{pillar.description}</p>
                </GlassPane>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: TESTIMONIALS */}
        <section className="py-24 md:py-32 overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "var(--font-lora)", textShadow: '0 0 20px rgba(0, 255, 153, 0.3)' }}>
                Trusted by Innovators
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1 }}>
              <TestimonialCarousel testimonials={testimonials} />
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: FINAL CALL TO ACTION */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-lora)" }}>
                Ready to Make an Impact?
              </h2>
              <motion.div className="inline-block mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="inline-flex items-center bg-brand-accent text-brand-dark font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:bg-brand-accent-dark transition-shadow">
                  Get Started <ArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
                                }
