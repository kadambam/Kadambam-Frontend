import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import pack1 from "../../assets/images/page4/Section5/pack1.jpg";
import pack2 from "../../assets/images/page4/Section5/pack2.jpg";
import pack3 from "../../assets/images/page4/Section5/pack3.jpg";
import pack4 from "../../assets/images/page4/Section5/pack4.jpg";

const categories = [
    { name: "Pack-1", description: "2D Floor plan - 2 samples", icon: "🏠", color: "text-red-600" },
    { name: "Pack-2", description: "2D Floor plan - 3 samples", icon: "🏠", color: "text-blue-600" },
    { name: "Pack-3", description: "2D Floor plan - 5 samples", icon: "🏠", color: "text-pink-600" },
    { name: "Pack-4", description: "2D Floor plan - 10 samples", icon: "🏠", color: "text-green-500" },
    { name: "Pack-5", description: "2D Floor plan - 15 samples", icon: "🏠", color: "text-lime-600" },
];

const images = [
    { id: 1, src: pack1, alt: "2D Floor Plan - Pack 1" },
    { id: 2, src: pack2, alt: "2D Floor Plan - Pack 2" },
    { id: 3, src: pack3, alt: "2D Floor Plan - Pack 3" },
    { id: 4, src: pack4, alt: "2D Floor Plan - Pack 4" },
];

const ExteriorDesigns = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0].name);

    return (
        <section className="flex flex-col lg:flex-row px-6 md:px-16 lg:px-24 py-16 bg-gray-100">
            {/* Left Panel (Categories) */}
            <motion.div
                className="w-full lg:w-[40%] bg-white shadow-lg rounded-xl p-8 lg:p-10 space-y-6 lg:mr-12"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    <span className="text-red-500">Saving</span> <span className="text-gray-800">Pack</span>
                </h2>
                {categories.map((category) => (
                    <motion.div
                        key={category.name}
                        className={`flex items-center gap-4 py-4 px-6 rounded-lg cursor-pointer text-lg font-medium transition-all duration-300 ${activeCategory === category.name ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                        onClick={() => setActiveCategory(category.name)}
                        whileHover={{ scale: 1.02 }}
                    >
                        <span className={`${category.color} text-2xl`}>{category.icon}</span>
                        <div className="flex justify-between w-full items-center">
                            <p className="text-gray-700 tracking-wide leading-relaxed">{category.name}</p>
                            <p className="text-gray-600 text-sm">{category.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            {/* Right Panel (Image Gallery) */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 lg:mt-0">
                {images.map((image) => (
                    <motion.div
                        key={image.id}
                        className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-[250px]" // 👈 fixed height
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-300"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                            <p className="text-white font-semibold">{image.alt}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ExteriorDesigns;
