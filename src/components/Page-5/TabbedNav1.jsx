import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TabbedNav1 = () => {
    const [activeTab, setActiveTab] = useState("floorPlan");

    const tabs = [
        {
            id: "gardeningLandscape",
            name: "Gardening / Landscape",
            content: (
                <p className="text-gray-600 mt-3">
                    We maintain gardens, lawns, and trees, including lawn care, grass cutting, weeding, leaf removal, watering, fertilization, and pest control.
                </p>
            ),
        },
        {
            id: "officeAssistant",
            name: "Office Assistant",
            content: (
                <p className="text-gray-600 mt-3">
                    Our office assistants manage communications, filing systems, client interactions, office organization, and assist with travel and event coordination.
                </p>
            ),
        },
        {
            id: "electrician",
            name: "Electrician",
            content: (
                <p className="text-gray-600 mt-3">
                    Our electricians execute wiring plans, install electrical systems, conduct inspections, and troubleshoot electrical issues.
                </p>
            ),
        },
        {
            id: "plumber",
            name: "Plumber",
            content: (
                <p className="text-gray-600 mt-3">
                    Our plumbers interpret blueprints, install and repair plumbing systems, ensuring compliance with safety and building codes.
                </p>
            ),
        },
    ];

    return (
        <section className="flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-16 bg-gray-100">
            {/* Left Side: Refined Typography without Green Hover Effect */}
            <div className="lg:w-1/3 text-left">
                <h2 className="text-2xl font-semibold text-gray-600">Kadamban </h2>
                <motion.h1
                    className="text-5xl font-bold text-gray-900 leading-tight transition duration-300"
                    whileHover={{ scale: 1.05 }}
                >
                    Facility Management <span className="text-red-600">Services </span>
                </motion.h1>
                <p className="text-lg text-gray-500 mt-3 italic leading-relaxed">
                We provide 
                    <span className="text-red-600 font-semibold"> customized facility management solutions for corporate offices, residential communities, healthcare, education, and industrial sectors, </span>.
                    ensuring seamless operations and maintenance.
                </p>
                
            </div>

            {/* Right Side: Interactive Floor Plan Section with Background Gradient */}
            <div className="lg:w-2/3 bg-gradient-to-br from-gray-50 to-gray-200 shadow-lg rounded-xl p-8">
                {/* Tab Navigation */}
                <div className="flex space-x-6 border-b pb-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`text-lg font-semibold ${activeTab === tab.id ? "text-red-600 border-b-2 border-red-600" : "text-gray-500"
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

export default TabbedNav1;
