import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TypingEffect from "./TypingEffect";
import { useState, useEffect } from "react";
import { HiChevronRight } from "react-icons/hi";
import { Section1Images } from "../../utils/data1";

const images = [
  { id: 1, src: Section1Images[4].image, title: "Architect Design", link: "/architect" },
  { id: 2, src: Section1Images[2].image, title: "Construction and Consultancy (PMC)", link: "/pmc" },
  { id: 3, src: Section1Images[3].image, title: "Online 2D/3D Shop", link: "/onlineshop" },
  { id: 4, src: Section1Images[1].image, title: "Maintenance Services", link: "/maintenance" }
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

  if (isMobile) return null; // 👉 Don't render on mobile, HeroMobile will handle that

  return (
    <motion.section 
      id="hero"
      className="flex flex-col md:flex-row items-center justify-around p-4 md:p-10 text-white min-h-[80vh] md:min-h-[90vh]"
      style={{ 
        backgroundImage: `url(${Section1Images[0].image})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-black/50 "></div>

      <motion.div 
        className="relative md:w-1/2 z-10"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="hidden md:block space-y-4 md:space-y-6 text-center md:text-left">
          <motion.h1 
            className="text-4xl font-bold md:mt-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block">Welcome to</span>
            <span className="flex items-baseline space-x-2">
              <span className="text-[#ff4a2a] drop-shadow-xl text-5xl">KADAMBAN</span>
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
              onClick={() => window.open("tel:+919043672462")}
            >
              Talk to Us <HiChevronRight className="w-5 h-5" />
            </button>
            <button 
              className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition"
              onClick={() => window.open("https://wa.me/919043672462", "_blank")}
            >
              Get a Quotation <HiChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </motion.div>

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
                onClick={() => navigate(image.link)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute top-0 left-0 w-full h-[60px] bg-gradient-to-b from-black/70 to-transparent z-0" />
                <div className="absolute top-0 w-full text-white p-3 z-10">
                  <h3 className="text-sm lg:text-lg font-semibold">{image.title}</h3>
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
