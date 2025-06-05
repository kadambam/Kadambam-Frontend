import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/images/page5/section04/p5sec4img1.jpeg";
import img2 from "../../assets/images/page5/section04/p5sec4img2.jpeg";
import img3 from "../../assets/images/page5/section04/p5sec4img3.jpeg";
import img4 from "../../assets/images/page5/section04/p5sec4img4.jpeg";

const TabbedNav1 = () => {
    const navigate = useNavigate();
    const tabs = [
        {
            id: "gardeningLandscape",
            name: "Gardening / Landscape",
            img: img1,
            content: (
                <p className="text-gray-600 mt-3">
                    We maintain gardens, lawns, and trees, including lawn care, grass cutting, weeding, leaf removal, watering, fertilization, and pest control.
                </p>
            ),
        },
        {
            id: "officeAssistant",
            name: "Office Assistant",
            img: img2,
            content: (
                <p className="text-gray-600 mt-3">
                    Our office assistants manage communications, filing systems, client interactions, office organization, and assist with travel and event coordination.
                </p>
            ),
        },
        {
            id: "electrician",
            name: "Electrician",
            img: img3,
            content: (
                <p className="text-gray-600 mt-3">
                    Our electricians execute wiring plans, install electrical systems, conduct inspections, and troubleshoot electrical issues.
                </p>
            ),
        },
        {
            id: "plumber",
            name: "Plumber",
            img: img4,
            content: (
                <p className="text-gray-600 mt-3">
                    Our plumbers interpret blueprints, install and repair plumbing systems, ensuring compliance with safety and building codes.
                </p>
            ),
        },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const currentTab = tabs.find((tab) => tab.id === activeTab);

    return (
        <section className="flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-16 bg-gray-100 gap-12 lg:gap-24">
            {/* Left Side */}
            <div className="lg:w-1/3 text-left">
                <h2 className="text-2xl font-semibold text-gray-600">Kadamban</h2>
                <motion.h1
                    className="text-5xl font-bold text-gray-900 leading-tight transition duration-300"
                    whileHover={{ scale: 1.05 }}
                >
                    Facility Management <span className="text-red-600">Services</span>
                </motion.h1>
                <p className="text-lg text-gray-500 mt-3 italic leading-relaxed">
                    We provide
                    <span className="text-red-600 font-semibold">
                        {" "}customized facility management solutions for corporate offices, residential communities, healthcare, education, and industrial sectors,
                    </span>{" "}
                    ensuring seamless operations and maintenance.
                </p>
            </div>

            {/* Right Side */}
            <div className="lg:w-2/3 bg-gradient-to-br from-gray-50 to-gray-200 shadow-lg rounded-xl p-8">
                {/* Responsive Tab Titles */}
                <div className="flex flex-col lg:flex-row lg:justify-around border-b pb-4 gap-2 lg:gap-0">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`text-base font-semibold truncate max-w-full w-full lg:max-w-[180px] ${
                                activeTab === tab.id
                                    ? "text-red-600 border-b-2 border-red-600"
                                    : "text-gray-500"
                            } pb-2 transition-all duration-300 text-center`}
                            onClick={() => setActiveTab(tab.id)}
                            title={tab.name}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    {currentTab && (
                        <motion.div
                            key={currentTab.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5 }}
                            className="mt-6 flex flex-col lg:flex-row items-center"
                        >
                            <img
                                src={currentTab.img}
                                alt={currentTab.name}
                                className="w-full lg:w-1/3 max-w-[300px] aspect-square object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                            />
                            <div className="lg:w-2/3 lg:pl-6 mt-6 lg:mt-0">
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {currentTab.name}
                                </h3>
                                {currentTab.content}
                                <motion.button
                                    className="mt-6 px-6 py-3 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 transition relative"
                                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)" }}
                                    onClick={() => window.open("https://wa.me/919043672462", "_blank")}
                                >
                                    Get A Quote
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default TabbedNav1;
