import HomePageClient from '@/components/HomePageClient';
import { Metadata } from 'next';

// This is the Server Component, which is allowed to export metadata
export const metadata: Metadata = {
  title: 'C² | The Transparent Carbon Credit Marketplace for India',
  description: 'C² connects businesses with high-quality carbon credits from Indian farmers and environmental projects. Our blockchain-powered platform ensures transparency, trust, and real impact.',
  keywords: ['carbon credits India', 'blockchain carbon market', 'sustainability goals', 'farmer-centric', 'net zero India', 'ESG reporting'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'C² | The Transparent Carbon Credit Marketplace for India',
    description: 'C² connects businesses with high-quality carbon credits from Indian farmers and environmental projects.',
    url: '/',
    siteName: 'C² The Carbon Credit Marketplace',
    images: [{ url: 'https://www.csquare.in.net/og-image-home.jpg', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'C² | The Transparent Carbon Credit Marketplace for India',
    description: 'C² connects businesses with high-quality carbon credits from Indian farmers and environmental projects.',
    images: ['https://www.csquare.in.net/og-image-home.jpg'],
  },
};

// This simple component just imports and renders the client-side UI
export default function HomePage() {
  return <HomePageClient />;
}
