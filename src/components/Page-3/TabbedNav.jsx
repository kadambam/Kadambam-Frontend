import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { MdDownload } from 'react-icons/md';

import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


import { Section3Images } from "../../utils/data1";

const words = ["Residence", "Villa", "Bungalow", "Apartment", "Farmhouse", "Penthouse"];

const tabs = [
  {
    title: "Residential Interior Design",
    content:
      "Kadamban Interior specializes in residential interior design, creating functional and personalized living spaces. We offer a variety of designs including: Modular Kitchen, Bedroom, Living Room, Dining Room, Wardrobe Design, Home Theatre, False Ceiling, Wallpaper, and Wall Cladding.",
    image: "img1",
    boxes: [
      {
        img: Section3Images[1].image,
        title: "Modular Kitchen",
        description: "Stylish and space-efficient kitchen designs tailored to your lifestyle.",
      },
      {
        img: Section3Images[2].image,
        title: "Living Room",
        description: "Elegant and cozy spaces perfect for relaxing and entertaining.",
      },
    ],
  },
  {
    title: "Commercial Interior Design",
    content:
      "Kadamban Interior specializes in commercial interior design, offering solutions that enhance productivity and reflect your brand identity. Our services include Café / Showroom, Resort / Restaurant, Studio, and Office designs.",
    image: "img2",
    boxes: [
      {
        img: "office_space.jpg",
        title: "Office",
        description: "Productive, stylish workspaces tailored to your business goals.",
      },
      {
        img: "cafe_showroom.jpg",
        title: "Café / Showroom",
        description: "Inviting designs that attract customers and reflect your brand identity.",
      },
    ],
  },
  {
    title: "Sustainable Interior Design",
    content:
      "Kadamban Interior specializes in sustainable interior design, focusing on eco-friendly materials and energy-efficient solutions. Our designs incorporate smart practices for a healthy and eco-conscious environment.",
    image: "img3",
    boxes: [
      {
        img: "eco_materials.jpg",
        title: "Eco Materials",
        description: "Natural and sustainable materials for a healthy environment.",
      },
      {
        img: "green_lighting.jpg",
        title: "Energy Efficient Lighting",
        description: "Smart lighting solutions that reduce energy consumption.",
      },
    ],
  },
  {
    title: "Space Planning",
    content:
      "Kadamban Interior specializes in space planning, optimizing layouts for efficiency and aesthetics. We focus on maximizing the utility of your space while maintaining a stylish and functional design.",
    image: "img4",
    boxes: [
      {
        img: "space_layout.jpg",
        title: "Layout Optimization",
        description: "Well-planned layouts that maximize space and flow.",
      },
      {
        img: "multi_functional.jpg",
        title: "Multi-Functional Areas",
        description: "Smart zones that serve multiple purposes without clutter.",
      },
    ],
  },
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
        <h1 className="text-3xl font-medium mt-3">
          <span className="relative inline-block">
            <span className="text-red-500">Our Interior </span>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-red-500 "></span>
          </span>{" "}
          Services
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Kadamban Interior transforms spaces with creative, functional, and sustainable designs that reflect your style and elevate your lifestyle.
        </p>
      </motion.div>

      {/* Tabs Section with Animated Underline */}
      <div className="relative flex overflow-x-auto pb-3 justify-between md:justify-around">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`relative py-2 px-4 text-lg font-medium transition whitespace-nowrap ${
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
        className="mt-6 bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start gap-6"
      >
        {/* Left side - 2 boxes side-by-side using flex */}
        <div className="w-full md:w-[50%] flex flex-col sm:flex-row gap-4">
          {tabs[activeTab].boxes?.map((box, index) => (
            <div
              key={index}
              className="flex-1 relative overflow-hidden bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={box.img}
                alt={box.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-gray-800">{box.title}</h3>
                <p className="text-gray-500 text-sm">{box.description}</p>
                <button
                  className="mt-3 text-gray-600 hover:text-black transition"
                  onClick={() => setSelectedDesign(box)}
                >
                  ➜
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - content */}
        <div className="w-full md:w-[45%] text-left">
          <h3 className="text-lg font-semibold text-gray-800">{tabs[activeTab].title}</h3>
          <p className="text-gray-700 mt-2 leading-relaxed whitespace-pre-line">
            {tabs[activeTab].content}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              className="flex items-center gap-2 px-6 py-2 bg-white text-black border border-gray-400 rounded-lg hover:bg-gray-800 hover:text-white transition w-full sm:w-auto justify-center"
              onClick={() => navigate("/quotation")}
            >
              View More <ArrowRight className="w-5 h-5" />
            </button>
            <button
              className="flex items-center gap-2 px-6 py-2 bg-white text-black border border-gray-400 rounded-lg hover:bg-gray-800 hover:text-white transition w-full sm:w-auto justify-center"
              onClick={() => navigate("/quotation")}
            >
              Download File<MdDownload className="w-5 h-5" />
            </button>
          </div>
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