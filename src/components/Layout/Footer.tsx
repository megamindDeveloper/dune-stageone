import Image from "next/image";
import React from "react";
import logo from "../../../public/icons/footer.svg";
import logo2 from "../../../public/icons/footer2.svg";

import { LinkedIn, Yt, Meta, Inatagram } from "../../../public/icons/footerIcons/Icons";

const Footer = () => {
  return (
    <div className="bg-[#2B2B60]">
      <div className="flex flex-col md:flex-row justify-between mx-6 md:mx-24 py-8 md:py-14">
        <div className="flex justify-center  gap-5 md:justify-start mb-6 md:mb-0">
          <Image alt={logo} width={210} height={210} src="./icons/footer.svg" />

          <Image alt={logo2} width={240} height={240} src="./icons/footer2.svg" className="hidden md:block" />
        </div>
        <div className="flex justify-center  gap-5 md:justify-start mb-6 md:mb-0">
          <Image alt={logo2} width={240} height={240} src="./icons/footer2.svg" className="md:hidden" />
        </div>
        <div className="text-center md:text-right">
          <p className="text-[14px] text-[#FEFEFE] md:text-[18px]">For Free Counselling Contact</p>
          <p className="text-[14px] font-semibold text-[#FEFEFE] md:text-[18px]">+91 879 235 8999</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mx-6 md:mx-24 pt-6 md:pt-9 pb-8 md:pb-14">
        <div className="flex justify-center md:justify-start gap-4 mb-4 md:mb-0">
          <Inatagram />
          <LinkedIn />
          <Meta />
          <Yt />
        </div>
        <div className="text-[#9583FE] text-[13px] text-center md:text-left mb-4 md:mb-0">
          <p>
            <span>Privacy Policy</span>
            <span className="mx-2">.</span>
            <span>Terms of Use</span>
          </p>
        </div>
        <div className="text-[#9583FE] text-[13px] text-center md:text-right">
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
