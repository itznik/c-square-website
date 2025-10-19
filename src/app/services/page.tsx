"use client";

import { motion } from 'framer-motion';
import { BadgeCheck, BarChart3, Handshake, Search } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import ServiceCard from '@/components/ui/ServiceCard';

// Service Data with SEO-rich content
const services = [
  { icon: <BadgeCheck size={32} className="text-brand-olive" />, title: "Carbon Credit Verification & Facilitation", description: "We facilitate the rigorous verification of your projects against global standards, ensuring every credit's integrity and value." },
  { icon: <Search size={32} className="text-brand-olive" />, title: "Project Onboarding & Carbon Calculation", description: "Our platform simplifies the entire lifecycle, from project onboarding to providing support for accurate carbon calculations." },
  { icon: <BarChart3 size={32} className="text-brand-olive" />, title: "Secure, Transparent Trading Platform", description: "Leverage our blockchain-powered marketplace for unparalleled transparency, traceability, and security in every transaction." },
  { icon: <Handshake size={32} className="text-brand-olive" />, title: "ESG & Green Credit Advisory", description: "We help you integrate Carbon and Green Credits into your ESG strategy to achieve your net-zero goals and enhance your sustainability credentials." },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="End-to-End Sustainability Solutions"
        subtitle="From project verification to ESG strategy, we provide the tools and expertise to navigate India's carbon market with confidence and impact."
      />

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
