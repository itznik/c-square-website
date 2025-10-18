"use client"; // <-- Add this at the very top

import { useState } from 'react'; // <-- Import useState
import Link from 'next/link';

export default function Header() {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800 lg:text-3xl">
          C²
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link>
          <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</Link>
          <Link href="/team" className="text-gray-600 hover:text-blue-600 transition-colors">Our Team</Link>
        </div>
        
        {/* Contact Button */}
        <Link href="/contact" className="hidden md:inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Enquire Now
        </Link>

        {/* Mobile Menu Button (now with onClick) */}
        <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} // <-- Add onClick to toggle state
              className="text-gray-800 focus:outline-none"
            >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
      </nav>

      {/* --- Mobile Menu (New Code Block) --- */}
      {/* This menu will show/hide based on the isMenuOpen state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          <Link href="/" className="block text-gray-600 hover:text-blue-600 py-2">Home</Link>
          <Link href="/about" className="block text-gray-600 hover:text-blue-600 py-2">About Us</Link>
          <Link href="/services" className="block text-gray-600 hover:text-blue-600 py-2">Services</Link>
          <Link href="/how-it-works" className="block text-gray-600 hover:text-blue-600 py-2">How It Works</Link>
          <Link href="/team" className="block text-gray-600 hover:text-blue-600 py-2">Our Team</Link>
          <Link href="/contact" className="mt-4 block w-1/2 text-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">
            Enquire Now
          </Link>
        </div>
      </div>
    </header>
  );
}
