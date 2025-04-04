import React from 'react';
import { HiChevronRight } from "react-icons/hi";
import { Section3Images } from '../../utils/data1';

const HeroSection = () => {
  return (
    <section className="relative bg-black h-screen text-white overflow-hidden" id='hero-3'>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={Section3Images[0].image}
          alt="Background" 
          className="object-cover object-center w-full h-full" 
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Top Left Title */}
      

      {/* Main Text & Buttons */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full text-left max-w-5xl mx-auto px-6">
        <h2 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
          WE VALUE <br /> YOUR 
          <span className="text-[#ff4a2a] drop-shadow-xl"> DREAM</span>
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Get A Free Quote - <a href="#" className="underline">Click Here</a>
        </p>

        <div className="flex gap-4">
          <button className="bg-gray-800 text-white py-3 px-8 rounded-md text-lg font-medium flex items-center gap-2 transition hover:bg-gray-700">
            TALK TO EXPERT <HiChevronRight size={20} />
          </button>
          <button className="bg-gray-800 text-white py-3 px-8 rounded-md text-lg font-medium flex items-center gap-2 transition hover:bg-gray-700">
            QUOTATION <HiChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
