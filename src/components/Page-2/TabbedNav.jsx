import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/images/page2/section3tabbednav/Floor Plan.png"
import img2 from "../../assets/images/page2/section3tabbednav/Structural design.jpg"
import img3 from "../../assets/images/page2/section3tabbednav/Civil drawing.jpg"
import img4 from "../../assets/images/page2/section3tabbednav/MEP.jpg"
import img5 from "../../assets/images/page2/section3tabbednav/3dElevation.png"
import img6 from "../../assets/images/page2/section3tabbednav/Interior design.jpg"

const words = ["Residence", "Villa", "Bungalow", "Apartment", "Farmhouse", "Penthouse"];

const tabs = [
    { title: "Floor Plan", content: "Kadamban Architect is dedicated to transforming your space with expertly tailored floor plans! Designed for maximum space efficiency, natural light, and seamless functionality, our plans combine style with practicality. Whether for modern homes or multi-generational living, we guide and assist you in all stages to bring your dream home to life!", image: img1 },
    { title: "Structural Design", content: "Our expert structural designers are committed to delivering precise and reliable drawings tailored to your project’s needs. Kadamban collaborates with top designers at every stage, from planning to execution, ensuring the structural design aligns with the expected creativity. From foundation details to framing specifications, we ensure every element is designed with accuracy and strength in mind. With a focus on durability and safety, we guide and assist you in all stages to create a structure that stands strong for years to come.", image:img2},
    { title: "Civil Drawings", content: "Civil drawings are essential as they provide detailed structural information required for building permits. At Kadamban Architect, our expert designers specialize in transforming ideas into clear, precise drawings that balance simplicity with purpose. These detailed plans ensure your dream home's layout is accurate, functional, and aligned with your vision.", image: img3 },
    { title: "MEP Drawings", content: "MEP (Mechanical, Electrical, and Plumbing) drawings are crucial for ensuring the efficient functioning of your building’s vital systems. At Kadamban Architect, we collaborate with top designers and engineers at every stage, from planning to execution, to deliver MEP designs that integrate seamlessly with your structure. Our meticulously planned designs ensure optimal performance, energy efficiency, and safety. From electrical layouts to plumbing networks and HVAC systems, we provide clear and precise drawings to support smooth execution at every stage of your project.", image: img4 },
    { title: "3D Elevation", content: "Kadamban Architect is dedicated to transforming your space with expertly tailored floor plans! Designed for maximum space efficiency, natural light, and seamless functionality, our plans combine style with practicality. Whether for modern homes or multi-generational living, we guide and assist you in all stages to bring your dream home to life!", image: img5 },
    { title: "Interior Design", content: "Interior design is all about transforming your space into a comfortable, stylish, and functional living environment. At Kadamban Architect, we focus on smart space planning to make your home feel spacious and inviting. Our expert designers carefully blend aesthetics with practicality, ensuring your home meets all your needs while creating a warm and welcoming ambiance — a place you’ll always love to return to.", image: img6 }
];

const TabbedNav = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [changingWord, setChangingWord] = useState(words[0]);
    const navigate = useNavigate();
    const [tabPosition, setTabPosition] = useState({ left: 0, width: 0 });
    const tabRefs = useRef([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setChangingWord((prev) => words[(words.indexOf(prev) + 1) % words.length]);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useLayoutEffect(() => {
        if (tabRefs.current[activeTab]) {
            const { offsetLeft, offsetWidth } = tabRefs.current[activeTab];
            setTabPosition({ left: offsetLeft, width: offsetWidth });
        }
    }, [activeTab]);

    return (
        <section className="relative bg-white py-10 px-5 md:px-20">
            {/* Title Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-8"
            >
                <h2 className="text-lg font-normal text-gray-700" style={{ fontFamily: "Poppins" }}>
                    One-stop shop for all things
                </h2>
                <h1 className="text-3xl font-medium mt-3">
                    <span className="relative inline-block">
                        <span className="text-red-500">Architectural Services</span>
                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] w-75 h-[2px] bg-red-500"></span>
                    </span>{" "}
                    For Your{" "}
                    <span className="inline-block relative w-[150px] h-[40px] overflow-hidden align-middle">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={changingWord}
                                initial={{ y: "100%" }}
                                animate={{ y: "0%" }}
                                exit={{ y: "-100%" }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute left-0 right-0 text-green-500 text-center w-full"
                            >
                                {changingWord}
                            </motion.span>
                        </AnimatePresence>
                    </span>
                </h1>
                <p className="text-gray-600 mt-3 text-lg">
                Let's get started with us for limitless designs to build your dream palace
                </p>
            </motion.div>

            {/* Tabs Section with Animated Underline */}
            <div className="relative flex space-x-4 pb-3 justify-around">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`relative py-2 px-4 text-lg font-medium transition ${
                            activeTab === index ? "text-black" : "text-gray-500 hover:text-gray-800"
                        }`}
                        onClick={() => setActiveTab(index)}
                        ref={(el) => (tabRefs.current[index] = el)}
                    >
                        {tab.title}
                    </button>
                ))}

                {/* Moving Underline */}
                <motion.div
                    className="absolute bottom-0 h-[3px] bg-red-500"
                    initial={{ left: 0, width: 0 }}
                    animate={{
                        left: tabPosition.left,
                        width: tabPosition.width,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                />
            </div>

            {/* Animated Content Section */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="mt-6 bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6"
            >
                <img
                    src={tabs[activeTab].image}
                    alt={tabs[activeTab].title}
                    className="w-full md:w-[400px] h-[200px] object-cover rounded-lg"
                />

                <div className="flex-1 text-left">
                    <h3 className="text-lg font-semibold text-gray-800">{tabs[activeTab].title}</h3>
                    <p className="text-gray-700 mt-2 leading-relaxed">{tabs[activeTab].content}</p>
                    {/* <p className="text-gray-700 mt-2">
                        Our experts ensure precision, sustainability, and modern design elements.
                    </p> */}
                    {/* <p className="text-gray-700 mt-2">
                        Let’s create your perfect space with high-quality architectural solutions.
                    </p> */}
                    <button
                        className="flex items-center gap-2 px-6 py-2 mt-4 bg-white text-black border border-gray-400 rounded-lg hover:bg-gray-800 hover:text-white transition"
                        onClick={() => navigate("/quotation")}
                    >
                        Get a Quotation <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </motion.div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition z-3"
            >
                <FaWhatsapp className="text-3xl" />
            </a>
        </section>
    );
};

export default TabbedNav;
