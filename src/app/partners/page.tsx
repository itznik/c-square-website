"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import PageHeader from '@/components/ui/PageHeader';

// Placeholder for partner data - this will eventually come from the CMS
const partners = [
  { name: 'EcoVerify Standard', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'Green Future Fund', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'Sustain Ledger', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'Agroforestry Alliance', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'Climate Action Collective', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'India Green Network', logoUrl: '/logo-placeholder.svg', website: '#' },
];

export default function PartnersPage() {
  return (
    <main>
      <PageHeader
        title="Our Collaborative Ecosystem"
        subtitle="We partner with leading organizations, environmental NGOs, and verification bodies to ensure the integrity and impact of our marketplace."
      />

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
              >
                <Link href={partner.website} target="_blank" rel="noopener noreferrer" className="block bg-white p-8 rounded-xl shadow-md border border-gray-200 aspect-square flex items-center justify-center grayscale hover:grayscale-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* In a real project, you would use an <Image> tag with the partner's logo SVG */}
                  <span className="text-xl font-bold text-center text-gray-500">{partner.name}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
