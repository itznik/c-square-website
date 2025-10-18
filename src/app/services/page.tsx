import ServiceBlock from '@/components/ServiceBlock';
import Link from 'next/link';

// --- Placeholder Data for Services & Partners ---
const services = [
  {
    id: 1,
    title: 'Custom Web Development',
    description: 'We build bespoke, high-performance websites from the ground up using the MERN stack (MongoDB, Express.js, React, Node.js) tailored to your specific business needs.',
  },
  {
    id: 2,
    title: 'SEO Strategy & Implementation',
    description: 'Our websites are built with a strong SEO foundation, including server-side rendering (SSR) and best practices to help you achieve top rankings on Google.',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'We create clean, modern, and intuitive user interfaces that build trust and enhance user engagement, ensuring a seamless experience on any device.',
  },
  {
    id: 4,
    title: 'Admin Panel & CMS Integration',
    description: 'We provide easy-to-use admin panels that allow you to update your website content without needing to touch a single line of code.',
  },
];

const partners = [
  { id: 1, name: 'CloudNet Hosting', url: '#' },
  { id: 2, name: 'SecurePay Gateways', url: '#' },
  { id: 3, name: 'Innovate Solutions', url: '#' },
];
// ---------------------------------------------

export default function ServicesPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            What We Offer
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Providing end-to-end solutions to establish your digital presence and drive growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Core Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceBlock
                key={service.id}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Trusted Partners</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver the best possible solutions for our clients.
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            {partners.map((partner) => (
              <Link key={partner.id} href={partner.url} className="text-xl font-semibold text-gray-500 hover:text-blue-600 transition-colors">
                {partner.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
