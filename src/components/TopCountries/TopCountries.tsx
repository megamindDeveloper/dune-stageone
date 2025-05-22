"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

interface dummyData {
  id: number;
  country: string;
  description: string;
  image: string;
  flag: string;
  alt: string;
}

const dummyData: dummyData[] = [
  {
    id: 1,
    country: "United States of America",
    description: "World's largest economy, diverse job opportunities, and renowned universities with extensive research facilities.",
    image: "/TopCountries/images/1.jpg",
    flag: "/TopCountries/flagLogos/1.png",
    alt: "Statue of Liberty",
  },
  {
    id: 2,
    country: "Canada",
    description: "Immigration-friendly policies, job-focused courses, and post-study work permits.",
    image: "/TopCountries/images/2.jpg",
    flag: "/TopCountries/flagLogos/2.png",
    alt: "Golden Gate Bridge",
  },
  {
    id: 3,
    country: "Australia",
    description: "Globally recognized qualifications, scholarships, and strong industry connections.",
    image: "/TopCountries/images/3.jpg",
    flag: "/TopCountries/flagLogos/3.png",
    alt: "New York Skyline",
  },
  {
    id: 4,
    country: "New Zealand",
    description: "High-quality education system, stunning landscapes, and work opportunities for international students.",
    image: "/TopCountries/images/4.png",
    flag: "/TopCountries/flagLogos/4.png",
    alt: "Grand Canyon",
  },
  {
    id: 5,
    country: "Italy",
    description: "Rich cultural heritage, prestigious universities, and opportunities in arts, fashion, and humanities.",
    image: "/TopCountries/images/5.jpg",
    flag: "/TopCountries/flagLogos/5.png",
    alt: "Statue of Liberty",
  },
  {
    id: 6,
    country: "United Kingdom",
    description: "Qualifications recognized worldwide, scholarships, and fee waivers for international students.",
    image: "/TopCountries/images/6.jpg",
    flag: "/TopCountries/flagLogos/6.png",
    alt: "Golden Gate Bridge",
  },
  {
    id: 7,
    country: "Ireland",
    description: "High standard of education, vibrant cultural scene, and post-study work opportunities.",
    image: "/TopCountries/images/7.png",
    flag: "/TopCountries/flagLogos/7.png",
    alt: "New York Skyline",
  },
  {
    id: 8,
    country: "France",
    description: "Renowned for arts and culture, prestigious institutions, and opportunities in fashion, culinary arts, and business.",
    image: "/TopCountries/images/8.jpg",
    flag: "/TopCountries/flagLogos/8.png",
    alt: "Grand Canyon",
  },
  {
    id: 9,
    country: "Indonesia",
    description: "Growing economy, diverse cultural experiences, and affordable education options.",
    image: "/TopCountries/images/9.jpg",
    flag: "/TopCountries/flagLogos/9.png",
    alt: "Statue of Liberty",
  },
  {
    id: 10,
    country: "Germany",
    description: "Strong economy, free or low-cost education, and opportunities in engineering, technology, and research.",
    image: "/TopCountries/images/10.jpg",
    flag: "/TopCountries/flagLogos/10.png",
    alt: "Golden Gate Bridge",
  },
  {
    id: 11,
    country: "Japan",
    description: "Advanced technology, high-quality education, and unique cultural experiences.",
    image: "/TopCountries/images/11.jpg",
    flag: "/TopCountries/flagLogos/11.png",
    alt: "New York Skyline",
  },
  {
    id: 12,
    country: "Sweden",
    description: "Innovative education system, focus on sustainability, and opportunities in technology and design.",
    image: "/TopCountries/images/12.jpg",
    flag: "/TopCountries/flagLogos/12.png",
    alt: "Grand Canyon",
  },
  {
    id: 13,
    country: "Netherland",
    description: "High-quality education, English-taught programs, and strong international focus.",
    image: "/TopCountries/images/13.jpg",
    flag: "/TopCountries/flagLogos/13.png",
    alt: "Statue of Liberty",
  },
  {
    id: 14,
    country: "Singapore",
    description: "Leading global financial hub, high standard of education, and multicultural environment.",
    image: "/TopCountries/images/14.jpg",
    flag: "/TopCountries/flagLogos/14.png",
    alt: "Golden Gate Bridge",
  },
  {
    id: 15,
    country: "United Arab Emirates",
    description: "Rapidly growing economy, luxurious lifestyle, and opportunities in business and technology.",
    image: "/TopCountries/images/15.jpg",
    flag: "/TopCountries/flagLogos/15.png",
    alt: "New York Skyline",
  },
  {
    id: 16,
    country: "Malta",
    description: "Advanced technology, high-quality education, and a vibrant cultural scene.",
    image: "/TopCountries/images/16.jpg",
    flag: "/TopCountries/flagLogos/16.png",
    alt: "Grand Canyon",
  },
  {
    id: 17,
    country: "South Korea",
    description: "Choose the best university, country & course with expert guidance, ensuring a clear academic & career",
    image: "/TopCountries/images/17.jpg",
    flag: "/TopCountries/flagLogos/17.png",
    alt: "Statue of Liberty",
  },
];

export default function UsaCard() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null); // Ref to store Swiper instance

  return (
    <section className="bg-white">
      <div className="container mx-auto py-20 relative text-center">
        <div className="mb-10 mx-7 space-y-3">
          <h1 className="font-bold text-2xl lg:text-[45px]">
            Choose from the <span className="text-[#CEB3FE]">Top Countries to Study Abroad</span>
          </h1>
          <h3 className="lg:text-[23px] text-lg text-[#1D1D1F] font-medium">
            Explore world-class education & career opportunities in the best study destinations.
          </h3>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
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
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="mySwiper"
        >
          {dummyData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-sm bg-[#FDFAFE] h-[60vh] lg:h-[70vh] rounded-2xl p-4 text-center flex flex-col justify-between">
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
                  <div>
                    <h2 className="text-[28px] font-extrabold text-gray-900">{card.country}</h2>
                    <p className="text-[#86868B] text-xl mt-2 px-2">{card.description}</p>
                  </div>
                  <a
                    href="#"
                    className="text-[#5D5FDC] text-xl font-extrabold mt-4 inline-block hover:underline "
                  >
                    Learn More
                  </a>
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
    </section>
  );
}