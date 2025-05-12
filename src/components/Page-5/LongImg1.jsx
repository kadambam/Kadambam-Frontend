import React from 'react';
import longimg from "/longimg.png";
import longimgm from "/longimgm.png";

const LongImg1 = () => {
  return (
    <div className="flex justify-center items-center p-5">
      <div 
        className={`
          relative w-[1300px] h-[200px] rounded-lg shadow-lg bg-cover bg-center
          bg-[url('/longimgm.png')] sm:bg-[url('/longimg.png')]
        `}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 rounded-lg" />

        {/* Get Started Button */}
        <a 
          href="https://wa.me/919043672462"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-[#ff4a2a] text-white rounded-full font-semibold hover:bg-[#e03e20] transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default LongImg1;
