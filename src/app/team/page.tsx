import { motion } from 'framer-motion';
import PageHeader from '@/components/ui/PageHeader';
import TeamMemberCard from '@/components/TeamMemberCard';
import { client, urlFor } from '@/lib/sanity.client';

// Define the type for our fetched data for perfect type safety
interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: any; // Sanity image asset
  linkedinUrl: string;
}

// This is a GROQ query to fetch all documents of type "teamMember"
const getTeamMembers = async (): Promise<TeamMember[]> => {
  const query = `*[_type == "teamMember"]`;
  const data = await client.fetch(query);
  return data;
};

// Animation variants for the container and items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

// This is now an async Server Component
export default async function TeamPage() {
  const teamMembers = await getTeamMembers();

  return (
    <main>
      <PageHeader
        title="The Innovators Behind C²"
        subtitle="A team driven by passion, expertise, and a shared vision for a sustainable future."
      />

      {/* This section will now render dynamically based on CMS content */}
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
                // Use the urlFor helper to get the correct image URL
                imageUrl={urlFor(member.image).width(400).height(400).url()}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
