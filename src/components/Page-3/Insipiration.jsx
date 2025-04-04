import React from 'react';
import { HiChevronRight } from "react-icons/hi";
import { Download } from 'lucide-react';

const InspirationSection = () => {
  return (
    <section className="p-4 max-w-6xl mx-auto mt-10 ">
      <h2 className="top-4 left-10 text-4xl font-bold py-6">
            <span className="relative">
              Our <span className="absolute left-0 bottom-0 w-full h-1 bg-[#ff4a2a]"></span>
            </span>
            <span className="text-[#ff4a2a]"> recent Projects</span>
          </h2>

      <div className="grid grid-cols-12 gap-3">
        {/* Row 1 */}
        <div className="col-span-6 relative">
          <img
            src="https://picsum.photos/600/400"
            alt="Living Room"
            className="w-full h-full rounded-lg object-cover"
          />
          <p className="text-white bg-black bg-opacity-50 p-1 text-xs absolute bottom-2 left-2 rounded">Living Room</p>
        </div>
        <div className="col-span-3 relative">
          <img
            src="https://picsum.photos/300/400"
            alt="Master Bedroom"
            className="w-full h-full rounded-lg object-cover"
          />
          <p className="text-white bg-black bg-opacity-50 p-1 text-xs absolute bottom-2 left-2 rounded">Master Bedroom</p>
        </div>
        <div className="col-span-3 relative">
          <img
            src="https://picsum.photos/300/400"
            alt="False Ceiling"
            className="w-full h-full rounded-lg object-cover"
          />
          <p className="text-white bg-black bg-opacity-50 p-1 text-xs absolute bottom-2 left-2 rounded">False Ceiling</p>
        </div>

        {/* Row 2 */}
        <div className="col-span-4 relative">
          <img
            src="https://picsum.photos/400/300"
            alt="Dining Room"
            className="w-full h-full rounded-lg object-cover"
          />
          <p className="text-white bg-black bg-opacity-50 p-1 text-xs absolute bottom-2 left-2 rounded">Dining Room</p>
        </div>
        <div className="col-span-5 relative">
          <img
            src="https://picsum.photos/500/300"
            alt="Kitchen"
            className="w-full h-full rounded-lg object-cover"
          />
          <p className="text-white bg-black bg-opacity-50 p-1 text-xs absolute bottom-2 left-2 rounded">Kitchen</p>
        </div>
        <div className="col-span-3 relative">
          <img
            src="https://picsum.photos/300/300"
            alt="Wardrobe"
            className="w-full h-full rounded-lg object-cover"
          />
          <p className="text-white bg-black bg-opacity-50 p-1 text-xs absolute bottom-2 left-2 rounded">Wardrobe</p>
        </div>
        
      </div>
      <div className="insp-btn-container flex gap-16 justify-center mt-5">
          <button className="bg-[#ff4a2a] text-white py-3 px-8 rounded-md text-lg font-medium flex items-center gap-2 transition hover:bg-opacity-90">
                        BOOK AN APPOINTMENT <HiChevronRight size={20} />
                      </button>
                      <button className="bg-[#ff4a2a] text-white py-3 px-8 rounded-md text-lg font-medium flex items-center gap-2 transition hover:bg-opacity-90">
                       MORE PROJECT <Download size={20} />
                      </button>
        </div>
    </section>
  );
};

export default InspirationSection;
