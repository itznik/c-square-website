import AnimatedSection from '@/components/AnimatedSection';

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <AnimatedSection className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-deep-green" style={{ fontFamily: "'Lora', serif" }}>
          {title}
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
          {subtitle}
        </p>
      </div>
    </AnimatedSection>
  );
}
