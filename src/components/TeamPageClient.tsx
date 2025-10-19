"use client";

import { motion } from 'framer-motion';
import PageHeader from '@/components/ui/PageHeader';
import TeamMemberCard from '@/components/TeamMemberCard';
import { urlFor } from '@/lib/sanity.client';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Define the types for the data this component will receive
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

// CORRECTED: The transition property has been removed from the 'visible' state
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// This is the Client Component that uses framer-motion
export default function TeamPageClient({ teamMembers }: TeamPageClientProps) {
  return (
    <main>
      <PageHeader
        title="The Innovators Behind C²"
        subtitle="A team driven by passion, expertise, and a shared vision for a sustainable future."
      />

      <motion.section
        className="py-20 md:py-28"
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
                imageUrl={urlFor(member.image).width(400).height(500).url()}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
