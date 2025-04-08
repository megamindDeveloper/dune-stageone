'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TestimonialCard from '@/TestimonialsCard/TestimonialsCard';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: number;
  name: string;
  text: string;
  avatarUrl: string;
  dataSpeed?: string;
}

interface TestimonialGridProps {
  testimonials: Testimonial[];
  title?: {
    firstPart: string;
    highlightedPart: string;
  };
}

const TestimonialGrid: React.FC<TestimonialGridProps> = ({
  testimonials,
  title = { firstPart: 'Real People, Real', highlightedPart: 'Results' }
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('[data-speed]');
    elements?.forEach((el) => {
      const speed = parseFloat(el.getAttribute('data-speed') || '1');
      const offset = speed * 500; // increased from 100 to 200 for more pronounced effect
      gsap.fromTo(
        el,
        { y: offset }, // start position: offset from the natural position
        {
          y: 0, // final position
          ease: 'power2.out', // added easing for smoother return
          duration: 0.5, // added duration for faster return
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            scrub: 0.5, // changed from true to 0.5 for faster return
          },
        }
      );
    });
  }, []);
  

  return (
    <div
      ref={containerRef}
      className="bg-[#FEFEFE] mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-opacity duration-1000"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-48">
        {title.firstPart}{' '}
        <span className="text-purple-400">{title.highlightedPart}</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex" data-speed={testimonial.dataSpeed || "1"}>
            <TestimonialCard
              name={testimonial.name}
              text={testimonial.text}
              avatarUrl={testimonial.avatarUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialGrid;
