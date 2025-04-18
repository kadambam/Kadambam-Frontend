import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TypingEffect from "./TypingEffect";
import { useState, useEffect } from "react";
import { HiChevronRight } from "react-icons/hi";
import { Section1Images } from "../../utils/data1";

const images = [
  { id: 1, src: Section1Images[1].image, title: "Architect Design", link: "/project-1" },
  { id: 2, src: Section1Images[2].image, title: "Construction and Consultancy (PMC)", link: "/project-2" },
  { id: 3, src: Section1Images[3].image, title: "Online 2D/3D Shop", link: "/project-3" },
  { id: 4, src: Section1Images[4].image, title: "Maintenance Services", link: "/project-4" }
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.section 
      id="hero"
      className="flex flex-col md:flex-row items-center justify-around p-4 md:p-10 text-white min-h-[80vh] md:min-h-[90vh]"
      style={{ 
        backgroundImage: `url(${Section1Images[0].image})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundAttachment: isMobile ? "scroll" : "fixed"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Left Side - Company Info (Desktop: Original, Mobile: Improved) */}
      <motion.div 
        className="relative md:w-1/2 z-10"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Mobile View (Improved) */}
        <div className="md:hidden text-center">
          <motion.h1 
            className="text-3xl font-bold mt-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block">Welcome to</span>
            <span className="text-[#ff4a2a] drop-shadow-xl block text-4xl my-2">Kadambam</span>
            <span className="block text-xl min-w-[180px]">
              <TypingEffect />
            </span>
          </motion.h1>

          <motion.p 
            className="text-sm mt-4 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Transform your space with our innovative end-to-end services, architectural design, construction, maintenance, 2D plan online shop and more. Let's create something beautiful together.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <button 
              className="flex items-center justify-center gap-2 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition"
              onClick={() => navigate("/contact")}
            >
              Talk Us <HiChevronRight className="w-5 h-5" />
            </button>
            <button 
              className="flex items-center justify-center gap-2 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition"
              onClick={() => navigate("/quotation")}
            >
              Get a Quotation <HiChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Desktop View (Original) */}
        <div className="hidden md:block space-y-4 md:space-y-6 text-center md:text-left">
          <motion.h1 
            className="text-4xl font-bold md:mt-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block">Welcome to</span>
            <span className="flex items-baseline space-x-2">
              <span className="text-[#ff4a2a] drop-shadow-xl text-5xl">Kadambam</span>
              <span className="min-w-[180px] text-2xl md:text-5xl">
                <TypingEffect />
              </span>
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Transform your space with our innovative end-to-end services, architectural design, construction, maintenance, 2D plan online shop and more. Let's create something beautiful together.
          </motion.p>

          <motion.div 
            className="flex gap-4 justify-center md:justify-start"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <button 
              className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition"
              onClick={() => navigate("/contact")}
            >
              Talk Us <HiChevronRight className="w-5 h-5" />
            </button>
            <button 
              className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition"
              onClick={() => navigate("/quotation")}
            >
              Get a Quotation <HiChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Only visible on desktop */}
      {!isMobile && (
        <motion.div 
          className="relative w-1/3 z-10 hidden md:block"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-6 mt-10">
            {images.map((image) => (
              <motion.div
                key={image.id}
                className="relative group w-full h-[200px] lg:h-[250px] rounded-lg overflow-hidden shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
                
                <div className="absolute top-0 w-full bg-gradient-to-b from-black/80 to-transparent text-white p-3">
                  <h3 className="text-sm lg:text-lg font-semibold">{image.title}</h3>
                </div>
                
                <div className="absolute bottom-0 w-full flex justify-end p-3">
                  <button
                    className="p-2 rounded-lg bg-gray-100 transition"
                    onClick={() => navigate(image.link)}
                  >
                    <HiChevronRight className="w-5 h-5 text-black hover:text-[#ff4a2a]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default HeroSection;