"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Country {
  id: number;
  name: string;
  description: string;
  color: string;
  position?: string; // Desktop position
  mobilePosition?: string; // Mobile position
  image: string;
}

const countries: Country[] = [
  {
    id: 1,
    name: "United States of America",
    description: "Harvard University, Stanford University",
    color: "bg-[#B388FF]",
    position: "left-[24%] top-[39%]",
    mobilePosition: "left-[30%] top-[45%]",
    image: "/worldMap/americaMap.svg",
  },
  {
    id: 2,
    name: "Canada",
    description: "University of Toronto, University of Waterloo",
    color: "bg-[#B388FF]/60",
    position: "left-[21%] top-[26%]",
    mobilePosition: "left-[28%] top-[30%]",
    image: "/worldMap/canadaMap.svg",
  },
  {
    id: 3,
    name: "United Kingdom",
    description: "University of Oxford, University of Cambridge",
    color: "bg-[#B388FF]",
    position: "left-[46.5%] top-[30%]",
    mobilePosition: "left-[50%] top-[35%]",
    image: "/worldMap/ukMap.svg",
  },
  {
    id: 4,
    name: "Australia",
    description: "Offers affordable education with high academic standards & welcoming immigration policies.",
    color: "bg-[#B388FF]/60",
    position: "left-[78.4%] top-[78%]",
    mobilePosition: "left-[75%] top-[80%]",
    image: "/worldMap/australiaMap.svg",
  },
  {
    id: 5,
    name: "New Zealand",
    description: "University of Otago, The University of Auckland",
    color: "bg-[#B388FF]",
    position: "left-[86%] top-[89%]",
    mobilePosition: "left-[85%] top-[90%]",
    image: "/worldMap/newzLandMap.svg",
  },
  {
    id: 6,
    name: "Germany",
    description: "University of Hamburg, Technical University Berlin",
    color: "bg-[#B388FF]/60",
    position: "left-[49.25%] top-[32%]",
    mobilePosition: "left-[52%] top-[38%]",
    image: "/worldMap/germanyMap.svg",
  },
  {
    id: 7,
    name: "France",
    description: "University of Oxford, University of Cambridge",
    color: "bg-[#B388FF]/60",
    position: "left-[47.7%] top-[35%]",
    mobilePosition: "left-[50%] top-[40%]",
    image: "/worldMap/franceMap.svg",
  },
  {
    id: 8,
    name: "Italy",
    description: "Sapienza University of Rome, University of Milan",
    color: "bg-[#B388FF]",
    position: "left-[49.5%] top-[37%]",
    mobilePosition: "left-[52%] top-[42%]",
    image: "/worldMap/italyMap.svg",
  },
  {
    id: 9,
    name: "Malaysia",
    description: "Universiti Malaya, Sunway University",
    color: "bg-[#B388FF]/60",
    position: "left-[72.5%] top-[64%]",
    mobilePosition: "left-[70%] top-[65%]",
    image: "/worldMap/malaysiaMap.svg",
  },
  {
    id: 10,
    name: "Ireland",
    description: "Trinity College Dublin, University College Dublin",
    color: "bg-[#B388FF]/60",
    position: "left-[44.3%] top-[30.5%]",
    mobilePosition: "left-[48%] top-[34%]",
    image: "/worldMap/irelandMap.svg",
  },
  {
    id: 11,
    name: "Singapore",
    description: "National University of Singapore, Nanyang Technological University",
    color: "bg-[#B388FF]/60",
    position: "left-[72.9%] top-[60.9%]",
    mobilePosition: "left-[71%] top-[62%]",
    image: "/worldMap/singaporeMap.svg",
  },
];

export function MapSection() {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  return (
    <div className="bg-[#FDFAFE] mx-auto px-4 md:px-24 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Choose from the <span className="text-[#B388FF]">Top Countries to Study Abroad</span>
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          Explore world-class education & career opportunities in the best study destinations.
        </p>
      </div>

      <div className="relative">
        {/* World Map Background */}
        <div className="w-full aspect-[2/1] rounded-xl relative overflow-hidden flex items-center justify-center">
          <Image
            src={selectedCountry.image}
            alt={selectedCountry.name}
            width={800}
            height={400}
            className="w-full h-full object-contain transition-all duration-300"
          />

          {/* Interactive Dots */}
          <div className="absolute inset-0">
            {countries.map((country) => (
              <button
                key={country.id}
                className={`absolute w-3 h-3 md:w-4 md:h-4 bg-[#5D5FDC] rounded-full transform transition-all duration-300 hover:scale-150 md:${country.position} ${country.mobilePosition}`}
                onMouseEnter={() => setSelectedCountry(country)}
                onClick={() => setSelectedCountry(country)} // Added for touch support
                aria-label={country.name}
              />
            ))}
          </div>
        </div>

        {/* Country Info */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#B388FF]">{selectedCountry.name}</h3>
          <p className="text-gray-600 text-sm md:text-base md:max-w-xl md:text-right">
            {selectedCountry.description}
          </p>
        </div>
      </div>
    </div>
  );
}