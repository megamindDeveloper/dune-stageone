"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function UniversityPartners() {
  return (
    <div className="md:h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-center text-2xl md:text-[44px] font-semibold my-12">
        Our Partnering <span className="text-purple-400">Universities</span>
      </h2>
      <InfiniteMovingCards items={images} direction="left" speed="slow" />
      <InfiniteMovingCards items={images} direction="right" speed="slow" />
    </div>
  );
}

const images = Array.from({ length: 50 }, (_, i) => ({
  imgsrc: `/partnersLogo/${i + 1}.png`,
}));

