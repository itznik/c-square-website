import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';

// Import the Header and Footer components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Configure the fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

export const metadata: Metadata = {
  title: 'C² | The Transparent Carbon Credit Marketplace for India',
  description: 'C² connects businesses with high-quality carbon credits from Indian farmers and environmental projects.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body>
        {/* Add the Header here */}
        <Header />
        
        {/* Wrap the page content in a <main> tag for semantics */}
        <main>
          {children}
        </main>
        
        {/* Add the Footer here */}
        <Footer />
      </body>
    </html>
  );
}
