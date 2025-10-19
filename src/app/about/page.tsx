import AboutPageClient from '@/components/AboutPageClient'; // Import the new client component
import { client } from '@/lib/sanity.client';

interface LinkedInPost {
  _id: string;
  postText: string;
  postUrl: string;
}

// This Server Component fetches data
const getLatestPosts = async (): Promise<LinkedInPost[]> => {
  const query = `*[_type == "linkedInPost"] | order(_createdAt desc)[0..2]`;
  const data = await client.fetch(query);
  return data;
};

// The page remains a Server Component
export default async function AboutPage() {
  // 1. Fetch data on the server
  const latestPosts = await getLatestPosts();

  // 2. Pass the data as props to the Client Component
  return <AboutPageClient latestPosts={latestPosts} />;
}
