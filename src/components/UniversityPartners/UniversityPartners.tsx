"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function UniversityPartners() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
       <h2 className="text-center text-4xl font-semibold mt-12">
        Our Partnering <span className="text-purple-400">Universities</span>
      </h2>
      <InfiniteMovingCards items={images} direction="right" speed="slow" />
      <InfiniteMovingCards items={images} direction="left" speed="slow" />
    </div>
  );
}

const images = [
  {
    imgsrc: "/partnersLogo/logo1.svg",
  },
  {
    imgsrc: "/partnersLogo/logo2.svg",
  },
  {
    imgsrc: "/partnersLogo/logo3.svg",
  },
  {
    imgsrc: "/partnersLogo/logo4.svg",
  },
  {
    imgsrc: "/partnersLogo/logo5.svg",
  },
  {
    imgsrc: "/partnersLogo/logo6.svg",
  },
  {
    imgsrc: "/partnersLogo/logo7.svg",
  },
  {
    imgsrc: "/partnersLogo/logo8.svg",
  },
  {
    imgsrc: "/partnersLogo/logo9.svg",
  },
  {
    imgsrc: "/partnersLogo/logo10.svg",
  },
];
