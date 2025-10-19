import AnimatedSection from '@/components/AnimatedSection';
import TeamMemberCard from '@/components/TeamMemberCard';

// The placeholder data remains the same
const teamMembers = [
  {
    id: 1,
    name: 'Nikunj S.',
    role: 'Co-Founder & CEO',
    imageUrl: 'https://via.placeholder.com/256/E8E8E8/4A4A4A?text=NS',
    linkedinUrl: 'https://www.linkedin.com/',
  },
  {
    id: 2,
    name: 'Priya V.',
    role: 'Co-Founder & CTO',
    imageUrl: 'https://via.placeholder.com/256/E8E8E8/4A4A4A?text=PV',
    linkedinUrl: 'https://www.linkedin.com/',
  },
  {
    id: 3,
    name: 'Jagdish K.',
    role: 'Co-Founder & COO',
    imageUrl: 'https://via.placeholder.com/256/E8E8E8/4A4A4A?text=JK',
    linkedinUrl: 'https://www.linkedin.com/',
  },
];

export default function TeamPage() {
  return (
    <main>
      {/* Page Header */}
      <AnimatedSection className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-green">
            The Innovators Behind C²
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A team driven by passion, expertise, and a shared vision for a sustainable future.
          </p>
        </div>
      </AnimatedSection>

      {/* Team Grid Section */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
