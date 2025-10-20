import type { Metadata } from 'next';
// Correctly import the necessary fonts
import { Inter, Lora } from 'next/font/google';
import './globals.css'; // This line imports all your styling
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
        {/* The Header and Footer are removed to simplify and ensure the main content renders */}
        {children}
      </body>
    </html>
  );
}
