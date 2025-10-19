import { Metadata } from 'next';

// SEO based on the specific content from your LinkedIn profile PDF
export const metadata: Metadata = {
  title: "About C² | Building India's Farmer-Centric Carbon Market",
  description: "Learn about C²'s mission to build a transparent, equitable, and impactful carbon market in India using blockchain technology to empower farmers and environmental NGOs.",
  keywords: ['about C²', 'farmer-centric carbon market', 'blockchain sustainability', 'India carbon credits', 'equitable climate solutions', 'environmental NGOs India'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About C² | Building India's Farmer-Centric Carbon Market",
    description: "Learn about C²'s mission to build a transparent and equitable carbon market in India.",
    url: '/about',
    siteName: 'C² The Carbon Credit Marketplace',
    images: [{ url: 'https://www.csquare.in.net/og-image-about.jpg', width: 1200, height: 630 }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
