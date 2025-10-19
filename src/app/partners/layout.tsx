import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Partners | C² The Carbon Credit Marketplace",
  description: "Discover the network of trusted partners, environmental NGOs, and verification bodies collaborating with C² to build a transparent and impactful carbon market in India.",
  keywords: ['carbon market partners', 'sustainability partners', 'environmental NGOs India', 'c-square collaborations', 'verification bodies'],
  alternates: {
    canonical: '/partners',
  },
  openGraph: {
    title: "Our Partners | C² The Carbon Credit Marketplace",
    description: "Discover the network of trusted partners collaborating with C² to build a transparent and impactful carbon market in India.",
    url: '/partners',
    siteName: 'C² The Carbon Credit Marketplace',
    images: [{ url: 'https://www.csquare.in.net/og-image-partners.jpg', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Partners | C² The Carbon Credit Marketplace",
    description: "Discover the network of trusted partners collaborating with C².",
    images: ['https://www.csquare.in.net/og-image-partners.jpg'],
  },
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
