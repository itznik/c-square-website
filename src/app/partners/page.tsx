import PageHeader from '@/components/ui/PageHeader';
import PartnerMarquee from '@/components/ui/PartnerMarquee';

// Placeholder data for partners - this will eventually come from the CMS
const partners = [
  { name: 'EcoVerify Standard', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'Green Future Fund', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'Sustain Ledger', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'Agroforestry Alliance', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'Climate Action Collective', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'India Green Network', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'TerraCarbon Initiative', logoUrl: '/logo-placeholder.svg', website: '#' },
  { name: 'BioSphere Ventures', logoUrl: '/logo-placeholder.svg', website: '#' },
];

export default function PartnersPage() {
  return (
    <main>
      <PageHeader
        title="Our Collaborative Ecosystem"
        subtitle="We partner with leading organizations, environmental NGOs, and verification bodies to ensure the integrity and impact of our marketplace."
      />

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <PartnerMarquee partners={partners} />
        </div>
      </section>
    </main>
  );
}
