import React from 'react';
import { HiChevronRight } from "react-icons/hi";
import { Download } from 'lucide-react';
import { Page3Sec8Images } from '../../utils/data1';

const InspirationSection = () => {
  return (
    <section className="p-4 max-w-6xl mx-auto mt-10">
      <h2 className="top-4 left-10 text-3xl sm:text-4xl font-bold py-6">
        <span className="relative">
          Our <span className="absolute left-0 bottom-0 w-full h-1 bg-[#ff4a2a]"></span>
        </span>
        <span className="text-[#ff4a2a]"> recent Projects</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3">
        {/* Row 1 */}
        <div className="col-span-12 md:col-span-6 relative mobile-aspect-video">
          <img
            src={Page3Sec8Images[0].image}
            alt="Living Room"
            className="w-full h-full rounded-lg object-cover sm:aspect-auto"
          />
          <p className="text-white bg-black bg-opacity-50 p-1 text-xs absolute bottom-2 left-2 rounded">Living Room</p>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 relative mobile-aspect-video">
          <img
            src={Page3Sec8Images[1].image}
            alt="Master Bedroom"
            className="w-full h-full rounded-lg object-cover sm:aspect-auto"
          />
          <p className="text-white bg-black bg-opacity-50 p-1 text-xs absolute bottom-2 left-2 rounded">Master Bedroom</p>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 relative mobile-aspect-video">
          <img
            src={Page3Sec8Images[2].image}
            alt="False Ceiling"
            className="w-full h-full rounded-lg object-cover sm:aspect-auto"
          />
          <p className="text-white bg-black bg-opacity-50 p-1 text-xs absolute bottom-2 left-2 rounded">False Ceiling</p>
        </div>

        {/* Row 2 */}
        <div className="col-span-12 sm:col-span-6 md:col-span-4 relative mobile-aspect-video">
          <img
            src={Page3Sec8Images[3].image}
            alt="Dining Room"
            className="w-full h-full rounded-lg object-cover sm:aspect-auto"
          />
          <p className="text-white bg-black bg-opacity-50 p-1 text-xs absolute bottom-2 left-2 rounded">Dining Room</p>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-5 relative mobile-aspect-video">
          <img
            src={Page3Sec8Images[4].image}
            alt="Kitchen"
            className="w-full h-full rounded-lg object-cover sm:aspect-auto"
          />
          <p className="text-white bg-black bg-opacity-50 p-1 text-xs absolute bottom-2 left-2 rounded">Kitchen</p>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 relative mobile-aspect-video">
          <img
            src={Page3Sec8Images[5].image}
            alt="Wardrobe"
            className="w-full h-full rounded-lg object-cover sm:aspect-auto"
          />
          <p className="text-white bg-black bg-opacity-50 p-1 text-xs absolute bottom-2 left-2 rounded">Wardrobe</p>
        </div>
      </div>
      <div className="mt-5 flex flex-col sm:flex-row gap-4 sm:gap-16 justify-center">
        <button className="bg-[#ff4a2a] text-white py-3 px-8 rounded-md text-lg font-medium flex items-center justify-center gap-2 transition hover:bg-opacity-90 w-full sm:w-auto">
          BOOK AN APPOINTMENT <HiChevronRight size={20} />
        </button>
        <button className="bg-[#ff4a2a] text-white py-3 px-8 rounded-md text-lg font-medium flex items-center justify-center gap-2 transition hover:bg-opacity-90 w-full sm:w-auto">
          MORE PROJECT <Download size={20} />
        </button>
      </div>
    </section>
  );
};

export default InspirationSection;