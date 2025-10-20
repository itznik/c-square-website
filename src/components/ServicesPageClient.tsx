"use client";

import { motion } from 'framer-motion';
import { BadgeCheck, BarChart3, Handshake, Search } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';

const services = [
  { icon: <BadgeCheck size={32} className="text-brand-accent" />, title: "Carbon Credit Verification & Facilitation", description: "We facilitate the rigorous verification of your projects against global standards, ensuring every credit's integrity and value." },
  { icon: <Search size={32} className="text-brand-accent" />, title: "Project Onboarding & Carbon Calculation", description: "Our platform simplifies the entire lifecycle, from project onboarding to providing support for accurate carbon calculations." },
  { icon: <BarChart3 size={32} className="text-brand-accent" />, title: "Secure, Transparent Trading Platform", description: "Leverage our blockchain-powered marketplace for unparalleled transparency, traceability, and security in every transaction." },
  { icon: <Handshake size={32} className="text-brand-accent" />, title: "ESG & Green Credit Advisory", description: "We help you integrate Carbon and Green Credits into your ESG strategy to achieve your net-zero goals and enhance your sustainability credentials." },
];

export default function ServicesPageClient() {
  return (
    <div className="relative z-10">
      {/* Page Header Glass Panel */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white" style={{ fontFamily: "'Lora', serif", textShadow: '0 0 20px rgba(0, 255, 153, 0.3)' }}>
              End-to-End Sustainability Solutions
            </h1>
            <p className="mt-4 text-lg text-brand-light/80 max-w-3xl mx-auto">
              From project verification to ESG strategy, we provide the tools and expertise to navigate India&apos;s carbon market with confidence and impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
