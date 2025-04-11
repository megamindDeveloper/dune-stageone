import Image from "next/image";
import React from "react";
import image from "../../../public/herobanner/homebanner.png";

function HeroBanner() {
  return (
    <div className="bg-[#F8F1FF]">
      {/* Navigation */}
      <div className="w-full flex justify-center items-center relative">
        <Image 
          src={image} 
          alt="image" 
          className="object-cover w-full lg:h-[100vh] h-[80vh] md:object-center sm:object-[30%_center] object-[60%_center]" 
        />
        <div className="absolute top-[20%] left-[10%]">
          <h1 className="lg:w-[40%] w-[60%] text-[30px] lg:text-[80px] lg:leading-24 font-bold text-[#AF9FFF]">Your Future Knows No Borders</h1>
          <button className="lg:px-6 lg:mt-7 mt-5 bg-black rounded-3xl py-1 px-3 lg:py-3 text-white">Let's Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
