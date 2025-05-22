import Image from "next/image";
import React from "react";

const CertifiedExelence = () => {
  const rowOne = ["/CertifiedExelence/1.svg", "/CertifiedExelence/2.svg", "/CertifiedExelence/3.svg"];
  const rowTwo = ["/CertifiedExelence/4.svg", "/CertifiedExelence/5.svg", "/CertifiedExelence/6.svg"];
  return (
    <section className="bg-white overflow-hidden py-32 pt-10">
      <div className="mx-10 lg:mx-32">
        <h1 className="lg:text-[45px] text-[23px] font-bold my-10 text-center">
          <span className="text-[#CEB3FE]">Certified</span> for Excellence
        </h1>
        <div className="flex justify-center gap-3">
          {rowOne.map((item,index) => {
            return <Image key={index} src={item} alt={item} width={100} height={100} className="w-[20%] lg:h-[30vh]" />;
          })}
        </div>
        <div className="flex justify-center ">
          {rowTwo.map((item,index) => {
            return <Image key={index} src={item} alt={item} width={100} height={100} className="w-[20%] lg:h-[30vh] " />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CertifiedExelence;
