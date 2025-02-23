import React from 'react';
import { HiChevronRight } from "react-icons/hi";
import { FaLeaf, FaRulerCombined } from "react-icons/fa";

const ServicesSection1 = () => {
  return (
    <section className="bg-white ">
      <div className="max-w-6xl mx-auto px-2 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:w-1/2">
          {/* Landscape Designing */}
          <div className="bg-white text-[#ff4a2a] p-8 rounded-lg shadow-lg border border-gray-200">
            <FaLeaf size={40} className="mb-4 text-[#ff4a2a]" />
            <h3 className="text-2xl font-bold mb-4">Landscape Designing</h3>
            <p className="text-gray-600">
              Create beautiful and sustainable outdoor spaces with our landscape design services...
            </p>
          </div>

          {/* Space Planning */}
          <div className="bg-white text-[#ff4a2a] p-8 rounded-lg shadow-lg border border-gray-200">
            <FaRulerCombined size={40} className="mb-4 text-[#ff4a2a]" />
            <h3 className="text-2xl font-bold mb-4">Space Planning</h3>
            <p className="text-gray-600">
              We maximize the potential of your space with smart and efficient space planning...
            </p>
          </div>
        </div>

        {/* Right Side: Text and Buttons */}
        <div className="text-left md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Comprehensive Design <br /> Solutions For Every Space
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Amar DeXign Scape is a multidisciplinary firm offering innovative and practical design solutions 
            for both residential and commercial projects. Our expertise spans various domains, ensuring 
            that every aspect of your space is thoughtfully crafted.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-[#ff4a2a] text-white py-3 px-8 rounded-md text-lg font-medium flex items-center gap-2 transition hover:bg-opacity-90">
              TALK TO EXPECT <HiChevronRight size={20} />
            </button>
            <button className="bg-[#ff4a2a] text-white py-3 px-8 rounded-md text-lg font-medium flex items-center gap-2 transition hover:bg-opacity-90">
              QUOTATION <HiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection1;