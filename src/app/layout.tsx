import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css'; // This line imports all your styling.
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Configure the fonts to be used with Tailwind CSS
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

export const metadata: Metadata = {
  title: 'C² | The Transparent Carbon Credit Marketplace for India',
  description: 'C² connects businesses with high-quality carbon credits from Indian farmers and environmental projects.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Apply the font variables to the html tag
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body>
        {/* We will add the Header and Footer back after confirming the main content styles are fixed. */}
        {children}
      </body>
    </html>
  );
}
