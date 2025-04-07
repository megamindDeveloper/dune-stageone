"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Country {
  id: number;
  name: string;
  description: string;
  color: string;
  position?: string;
  image: string; // Add image path to each country
}

const countries: Country[] = [
  {
    id: 1,
    name: "United States of America",
    description: "Harvard University, Stanford University",
    color: "bg-[#B388FF]",
    position: "left-[18%] top-[39%]",
    image: "/worldMap/americaMap.svg",
  },
  {
    id: 2,
    name: "Canada",
    description: "University of Toronto, University of Waterloo",
    color: "bg-[#B388FF]/60",
    position: "left-[15%] top-[26%]",
    image: "/worldMap/canadaMap.svg",
  },
  {
    id: 3,
    name: "United Kingdom",
    description: "University of Oxford, University of Cambridge",
    color: "bg-[#B388FF]",
    position: "left-[46%] top-[30%]",
    image: "/worldMap/ukMap.svg",
  },
  {
    id: 4,
    name: "Australia",
    description: "Offers affordable education with high academic standards & welcoming immigration policies.",
    color: "bg-[#B388FF]/60",
    position: "left-[84%] top-[78%]",
    image: "/worldMap/australiaMap.svg",
  },
  {
    id: 5,
    name: "New Zealand",
    description: "University of Otago, The University of Auckland",
    color: "bg-[#B388FF]",
    position: "left-[94%] top-[89%]",
    image: "/worldMap/newzLandMap.svg",
  },
  {
    id: 6,
    name: "Germany",
    description: "University of Hamburg, Technical University Berlin",
    color: "bg-[#B388FF]/60",
    position: "left-[49.25%] top-[32%]",
    image: "/worldMap/germanyMap.svg",
  },
  {
    id: 7,
    name: "France",
    description: "University of Oxford, University of Cambridge",
    color: "bg-[#B388FF]/60",
    position: "left-[47.3%] top-[35%]",
    image: "/worldMap/franceMap.svg",
  },
  {
    id: 8,
    name: "Italy",
    description: "Sapienza University of Rome, University of Milan",
    color: "bg-[#B388FF]",
    position: "left-[49.5%] top-[37%]",
    image: "/worldMap/italyMap.svg",
  },
  {
    id: 9,
    name: "Malaysia",
    description: "Universiti Malaya, Sunway University",
    color: "bg-[#B388FF]/60",
    position: "left-[77.5%] top-[64%]",
    image: "/worldMap/malaysiaMap.svg",
  },
  {
    id: 10,
    name: "Ireland",
    description: "Trinity College Dublin, University College Dublin",
    color: "bg-[#B388FF]/60",
    position: "left-[44.3%] top-[30.5%]",
    image: "/worldMap/irelandMap.svg",
  },
  {
    id: 11,
    name: "Singapore",
    description: "National University of Singapore, Nanyang Technological University",
    color: "bg-[#B388FF]/60",
    position: "left-[77.9%] top-[60.9%]",
    image: "/worldMap/singaporeMap.svg",
  },
];

export function MapSection() {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  return (
    <div className="bg-[#FDFAFE] mx-auto px-4 md:px-24 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">
          Choose from the <span className="text-[#B388FF]">Top Countries to Study Abroad</span>
        </h2>
        <p className="mt-4 text-gray-600">Explore world-class education & career opportunities in the best study destinations.</p>
      </div>

      <div className="relative">
        {/* World Map Background */}
        <div className="w-full aspect-[2/1]  rounded-xl relative overflow-hidden flex items-center justify-center">
          <Image src={selectedCountry.image} alt={selectedCountry.name} width={8000} height={800} className=" transition-all duration-300" />

          {/* Interactive Dots */}
          <div className="absolute inset-0">
            {countries.map((country) => (
              <button
                key={country.id}
                className={`absolute w-4 h-4 bg-[#5D5FDC]  rounded-full transform transition-all duration-300 hover:scale-150 ${country.position}`}
                onMouseEnter={() => setSelectedCountry(country)}
                aria-label={country.name}
              />
            ))}
          </div>
        </div>

        {/* Country Info */}
        <div className="mt-8 flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-[#B388FF]">{selectedCountry.name}</h3>
          <p className="text-gray-600 max-w-xl text-right">{selectedCountry.description}</p>
        </div>
      </div>
    </div>
  );
}
