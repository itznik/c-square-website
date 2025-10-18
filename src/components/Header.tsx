import Link from 'next/link';

export default function Header() {
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

        {/* Mobile Menu Button (functionality to be added) */}
        <div className="md:hidden">
            <button className="text-gray-800 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
      </nav>
    </header>
  );
}
