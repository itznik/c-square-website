import { Metadata } from 'next';

// God-level SEO for the process page
export const metadata: Metadata = {
  title: "How It Works | The C² Carbon Credit Process",
  description: "Discover the simple, transparent process C² uses to connect you with verified carbon credit projects. From discovery and project curation to credit retirement and impact reporting, we guide you every step of the way.",
  keywords: ['carbon credit process', 'how carbon offsetting works', 'c-square methodology', 'sustainability journey', 'project verification'],
  alternates: {
    canonical: '/how-it-works',
  },
  openGraph: {
    title: "How It Works | The C² Carbon Credit Process",
    description: "Discover the simple, transparent process C² uses to connect you with verified carbon credit projects.",
    url: '/how-it-works',
    siteName: 'C² The Carbon Credit Marketplace',
    images: [{ url: 'https://www.csquare.in.net/og-image-process.jpg', width: 1200, height: 630 }],
  },
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
