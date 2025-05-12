import React, { useState } from "react";

const tabs = ["North", "East", "South", "West"];

const images = {
  North: [
    "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    "https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg",
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
  ],
  East: [
    "https://images.pexels.com/photos/207929/pexels-photo-207929.jpeg",
    "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg",
    "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg",
    "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
    "https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg",
  ],
  South: [
    "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg",
    "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    "https://images.pexels.com/photos/2102589/pexels-photo-2102589.jpeg",
    "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg",
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
  ],
  West: [
    "https://images.pexels.com/photos/276667/pexels-photo-276667.jpeg",
    "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg",
    "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg",
    "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg",
    "https://images.pexels.com/photos/2102588/pexels-photo-2102588.jpeg",
  ],
};

const allDesigns = {
    North: Array(4).fill({
      title: "North Villa",
      location: "Chennai",
      price: "28.5 Lakhs onwards",
      area: "800 Sq.Ft.",
    }),
    East: [
      ...Array(3).fill({
        title: "East Villa",
        location: "Coimbatore",
        price: "30.8 Lakhs onwards",
        area: "751 Sq.Ft.",
      }),
      {
        title: "New East Villa",
        location: "Coimbatore",
        price: "35.0 Lakhs onwards",
        area: "900 Sq.Ft.",
      },
    ],
    South: Array(4).fill({
      title: "South Villa",
      location: "Madurai",
      price: "26.4 Lakhs onwards",
      area: "720 Sq.Ft.",
    }),
    West: Array(4).fill({
      title: "West Villa",
      location: "Salem",
      price: "32.0 Lakhs onwards",
      area: "860 Sq.Ft.",
    }),
  };

const FloorPlanSection = () => {
  const [activeTab, setActiveTab] = useState("North");
  const selectedDesigns = allDesigns[activeTab];
  const selectedImages = images[activeTab];

  return (
    <section className="bg-[#F8F8F8] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 tracking-wide text-gray-800">
          2D Floor <span className="text-red-500">Plan</span>
        </h2>

        <div className="flex justify-center gap-16 mb-14 border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 pb-3 text-2xl font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "border-b-4 border-red-500 text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Layout */}
        <div className="flex flex-wrap justify-around gap-6">
          {selectedDesigns.map((design, index) => (
            <div
              key={index}
              className="w-[270px] bg-white rounded-2xl p-5 shadow-xl border border-gray-100 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={selectedImages[index % selectedImages.length]}
                alt={design.title}
                className="w-full h-44 object-cover rounded-xl mb-4"
              />

              <h3 className="text-lg font-semibold text-black mb-1">{design.title}</h3>
              <p className="text-sm text-gray-600 flex items-center gap-1 mb-3">
                <span className="text-pink-500 text-xl leading-none">•</span>
                {design.location}
              </p>

              <div className="bg-gray-100 px-3 py-2 rounded-xl mb-4 flex items-center gap-3 text-left">
                <div className="text-lg text-black">₹</div>
                <div>
                  <p className="text-xs text-gray-500">Price Range</p>
                  <p className="text-sm font-semibold text-black">{design.price}</p>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-gray-700 mb-4">
                <div className="flex items-center gap-1">
                  🏘️ <span>Villa Plots</span>
                </div>
                <div className="flex items-center gap-1">
                  📐 <span>{design.area}</span>
                </div>
              </div>

              {/* Contact Icons */}
              <div className="flex justify-between items-center px-6 mb-4">
                <i className="fas fa-phone hover:text-black hover:scale-110 transition-transform cursor-pointer text-gray-600 text-lg"></i>
                <i className="fas fa-envelope hover:text-black hover:scale-110 transition-transform cursor-pointer text-gray-600 text-lg"></i>
                <i className="fab fa-whatsapp hover:text-green-600 hover:scale-110 transition-transform cursor-pointer text-lg"></i>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-black text-white py-2 rounded-xl text-sm font-medium hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorPlanSection;
