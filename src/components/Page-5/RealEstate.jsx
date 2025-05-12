import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";


import p5sec6img1 from "../../assets/images/page5/section06/mvilla.jpg"
import p5sec6img2 from "../../assets/images/page5/section06/cmanssion.jpg"
import p5sec6img3 from "../../assets/images/page5/section06/chomes.jpg"
import p5sec6img4 from "../../assets/images/page5/section06/aview.jpg"


const categories = [
    { name: "ARCHITECTURAL DESIGNS", icon: "🏛️", color: "text-red-600" },
    { name: "CONSTRUCTION", icon: "🏗️", color: "text-blue-600" },
    { name: "INTERIOR DESIGNS", icon: "🏠", color: "text-pink-600" },
    { name: "HOME AUTOMATION", icon: "📟", color: "text-green-500" },
    { name: "GREEN BUILDING", icon: "🌿", color: "text-lime-600" },
    { name: "BIOPHILIC DESIGNS", icon: "🌀", color: "text-indigo-600" },
];

const images = [
    { id: 1, src: p5sec6img1, alt: "Modern Villa" },
    { id: 2, src: p5sec6img2, alt: "Classic Mansion" },
    { id: 3, src: p5sec6img3, alt: "Contemporary Homes" },
    { id: 4, src: p5sec6img4, alt: "Aerial View" },
];

const RealEstate= () => {
    const [activeCategory, setActiveCategory] = useState(categories[0].name);

    return (
        <div className="real-estate py-2">
             <motion.div
  className="proj-title flex flex-col items-center justify-center text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
>
  <h2 className="text-4xl font-bold">
    <span className="relative">
    Real 
      <span className="absolute left-0 bottom-0 w-full h-1 bg-[#ff4a2a]"></span>
    </span>
    <span className="text-[#ff4a2a]"> Estate</span>
  </h2>
  <p className="mt-6 text-gray-600 font-bold">
  Buying and selling assistance
  </p>
</motion.div>

        <section className="flex flex-col lg:flex-row px-6 md:px-16 lg:px-24 py-16 bg-white">



            {/* Left Panel (Categories) */}
            <motion.div
                className="w-full lg:w-[40%] bg-white shadow-lg rounded-xl p-8 lg:p-10 space-y-6 lg:mr-12" // Added lg:mr-12 for spacing
                initial={{ opacity: 0, x: -50 }}
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
                        <p className="text-gray-700 tracking-wide leading-relaxed hover:text-gray-900"> {/* Only text color changes on hover */}
                            {category.name}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
            {/* Right Panel (Image Gallery) */}
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
        </div>


    );
};

export default RealEstate;
