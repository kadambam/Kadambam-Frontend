import { HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import img1 from "../../assets/images/page2/section1/img1.png";
import img2 from "../../assets/images/page2/section1/img2.jpg";
import img3 from "../../assets/images/page2/section1/img3.png";
import img4 from "../../assets/images/page2/section1/img4.jpg";

const backgroundImages = [img1, img2, img3, img4];

const ArchitectDesign = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const phoneNumber = "+919043672462";
  const whatsappNumber = "+919043672462";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-black h-screen text-white overflow-hidden"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 bg-black opacity-60">
        {backgroundImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt="Background"
            className="absolute object-cover w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ zIndex: index === currentImage ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-6xl  px-6 sm:px-8 md:px-12 lg:pl-20">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          HOME TO <br />
          BEAUTIFUL{" "}
          <span className="text-[#ff4a2a] drop-shadow-xl">DESIGN</span>
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-[17px] text-gray-300 mb-8 sm:mb-12 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Designed & Built in One Place
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.a
            href={`tel:${phoneNumber}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-[#ff4a2a] text-white py-3 px-6 rounded-md text-base sm:text-lg font-medium flex items-center justify-center gap-2 transition hover:bg-[#ff5a3b]"
          >
            TALK TO US <HiChevronRight size={20} />
          </motion.a>

          <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-gray-800 text-white py-3 px-6 rounded-md text-base sm:text-lg font-medium flex items-center justify-center gap-2 transition hover:bg-gray-700"
          >
            BOOK FREE CONSULTATION <HiChevronRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectDesign;
