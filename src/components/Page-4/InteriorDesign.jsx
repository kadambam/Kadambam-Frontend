import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import combo1 from "../../assets/images/page4/Section7/combo1.jpg"
import combo2 from "../../assets/images/page4/Section7/combo2.jpg"
import combo3 from "../../assets/images/page4/Section7/combo3.webp"
import combo4 from "../../assets/images/page4/Section7/combo4.png"

const categories = [
    { name: "Combo-1", description: "2D Floor plan + Elevation", icon: "🏠", color: "text-red-600" },
    { name: "Combo-2", description: "Combo-1 + Electrical + Plumbing", icon: "🏠", color: "text-blue-600" },
    { name: "Combo-3", description: "Combo-2 + Joinery work", icon: "🏠", color: "text-pink-600" },
    { name: "Combo-4", description: "2D + Elevation + Interior", icon: "🏠", color: "text-green-500" },
    { name: "Combo-5", description: "Combo-3 + Interior", icon: "🏠", color: "text-lime-600" },
];

const images = [
    { id: 1, src: combo1, alt: "Combo - Pack 1" },
    { id: 2, src: combo2, alt: "Combo - Pack 2" },
    { id: 3, src: combo3, alt: "Combo - Pack 3" },
    { id: 4, src: combo4, alt: "Combo - Pack 4" },
];

const InteriorDesigns = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0].name);

    return (
        <section className="flex flex-col lg:flex-row-reverse px-6 md:px-16 lg:px-24 py-16 bg-gray-100">
            {/* Right Panel (Categories) */}
            <motion.div
                className="w-full lg:w-[40%] bg-white shadow-lg rounded-xl p-8 lg:p-10 space-y-8 lg:ml-12 flex flex-col items-start" // Adjusted spacing and layout
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center w-full">
                    <span className="text-red-500">Combo</span> <span className="text-gray-800">Collection</span>
                </h2>
                <div className="w-full space-y-4">
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
                </div>
            </motion.div>

            {/* Left Panel (Image Gallery) */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 lg:mt-0">
                {images.map((image) => (
                    <motion.div
                        key={image.id}
                        className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-[250px]" // 👈 Fixed height
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

export default InteriorDesigns;
