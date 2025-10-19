"use client";

import { motion } from 'framer-motion';
import PageHeader from '@/components/ui/PageHeader';
import TextLayout from '@/components/ui/TextLayout';
import LinkedInPostCard from '@/components/ui/LinkedInPostCard';

// Define the type for the props this component will receive
interface LinkedInPost {
  _id: string;
  postText: string;
  postUrl: string;
}

interface AboutPageClientProps {
  latestPosts: LinkedInPost[];
}

const IllustrationPlaceholder = () => (
  <div className="relative w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center">
    <div className="absolute w-full h-full bg-brand-accent-cream rounded-full blur-3xl opacity-60"></div>
    <p className="z-10 text-brand-olive">[High-Quality SVG Illustration]</p>
  </div>
);

// This is the Client Component that uses framer-motion
export default function AboutPageClient({ latestPosts }: AboutPageClientProps) {
  return (
    <main>
      <PageHeader
        title="A Purpose-Driven Mission"
        subtitle="We are building a transparent, equitable, and impactful carbon market to accelerate India's journey to Net Zero."
      />

      <section className="py-20 md:py-28">
        <TextLayout
          title="Our Story"
          illustration={<IllustrationPlaceholder />}
        >
          <p>
            C² was founded on a powerful idea: that collective action is key to tackling climate change. We saw a need for a platform that not only facilitates carbon credit transactions but also builds trust and transparency, ensuring India&apos;s agricultural communities receive fair value for their crucial environmental contributions.
          </p>
        </TextLayout>
      </section>
      
      <section className="py-20 md:py-28 bg-white">
        <TextLayout
          title="Our Vision"
          illustration={<IllustrationPlaceholder />}
          reverse={true}
        >
          <p>
            To be a leading catalyst in India&apos;s journey to Net Zero. We aim to make sustainable practices economically rewarding for those on the ground and environmental responsibility a seamless, credible process for businesses, unlocking vital investment in climate solutions.
          </p>
        </TextLayout>
      </section>

      <section className="py-20 md:py-32 bg-background-light">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-deep-green" style={{ fontFamily: "'Lora', serif" }}>
              Latest Insights & Updates
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Follow our journey and discover the latest developments in India&apos;s carbon market.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <LinkedInPostCard key={post._id} postText={post.postText} postUrl={post.postUrl} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
