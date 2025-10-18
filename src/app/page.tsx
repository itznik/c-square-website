import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-50 text-center py-20 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Building Trustworthy Digital Solutions for Your Startup
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            At C², we create high-performing, secure, and visually appealing websites that establish your online presence and generate leads.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Partner With C²?</h2>
            <p className="text-gray-600 mt-2">We deliver excellence at every step.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Feature 1 */}
            <div className="p-8 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">SEO Optimized</h3>
              <p className="text-gray-600">
                Built from the ground up with modern SEO best practices to ensure you rank high on search engines like Google.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-8 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Modern & Responsive</h3>
              <p className="text-gray-600">
                A clean, engaging UI/UX that provides a seamless experience on all devices—desktops, tablets, and mobile.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-8 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Secure & Scalable</h3>
              <p className="text-gray-600">
                Powered by a robust MERN stack backend to handle inquiries securely and scale with your business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Simple, Transparent Process</h2>
            <p className="mt-4 text-lg text-gray-600">
              We guide you from idea to launch with a clear, collaborative workflow. Understand exactly how we bring your vision to life.
            </p>
            <Link
              href="/how-it-works"
              className="mt-6 inline-block text-blue-600 font-semibold hover:underline"
            >
              Learn More About How It Works &rarr;
            </Link>
          </div>
          <div className="bg-gray-200 h-80 rounded-lg shadow-lg flex items-center justify-center">
            {/* You can replace this with an actual image or illustration */}
            <span className="text-gray-500">Visual Graphic Placeholder</span>
          </div>
        </div>
      </section>
      
      {/* Final Call-to-Action Section */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Elevate Your Online Presence?</h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Let&apos;s discuss your project. Get in touch with our team today and let us build the website your startup deserves.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            Make an Enquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
