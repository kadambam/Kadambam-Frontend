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

      {/* Main Text & Buttons */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full text-left max-w-5xl  px-6 md:pl-12 lg:pl-20">
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold leading-tight mb-6">
          WE VALUE <br className="hidden sm:block" /> YOUR
          <span className="text-[#ff4a2a] drop-shadow-xl"> DREAM</span>
        </h2>
        <p className="text-base sm:text-lg md:text-[17px] text-gray-300 mb-12">
          Get A Free Quote - <a href="https://wa.me/919043672462" className="underline">Click Here</a>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="tel:+919043672462">
            <button className="bg-gray-800 text-white py-3 px-6 rounded-md text-base sm:text-lg font-medium flex items-center justify-center gap-2 transition hover:bg-gray-700 w-full sm:w-auto">
              TALK TO EXPERT <HiChevronRight size={20} />
            </button>
          </a>

          <a href="https://wa.me/919043672462" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-800 text-white py-3 px-6 rounded-md text-base sm:text-lg font-medium flex items-center justify-center gap-2 transition hover:bg-gray-700 w-full sm:w-auto">
              QUOTATION <HiChevronRight size={20} />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
