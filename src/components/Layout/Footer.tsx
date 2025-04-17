import Image from "next/image";
import React from "react";
import logo from "../../../public/icons/footer.svg";
import logo2 from "../../../public/icons/footer2.svg";

import { LinkedIn, Yt, Meta, Inatagram } from "../../../public/icons/footerIcons/Icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#2B2B60]">
      <div className="flex flex-col md:flex-row justify-between mx-6 md:mx-24 py-8 md:py-14">
        <div className="flex justify-center  gap-5 md:justify-start mb-6 md:mb-0">
          <Link href="/"><Image alt={logo} width={210} height={210} src="./icons/footer.svg" /></Link>

          <Image alt={logo2} width={240} height={240} src="./icons/footer2.svg" className="hidden md:block" />
        </div>
        <div className="flex justify-center  gap-5 md:justify-start mb-6 md:mb-0">
          <Image alt={logo2} width={240} height={240} src="./icons/footer2.svg" className="md:hidden" />
        </div>
        <div className="text-center md:text-right">
          <p className="text-[14px] text-[#FEFEFE] md:text-[18px]">For Free Counselling Contact</p>
          <Link href="tel:+918792358999" ><p className="text-[14px] font-semibold text-[#FEFEFE] md:text-[18px]">+91 879 235 8999</p></Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mx-6 md:mx-24 pt-6 md:pt-9 pb-8 md:pb-14">
        <div className="flex justify-center md:justify-start gap-4 mb-4 md:mb-0">
          <Link target="_blank" href="https://www.instagram.com/studymetro_mangalore?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><Inatagram /></Link>
          <Link target="_blank" href="https://www.instagram.com/studymetro_mangalore?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><LinkedIn /></Link>
          <Link target="_blank" href="https://www.facebook.com/studymetro.abroad"><Meta /></Link>
          <Link target="_blank" href="https://www.youtube.com/channel/UC_EjChebrWmyKsId3cMt-Rw"><Yt /></Link>
        </div>
        <div className="text-[#9583FE] text-[13px] text-center md:text-left mb-4 md:mb-0">
          <p>
          <Link target="_blank" href="https://www.studymetro.com/Privacy"><span>Privacy Policy</span></Link>
            <span className="mx-2">.</span>
            <Link target="_blank" href="https://www.studymetro.com/TermsCondition"><span>Terms of Use</span></Link>
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
