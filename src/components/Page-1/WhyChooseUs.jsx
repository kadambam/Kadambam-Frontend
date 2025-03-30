import React from 'react';
import { FaCheckCircle, FaLightbulb, FaClock, FaStar, FaUsers, FaShieldAlt, FaClipboardCheck, FaHome } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const reasons = [
    { icon: <FaCheckCircle className="text-4xl text-[#ff4a2a]" />, text: "High-Quality Services" },
    { icon: <FaLightbulb className="text-4xl text-[#ff4a2a]" />, text: "Creative & Innovative" },
    { icon: <FaClock className="text-4xl text-[#ff4a2a]" />, text: "On-Time Delivery" },
    { icon: <FaStar className="text-4xl text-[#ff4a2a]" />, text: "Top-Rated Work" },
    { icon: <FaUsers className="text-4xl text-[#ff4a2a]" />, text: "Client-Focused" },
    { icon: <FaShieldAlt className="text-4xl text-[#ff4a2a]" />, text: "Trust & Security" },
    { icon: <FaClipboardCheck className="text-4xl text-[#ff4a2a]" />, text: "146 Quality Checks" },
    { icon: <FaHome className="text-4xl text-[#ff4a2a]" />, text: "1,00,000+ Happy Homes" },
];

const repeatedReasons = [...reasons, ...reasons];

const WhyChooseUs = () => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

    return (
        <div ref={ref} className="why-choose-us p-10 text-center bg-gray-50">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
                className="why-choose-title"
            >
                <h2 className="top-4 left-10 text-4xl font-bold">
                    <span className="relative">
                        Why
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-[#ff4a2a]"></span>
                    </span>
                    <span className="text-[#ff4a2a]"> Choose Us</span> ?
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="slider-container"
            >
                <div className="w-full py-8 text-center">
                    <div className="relative overflow-hidden">
                        <div className="flex space-x-6 animate-slide group hover:pause">
                            {repeatedReasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="w-40 h-38 flex flex-col items-center justify-center bg-gray-50 shadow-lg rounded-xl p-5 transition-transform duration-300"
                                >
                                    {reason.icon}
                                    <p className="mt-4 font-semibold text-lg">{reason.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default WhyChooseUs;
