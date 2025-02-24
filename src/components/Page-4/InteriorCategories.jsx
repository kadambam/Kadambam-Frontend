import React from "react";
import { FaUtensils, FaCouch, FaTv, FaBed, FaTable, FaPaintRoller, FaLightbulb, FaBoxes } from "react-icons/fa";

const categories = [
  { title: "Modular Kitchens", icon: <FaUtensils />, description: "Custom-built kitchens with sleek finishes." },
  { title: "Wardrobes & Storage Units", icon: <FaBed />, description: "Organized storage solutions for your home." },
  { title: "Crockery Units", icon: <FaBoxes />, description: "Elegant crockery storage with style." },
  { title: "Entertainment Units", icon: <FaTv />, description: "Modern entertainment solutions." },
  { title: "Study Tables", icon: <FaTable />, description: "Ergonomic and stylish study spaces." },
  { title: "Paintings & Wallpaper", icon: <FaPaintRoller />, description: "Unique decor to enhance your walls." },
  { title: "False Ceilings", icon: <FaLightbulb />, description: "Creative ceiling designs for modern homes." },
  { title: "Furniture & Accessories", icon: <FaCouch />, description: "Complete home furnishing solutions." },
];

const InteriorCategories = () => {
  return (
    <section className="py-16 px-6 bg-[#F8F8F8]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 tracking-wide font-['Sofia Pro Soft']">
        Complete Home Interiors in One Place
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-10">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="text-4xl text-gray-700 mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 tracking-wide font-['Poppins']">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InteriorCategories;
