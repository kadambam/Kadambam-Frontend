import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TypingEffect from "./TypingEffect";
import { useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import { Section1Images } from "../../utils/data1";



const images = [
  { id: 1, src: Section1Images[1].image, title: "Architect  Design", link: "/project-1" },
  { id: 2, src: Section1Images[2].image , title: "Construction and Consultancy (PMC)", link: "/project-2" },
  { id: 3, src: Section1Images[3].image, title: "Online 2D/3D Shop", link: "/project-3" },
  { id: 4, src: Section1Images[4].image, title: "Maintenance Services", link: "/project-4" }
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <motion.section 
    id="hero"
      className=" flex flex-col md:flex-row items-center justify-around md:p-10 text-white"
      style={{ backgroundImage: `url(${Section1Images[0].image})`, backgroundSize: "cover", backgroundPosition: "center" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Left Side - Company Info */}
      <motion.div 
        className="relative md:w-1/2 space-y-4 md:space-y-6 z-10 text-center md:text-left"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-center md:text-left mt-10 md:mt-0"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="block md:hidden">Welcome to</span>
          <span className="block md:hidden text-[#ff4a2a] drop-shadow-xl">Kadambam</span>
          <span className="block md:hidden min-w-[180px] text-2xl">
            <TypingEffect />
          </span>
          <span className="hidden md:block">Welcome to</span>
          <span className="hidden md:flex items-baseline space-x-2">
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
         Transform your space with our innovative end-to-end services,architectural design, construction, maintenance, 2dplan online shop and more. Let's create something beautiful together.
        </motion.p>

        {/* Buttons */}
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
      </motion.div>

      <div className="relative w-full md:w-1/3 mt-6 md:mt-0 z-10">
  {/* Desktop View - Grid */}
  <motion.div 
    className="hidden md:grid grid-cols-2 gap-6 mt-10"
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.5 }}
  >
    {images.map((image) => (
      <motion.div
        key={image.id}
        className="relative group w-full h-[250px] rounded-lg overflow-hidden shadow-lg cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
        
        {/* Title at Top */}
        <div className="absolute top-0 w-full bg-gradient-to-b from-black/80 to-transparent text-white p-3">
          <h3 className="text-lg font-semibold">{image.title}</h3>
        </div>
        
        {/* Arrow Button at Bottom */}
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
        </motion.div>

        {/* Mobile View - Image Slider */}
        <motion.div 
          className="relative md:hidden w-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {images.map((image) => (
              <div key={image.id} className="min-w-full flex-shrink-0 relative">
                <img src={image.src} alt={image.title} className="w-full h-[250px] object-cover rounded-lg" />
                <div className=" bottom-0 w-full bg-black/60 text-white p-3 flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <button
  className="p-2 bg-white rounded-full hover:bg-gray-300 transition"
  onClick={() => navigate(image.link)}
>
  <HiChevronRight className="w-5 h-5 text-black" />
</button>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
