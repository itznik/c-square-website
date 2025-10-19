import { Metadata } from 'next';

// This is the new, "god-level" way to do SEO in Next.js
export const metadata: Metadata = {
  title: "Services for Carbon Credits & ESG Strategy in India",
  description: "Explore C²'s services, including carbon credit verification, blockchain trading, and ESG advisory. We empower businesses and farmers in India's journey to Net Zero.",
  keywords: ['carbon credit services', 'ESG strategy India', 'blockchain carbon market', 'green credit advisory', 'sustainability consulting'],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "Services for Carbon Credits & ESG Strategy in India | C²",
    description: "Explore C²'s services, including carbon credit verification, blockchain trading, and ESG advisory.",
    url: '/services',
    siteName: 'C² The Carbon Credit Marketplace',
    images: [
      {
        url: 'https://www.csquare.in.net/og-image-services.jpg', // A specific image for this page
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Services for Carbon Credits & ESG Strategy in India | C²",
    description: "Explore C²'s services, including carbon credit verification, blockchain trading, and ESG advisory.",
    images: ['https://www.csquare.in.net/og-image-services.jpg'],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
