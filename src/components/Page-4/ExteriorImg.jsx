import React, { useState } from "react";
import { X } from "lucide-react";
import modernvilla from "../../assets/images/page4/Section6/modernvilla.jpg"
import minimalist from "../../assets/images/page4/Section6/minimalist.jpg"
import contemporary from "../../assets/images/page4/Section6/contemporary.jpg"
import mansion from "../../assets/images/page4/Section6/mansion.jpg"

const exteriorDesigns = [
  {
    title: "Modern Villa",
    description: "Elegant modern design with spacious outdoor views.",
    img: modernvilla, // Pexels
    gallery: [
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
      "https://picsum.photos/400/300?random=5",
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
    ],
  },
  {
    title: "Luxury Mansion",
    description: "A perfect blend of luxury and comfort.",
    img: mansion,
    gallery: [
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
      "https://picsum.photos/400/300?random=6",
      "https://picsum.photos/400/300?random=7",
      "https://picsum.photos/400/300?random=8",
    ],
  },
  {
    title: "Contemporary Home",
    description: "Minimalist aesthetic with modern elements.",
    img: contemporary,
    gallery: [
      "https://picsum.photos/400/300?random=9",
      "https://picsum.photos/400/300?random=10",
      "https://picsum.photos/400/300?random=11",
      "https://picsum.photos/400/300?random=12",
    ],
  },
  {
    title: "Minimalist House",
    description: "Sleek and functional design for modern living.",
    img: minimalist,
    gallery: [
      "https://picsum.photos/400/300?random=13",
      "https://picsum.photos/400/300?random=14",
      "https://picsum.photos/400/300?random=15",
      "https://picsum.photos/400/300?random=16",
    ],
  },
];

const ExteriorImg = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);

  return (
    <section className="bg-[#F8F8F8] py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {exteriorDesigns.map((design, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={design.img}
              alt={design.title}
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-medium text-gray-800">{design.title}</h3>
              <p className="text-gray-500 text-sm">{design.description}</p>
              {/* Arrow Button for Modal */}
              <button
                className="mt-3 text-gray-600 hover:text-black transition"
                onClick={() => setSelectedDesign(design)}
              >
                ➜
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedDesign && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-lg z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setSelectedDesign(null)}
            >
              <X size={20} />
            </button>
            
            <h3 className="text-xl font-semibold text-center text-gray-800">{selectedDesign.title}</h3>
            <p className="text-gray-500 text-center mb-4">{selectedDesign.description}</p>

            {/* Gallery Images */}
            <div className="grid grid-cols-2 gap-4">
              {selectedDesign.gallery.map((img, i) => (
                <img key={i} src={img} alt="Gallery" className="w-full h-24 object-cover rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExteriorImg;
