import Image from 'next/image';
import React from 'react';
import image from '../../../public/herobanner/homebanner.png'

function HeroBanner() {
  return (
    <div className="min-h-screen bg-[#F8F1FF]">
      {/* Navigation */}
      <nav className="p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
           
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#6B4EFF]">Dune</span>
              <span className="text-xs text-[#6B4EFF]/80">Study Abroad Consulting</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-[#6B4EFF]/80">For Free Counselling Contact</p>
            <p className="text-lg font-semibold text-[#6B4EFF]">+91 879 235 8999</p>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-full mx-auto  pt-12">
        <div className="flex flex-col items-center text-center">
         
          
          <div className="relative w-full l">
       
              <Image src={image} alt="image" className='object-cover w-full h-[100vh]'/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HeroBanner;