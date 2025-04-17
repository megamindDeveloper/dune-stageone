import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavIcon2 } from "../../../public/icons/icon";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#faf2fe] md:px-24">
      {/* Left Section: Icon and Title */}
      <Link href="/">
        <div className="flex cursor-pointer items-center mx-4 md:mx-0 space-x-3">
          {/* Icon Placeholder */}
          <div className="w-10 h-10 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-bold">
            <Image alt="logo" src="/icons/navicon.svg" width={32} height={32} className="md:w-10 md:h-10" />
          </div>
          {/* Title */}
          <div>
            <h1 className="text-xl font-extrabold text-[#2B2B60] md:text-3xl">Dune</h1>
            <p className="text-[8px]  w-full text-[#6460AA] md:text-[10px]">Study Abroad Consulting</p>
          </div>
          <div className="border-l-2 border-[#00000033]"><NavIcon2/></div>
          
        </div>
      </Link>

      {/* Right Section: Contact Info */}
      <div className="text-right hidden md:block">
        <p className="text-[14px] text-[#29357299] md:text-[18px]">For Free Counselling Contact</p>
        <p className="text-[14px] font-semibold text-[#293572] md:text-[18px]">+91 879 235 8999</p>
      </div>
    </nav>
  );
};

export default Navbar;
