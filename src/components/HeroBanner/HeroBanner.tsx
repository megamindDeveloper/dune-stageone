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
          className="object-cover w-full lg:h-[100vh] h-[80vh] md:object-center sm:object-[30%_center] object-[63%_center]" 
        />
        <div className="absolute top-[15%] left-[10%]">
          <h1 className=" w-[60%] text-[40px] font-extrabold lg:text-[100px] leading-[1] lg:leading-24  text-[#AF9FFF]">Your Future Knows No Borders</h1>
          <button className="lg:px-6 lg:mt-7 mt-5 bg-black rounded-3xl py-2 px-4  text-xl lg:text-[26px] lg:py-3 text-white">Let's Get Started</button>
         <div className="mt-5 md:hidden">
        <p className="text-[16px] w-[40%] text-[#29357299] md:text-[18px]">For Free <br /> Counselling Contact</p>
        <p className="text-[20px] font-bold text-[#293572] md:text-[18px]">+91 879 235 8999</p>
      </div>
      </div> 
      </div>
    </div>
  );
}

export default HeroBanner;
