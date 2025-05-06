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
    description: "Massachusetts Institute of Technology (MIT), Harvard University, Stanford University, University of California, Berkeley (UCB), California Institute of Technology (Caltech)",
    color: "bg-[#B388FF]",
    position: "md:left-[24%] md:top-[39%] left-[17%] top-[46%]",
    image: "/worldMap/americaMap.svg",
  },
  {
    id: 2,
    name: "Canada",
    description: "University of Toronto, McGill University, University of British Columbia (UBC), University of Alberta, York University",
    color: "bg-[#B388FF]/60",
    position: "md:left-[21%] md:top-[26%] left-[14%] top-[42%]",
    image: "/worldMap/canadaMap.svg",
  },
  {
    id: 3,
    name: "United Kingdom",
    description: "University of Edinburgh, University of Manchester, University of Glasgow, King's College London, University of Birmingham",
    color: "bg-[#B388FF]",
    position: "left-[46.5%] top-[30%]",
    image: "/worldMap/ukMap.svg",
  },
  {
    id: 4,
    name: "Australia",
    description: "University of Sydney, Monash University, University of Melbourne, University of Queensland (UQ), University of New South Wales (UNSW Sydney)",
    color: "bg-[#B388FF]/60",
    position: "left-[78.4%] top-[78%]",
    image: "/worldMap/australiaMap.svg",
  },
  {
    id: 5,
    name: "New Zealand",
    description: "University of Auckland, University of Otago, University of Canterbury, Massey University, Victoria University of Wellington",
    color: "bg-[#B388FF]",
    position: "left-[86%] top-[89%]",
    image: "/worldMap/newzLandMap.svg",
  },
  {
    id: 6,
    name: "Germany",
    description: "Technical University of Munich (TUM), Frankfurt School of Finance & Management, RWTH Aachen University, University of Mannheim, University of Göttingen",
    color: "bg-[#B388FF]/60",
    position: "left-[49.25%] top-[32%]",
    image: "/worldMap/germanyMap.svg",
  },
  {
    id: 7,
    name: "France",
    description: "Sorbonne University, Université Paris-Saclay, Université de Lyon, Université de Strasbourg, Université de Bordeaux",
    color: "bg-[#B388FF]/60",
    position: "left-[47.7%] top-[35%]",
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
    description: "University of Malaya (UM), Universiti Kebangsaan Malaysia (UKM), Universiti Sains Malaysia (USM), Universiti Putra Malaysia (UPM), Universiti Teknologi Malaysia (UTM)",
    color: "bg-[#B388FF]/60",
    position: "left-[72.5%] top-[64%]",
    image: "/worldMap/malaysiaMap.svg",
  },
  {
    id: 10,
    name: "Ireland",
    description: "Trinity College Dublin, University College Dublin (UCD), University College Cork (UCC), National University of Ireland Galway (NUIG), Dublin City University (DCU)",
    color: "bg-[#B388FF]/60",
    position: "left-[44.3%] top-[30.5%]",
    image: "/worldMap/irelandMap.svg",
  },
  {
    id: 11,
    name: "Singapore",
    description: "National University of Singapore, Nanyang Technological University",
    color: "bg-[#B388FF]/60",
    position: "left-[72.9%] top-[60.9%]",
    image: "/worldMap/singaporeMap.svg",
  },
];

export function MapSection() {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  return (
    <div className="bg-[#FDFAFE] mx-auto px-4 md:px-24 py-16">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-[44px] font-bold text-gray-900">
          Choose from the <span className="text-[#B388FF]">Top Countries to Study Abroad</span>
        </h2>
        <p className="mt-4 text-gray-600">Explore world-class education & career opportunities in the best study destinations.</p>
      </div>

      <div className="relative">
        {/* World Map Background */}
        <div className="w-full h-[70vh] aspect-[2/1]  rounded-xl relative overflow-hidden flex items-center justify-center">
          <Image src={selectedCountry.image} alt={selectedCountry.name} width={8000} height={800} className="w-full h-full transition-all duration-300" />

          {/* Interactive Dots */}
          <div className="absolute inset-0">
            {countries.map((country) => (
              <button
                key={country.id}
                className={`absolute md:w-4 md:h-4 w-2.5 h-2.5 bg-[#5D5FDC]  rounded-full transform transition-all duration-300 hover:scale-150 ${country.position}`}
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