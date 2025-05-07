"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Country {
  id: number;
  name: string;
  description: string;
  color: string;
  position?: string;
  image: string; 
}

const countries: Country[] = [
  {
    id: 1,
    name: "United States of America",
    description: "Massachusetts Institute of Technology (MIT), Harvard University, Stanford University, University of California, Berkeley (UCB), California Institute of Technology (Caltech)",
    color: "bg-[#B388FF]",
    position: "lg:left-[24%] lg:top-[39%] md:left-[20%] md:top-[45%] left-[17%] top-[46%]",
    image: "/worldMap/americaMap.svg",
  },
  {
    id: 2,
    name: "Canada",
    description: "University of Toronto, McGill University, University of British Columbia (UBC), University of Alberta, York University",
    color: "bg-[#B388FF]/60",
    position: "md:left-[21%] md:top-[37%] lg:left-[21%] lg:top-[26%] left-[14%] top-[42%]",
    image: "/worldMap/canadaMap.svg",
  },
  {
    id: 3,
    name: "United Kingdom",
    description: "University of Edinburgh, University of Manchester, University of Glasgow, King's College London, University of Birmingham",
    color: "bg-[#B388FF]",
    position: "left-[45%] top-[42%] lg:left-[46.5%] lg:top-[30%]",
    image: "/worldMap/ukMap.svg",
  },
  {
    id: 4,
    name: "Australia",
    description: "University of Sydney, Monash University, University of Melbourne, University of Queensland (UQ), University of New South Wales (UNSW Sydney)",
    color: "bg-[#B388FF]/60",
    position: "left-[83%] top-[58%] lg:left-[78.4%] lg:top-[78%]",
    image: "/worldMap/australiaMap.svg",
  },
  {
    id: 5,
    name: "New Zealand",
    description: "University of Auckland, University of Otago, University of Canterbury, Massey University, Victoria University of Wellington",
    color: "bg-[#B388FF]",
    position: "left-[94%] top-[63%] lg:left-[86%] lg:top-[89%]",
    image: "/worldMap/newzLandMap.svg",
  },
  {
    id: 6,
    name: "Germany",
    description: "Technical University of Munich (TUM), Frankfurt School of Finance & Management, RWTH Aachen University, University of Mannheim, University of Göttingen",
    color: "bg-[#B388FF]/60",
    position: "left-[49.25%] top-[43.9%] lg:left-[49.25%] lg:top-[32%]",
    image: "/worldMap/germanyMap.svg",
  },
  {
    id: 7,
    name: "France",
    description: "Sorbonne University, Université Paris-Saclay, Université de Lyon, Université de Strasbourg, Université de Bordeaux",
    color: "bg-[#B388FF]/60",
    position: "left-[47%] top-[45%] lg:left-[47.7%] lg:top-[35%]",
    image: "/worldMap/franceMap.svg",
  },
  {
    id: 8,
    name: "Italy",
    description: "Sapienza University of Rome, University of Milan",
    color: "bg-[#B388FF]",
    position: "left-[49.5%] top-[46%] lg:left-[49.5%] lg:top-[37%]",
    image: "/worldMap/italyMap.svg",
  },
  {
    id: 9,
    name: "Malaysia",
    description: "University of Malaya (UM), Universiti Kebangsaan Malaysia (UKM), Universiti Sains Malaysia (USM), Universiti Putra Malaysia (UPM), Universiti Teknologi Malaysia (UTM)",
    color: "bg-[#B388FF]/60",
    position: "left-[79%] top-[55%] lg:left-[72.5%] lg:top-[64%]",
    image: "/worldMap/malaysiaMap.svg",
  },
  {
    id: 10,
    name: "Ireland",
    description: "Trinity College Dublin, University College Dublin (UCD), University College Cork (UCC), National University of Ireland Galway (NUIG), Dublin City University (DCU)",
    color: "bg-[#B388FF]/60",
    position: "left-[42.5%] top-[44%] lg:left-[44.3%] lg:top-[30.5%]",
    image: "/worldMap/irelandMap.svg",
  },
  {
    id: 11,
    name: "Singapore",
    description: "National University of Singapore, Nanyang Technological University",
    color: "bg-[#B388FF]/60",
    position: "left-[76.5%] top-[53%] lg:left-[72.9%] lg:top-[60.9%]",
    image: "/worldMap/singaporeMap.svg",
  },
  {
    id: 12,
    name: "Dubai",
    description: "University of Wollongong in Dubai (UOWD), University of Dubai, Amity University Dubai, BITS Pilani, Dubai Campus, University of Birmingham Dubai",
    color: "bg-[#B388FF]",
    position: "lg:left-[58%] lg:top-[48%] md:left-[59%] md:top-[48%] left-[60%] top-[50%]",
    image: "/worldMap/dubai.svg",
  },
  {
    id:13,
    name: "Malta",
    description: "University of Malta, American University of Malta (AUM), Global College Malta, GBSB Global Business School – Malta Campus, Malta College of Arts, Science & Technology (MCAST)",
    color: "bg-[#B388FF]/60",
    position: "md:left-[53%]  md:top-[46%] lg:left-[50%] lg:top-[42%] left-[50%] top-[47.5%]",
    image: "/worldMap/malta.svg",
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
                className={`absolute md:w-4 md:h-4 w-1.5 h-1.5 bg-[#5D5FDC]  rounded-full transform transition-all duration-300 hover:scale-150 ${country.position}`}
                onMouseEnter={() => setSelectedCountry(country)}
                aria-label={country.name}
              />
            ))}
          </div>
        </div>

        {/* Country Info */}
        <div className="lg:mt-8 lg:flex text-center  lg:items-center lg:justify-between">
          <h3 className="text-2xl font-semibold text-[#B388FF]">{selectedCountry.name}</h3>
          <p className="text-gray-600 max-w-xl text-center lg:text-right">{selectedCountry.description}</p>
        </div>
      </div>
    </div>
  );
}