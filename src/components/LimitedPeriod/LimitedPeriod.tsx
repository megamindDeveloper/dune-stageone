"use client";
import React, { useEffect, useRef, useState } from 'react'

const LimitedPeriod = () => {
    const sectionRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const [isSticky, setIsSticky] = useState(true);
  const [overlappingFooter, setOverlappingFooter] = useState(false);

  useEffect(() => {
    // Observe visibility of the footer to disable sticky
    footerRef.current = document.querySelector("footer");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOverlappingFooter(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);
  return (
    <section
      id="expert-counselling"
      ref={sectionRef}
      className={`transition-all duration-500 ease-in-out bg-white py-4 ${
        isSticky && !overlappingFooter
          ? "fixed bottom-0 left-0 w-full z-50 shadow-[0_3px_10px_rgba(0,0,0,0.2)]"
          : "relative"
      }`}
    >
      <div className=" mx-10 lg:mx-32">
        <div className="flex  flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-3 justify-start">
            <h1 className="text-xl  font-bold text-[#B298FE]">
              Free for a Limited Period <span className="text-[#BDBEC2] line-through decoration-2">₹999/-</span>
            </h1>
            <h2 className="font-bold text-xl lg:text-[36px]">Book Your Expert Counselling Session Today!</h2>
          </div>
          <div>
            <button className="bg-black cursor-pointer text-white text-xl lg:text-[26px] font-bold px-8 py-3 rounded-4xl">Book Now for Free</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LimitedPeriod
