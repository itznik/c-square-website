import TeamMemberCard from '@/components/TeamMemberCard';

// --- Placeholder Data for Team Members ---
// This will be replaced with data from Sanity.io later.
const teamMembers = [
  {
    id: 1,
    name: 'Nikunj S.', // Example Name
    role: 'Co-Founder & CEO',
    imageUrl: 'https://via.placeholder.com/256/E8E8E8/4A4A4A?text=NS', // Placeholder image
    linkedinUrl: 'https://www.linkedin.com/',
  },
  {
    id: 2,
    name: 'Priya V.', // Example Name
    role: 'Co-Founder & CTO',
    imageUrl: 'https://via.placeholder.com/256/E8E8E8/4A4A4A?text=PV', // Placeholder image
    linkedinUrl: 'https://www.linkedin.com/',
  },
  {
    id: 3,
    name: 'Jagdish K.', // Example Name
    role: 'Co-Founder & COO',
    imageUrl: 'https://via.placeholder.com/256/E8E8E8/4A4A4A?text=JK', // Placeholder image
    linkedinUrl: 'https://www.linkedin.com/',
  },
];
// -----------------------------------------

export default function TeamPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Meet Our Founders
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate innovators dedicated to bringing your vision to life with integrity and expertise.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-gray-50 py-16 md:py-24">
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
      </section>
    </main>
  );
}
