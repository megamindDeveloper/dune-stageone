"use client"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"

export default function ServiceSteps() {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />)

  return (
    <div className="w-full  py-20 bg-[#FDFAFE]">
      <h2 className="max-w-7xl text-center mx-auto text-2xl md:text-[44px] font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        We've Got You Covered,<span className="text-[#CEB3FE]">From Application to Arrival</span>
      </h2>
      <Carousel items={cards} />
    </div>
  )
}

const data = [
  {
    category:
      "Choose the best university, country & course with expert guidance, ensuring a clear academic & career path through summer programs & short-term internships.",
    title: "Choosing the Right Path",
    src: "/serviceCardImages/image1.webp",
    features: [
      "University, Country & Course Selection",
      "Pathway Planning",
      "Summer Programs & Short-Term Intern Courses",
    ],
  },
  {
    category:
      "Strengthen your academic profile with career counseling, test preparation, internship support & seamless academic credit transfers.",
    title: "Build a Strong Foundation",
    src: "/serviceCardImages/image2.webp",
    features: ["Career Counseling & Profile Evaluation", "Test Preparation (IELTS, TOEFL, GRE, GMAT, SAT)", "Internship Assistance","Academic Credit Transfer Program Assistance"],
  },
  {
    category:
      "Access scholarships, secure education loans & ensure smooth international fee transfers for a stress-free financial journey.",
    title: "Fund Your Dreams",
    src: "/serviceCardImages/image3.webp",
    features: ["Study Metro Scholarship & University Funding Opportunities", "Education Loan Assistance", "Fees Transfer Assistance"],
  },
  {
    category: "Navigate visa applications, ace interviews & book flights effortlessly with expert assistance.",
    title: "Your Journey Made Easy",
    src: "/serviceCardImages/image4.webp",
    features: ["Visa Interview Training & E-Visa Learning", "Flight Ticket Booking"],
  },
  {
    category: "Prepare for your new adventure with pre-departure briefings, post-arrival support & accommodation assistance.",
    title: "Settle In with Confidence",
    src: "/serviceCardImages/image5.webp",
   
    features: ["Pre-Departure Briefing", "Post-Arrival Assistance & Services", "Accommodation Assistance"],
  }
]

