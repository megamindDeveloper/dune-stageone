import React from "react";
import {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Eleven,
  Twelve,
  Thirteen,
  Fourteen,
  Fifteen,
  Sixteen,
} from "../../../public/icons/icon";

// Define interfaces for type safety
interface Item {
  text: string;
  icon: React.ReactNode;
}

interface SectionData {
  title: string;
  items: Item[];
}

// Define the sections data with explicit types
const sections: SectionData[] = [
  {
    title: "Academic & Career Planning",
    items: [
      { text: "University, Country & Course Selection", icon: <One /> },
      { text: "Pathway Planning (foundation, pathway or transfer routes)", icon: <Two /> },
      { text: "Career Counselling & Profile Evaluation", icon: <Three /> },
      { text: "Summer Programs & Short-Term Intern Courses (skill-building or exploratory)", icon: <Four /> },
    ],
  },
  {
    title: "Admissions & Test Preparation",
    items: [
      { text: "University, Country & Course Selection", icon: <Five /> },
      { text: "Pathway Planning (foundation, pathway or transfer routes)", icon: <Six /> },
      { text: "Career Counselling & Profile Evaluation", icon: <Seven /> },
    ],
  },
  {
    title: "Funding & Payments",
    items: [
      { text: "University, Country & Course Selection", icon: <Eight /> },
      { text: "Pathway Planning (foundation, pathway or transfer routes)", icon: <Nine /> },
      { text: "Career Counselling & Profile Evaluation", icon: <Ten /> },
    ],
  },
  {
    title: "Visa, Travel & Compliance Support",
    items: [
      { text: "Visa Interview Training & E‑Visa Guidance", icon: <Eleven /> },
      { text: "Flight Ticket Booking & Logistical Assistance", icon: <Twelve /> },
    ],
  },
  {
    title: "Pre‑Departure Orientation",
    items: [
      { text: "Pre‑Departure Briefing (culture, health, insurance, packing)", icon: <Thirteen /> },
      { text: "Galvanise Global Education", icon: <Fourteen /> },
    ],
  },
  {
    title: "Post‑Arrival & Settlement",
    items: [
      { text: "Post‑Arrival Assistance & Services", icon: <Fifteen /> },
      { text: "Accommodation Assistance (campus or private housing)", icon: <Sixteen /> },
    ],
  },
];

// Define props interface for the Section component
interface SectionProps {
  title: string;
  items: Item[];
}

// Reusable Section component with typed props
const Section: React.FC<SectionProps> = ({ title, items }) => (
  <div className="mx-auto">
    <h1 className="text-xl font-medium mb-5">{title}</h1>
    <ul className="space-y-7">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 text-[16px] font-bold text-[#9583FE]">
          {item.icon}
          {item.text}
        </li>
      ))}
    </ul>
  </div>
);

// Main component
const ExpertCounselling: React.FC = () => {
  return (
    <section className="bg-white w-full py-20">
      <div className=" mx-10 lg:mx-32">
        <div className="flex  flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-3 justify-start">
            <h1 className="text-xl  font-bold text-[#B298FE]">
              Free for a Limited Period <span className="text-[#BDBEC2]">₹999/-</span>
            </h1>
            <h2 className="font-bold text-xl lg:text-[36px]">Book Your Expert Counselling Session Today!</h2>
          </div>
          <div>
            <button className="bg-black cursor-pointer text-white text-xl lg:text-[26px] font-bold px-8 py-3 rounded-4xl">Book Now for Free</button>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF1FD] mt-10 py-20">
        <div className="mx-10 lg:mx-32">
          <h1 className="font-bold text-center mb-10 lg:mb-24 text-[23px] lg:text-[45px]">
            We've Got You Covered, <span className="text-[#CEB3FE]">From Application to Arrival</span>
          </h1>
          <div className="grid  grid-cols-1 lg:grid-cols-3 gap-10">
            {sections.slice(0, 3).map((section, index) => (
              <Section key={index} title={section.title} items={section.items} />
            ))}
          </div>
          <div className="grid  grid-cols-1 lg:grid-cols-3 gap-10 mt-32">
            {sections.slice(3).map((section, index) => (
              <Section key={index} title={section.title} items={section.items} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertCounselling;
