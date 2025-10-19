import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Partners | C² The Carbon Credit Marketplace",
  description: "Discover the network of trusted partners and environmental NGOs collaborating with C² to build a transparent and impactful carbon market in India.",
  keywords: ['carbon market partners', 'sustainability partners', 'environmental NGOs India', 'c-square collaborations'],
  alternates: {
    canonical: '/partners',
  },
  openGraph: {
    title: "Our Partners | C² The Carbon Credit Marketplace",
    description: "Discover the network of trusted partners collaborating with C².",
    url: '/partners',
    siteName: 'C² The Carbon Credit Marketplace',
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
