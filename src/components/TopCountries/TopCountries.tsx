"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import FancyModal from "../AnimatedModal/AnimatedModal";

interface dummyData {
  id: number;
  country: string;
  description: string;
  image: string;
  flag: string;
  alt: string;
  univercities?: {name: string; image: string}[]; // Optional property for university
}

const dummyData: dummyData[] = [
  {
    id: 1,
    country: "United States of America",
    univercities: [{name:"University of Southern Maine",image:"/TopCountries/univercity/1.png"},{name:"Trinity College Dublin",image:"/TopCountries/univercity/2.png"},{name:"Trinity College Dublin",image:"/TopCountries/univercity/3.png"},{name:"University College Cork",image:"/TopCountries/univercity/4.png"},{name:"UCD Dublin",image:"/TopCountries/univercity/5.png"}],
    description: "World's largest economy, diverse job opportunities, and renowned universities with extensive research facilities.",
    image: "/TopCountries/countryImages/1.webp",
    flag: "/TopCountries/flagLogos/1.png",
    alt: "Statue of Liberty",
  },
  {
    id: 2,
    country: "Canada",
    description: "Immigration-friendly policies, job-focused courses, and post-study work permits.",
    image: "/TopCountries/countryImages/2.webp",
    flag: "/TopCountries/flagLogos/2.png",
    alt: "Golden Gate Bridge",
    univercities: [{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},]
  },
  {
    id: 3,
    country: "Australia",
    description: "Globally recognized qualifications, scholarships, and strong industry connections.",
    image: "/TopCountries/countryImages/3.webp",
    flag: "/TopCountries/flagLogos/3.png",
    alt: "New York Skyline",
    univercities: [{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},]
  },
  {
    id: 4,
    country: "New Zealand",
    description: "High-quality education system, stunning landscapes, and work opportunities for international students.",
    image: "/TopCountries/countryImages/4.webp",
    flag: "/TopCountries/flagLogos/4.png",
    alt: "Grand Canyon",
    univercities: [{name:"University of Otago",image:"/TopCountries/univercity/6.png"},{name:"Massey University",image:"/TopCountries/univercity/7.png"},{name:" University of Auckland",image:"/TopCountries/univercity/8.png"},{name:"University of Canterbury",image:"/TopCountries/univercity/9.png"},{name:"Victoria university of Wellington",image:"/TopCountries/univercity/10.png"},]
  },
  {
    id: 5,
    country: "Italy",
    description: "Rich cultural heritage, prestigious universities, and opportunities in arts, fashion, and humanities.",
    image: "/TopCountries/countryImages/5.webp",
    flag: "/TopCountries/flagLogos/5.png",
    alt: "Statue of Liberty",
    univercities: [{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},]
  },
  {
    id: 6,
    country: "United Kingdom",
    description: "Qualifications recognized worldwide, scholarships, and fee waivers for international students.",
    image: "/TopCountries/countryImages/6.webp",
    flag: "/TopCountries/flagLogos/6.png",
    alt: "Golden Gate Bridge",
    univercities: [{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},]
  },
  {
    id: 7,
    country: "Ireland",
    description: "High standard of education, vibrant cultural scene, and post-study work opportunities.",
    image: "/TopCountries/countryImages/7.webp",
    flag: "/TopCountries/flagLogos/7.png",
    alt: "New York Skyline",
    univercities: [{name:"University of Southern Maine",image:"/TopCountries/univercity/1.png"},{name:"Trinity College Dublin",image:"/TopCountries/univercity/2.png"},{name:"Trinity College Dublin",image:"/TopCountries/univercity/3.png"},{name:"University College Cork",image:"/TopCountries/univercity/4.png"},{name:"UCD Dublin",image:"/TopCountries/univercity/5.png"}]
  },
  {
    id: 8,
    country: "France",
    description: "Renowned for arts and culture, prestigious institutions, and opportunities in fashion, culinary arts, and business.",
    image: "/TopCountries/countryImages/8.webp",
    flag: "/TopCountries/flagLogos/8.png",
    alt: "Grand Canyon",
    univercities: [{name:"University of Southern Maine",image:"/TopCountries/univercity/16.png"},{name:"University of Southern Maine",image:"/TopCountries/univercity/17.png"},{name:"University of Southern Maine",image:"/TopCountries/univercity/18.png"},{name:"University of Southern Maine",image:"19"},{name:"University of Southern Maine",image:"/TopCountries/univercity/20.png"}]
  },
  {
    id: 9,
    country: "Indonesia",
    description: "Growing economy, diverse cultural experiences, and affordable education options.",
    image: "/TopCountries/countryImages/9.webp",
    flag: "/TopCountries/flagLogos/9.png",
    alt: "Statue of Liberty",
    univercities: [{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},]
  },
  {
    id: 10,
    country: "Germany",
    description: "Strong economy, free or low-cost education, and opportunities in engineering, technology, and research.",
    image: "/TopCountries/countryImages/10.webp",
    flag: "/TopCountries/flagLogos/10.png",
    alt: "Golden Gate Bridge",
    univercities: [{name:"Frankfurt School of Finance & Management",image:"/TopCountries/univercity/11.png"},{name:"University of Southern Maine",image:"/TopCountries/univercity/12.png"},{name:"University of Southern Maine",image:"/TopCountries/univercity/13.png"},{name:"University of Southern Maine",image:"/TopCountries/univercity/14.png"},{name:"University of Southern Maine",image:"/TopCountries/univercity/15.png"}]
  },
  {
    id: 11,
    country: "Japan",
    description: "Advanced technology, high-quality education, and unique cultural experiences.",
    image: "/TopCountries/countryImages/11.webp",
    flag: "/TopCountries/flagLogos/11.png",
    alt: "New York Skyline",
    univercities: [{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},]
  },
  {
    id: 12,
    country: "Sweden",
    description: "Innovative education system, focus on sustainability, and opportunities in technology and design.",
    image: "/TopCountries/countryImages/12.webp",
    flag: "/TopCountries/flagLogos/12.png",
    alt: "Grand Canyon",
    univercities: [{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},]
  },
  {
    id: 13,
    country: "Netherland",
    description: "High-quality education, English-taught programs, and strong international focus.",
    image: "/TopCountries/countryImages/13.webp",
    flag: "/TopCountries/flagLogos/13.png",
    alt: "Statue of Liberty",
    univercities: [{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},]
  },
  {
    id: 14,
    country: "Malaysia",
    description: "Leading global financial hub, high standard of education, and multicultural environment.",
    image: "/TopCountries/countryImages/14.webp",
    flag: "/TopCountries/flagLogos/14.png",
    alt: "Golden Gate Bridge",
    univercities: [{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},]
  },
  {
    id: 15,
    country: "United Arab Emirates",
    description: "Rapidly growing economy, luxurious lifestyle, and opportunities in business and technology.",
    image: "/TopCountries/countryImages/15.webp",
    flag: "/TopCountries/flagLogos/15.png",
    alt: "New York Skyline",
    univercities: [{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},]
  },
  {
    id: 16,
    country: "Malta",
    description: "Advanced technology, high-quality education, and a vibrant cultural scene.",
    image: "/TopCountries/countryImages/16.webp",
    flag: "/TopCountries/flagLogos/16.png",
    alt: "Grand Canyon",
    univercities: [{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},]
  },
  {
    id: 17,
    country: "South Korea",
    description: "Choose the best university, country & course with expert guidance, ensuring a clear academic & career",
    image: "/TopCountries/countryImages/17.webp",
    flag: "/TopCountries/flagLogos/17.png",
    alt: "Statue of Liberty",
    univercities: [{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},{name:"University of Southern Maine",image:""},]
  },
];

export default function UsaCard() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null); // Ref to store Swiper instance
  const [open, setOpen] = useState(false); // State to manage modal visibility
  const [selectedCountry, setSelectedCountry] = useState<dummyData | undefined>();
  

  return (
    <section className="bg-white">
      <div className="container  mx-auto py-20 relative text-center">
        <div className="lg:mb-14 mb-8 mx-7 space-y-5 lg:space-y-3">
          <h1 className="font-bold text-2xl lg:text-[45px]">
            Choose from the <span className="text-[#CEB3FE]">Top Countries to Study Abroad</span>
          </h1>
          <h3 className="lg:text-[23px] text-lg text-[#1D1D1F] font-medium">
            Explore world-class education & career opportunities in the best study destinations.
          </h3>
        </div>
        <Swiper
          modules={[Navigation]}
          loop={true}
          autoplay={{
            delay: 2000, // Time in ms between slides (3 seconds)
            disableOnInteraction: false, // Keeps autoplay running even when user interacts
          }}
          spaceBetween={20}
          slidesPerView={4}
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Store Swiper instance
          }}
          speed={1000}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 20 },
            1580: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="mySwiper"
        >
          {dummyData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className=" lg:max-w-sm bg-[#FDFAFE] h-[500px] rounded-2xl p-4 text-center flex flex-col justify-between">
                <div className="relative">
                  <div className="w-full h-48 relative rounded-xl overflow-hidden">
                    <Image src={card.image} alt={card.alt} fill className="rounded-xl object-cover" priority />
                  </div>
                  <div className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-20 h-20 relative rounded-full border-4 border-white shadow-md overflow-hidden">
                      <Image src={card.flag} alt={`${card.country} Flag`} fill className="object-cover" priority />
                    </div>
                  </div>
                </div>
                <div className="mt-16 flex flex-col justify-between h-[calc(100%-12rem)]">
                  <div className="flex-1 overflow-y-auto">
                    <h2 className="text-[28px] font-extrabold text-gray-900">{card.country}</h2>
                    <p className="text-[#86868B] text-xl mt-2 px-2">{card.description}</p>
                  </div>
                  <button onClick={()=>{setOpen(true);setSelectedCountry(card)}} className="text-[#5D5FDC] text-xl font-extrabold mt-4 inline-block hover:underline">
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex gap-3 justify-end mt-4">
          <button
            ref={prevRef}
            aria-label="Previous slide"
            className="cursor-pointer bg-[#D2D2D7] text-gray-800 p-2 rounded-full shadow-md transition duration-300"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            ref={nextRef}
            aria-label="Next slide"
            className="cursor-pointer bg-[#D2D2D7] text-gray-800 p-2 rounded-full shadow-md transition duration-300"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <FancyModal open={open} handleClose={setOpen} data={selectedCountry ? selectedCountry : undefined} />
    </section>
  );
}
