import React, { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import sampimg from "../../assets/images/page5/section06/mvilla.jpg"

// Unique property data
const exteriorDesigns = [
  {
    title: "Green Meadows",
    description: "Premium villa plots with a serene environment.",
    img: sampimg,
    location: "Namakkal",
    price: "12 Lakhs onwards",
    type: "Villa Plots",
    size: "900 Sq.Ft.",
  },
  {
    title: "Skyline Residency",
    description: "Modern gated community with top-class amenities.",
    img: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
    location: "Salem",
    price: "25 Lakhs onwards",
    type: "Villa Plots",
    size: "1200 Sq.Ft.",
  },
  {
    title: "Royal Enclave",
    description: "Peaceful living with lush greenery.",
    img: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg",
    location: "Erode",
    price: "18.5 Lakhs onwards",
    type: "Villa Plots",
    size: "1000 Sq.Ft.",
  },
  {
    title: "Metro Heights",
    description: "Luxury apartments in the heart of the city.",
    img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    location: "Bangalore",
    price: "45 Lakhs onwards",
    type: "Apartments",
    size: "850 Sq.Ft.",
  },
  {
    title: "Agro Greens",
    description: "Fertile farmland ideal for agriculture.",
    img: "https://images.pexels.com/photos/158827/farmland-farm-corn-agriculture-158827.jpeg",
    location: "Farm / Agriculture land",
    price: "8 Lakhs per acre",
    type: "Farmland",
    size: "1 Acre",
  },
  {
    title: "Prime Plaza",
    description: "Ideal location for commercial development.",
    img: "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg",
    location: "Commercial",
    price: "1.2 Cr onwards",
    type: "Commercial Plot",
    size: "2000 Sq.Ft.",
  },
];

const ExteriorImg = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const maxScroll = exteriorDesigns.length - 4;

  const handleScroll = (direction) => {
    setScrollIndex((prev) =>
      direction === "left" ? Math.max(prev - 1, 0) : Math.min(prev + 1, maxScroll)
    );
  };

  return (
    <section className="bg-[#F8F8F8] py-12 px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Arrow Buttons */}
        <button
          onClick={() => handleScroll("left")}
          disabled={scrollIndex === 0}
          className="absolute left-[-15px] top-1/2 -translate-y-1/2 bg-white text-black p-2 px-4 z-20 hover:shadow-md rounded-md"
        >
          ‹
        </button>
        <button
          onClick={() => handleScroll("right")}
          disabled={scrollIndex === maxScroll}
          className="absolute right-[-15px] top-1/2 -translate-y-1/2 bg-white px-4 text-black p-2 rounded-md z-20 shadow-md disabled:opacity-50"
        >
          ›
        </button>

        <div className="overflow-hidden">
          <div
            className="flex space-x-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${scrollIndex * 260}px)` }}
          >
            {exteriorDesigns.map((design, index) => (
              <div
              key={index}
              className="w-[310px] h-[420px] bg-white rounded-xl shadow-md border border-gray-200 p-4 flex-shrink-0 transform transition-transform hover:scale-105"
            >
              <img
                src={design.img}
                alt={design.title}
                className="w-full h-[180px] object-cover rounded-lg mb-3"
              />
              <h3 className="text-lg font-bold text-black">{design.title}</h3>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <span className="text-blue-500">📍</span>{design.location}
              </p>
            
              <div className="bg-gray-100 p-3 rounded-lg my-3 flex items-center gap-3">
                <div className="text-2xl text-black">₹</div>
                <div>
                  <p className="text-xs text-gray-500">Price Range</p>
                  <p className="text-sm font-bold text-black">{design.price}</p>
                </div>
              </div>
            
              <div className="flex justify-between items-center text-xs text-gray-700 mb-3">
                <div className="flex items-center gap-1">
                  <span className="text-black">🏘️</span>
                  {design.type}
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-black">📐</span>
                  {design.size}
                </div>
              </div>
            
              <div className="flex justify-around mt-3 text-black">
                <button title="Call">
                  <Phone size={20} />
                </button>
                <button title="Email">
                  <Mail size={20} />
                </button>
                <button title="WhatsApp">
                  <MessageCircle size={20} className="text-green-500" />
                </button>
              </div>
            </div>
            
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExteriorImg;
