import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { Section2Images } from "../../utils/data1";
import { HiChevronRight } from "react-icons/hi";

const images = [
  { id: 1, src: Section2Images[0].image, path: "/page2" },
  { id: 2, src: Section2Images[1].image, path: "/page2" },
  { id: 3, src: Section2Images[2].image, path: "/page2" },
  { id: 4, src: Section2Images[3].image, path: "/page2" }
];

const OnlineShop = () => {
  const navigate = useNavigate();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative p-6 md:p-10 bg-white flex flex-col md:flex-row items-start md:space-x-10">
      
      {/* Title on top for mobile */}
      {isMobileView && (
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-black mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <span className="relative mb-2 inline-block">
            Welcome
            <span className="absolute left-0 bottom-[-6px] w-full h-1 bg-[#ff4a2a]"></span>
          </span>
          <span className="text-[#ff4a2a]"> to Online Shop</span>
        </motion.h2>
      )}

      {/* Left Side - Image Grid Layout */}
      <div className="w-full md:w-3/5 mt-8 md:mt-16">
        <div className="grid gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${{
                1: "md:col-span-2 sm:col-span-2",
                2: "md:col-span-2 sm:col-span-2"
              }[index] || ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <img
                src={image.src}
                alt={`Gallery Image ${image.id}`}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <button
                className="absolute bottom-4 right-4 bg-gray-100 text-black p-2 rounded-lg shadow-lg hover:text-[#ff4a2a]"
                onClick={() => navigate(image.path)}
              >
                <HiChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <motion.div
        className="w-full md:w-1/3 text-black space-y-6 mt-10 md:mt-16"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        {!isMobileView && (
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <span className="relative mb-2 inline-block">
              Welcome
              <span className="absolute left-0 bottom-[-6px] w-full h-1 bg-[#ff4a2a]"></span>
            </span>
            <span className="text-[#ff4a2a]"> to Online Shop</span>
          </motion.h2>
        )}

        <p className="text-lg font-bold">
          Explore and download high-quality, ready-to-use 2D/3D designs for architecture, interiors, and more – available anytime, anywhere in just a few clicks...
        </p>

        <div className="p-6 border border-gray-400 rounded-lg shadow-lg bg-white">
          <ul className="list-none space-y-2 text-sm sm:text-base">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#ff4a2a] rounded-full mr-2"></span> 2D Plan
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#ff4a2a] rounded-full mr-2"></span> 3D Elevation
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#ff4a2a] rounded-full mr-2"></span> Easy Download
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#ff4a2a] rounded-full mr-2"></span> 100% Vastu & Manayadi Sastram
            </li>
          </ul>
        </div>

        <button
          className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition"
          onClick={() => navigate("/quotation")}
        >
          Shop Now <HiChevronRight className="w-5 h-5" />
        </button>

        {/* Responsive SingleCard wrapper */}
        <div className="w-full ">
          <SingleCard />
        </div>
      </motion.div>
    </section>
  );
};

export default OnlineShop;
