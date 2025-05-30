import React from "react";
import {
    FaHome,FaRuler,FaBolt,FaTint,FaHammer,FaCouch,FaLightbulb,FaPaintRoller } from "react-icons/fa";

const categories = [
    { title: "3D Floor Plan", icon: <FaHome />, description: "Three-dimensional representation of your floor plan." },
    { title: "Partition Drawing", icon: <FaRuler />, description: "Detailed drawings of partitions within the space." },
    { title: "Electrical Drawing", icon: <FaBolt />, description: "Layout of electrical wiring and fixtures." },
    { title: "Plumbing Drawing", icon: <FaTint />, description: "Detailed plumbing system layout." },
    { title: "Joinery Drawing", icon: <FaHammer />, description: "Drawings for custom joinery work." },
    { title: "Interior Drawing", icon: <FaCouch />, description: "Drawings of the interior spaces and design elements." }, // Or FaPalette
    { title: "False Ceiling", icon: <FaLightbulb />, description: "Designs and plans for false ceilings." },
    { title: "Painting Design", icon: <FaPaintRoller />, description: "Plans and designs for painting." },
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
