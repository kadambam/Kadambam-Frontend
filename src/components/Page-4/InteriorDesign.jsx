import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";


const categories = [
    { name: "ARCHITECTURAL DESIGNS", icon: "🏛️", color: "text-red-600" },
    { name: "CONSTRUCTION", icon: "🏗️", color: "text-blue-600" },
    { name: "INTERIOR DESIGNS", icon: "🏠", color: "text-pink-600" },
    { name: "HOME AUTOMATION", icon: "📟", color: "text-green-500" },
    { name: "GREEN BUILDING", icon: "🌿", color: "text-lime-600" },
    { name: "BIOPHILIC DESIGNS", icon: "🌀", color: "text-indigo-600" },
];

const images = [
    { id: 1, src: "https://picsum.photos/600/400?random=1", alt: "Modern Villa" },
    { id: 2, src: "https://picsum.photos/600/400?random=2", alt: "Classic Mansion" },
    { id: 3, src: "https://picsum.photos/600/400?random=3", alt: "Contemporary Homes" },
    { id: 4, src: "https://picsum.photos/600/400?random=4", alt: "Aerial View" },
];

const InteriorDesigns = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0].name);

    return (
        <section className="flex flex-col lg:flex-row-reverse px-6 md:px-16 lg:px-24 py-16 bg-gray-100">
            {/* Right Panel (Categories) */}
            <motion.div
                className="w-full lg:w-[40%] bg-white shadow-lg rounded-xl p-8 lg:p-10 space-y-6 lg:ml-12" // Adjusted margin to left
                initial={{ opacity: 0, x: 50 }} // Change animation direction
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                {categories.map((category) => (
                    <motion.div
                        key={category.name}
                        className="flex items-center gap-4 py-4 px-6 rounded-lg cursor-pointer text-lg font-medium transition-all duration-300"
                        onClick={() => setActiveCategory(category.name)}
                        whileHover={{ scale: 1.02 }}
                    >
                        <span className={`${category.color} text-2xl`}>{category.icon}</span>
                        <p className="text-gray-700 tracking-wide leading-relaxed hover:text-gray-900">
                            {category.name}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Left Panel (Image Gallery) */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 lg:mt-0">
                {images.map((image) => (
                    <motion.div
                        key={image.id}
                        className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
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
