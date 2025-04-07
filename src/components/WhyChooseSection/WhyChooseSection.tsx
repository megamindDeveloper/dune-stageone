import React from "react";
import Image from "next/image";

export function WhyChooseSection() {
  return (
    <div className=" mx-auto px-24 py-16 grid grid-cols-1 lg:grid-cols-2 gap-28 bg-[#FDFAFE]">
      {/* Left Column - Text Content */}
      <div className="space-y-8 ">
        <div>
          <h2 className="text-3xl font-bold text-gray-900  md:text-5xl ">
            Why Choose
            <span className="block text-[#CEB3FE]">to Study Abroad</span>
          </h2>
        </div>

        <p className="text-[#86868B] text-xl leading-relaxed">
          Studying abroad isn't just about earning a degree—it's about unlocking global opportunities, gaining a world-class education, & experiencing
          life from a new perspective. Whether it's accessing top-ranked universities, building a global network, or enhancing career prospects, the
          right study destination can shape your future.
        </p>

        <p className="text-[#86868B] text-xl leading-relaxed">
          At Dune, we make this journey seamless. With expert guidance, personalized university selection, & end-to-end support, we ensure you make
          the best choice for your aspirations. Your dream of studying abroad starts here—with the right partner by your side.
        </p>

        <div className="space-y-6 mt-32 w-[28rem] ml-5">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-transparent rounded-lg">
              <Image
                src="/whyChooseSectionImages/hand.svg"
                width={100}
                height={100}
                alt="Graduate celebrating"
                className="rounded-lg w-full h-10 object-cover"
              />
            </div>
            <div>
              <h3 className="text-[#86868B] text-xl font-extrabold">Personalized Support</h3>
              <p className="text-[#86868B] text-xl ">Tailored guidance from university selection to visa approval.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-transparent rounded-lg">
              <Image
                src="/whyChooseSectionImages/hassle.svg"
                width={100}
                height={400}
                alt="Graduate celebrating"
                className="rounded-lg w-full h-10 object-cover"
              />
            </div>
            <div>
              <h3 className="text-[#86868B] text-xl font-extrabold">Hassle-Free Process</h3>
              <p className="text-[#86868B] text-xl">Expert handling of applications, scholarships, & visas.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Image Grid */}
      <div className="relative grid grid-cols-2 gap-4">
        <Image
          src="/whyChooseSectionImages/image1.png"
          width={200}
          height={400}
          quality={100}
          alt="Graduate celebrating"
          className="rounded-lg w-full object-contain"
        />
        <Image
          src="/whyChooseSectionImages/image2.png"
          alt="Student studying in library"
          width={200}
          height={200}
          quality={100}
          className="rounded-lg w-full h-[40%] object-cover mt-26"
        />
        <Image
          src="/whyChooseSectionImages/image3.png"
          alt="Student exploring city"
          width={200}
          height={400}
          quality={100}
          className="rounded-lg w-full object-contain"
        />
        <Image
          src="/whyChooseSectionImages/image4.png"
          alt="Student in cafe"
          width={200}
          height={400}
          quality={100}
          className="rounded-lg w-full h-[150%] object-cover mt-[-18rem]"
        />
      </div>
    </div>
  );
}
