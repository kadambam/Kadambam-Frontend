import React from "react";
import { Link } from "react-router-dom";
import p3sec6img1 from "../../assets/images/page3/section6/mlivingroom.jpg"
import p3sec6img2 from "../../assets/images/page3/section6/lbedroom.jpg"
import p3sec6img3 from "../../assets/images/page3/section6/mkitchen.jpg"
import p3sec6img4 from "../../assets/images/page3/section6/edining.jpg"

const exteriorDesigns = [
  {
    title: "Modern Living Room",
    description: "North Face 30x40\n2BHK 1500 buildup area\nCost – ₹15,00,000/-",
    img: p3sec6img1,
    link: "/architect",
  },
  {
    title: "Luxury Bedroom",
    description: "South Face 40x60\n3BHK 2000 buildup area\nCost – ₹20,00,000/-",
    img: p3sec6img2,
    link: "/architect",
  },
  {
    title: "Minimalist Kitchen",
    description: "East Face 25x30\n1BHK 1000 buildup area\nCost – ₹10,00,000/-",
    img: p3sec6img3,
    link: "/architect",
  },
  {
    title: "Elegant Dining Room",
    description: "West Face 35x45\n3BHK 1800 buildup area\nCost – ₹17,50,000/-",
    img: p3sec6img4,
    link: "/architect",
  },
];

const InteriorImg = () => {
  return (
    <section className="bg-[#F8F8F8] py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {exteriorDesigns.map((design, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 overflow-hidden"
          >
            <img
              src={design.img}
              alt={design.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{design.title}</h3>
              <p className="text-gray-500 text-sm whitespace-pre-line mt-2">
                {design.description}
              </p>
              <Link
                to={design.link}
                className="mt-4 inline-block text-[#ff4a2a] hover:text-black transition text-xl"
              >
                ➜
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InteriorImg;
