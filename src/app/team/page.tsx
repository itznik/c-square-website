import TeamPageClient from '@/components/TeamPageClient'; // Import the new client component
import { client } from '@/lib/sanity.client';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: SanityImageSource;
  linkedinUrl: string;
}

// This function still runs on the server to fetch data
const getTeamMembers = async (): Promise<TeamMember[]> => {
  const query = `*[_type == "teamMember"]`;
  return await client.fetch(query);
};

// The page remains a Server Component
export default async function TeamPage() {
  // 1. Fetch data on the server
  const teamMembers = await getTeamMembers();

  // 2. Pass the fetched data as props to the Client Component
  return <TeamPageClient teamMembers={teamMembers} />;
}
