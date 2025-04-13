import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TabbedNav = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("floorPlan");

    const tabs = [
        {
            id: "propertyMonitoring",
            name: "Property Monitoring",
            content: (
                <p className="text-gray-600 mt-3">
                    Kadamban Property Management offers transparent, hassle-free services for NRIs, including fast tenant acquisition, safety, 
                    legal assistance, inspections, maintenance, and emergency repairs. We also provide house photoshoots and property marketing.
                </p>
            ),
        },
        {
            id: "plotMonitoring",
            name: "Plot Monitoring",
            content: (
                <p className="text-gray-600 mt-3">
                    Kadamban ensures your land stays secure with regular updates, monitoring, reporting, and digital photos, offering peace of mind 
                    for property owners, especially NRIs.
                </p>
            ),
        },
        {
            id: "tenantManagement",
            name: "Tenant Management",
            content: (
                <p className="text-gray-600 mt-3">
                    We handle tenant screening, rent collection, lease management, inspections, and maintenance for a smooth rental experience.
                </p>
            ),
        },
        {
            id: "commercialPropertyMonitoring",
            name: "Commercial Property Monitoring",
            content: (
                <p className="text-gray-600 mt-3">
                    We manage everything from small offices to large commercial properties, ensuring regular maintenance and cost-effective management.
                </p>
            ),
        },
    ];
    

    return (
        <section className="flex flex-col lg:flex-row-reverse items-center justify-between px-8 md:px-16 lg:px-24 py-16 bg-gray-100 gap-12 lg:gap-24">
            {/* Right Side - Typography & Text */}
            <div className="lg:w-1/3 text-left">
                <h2 className="text-2xl font-semibold text-gray-600">Kadamban </h2>
                <motion.h1 
                    className="text-5xl font-bold text-gray-900 leading-tight transition duration-300"
                    whileHover={{ scale: 1.05 }}
                >
                    Property Management  <span className="text-red-600">Services</span>
                </motion.h1>
                <p className="text-lg text-gray-500 mt-3 italic leading-relaxed">
                Are you an NRI or a busy resident who needs help managing your property in
                    <span className="text-red-600 font-semibold"> Chennai, Bangalore, Salem, Erode, Namakkal, or Karur?</span>. 
                    We take care of everything -so you don’t have to worry!
                </p>
               
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

export default TabbedNav;
