import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header'; // Import Header
import Footer from '@/components/Footer'; // Import Footer

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'C² - Your Trusted Partner',
  description: 'Building the future with innovative solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header /> {/* Add Header here */}
          <main className="flex-grow">
            {children} {/* This is where your page content will go */}
          </main>
          <Footer /> {/* Add Footer here */}
        </div>
      </body>
    </html>
  );
}
