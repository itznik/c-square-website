import Link from 'next/link';

// --- Placeholder Data for LinkedIn Posts ---
// In a future step, this data will come from your Sanity.io CMS.
const linkedInPosts = [
  {
    id: 1,
    text: "We're excited to announce our new partnership! This collaboration will help us deliver even more value to our clients. #startup #partnership #growth",
    url: "https://www.linkedin.com/", // Replace with actual post URL
  },
  {
    id: 2,
    text: "Just launched a major update to our platform. Our team has been working hard to bring you these new features. Check it out! #productlaunch #tech #innovation",
    url: "https://www.linkedin.com/", // Replace with actual post URL
  },
  {
    id: 3,
    text: "A deep dive into the importance of SEO for modern businesses. Read our latest insights on the company blog. #SEO #digitalmarketing",
    url: "https://www.linkedin.com/", // Replace with actual post URL
  },
];
// -----------------------------------------


export default function AboutPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Our Mission: To Empower Startups
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We are dedicated to providing the digital foundation that new businesses need to thrive in a competitive landscape.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-4">
              To be the most trusted and sought-after web development partner for startups, known for our commitment to quality, performance, and client success. We envision a world where every great idea has a high-quality digital presence to support it.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to build professional, trustworthy, and high-performing websites using the MERN stack. We focus on creating SEO-optimized, secure, and scalable solutions that generate leads and serve as a credible source of information for our clients and their partners.
            </p>
          </div>
        </div>
      </section>

      {/* LinkedIn Posts Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Latest from LinkedIn</h2>
            <p className="text-gray-600 mt-2">Follow our journey and get the latest insights.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {linkedInPosts.map((post) => (
              <div key={post.id} className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm flex flex-col justify-between">
                <p className="text-gray-700 mb-4">{post.text}</p>
                <Link 
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline self-start"
                >
                  Read on LinkedIn &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
