import PageHeader from '@/components/ui/PageHeader';
import TextLayout from '@/components/ui/TextLayout';
import AnimatedSection from '@/components/AnimatedSection';

// A placeholder for a high-quality SVG illustration
const IllustrationPlaceholder = () => (
  <div className="relative w-80 h-80 flex items-center justify-center">
    <div className="absolute w-full h-full bg-brand-accent-cream rounded-full blur-2xl opacity-50"></div>
    <p className="z-10 text-brand-olive">[SVG Illustration]</p>
  </div>
);

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="A Purpose-Driven Mission"
        subtitle="We are dedicated to creating a transparent and accessible marketplace to accelerate global decarbonization."
      />

      <AnimatedSection className="py-20 md:py-28">
        <TextLayout
          title="Our Story"
          illustration={<IllustrationPlaceholder />}
        >
          <p>
            C² was founded on a simple yet powerful idea: that collective action is the key to tackling climate change. We saw a need for a platform that not only facilitates carbon credit transactions but also builds trust and transparency in the process.
          </p>
          <p>
            Our mission is to connect environmentally conscious businesses with high-impact, verified sustainability projects, making a tangible difference one carbon credit at a time.
          </p>
        </TextLayout>
      </AnimatedSection>
      
      <AnimatedSection className="py-20 md:py-28 bg-white">
        <TextLayout
          title="Our Vision"
          illustration={<IllustrationPlaceholder />}
          reverse={true} // This will flip the layout
        >
          <p>
            To be the most trusted and sought-after partner for businesses on their journey to carbon neutrality. We envision a world where every company can easily and effectively contribute to a sustainable future, backed by a platform known for its integrity, impact, and innovation.
          </p>
        </TextLayout>
      </AnimatedSection>
    </main>
  );
}
