"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
// The unused 'motion' import has been removed.

interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {testimonials.map((testimonial, index) => (
          <div className="flex-grow-0 flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/3 min-w-0 pl-4" key={index}>
            <div className="h-full bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg flex flex-col">
              {/* CORRECTED: The raw quotes have been replaced with React entities */}
              <p className="text-brand-light/80 italic flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-6">
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-brand-light/60 text-sm">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
