import AnimatedSection from '@/components/AnimatedSection'; // <-- Import the new component at the top

// ... (keep your existing HomePage component and hero section code) ...

      {/* --- Add this new section below the hero section --- */}
      
      {/* Why Choose Us Section */}
      <AnimatedSection className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-green">
              A Partnership for the Planet
            </h2>
            <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
              We provide a transparent, reliable, and impactful platform for carbon offsetting.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background-light p-8 rounded-lg text-center border border-gray-200">
              <h3 className="text-2xl font-bold text-text-dark mb-3">Verified Projects</h3>
              <p className="text-gray-600">
                Every carbon credit on our platform comes from projects that are rigorously verified by global standards.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-background-light p-8 rounded-lg text-center border border-gray-200">
              <h3 className="text-2xl font-bold text-text-dark mb-3">Transparent Transactions</h3>
              <p className="text-gray-600">
                We ensure full transparency from purchase to credit retirement, so you know exactly where your contribution goes.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-background-light p-8 rounded-lg text-center border border-gray-200 lg:col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-text-dark mb-3">Real Impact</h3>
              <p className="text-gray-600">
                Your investment directly supports sustainable development and empowers communities around the world.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
