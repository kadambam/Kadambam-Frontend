import React from 'react';
import { HiChevronRight } from "react-icons/hi";
import { MdDownload, MdOutlineDesignServices } from 'react-icons/md';
import { RiLayout4Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const ServicesSection1 = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-left">
          <h2 className="top-4 left-10 text-3xl sm:text-4xl font-bold py-6">
            <span className="relative">
              Project Management <span className="absolute left-0 bottom-[-6px] w-full h-1 bg-[#ff4a2a]"></span>
            </span>
            <span className="text-[#ff4a2a]"> Consultancy Services</span>
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Service Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:w-1/2">
          {/* New Icon: Design Services */}
          <div className="bg-white text-[#ff4a2a] p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200">
            <MdOutlineDesignServices size={40} className="mb-4 text-[#ff4a2a]" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Design Consultancy</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Elevate your space with our expert design consultancy tailored to your lifestyle and vision.
            </p>
          </div>

          {/* New Icon: Layout Planning */}
          <div className="bg-white text-[#ff4a2a] p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200">
            <RiLayout4Line size={40} className="mb-4 text-[#ff4a2a]" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Layout Planning</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We plan your space smartly and functionally, ensuring optimized flow and purpose in every corner.
            </p>
          </div>
        </div>

        {/* Right Side: Text and Buttons */}
        <div className="text-left md:w-1/2">
          <p className="text-gray-600 mt-4 max-w-2xl">
            At Kadamban Project Management (PMC), we streamline every aspect of home building—from planning and design to execution and finishing. Our PMC services ensure seamless coordination, scheduling, and quality control, managing skilled craftsmen, laborers, and vendors to bring your vision to life. With a commitment to economical execution, quality excellence, and timely delivery, we create homes with precision and care, ensuring a stress-free experience.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* View More - Navigate to page2 */}
            <button
              className="bg-[#ff4a2a] text-white py-3 px-6 rounded-md text-lg font-medium flex items-center justify-center gap-2 transition hover:bg-opacity-90 w-full sm:w-auto"
              onClick={() => navigate('/page2')}
            >
              View More <HiChevronRight size={20} />
            </button>

            {/* Download File Button */}
            <button className="bg-[#ff4a2a] text-white py-3 px-6 rounded-md text-lg font-medium flex items-center justify-center gap-2 transition hover:bg-opacity-90 w-full sm:w-auto">
              Download File <MdDownload className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection1;
