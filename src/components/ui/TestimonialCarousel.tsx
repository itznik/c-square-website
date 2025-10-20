"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

// Define the shape of a single testimonial
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
            {/* Apply the .glass-pane class here for a consistent, high-end look */}
            <div className="glass-pane h-full p-8 flex flex-col">
              <p className="text-brand-light/80 italic flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-6 pt-6 border-t border-white/10">
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
