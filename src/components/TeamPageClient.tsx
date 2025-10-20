"use client";

import { motion } from 'framer-motion';
import TeamMemberCard from '@/components/TeamMemberCard';
import { urlFor } from '@/lib/sanity.client';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: SanityImageSource;
  linkedinUrl: string;
}

interface TeamPageClientProps {
  teamMembers: TeamMember[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function TeamPageClient({ teamMembers }: TeamPageClientProps) {
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
              The Innovators Behind C²
            </h1>
            <p className="mt-4 text-lg text-brand-light/80 max-w-3xl mx-auto">
              A team driven by passion, expertise, and a shared vision for a sustainable future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid Section */}
      <motion.section
        className="pb-24 md:pb-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member._id}
                variants={itemVariants}
                name={member.name}
                role={member.role}
                imageUrl={urlFor(member.image).width(400).height(560).url()}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
