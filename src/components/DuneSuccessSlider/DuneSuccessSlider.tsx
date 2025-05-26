"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Pause } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

interface SlideData {
  id: number;
  videoUrl: string;
  youtubeUrl: string;
  thumbnail?: string;
}

const DuneSuccessSlider: React.FC = () => {


  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  
  // Toggle play/pause
  const togglePlayPause = () => {
    const video = videoRefs.current[0];
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update progress based on video time
  const handleTimeUpdate = () => {
    const video = videoRefs.current[0];
    if (video) {
      const progressPercent = (video.currentTime / video.duration) * 100;
      setProgress(progressPercent);
    }
  };

  return (
    <div className="w-full mx-auto py-12 md:py-24 bg-white">
      <div className="text-center mb-8 lg:mb-14">
        <h1 className="text-2xl md:text-[44px] font-bold mb-5">
          Dune's Secret to <span className="text-purple-400">Success</span>
        </h1>
        <h3 className="lg:text-[23px] text-lg text-[#1D1D1F] font-medium">Real students, real experiences - see how Dune made studying abroad possible</h3>
      </div>

      <div className="relative">
        <div className="relative rounded-3xl w-full md:w-[65%] mx-auto overflow-hidden md:h-[60vh] lg:h-[70vh]">
          <div className="relative">
            <video 
              ref={(el) => {
                if (el) videoRefs.current[0] = el;
              }}
              poster="https://res.cloudinary.com/dvandhsai/image/upload/v1748235869/tjwamwp1yi36zwntg0xc.jpg" 
              className="rounded-3xl w-full h-full object-cover" 
              loop 
              playsInline 
              onTimeUpdate={handleTimeUpdate}
            >
              <source
                src="https://dl.dropboxusercontent.com/scl/fi/acvb1o4ojib1fuh9d0uah/Radhika-Dune.mp4?rlkey=jjvws23yhkvgeu6zj0fetuy5i&st=9rd2zwz9&dl=0"
                type="video/mp4"
              />
            </video>
            <div className="absolute bottom-4 md:bottom-8 lg:bottom-10 xl:bottom-1 w-full p-4 z-10 flex flex-row justify-end md:justify-between">
              <div className="hidden md:block">
                <svg width="180" height="41" viewBox="0 0 180 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M51.0342 1.58145C53.4942 2.23996 55.4276 4.17318 56.086 6.6332C57.276 11.0876 57.2808 20.3867 57.2808 20.3867C57.2808 20.3867 57.2808 29.6859 56.086 34.1403C55.4276 36.6003 53.4942 38.5335 51.0342 39.1919C46.58 40.3867 28.7106 40.3867 28.7106 40.3867C28.7106 40.3867 10.8415 40.3867 6.38708 39.1919C3.92708 38.5335 1.99387 36.6003 1.33536 34.1403C0.140625 29.6859 0.140625 20.3867 0.140625 20.3867C0.140625 20.3867 0.140625 11.0876 1.33536 6.6332C1.99387 4.17318 3.92708 2.23996 6.38708 1.58145C10.8415 0.386719 28.7106 0.386719 28.7106 0.386719C28.7106 0.386719 46.58 0.386719 51.0342 1.58145ZM37.837 20.3875L22.9922 28.9575V11.8174L37.837 20.3875Z"
                      fill="white"
                    />
                    <path
                      d="M69.3455 26.3929L62.9297 3.22266H68.5271L70.7755 13.7259C71.3493 16.313 71.7679 18.519 72.0407 20.344H72.2053C72.3935 19.0364 72.8169 16.8445 73.4707 13.7636L75.7989 3.22266H81.3963L74.9005 26.3929V37.5077H69.3409V26.3929H69.3455Z"
                      fill="white"
                    />
                    <path
                      d="M83.0809 36.7731C81.9521 36.0111 81.1477 34.8257 80.6679 33.2171C80.1929 31.6085 79.9531 29.4731 79.9531 26.8013V23.1653C79.9531 20.4701 80.2259 18.3018 80.7715 16.6697C81.3171 15.0375 82.1685 13.8428 83.3255 13.0949C84.4827 12.347 86.0019 11.9707 87.8835 11.9707C89.7367 11.9707 91.2183 12.3517 92.3377 13.1137C93.4525 13.8757 94.2709 15.0704 94.7883 16.6885C95.3057 18.3112 95.5645 20.4701 95.5645 23.1653V26.8013C95.5645 29.4731 95.3105 31.6179 94.8073 33.2359C94.3039 34.8587 93.4855 36.0441 92.3565 36.7919C91.2277 37.5399 89.6943 37.9161 87.7611 37.9161C85.7667 37.9207 84.2099 37.5351 83.0809 36.7731ZM89.4121 32.8503C89.7225 32.0319 89.8825 30.7007 89.8825 28.8475V21.0441C89.8825 19.2473 89.7273 17.9302 89.4121 17.1024C89.0969 16.2699 88.5467 15.8559 87.7563 15.8559C86.9945 15.8559 86.4535 16.2699 86.1431 17.1024C85.8279 17.935 85.6727 19.2473 85.6727 21.0441V28.8475C85.6727 30.7007 85.8231 32.0365 86.1243 32.8503C86.4253 33.6687 86.9661 34.0779 87.7563 34.0779C88.5467 34.0779 89.0969 33.6687 89.4121 32.8503Z"
                      fill="white"
                    />
                    <path
                      d="M113.767 37.5135H109.355L108.865 34.4467H108.743C107.544 36.7609 105.747 37.9179 103.348 37.9179C101.688 37.9179 100.46 37.3723 99.6698 36.2859C98.8796 35.1945 98.4844 33.4919 98.4844 31.1777V12.4617H104.124V30.8483C104.124 31.9679 104.246 32.7627 104.491 33.2379C104.736 33.7129 105.145 33.9527 105.719 33.9527C106.208 33.9527 106.678 33.8023 107.13 33.5013C107.581 33.2001 107.911 32.8191 108.132 32.3583V12.457H113.767V37.5135Z"
                      fill="white"
                    />
                    <path d="M129.087 7.7609H123.49V37.5115H117.972V7.7609H112.375V3.22656H129.087V7.7609Z" fill="white" />
                    <path
                      d="M142.696 37.5135H138.284L137.795 34.4467H137.673C136.473 36.7609 134.677 37.9179 132.278 37.9179C130.617 37.9179 129.39 37.3723 128.599 36.2859C127.809 35.1945 127.414 33.4919 127.414 31.1777V12.4617H133.054V30.8483C133.054 31.9679 133.176 32.7627 133.421 33.2379C133.665 33.7129 134.074 33.9527 134.648 33.9527C135.137 33.9527 135.608 33.8023 136.059 33.5013C136.511 33.2001 136.84 32.8191 137.061 32.3583V12.457H142.696V37.5135Z"
                      fill="white"
                    />
                    <path
                      d="M161.357 16.4631C161.014 14.8827 160.463 13.7397 159.702 13.0295C158.94 12.3192 157.891 11.9664 156.555 11.9664C155.52 11.9664 154.551 12.2581 153.653 12.846C152.754 13.434 152.058 14.2007 151.569 15.1555H151.527V1.95703H146.094V37.5073H150.75L151.324 35.1367H151.447C151.884 35.9833 152.538 36.6465 153.408 37.1405C154.278 37.6297 155.247 37.8743 156.31 37.8743C158.215 37.8743 159.622 36.9947 160.52 35.2401C161.418 33.4809 161.87 30.7387 161.87 27.0041V23.0389C161.87 20.2402 161.696 18.0436 161.357 16.4631ZM156.188 26.6841C156.188 28.5091 156.113 29.9391 155.962 30.9739C155.812 32.0087 155.562 32.7473 155.205 33.1799C154.852 33.6173 154.372 33.8337 153.775 33.8337C153.309 33.8337 152.881 33.7255 152.486 33.5045C152.091 33.2881 151.771 32.9589 151.527 32.5261V18.307C151.715 17.6249 152.044 17.0699 152.51 16.6325C152.971 16.195 153.479 15.9787 154.019 15.9787C154.593 15.9787 155.035 16.2044 155.346 16.6513C155.661 17.1028 155.877 17.8554 156 18.9185C156.122 19.9815 156.183 21.4913 156.183 23.4527V26.6841H156.188Z"
                      fill="white"
                    />
                    <path
                      d="M169.872 28.1281C169.872 29.7367 169.919 30.941 170.013 31.7454C170.107 32.5496 170.305 33.133 170.606 33.5046C170.907 33.8714 171.368 34.0548 171.993 34.0548C172.835 34.0548 173.419 33.7256 173.729 33.0718C174.044 32.418 174.214 31.3268 174.242 29.8028L179.105 30.0896C179.134 30.306 179.148 30.607 179.148 30.988C179.148 33.3022 178.513 35.0332 177.247 36.1762C175.982 37.3192 174.19 37.893 171.876 37.893C169.096 37.893 167.149 37.0228 166.034 35.2778C164.914 33.5328 164.359 30.8376 164.359 27.1874V22.813C164.359 19.0548 164.938 16.3078 166.095 14.5769C167.252 12.8459 169.232 11.9805 172.04 11.9805C173.974 11.9805 175.46 12.3332 176.495 13.0435C177.53 13.7537 178.259 14.8544 178.682 16.3549C179.105 17.8553 179.317 19.925 179.317 22.5683V26.8582H169.872V28.1281ZM170.587 16.322C170.3 16.6747 170.112 17.2533 170.013 18.0576C169.919 18.8619 169.872 20.0802 169.872 21.7171V23.514H173.997V21.7171C173.997 20.1084 173.941 18.8902 173.833 18.0576C173.724 17.2251 173.527 16.6418 173.24 16.2984C172.953 15.9598 172.511 15.7857 171.913 15.7857C171.311 15.7904 170.869 15.9692 170.587 16.322Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <div className="flex gap-4">
                <div>
                  <Link href="https://youtu.be/rv0KerNW4QE?si=ObYcwEiaqF0UD90P" target="_blank">
                    <button className="text-white bg-transparent rounded-full border-white border py-2 px-3 text-sm md:text-base md:py-2.5 md:px-4 hidden md:block cursor-pointer">
                      Watch the Full Video
                    </button>
                  </Link>
                </div>
                <div className="cursor-pointer" onClick={togglePlayPause}>
                  <svg width="40" height="40" viewBox="0 0 50 50" className="md:w-[50px] md:h-[50px]">
                    <circle cx="25" cy="25" r="22" stroke="#ffff" strokeWidth="2" fill="none" opacity="0.3" />
                    <circle
                      cx="25"
                      cy="25"
                      r="22"
                      stroke="#ffffff"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray={138}
                      strokeDashoffset={(1 - progress / 100) * 138}
                      strokeLinecap="round"
                      className="transition-all duration-100"
                      transform="rotate(-90 25 25)"
                    />
                    <foreignObject x="9" y="8" width="32" height="32">
                      <button className="w-full h-full cursor-pointer flex items-center justify-center" aria-label={isPlaying ? "Pause" : "Play"}>
                        {isPlaying ? (
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="md:w-[37px] md:h-[37px]"
                          >
                            <rect x="0.5" y="0.851562" width="36" height="36" rx="18" fill="#E8E8ED" />
                            <path
                              d="M15.25 11.8516H13.75C12.9216 11.8516 12.25 12.5231 12.25 13.3516V24.3516C12.25 25.18 12.9216 25.8516 13.75 25.8516H15.25C16.0784 25.8516 16.75 25.18 16.75 24.3516V13.3516C16.75 12.5231 16.0784 11.8516 15.25 11.8516Z"
                              fill="black"
                              fillOpacity="0.56"
                            />
                            <path
                              d="M23.25 11.8516H21.75C20.9216 11.8516 20.25 12.5231 20.25 13.3516V24.3516C20.25 25.18 20.9216 25.8516 21.75 25.8516H23.25C24.0784 25.8516 24.75 25.18 24.75 24.3516V13.3516C24.75 12.5231 24.0784 11.8516 23.25 11.8516Z"
                              fill="black"
                              fillOpacity="0.56"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="md:w-[37px] md:h-[37px]"
                          >
                            <rect x="0.140625" y="0.261719" width="36" height="36" rx="18" fill="#E8E8ED" />
                            <path
                              d="M13.1441 23.5118V13.0318C13.1184 12.8282 13.1366 12.6214 13.1974 12.4254C13.2582 12.2293 13.3602 12.0485 13.4965 11.8951C13.6329 11.7417 13.8005 11.6192 13.9881 11.5359C14.1756 11.4525 14.3789 11.4102 14.5841 11.4118C14.9776 11.3951 15.3663 11.5036 15.6941 11.7218L24.2241 16.7218C24.9841 17.1618 25.3941 17.5218 25.3941 18.2318C25.3941 18.9418 24.9841 19.3018 24.2241 19.7418L15.6941 24.7418C15.3663 24.9601 14.9776 25.0686 14.5841 25.0518C14.3854 25.0554 14.1882 25.0171 14.0052 24.9396C13.8222 24.8621 13.6575 24.7471 13.5218 24.6019C13.3861 24.4568 13.2823 24.2847 13.2173 24.097C13.1522 23.9092 13.1273 23.7099 13.1441 23.5118Z"
                              fill="black"
                              fillOpacity="0.56"
                            />
                          </svg>
                        )}
                      </button>
                    </foreignObject>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuneSuccessSlider;
