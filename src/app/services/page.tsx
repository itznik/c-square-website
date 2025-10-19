import AnimatedSection from '@/components/AnimatedSection';
import ServiceBlock from '@/components/ServiceBlock';
import Link from 'next/link';

// Placeholder data
const services = [
  {
    id: 1,
    title: 'Carbon Credit Verification',
    description: 'We provide rigorous verification for sustainability projects, ensuring they meet global standards for carbon offsetting.',
  },
  {
    id: 2,
    title: 'Marketplace Platform',
    description: 'Our transparent platform connects businesses seeking to offset their carbon footprint with verified, high-impact projects.',
  },
  {
    id: 3,
    title: 'Portfolio Management',
    description: 'We help businesses build and manage a diverse portfolio of carbon credits that align with their sustainability goals.',
  },
  {
    id: 4,
    title: 'Advisory Services',
    description: 'Our experts provide strategic guidance on carbon neutrality, helping you navigate the complexities of the carbon market.',
  },
];

const partners = [
  { id: 1, name: 'EcoVerify Standard', url: '#' },
  { id: 2, name: 'Green Future Fund', url: '#' },
  { id: 3, name: 'Sustain Ledger', url: '#' },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Page Header */}
      <AnimatedSection className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-green">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            End-to-end solutions for a transparent and effective carbon offsetting journey.
          </p>
        </div>
      </AnimatedSection>

      {/* Services Grid */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="container mx-auto px-6">
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
      </AnimatedSection>

      {/* Partners Section */}
      <AnimatedSection className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green">
            Our Trusted Partners
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry leaders to ensure the integrity and impact of our marketplace.
          </p>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {partners.map((partner) => (
              <Link key={partner.id} href={partner.url} className="text-2xl font-semibold text-gray-500 hover:text-brand-green transition-colors">
                {partner.name}
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
