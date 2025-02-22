import React from 'react';
import img from '/img.png'; // Ensure the path is correct

const LongImg = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div 
        className="relative w-[1000px] h-[200px] bg-cover bg-center rounded-lg shadow-lg"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Overlay (optional) */}
        <div className="absolute inset-0 bg-black/30 rounded-lg"></div>

        {/* Get Started Button */}
        <button 
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-[#ff4a2a] text-white rounded-full font-semibold hover:bg-[#e03e20] transition"
          onClick={() => console.log('Button clicked!')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LongImg;
