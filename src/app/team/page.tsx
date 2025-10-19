import PageHeader from '@/components/ui/PageHeader';
import TeamMemberCard from '@/components/TeamMemberCard';
import { client, urlFor } from '@/lib/sanity.client';
import { motion } from 'framer-motion';
// ... (keep other imports)
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'; // <-- Import this type

// ... (rest of the file remains the same)
interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: SanityImageSource;
  linkedinUrl: string;
}

const getTeamMembers = async (): Promise<TeamMember[]> => {
  const query = `*[_type == "teamMember"]`;
  return await client.fetch(query);
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();

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

