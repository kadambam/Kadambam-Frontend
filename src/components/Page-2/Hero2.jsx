import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Modern from "../../assets/images/page2/section5/img1.jpeg";
import Contemporary from "../../assets/images/page2/section5/img2.jpeg";
import ArtModern from "../../assets/images/page2/section5/img3.jpeg";
import MidCentury from "../../assets/images/page2/section5/img4.jpeg";
import Minimalist from "../../assets/images/page2/section5/img5.jpeg";
import Scandinavian from "../../assets/images/page2/section5/img6.jpeg";
import Farmhouse from "../../assets/images/page2/section5/img7.jpeg";
import Traditional from "../../assets/images/page2/section5/img8.jpeg";
// import FallbackImage from "../../assets/images/fallback-image.png"; // Import a fallback image

// Animation Variants
const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Card Data
const cardData = [
  { title: "Modern Style", description: "Tailored interiors with elegance", buttonText: "Explore Designs", bgColor: "bg-indigo-600", img: Modern },
  { title: "Contemporary Style", description: "Modern living in the heart of the city", buttonText: "Explore Designs", bgColor: "bg-teal-600", img: Contemporary },
  { title: "Art Modern Style", description: "Organic spaces with a green touch", buttonText: "Explore Designs", bgColor: "bg-orange-600", img: ArtModern },
  { title: "Mid-Century Style", description: "Smart design for smarter homes", buttonText: "Explore Designs", bgColor: "bg-sky-700", img: MidCentury },
  { title: "Minimalist Style", description: "Less clutter, more impact", buttonText: "Explore Designs", bgColor: "bg-pink-600", img: Minimalist },
  { title: "Scandinavian Style", description: "Inspired by ocean breeze", buttonText: "Explore Designs", bgColor: "bg-cyan-700", img: Scandinavian },
  { title: "Farmhouse Style", description: "Old-world charm with a modern twist", buttonText: "Explore Designs", bgColor: "bg-rose-700", img: Farmhouse },
  { title: "Traditional Style", description: "Colorful designs that pop", buttonText: "Explore Designs", bgColor: "bg-yellow-500", img: Traditional },
];

const Hero2 = () => {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev === 0 ? 4 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="relative flex flex-col items-center justify-center min-h-screen bg-white px-4 py-8 gap-8 md:flex-row md:gap-10"
      id="hero-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeInRight}
    >
      {/* Left Text Section */}
      <motion.div
        className="w-full md:w-1/2 text-center px-2 sm:px-6 flex flex-col items-center" // Removed md:text-left and md:items-start
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeIn}
      >
        <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 font-medium">
          Stylish & Superior
        </p>

        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-tight mt-3">
          INNOVATIVE <span className="text-red-500">DESIGNS</span> <br className="hidden md:block" />
          TO ELEVATE YOUR <br className="hidden md:block" />
          <span className="text-red-500">LIVING</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mt-4 font-medium">
          Upgrade Your Lifestyle With Us
        </p>

        <motion.button
          className="flex items-center gap-2 px-5 py-2 border border-gray-800 mt-6 bg-white text-black rounded-md hover:bg-gray-800 hover:text-white transition-all duration-300 ease-in-out"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/quotation")}
        >
          Get a Quotation <ArrowRight className="w-4 h-4" />
        </motion.button>

        <motion.div
          className="mt-8 flex items-center justify-center gap-2 text-center" // Removed md:justify-start
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
        >
          <p className="text-base font-medium text-gray-600">Our Signature</p>
          <p className="text-base font-medium text-red-500">Interior Theme</p>
        </motion.div>
      </motion.div>

      {/* Right Cards Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-1/2 md:mr-5"
        initial="hidden"
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        aria-live="polite" // Announce changes to screen readers
      >
        {cardData.slice(startIndex, startIndex + 4).map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row w-full sm:h-[208px] rounded-lg overflow-hidden shadow-md border border-gray-300 transition hover:shadow-xl focus:outline-none focus:ring focus:ring-indigo-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3 }}
            tabIndex="0" // Make the card focusable for keyboard navigation
          >
            {/* Image Section */}
            <div className="w-full sm:w-1/2 h-48 sm:h-full">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = FallbackImage;
                }}
              />
            </div>

            {/* Text Section */}
            <div
              className={`w-full sm:w-1/2 p-4 ${card.bgColor} text-white flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm mt-2">{card.description}</p>
              </div>
              <button
                className="mt-4 px-3 py-2 bg-white text-black rounded-md text-sm font-medium focus:outline-none focus:ring focus:ring-indigo-300"
                onClick={() => navigate("/quotation")}
              >
                {card.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Hero2;
