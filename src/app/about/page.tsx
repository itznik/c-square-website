import AnimatedSection from '@/components/AnimatedSection';

export default function AboutPage() {
  return (
    <main>
      {/* Page Header */}
      <AnimatedSection className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-green">
            A Purpose-Driven Mission
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We are dedicated to creating a transparent and accessible marketplace to accelerate global decarbonization.
          </p>
        </div>
      </AnimatedSection>

      {/* Our Story Section */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <div className="flex justify-center">
            <div className="bg-accent/30 w-80 h-80 rounded-full flex items-center justify-center">
              <span className="text-brand-green">[Illustration Placeholder]</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              C² was founded on a simple yet powerful idea: that collective action is the key to tackling climate change. We saw a need for a platform that not only facilitates carbon credit transactions but also builds trust and transparency in the process.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to connect environmentally conscious businesses with high-impact, verified sustainability projects, making a tangible difference one carbon credit at a time.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Core Values Section */}
      <AnimatedSection className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-brand-green">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Value 1: Transparency */}
            <div>
              <h3 className="text-2xl font-bold text-text-dark mb-3">Transparency</h3>
              <p className="text-gray-600">
                We believe in complete clarity. Every transaction and project on our platform is tracked and verifiable.
              </p>
            </div>
            {/* Value 2: Impact */}
            <div>
              <h3 className="text-2xl font-bold text-text-dark mb-3">Impact</h3>
              <p className="text-gray-600">
                We prioritize projects that deliver measurable environmental and social benefits.
              </p>
            </div>
            {/* Value 3: Integrity */}
            <div>
              <h3 className="text-2xl font-bold text-text-dark mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with the highest ethical standards to build a trustworthy ecosystem for climate action.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
