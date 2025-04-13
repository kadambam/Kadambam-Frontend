import React from "react";

const exteriorDesigns = [
  {
    title: "Modern Living Room",
    description: "North Face 30x40\n2BHK 1500 buildup area\nCost – ₹15,00,000/-",
    img: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    link: "https://yourblogsite.com/living-room",
  },
  {
    title: "Luxury Bedroom",
    description: "South Face 40x60\n3BHK 2000 buildup area\nCost – ₹20,00,000/-",
    img: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    link: "https://yourblogsite.com/bedroom",
  },
  {
    title: "Minimalist Kitchen",
    description: "East Face 25x30\n1BHK 1000 buildup area\nCost – ₹10,00,000/-",
    img: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg",
    link: "https://yourblogsite.com/kitchen",
  },
  {
    title: "Elegant Dining Room",
    description: "West Face 35x45\n3BHK 1800 buildup area\nCost – ₹17,50,000/-",
    img: "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg",
    link: "https://yourblogsite.com/dining-room",
  },
];

const InteriorImg = () => {
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
              <p className="text-gray-500 text-sm whitespace-pre-line">{design.description}</p>

              {/* External Link Button */}
              <a
                href={design.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-gray-600 hover:text-black transition text-xl"
              >
                ➜
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InteriorImg;
