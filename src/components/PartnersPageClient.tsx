"use client";

import { motion } from 'framer-motion';
import PartnerMarquee from '@/components/ui/PartnerMarquee';

// Placeholder data for partners - this will eventually come from the CMS
const partners = [
  { name: 'EcoVerify Standard', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'Green Future Fund', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'Sustain Ledger', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'Agroforestry Alliance', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'Climate Action Collective', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'India Green Network', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'TerraCarbon Initiative', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'BioSphere Ventures', logoUrl: '/logo-placeholder.svg', website: '#' },
];

export default function PartnersPageClient() {
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
              Our Collaborative Ecosystem
            </h1>
            <p className="mt-4 text-lg text-brand-light/80 max-w-3xl mx-auto">
              We partner with leading organizations, environmental NGOs, and verification bodies to ensure the integrity and impact of our marketplace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Marquee Section */}
      <section className="pb-24 md:pb-32">
        <PartnerMarquee partners={partners} />
      </section>
    </div>
  );
}
