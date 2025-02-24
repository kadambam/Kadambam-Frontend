import React from 'react';
import { FaCouch, FaBed, FaUtensils, FaTv, FaBook, FaPaintRoller, FaCogs, FaChair } from 'react-icons/fa';

const HomeInteriors = () => {
  const items = [
    { icon: <FaUtensils size={30} />, label: "Modular Kitchens" },
    { icon: <FaBed size={30} />, label: "Wardrobes & Storage Units" },
    { icon: <FaCouch size={30} />, label: "Crockery Units" },
    { icon: <FaTv size={30} />, label: "Entertainment Units" },
    { icon: <FaBook size={30} />, label: "Study Tables" },
    { icon: <FaPaintRoller size={30} />, label: "Paintings & Wallpaper" },
    { icon: <FaCogs size={30} />, label: "False Ceilings" },
    { icon: <FaChair size={30} />, label: "Furniture & Accessories" },
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-semibold mb-8">Complete Home Interiors in <span className="text-gray-600">One Place</span></h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col text-gray-800 items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {item.icon}
            <p className="mt-4 text-lg font-medium text-gray-800">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeInteriors;
