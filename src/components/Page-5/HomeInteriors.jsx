import React from 'react';
import { motion } from "framer-motion";
import {
  FaTools,
  FaThLarge,
  FaPaintRoller,
  FaCouch,
  FaHammer,
  FaBolt,
  FaWater,
  FaBrush,
} from 'react-icons/fa';

const HomeInteriors = () => {
  const items = [
    { icon: <FaTools size={30} />, label: "Remodelling / Renovation" },
    { icon: <FaThLarge size={30} />, label: "Tiles Fixing" },
    { icon: <FaPaintRoller size={30} />, label: "Painting" },
    { icon: <FaCouch size={30} />, label: "Interior Fixing" },
    { icon: <FaHammer size={30} />, label: "Carpenter" },
    { icon: <FaBolt size={30} />, label: "Electrical" },
    { icon: <FaWater size={30} />, label: "Plumbing" },
    { icon: <FaBrush size={30} />, label: "Polishing & Touch-ups" }, // Updated "Painting" again for the 8th one
  ];

  return (
    <section className="py-12 text-center bg-gray-50">
      <motion.div
  className="proj-title flex flex-col items-center justify-center text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
>
  <h2 className="text-4xl font-bold">
    <span className="relative">
    Maintenance & 
      <span className="absolute left-0 bottom-0 w-full h-1 bg-[#ff4a2a]"></span>
    </span>
    <span className="text-[#ff4a2a]"> Upskeep services  </span>
  </h2>
  <p className="mt-6 text-gray-600 font-bold">
  Complete home maintenance in one place
  </p>
</motion.div>
      

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
