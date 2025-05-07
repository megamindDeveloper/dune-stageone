"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Pause } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideData {
  id: number;
  videoUrl: string;
}

const DuneSuccessSlider: React.FC = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides: SlideData[] = [
    { id: 1, videoUrl: "https://www.youtube.com/watch?v=Lv8BD8xefJs" },
    { id: 2, videoUrl: "https://www.youtube.com/watch?v=Lv8BD8xefJs" },
    { id: 3, videoUrl: "https://www.youtube.com/watch?v=Lv8BD8xefJs" },
    { id: 4, videoUrl: "https://www.youtube.com/watch?v=Lv8BD8xefJs" },
  ];

  const getVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <div className="w-full mx-auto py-24 bg-white">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-[44px] font-bold mb-2">
          Dune’s Secret to <span className="text-purple-400">Success</span>
        </h1>
        <p className="text-gray-600">Real students, real experiences - see how Dune made studying abroad possible</p>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={"auto"}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination-inner",
          }}
          className="pb-12"
        >
          {/* Swiper slides here */}
          {slides.map((slide) => {
            const videoId = getVideoId(slide.videoUrl);
            return (
              <SwiperSlide key={slide.id} className="!w-[65%]">
                <div className="relative rounded-3xl overflow-hidden h-[55vh] lg:h-[70vh] ">
                  <div className="w-full h-full">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?controls=1`}
                      className="w-full h-[85%] lg:h-[90%] absolute top-0 left-0 rounded-4xl"
                      frameBorder="0"
                      title={`Dune Success Story Video ${slide.id}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0  p-6 mb-16 flex flex-col justify-between">
                    <div className="text-white text-2xl font-bold w-3/4 leading-snug"></div>
                    <div className="flex items-center justify-between">
                      <div className="bg-white/20 rounded-full p-2">
                        <Pause className="text-white w-5 h-5" />
                      </div>
                      <button aria-label="Watch the Full Video"  className="bg-white text-sm lg:px-4 lg:py-2 px-2 py-2 rounded-full font-medium shadow-md">Watch the Full Video</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          {/* Navigation Buttons */}

          {/* Navigation Buttons - Bottom Left */}
          <div className="absolute top-[88%] lg:bottom-[-14]  left-0 lg:left-[19%] flex gap-2 z-10 p-4">
            <button ref={prevRef} aria-label="Previous slide"  className="cursor-pointer bg-[#D2D2D7] text-gray-800 p-2 rounded-full shadow-md transition duration-300">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button ref={nextRef}   aria-label="Next slide" className="cursor-pointer bg-[#D2D2D7] text-gray-800 p-2  rounded-full shadow-md transition duration-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Custom Pagination - Bottom Right */}
          <div className="absolute top-[90%]  z-10 p-4 right-[0%] lg:right-[19%] ">
            <div className="custom-swiper-pagination-inner flex items-center gap-2 bg-purple-300/60 px-4 py-2 rounded-full" />
          </div>
        </Swiper>
      </div>

      {/* Swiper Pagination (built-in) */}
    </div>
  );
};

export default DuneSuccessSlider;
