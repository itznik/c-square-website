"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import GlassPane from '@/components/ui/GlassPane'; // Import the new component

// ... (interfaces remain the same) ...

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  // ... (emblaRef logic remains the same) ...

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {testimonials.map((testimonial, index) => (
          <div className="flex-grow-0 flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/3 min-w-0 pl-4" key={index}>
            <GlassPane className="h-full p-8 flex flex-col">
              {/* ... content remains the same ... */}
            </GlassPane>
          </div>
        ))}
      </div>
    </div>
  );
}
