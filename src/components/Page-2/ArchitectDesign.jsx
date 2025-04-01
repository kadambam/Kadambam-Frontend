import { HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import img1 from "../../assets/images/page2/section1home/img1.png"
import img2 from "../../assets/images/page2/section1home/img2.jpg"
import img3 from "../../assets/images/page2/section1home/img3.png"
import img4 from "../../assets/images/page2/section1home/img4.jpg"

// Background images
const backgroundImages = [
  img1,
  img2,
  img3,
  img4,
  
];

const ArchitectDesign = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black h-screen text-white overflow-hidden">
      {/* Background Images Sliding Effect */}
      <div className="absolute inset-0 bg-black opacity-60">
        {backgroundImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt="Background"
            className="absolute object-cover object-center w-full h-full transition-opacity"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ zIndex: index === currentImage ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-1"></div>
      </div>

      {/* Top Left Title */}
      <motion.div
        className="absolute top-16 left-8 z-20" // Ensure it's above changing images
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* <h1 className="text-5xl font-bold text-white uppercase tracking-wider font-[Cinzel, serif]">
          ARCHITECT
        </h1> */}
      </motion.div>


      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full text-left max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-6xl md:text-8xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          HOME TO <br />
          BEAUTIFUL <span className="text-[#ff4a2a] drop-shadow-xl">DESIGN</span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Designed & Built in One Place
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ff4a2a] text-white py-3 px-8 rounded-md text-lg font-medium flex items-center gap-2 transition hover:bg-[#ff5a3b]"
          >
            TALK TO US <HiChevronRight size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 text-white py-3 px-8 rounded-md text-lg font-medium flex items-center gap-2 transition hover:bg-gray-700"
          >
            BOOK FREE CONSULTATION <HiChevronRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectDesign;
