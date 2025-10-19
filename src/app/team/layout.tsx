import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Team | C² The Carbon Credit Marketplace",
  description: "Meet the founders and team at C², the visionaries building India's transparent, farmer-centric carbon market. Discover the expertise driving our mission.",
  keywords: ['C² team', 'carbon market founders', 'sustainability leadership', 'Harjas Sethi', 'Ruchi Sharma', 'Krisha Devannavar'],
  alternates: {
    canonical: '/team',
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
