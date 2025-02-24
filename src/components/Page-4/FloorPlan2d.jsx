import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FloorPlan2D = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("floorPlan");

    const tabs = [
        {
            id: "floorPlan",
            name: "Floor Plan",
            content: (
                <p className="text-gray-600 mt-3">
                    A well-labeled **2D floor plan** ensures **maximum space utilization**. 
                    Keeping **functionality** and **natural lighting** in mind, our designs 
                    cater to multi-generational living while ensuring **aesthetic excellence**.
                </p>
            ),
        },
        {
            id: "structuralDesign",
            name: "Structural Design",
            content: (
                <p className="text-gray-600 mt-3">
                    Our **structural designs** combine **durability, safety, and elegance**. 
                    With a strong foundation and high-quality materials, we ensure buildings 
                    stand the test of time.
                </p>
            ),
        },
        {
            id: "civilDrawings",
            name: "Civil Drawings",
            content: (
                <p className="text-gray-600 mt-3">
                    We provide **detailed civil drawings** that guide precise construction. 
                    Every measurement is crafted with accuracy for **seamless execution**.
                </p>
            ),
        },
        {
            id: "3dElevation",
            name: "3D Elevation",
            content: (
                <p className="text-gray-600 mt-3">
                    Our **realistic 3D elevation** services bring your architectural vision to life. 
                    Experience your project **before it's built** with **stunning, high-quality renders**.
                </p>
            ),
        },
        {
            id: "3dInteriorDesign",
            name: "3D Interior Design",
            content: (
                <p className="text-gray-600 mt-3">
                    Step inside your future space with **high-quality 3D interior designs**. 
                    We ensure a **harmonious blend** of aesthetics, comfort, and functionality.
                </p>
            ),
        },
    ];

    return (
        <section className="flex flex-col lg:flex-row-reverse items-center justify-between px-8 md:px-16 lg:px-24 py-16 bg-gray-100 gap-12 lg:gap-24">
            {/* Right Side - Typography & Text */}
            <div className="lg:w-1/3 text-left">
                <h2 className="text-2xl font-semibold text-gray-600">Some of</h2>
                <motion.h1 
                    className="text-5xl font-bold text-gray-900 leading-tight transition duration-300"
                    whileHover={{ scale: 1.05 }}
                >
                    Our <span className="text-red-600">repeat clients</span>
                </motion.h1>
                <p className="text-lg text-gray-500 mt-3 italic leading-relaxed">
                    "Experience the **ultimate blend of precision & elegance** with our 
                    <span className="text-red-600 font-semibold"> 2D Floor Plans</span>. 
                    Every detail is crafted to perfection, ensuring **functionality & visual appeal**."
                </p>
                <p className="mt-6 text-xl font-medium text-gray-700">🏠 Floor Plan 2D</p>
            </div>

            {/* Left Side - Interactive Section */}
            <div className="lg:w-2/3 bg-gradient-to-br from-gray-50 to-gray-200 shadow-lg rounded-xl p-8">
                {/* Tab Navigation */}
                <div className="flex space-x-6 border-b pb-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`text-lg font-semibold ${
                                activeTab === tab.id ? "text-red-600 border-b-2 border-red-600" : "text-gray-500"
                            } pb-2 transition-all duration-300`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Display Content Based on Selected Tab with Sliding Effect */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.5 }}
                        className="mt-6 flex flex-col lg:flex-row items-center"
                    >
                        <img
                            src={`https://picsum.photos/600/400?random=${tabs.findIndex((t) => t.id === activeTab) + 1}`}
                            alt={tabs.find((t) => t.id === activeTab)?.name}
                            className="w-full lg:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                        />
                        <div className="lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
                            <h3 className="text-2xl font-bold text-gray-800">
                                {tabs.find((t) => t.id === activeTab)?.name}
                            </h3>
                            {tabs.find((t) => t.id === activeTab)?.content}
                            
                            {/* Updated Gray Button with Motion Effects */}
                            <motion.button 
                                className="mt-6 px-6 py-3 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 transition relative"
                                whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)" }}
                                onClick={() => navigate("/quotation")}
                            >
                                Get A Quote
                            </motion.button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default FloorPlan2D;
