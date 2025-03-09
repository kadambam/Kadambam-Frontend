import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const words = ["Residence", "Villa", "Bungalow", "Apartment", "Farmhouse", "Penthouse"];

const tabs = [
    {
        title: "Floor Plan",
        content: "A well-labeled floor plan ensures efficient space utilization and functionality in residential designs.",
        image: "https://picsum.photos/400/200",
    },
    {
        title: "Structural Design",
        content: "Structural design includes the analysis and planning of load-bearing elements to ensure durability and safety.",
        image: "https://picsum.photos/400/200",
    },
    {
        title: "Civil Drawings",
        content: "Civil drawings provide precise layouts for foundations, walls, beams, and overall site planning.",
        image: "https://picsum.photos/400/200",
    },
    {
        title: "3D Elevation",
        content: "A 3D elevation offers a realistic preview of how the architectural structure will look post-construction.",
        image: "https://picsum.photos/400/200",
    },
    {
        title: "3D Interior Design",
        content: "Interior design in 3D helps visualize space aesthetics, lighting, and furniture placements.",
        image: "https://picsum.photos/400/200",
    }
];

const TabbedNav = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [changingWord, setChangingWord] = useState(words[0]);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setChangingWord((prev) => words[(words.indexOf(prev) + 1) % words.length]);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative bg-white py-10 px-5 md:px-20">
            {/* Title Section with Scroll Animation */}
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
                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] w-2/3 h-[2px] bg-red-500"></span>
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
                    Connect with us for limitless designs to build your dream palace.
                </p>
            </motion.div>

            {/* Tabs Section with Animation */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="flex space-x-4 pb-3 border-b border-gray-300"
            >
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`py-2 px-4 text-lg font-medium transition ${activeTab === index
                                ? "text-black border-b-2 border-red-500"
                                : "text-gray-500 hover:text-gray-800"
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </motion.div>

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
                    className="w-full md:w-1/2 h-auto rounded-lg"
                />

                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{tabs[activeTab].title}</h3>
                    <p className="text-gray-700 mt-2 leading-relaxed">{tabs[activeTab].content}</p>
                    <p className="text-gray-700 mt-2">
                        Our experts ensure precision, sustainability, and modern design elements.
                    </p>
                    <p className="text-gray-700 mt-2">
                        Let’s create your perfect space with high-quality architectural solutions.
                    </p>
                    <button
                        className="flex items-center gap-2 px-6 py-2 mt-4 bg-white text-black border border-gray-400 rounded-lg hover:bg-gray-800 hover:text-white transition mx-auto"
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
