import React, { useState } from "react";
import { X, Phone, Mail, MessageCircle } from "lucide-react";

const exteriorDesigns = Array(12).fill({
  title: "Modern Villa",
  description: "Elegant modern design with spacious outdoor views.",
  img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  gallery: [
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
    "https://picsum.photos/400/300?random=5",
    "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
  ],
});

const ExteriorImg = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const maxScroll = exteriorDesigns.length - 4;

  const handleScroll = (direction) => {
    setScrollIndex((prev) =>
      direction === "left"
        ? Math.max(prev - 1, 0)
        : Math.min(prev + 1, maxScroll)
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
          className="absolute right-[-15px] top-1/2 -translate-y-1/2 bg-white px-4  text-black p-2 rounded-md z-20 shadow-md disabled:opacity-50"
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
                className="min-w-[240px] bg-white rounded-xl shadow-md border border-gray-200 p-4 flex-shrink-0 transform transition-transform hover:scale-105"
              >
                <img
                  src={design.img}
                  alt={design.title}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-bold text-black">The Park Origin</h3>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <span className="text-blue-500">📍</span>Poonamallee, Thandalam
                </p>

                <div className="bg-gray-100 p-3 rounded-lg my-3 flex items-center gap-3">
                  <div className="text-2xl text-black">₹</div>
                  <div>
                    <p className="text-xs text-gray-500">Price Range</p>
                    <p className="text-sm font-bold text-black">30.8 Lakhs onwards</p>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-700 mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-black">🏘️</span>
                    Villa Plots
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-black">📐</span>
                    751 Sq.Ft.
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

      {/* Modal */}
      {selectedDesign && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-lg z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setSelectedDesign(null)}
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-semibold text-center text-gray-800">
              {selectedDesign.title}
            </h3>
            <p className="text-gray-500 text-center mb-4">{selectedDesign.description}</p>

            <div className="grid grid-cols-2 gap-4">
              {selectedDesign.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Gallery"
                  className="w-full h-24 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExteriorImg;
