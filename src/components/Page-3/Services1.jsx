import React from 'react';
import { HiChevronRight } from "react-icons/hi";
import { FaLeaf, FaRulerCombined } from "react-icons/fa";
import { MdDownload } from 'react-icons/md'; 


const ServicesSection1 = () => {
  return (
    <section className="bg-white ">
        <div className="max-w-6xl mx-auto px-2 flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="text-left">
                 <h2 className="top-4 left-10 text-4xl font-bold py-6">
                   <span className="relative">
                   Project Management <span className="absolute left-0 bottom-[-4px] w-full h-1 bg-[#ff4a2a]"></span>
                   </span>
                   <span className="text-[#ff4a2a]"> Consultancy Services</span>
                 </h2>
                
               </div>
               </div>
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
          
          <p className="text-gray-600 mt-4 max-w-2xl">
          At Kadamban Project Management (PMC), we streamline every aspect of home building—from planning and design to execution and finishing. Our PMC services ensure seamless coordination, scheduling, and quality control, managing skilled craftsmen, laborers, and vendors to bring your vision to life. With a commitment to economical execution, quality excellence, and timely delivery, we create homes with precision and care, ensuring a stress-free experience.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-[#ff4a2a] text-white py-3 px-8 rounded-md text-lg font-medium flex items-center gap-2 transition hover:bg-opacity-90">
              View More <HiChevronRight size={20} />
            </button>
            <button className="bg-[#ff4a2a] text-white py-3 px-8 rounded-md text-lg font-medium flex items-center gap-2 transition hover:bg-opacity-90">
              Download File <MdDownload className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection1;