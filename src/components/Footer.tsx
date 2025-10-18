import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="text-2xl font-bold lg:text-3xl">
            C²
          </Link>
          <div className="flex flex-wrap justify-center mt-4 -mx-4">
            <Link href="/" className="mx-4 text-sm text-gray-400 hover:text-white">Home</Link>
            <Link href="/about" className="mx-4 text-sm text-gray-400 hover:text-white">About</Link>
            <Link href="/services" className="mx-4 text-sm text-gray-400 hover:text-white">Services</Link>
            <Link href="/contact" className="mx-4 text-sm text-gray-400 hover:text-white">Contact</Link>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} C². All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
