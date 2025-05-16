import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import contemporary from "../../assets/images/page2/section2/img1.jpeg";
import Modern from "../../assets/images/page2/section2/img2.jpeg";
import Minimalist from "../../assets/images/page2/section2/img3.jpeg";
import KeralaStyle from "../../assets/images/page2/section2/img4.jpeg";
import EcoFriendly from "../../assets/images/page2/section2/img5.jpeg";
import Combiningstyle from "../../assets/images/page2/section2/img6.jpeg";
import FarmHouse from "../../assets/images/page2/section2/img7.jpeg";
import Custom from "../../assets/images/page2/section2/img8.jpeg";


const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardData = [
  {
    title: "Contemporary Style",
    description: "Luxury apartments and villas",
    buttonText: "Explore now",
    bgColor: "bg-green-600",
    img: contemporary,
    altText: "Modern contemporary apartment interior",
  },
  {
    title: "Modern Style",
    description: "Stay in picturesque locations",
    buttonText: "Explore now",
    bgColor: "bg-purple-600",
    img: Modern,
    altText: "Bright and spacious modern living room",
  },
  {
    title: "Minimalist Modern",
    description: "Experience modern architecture",
    buttonText: "Explore now",
    bgColor: "bg-red-600",
    img: Minimalist,
    altText: "Clean and simple minimalist interior",
  },
  {
    title: "Traditional - Kerala Style",
    description: "Secure profitable real estate deals",
    buttonText: "Explore now",
    bgColor: "bg-blue-600",
    img: KeralaStyle,
    altText: "Traditional Kerala style house with wooden elements",
  },
  {
    title: "Eco-Friendly/Green style",
    description: "Top-class work environments",
    buttonText: "Explore now",
    bgColor: "bg-yellow-600",
    img: EcoFriendly,
    altText: "Interior with plants and natural light",
  },
  {
    title: "Combining Style",
    description: "Live in historic locations",
    buttonText: "Explore now",
    bgColor: "bg-amber-700",
    img: Combiningstyle,
    altText: "Eclectic interior with mixed styles",
  },
  {
    title: "Farmhouse Style",
    description: "Sustainable and smart designs",
    buttonText: "Explore now",
    bgColor: "bg-emerald-700",
    img: FarmHouse,
    altText: "Cozy and rustic farmhouse interior",
  },
  {
    title: "Custom-Built Homes",
    description: "Tailored to your lifestyle",
    buttonText: "Explore now",
    bgColor: "bg-pink-600",
    img: Custom,
    altText: "Modern custom-built home design",
  },
];

const ImageGrid = () => {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const whatsappNumber = "+919043672462"; // Replace with your actual WhatsApp number

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev === 0 ? 4 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleGetQuotation = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hello, I'm interested in getting a quotation for your design services.`, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.section
      className="relative flex flex-wrap items-center justify-center min-h-screen bg-gray-100 p-6 flex-col md:flex-row" // Changed flex-col for mobile
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeIn}
      aria-label="Featured Interior Design Styles"
    >
      {/* Right Text Section (comes first on mobile) */}
      <motion.div
        className="w-full md:w-1/2 text-center mt-6 md:mt-0 px-4 order-first md:order-last" // order-first for mobile
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeIn}
      >
        <p className="text-sm uppercase tracking-wider text-gray-500">
          Elegant & High Quality
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
          OUR <span className="text-red-500">CREATIVE</span> <br className="hidden md:block" />
          <span className="text-red-500">DESIGNS</span> THAT BUILD <br className="hidden md:block" />
          YOUR DREAM HOME
        </h1>

        <motion.button
          className="flex items-center gap-2 px-6 py-2 border border-gray-800 mt-6 bg-white text-black rounded-lg hover:bg-gray-800 hover:text-white transition mx-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetQuotation}
        >
          Get a Quotation <ArrowRight className="w-5 h-5" />
        </motion.button>

        <motion.div
          className="mt-10 text-gray-600 flex justify-center gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
        >
          <p className="text-lg font-medium">Our Signature</p>
          <p className="text-lg font-medium text-red-500">Exterior Theme</p>
        </motion.div>
      </motion.div>

      {/* Left Cards Section (comes second on mobile) */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-1/2 order-last md:order-first mt-6 md:mt-0" // order-last for mobile, mt-6 for spacing
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeIn}
        aria-live="polite"
      >
        {cardData.slice(startIndex, startIndex + 4).map((card, index) => (
          <motion.div
            key={index}
            className="flex w-full h-[208px] rounded-lg overflow-hidden shadow-lg border border-gray-300 transition hover:shadow-xl focus:outline-none focus:ring focus:ring-indigo-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            tabIndex="0"
            aria-describedby={`card-${index}-description`}
          >
            {/* Left Image */}
            <div className="w-1/2 h-full">
              <img
                src={card.img}
                alt={card.altText}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  // e.target.src = FallbackImage; // Uncomment if you have a fallback image
                }}
              />
            </div>

            {/* Right Text */}
            <div
              className={`w-1/2 p-4 ${card.bgColor} text-white flex flex-col justify-between h-full`}
            >
              <div>
                <h3 className="text-base font-semibold">{card.title}</h3>
                <p className="text-sm mt-2" id={`card-${index}-description`}>
                  {card.description}
                </p>
              </div>
              <button
                className="mt-4 px-4 py-2 bg-white text-black rounded-md text-sm font-medium focus:outline-none focus:ring focus:ring-indigo-300"
                onClick={handleGetQuotation}
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

export default ImageGrid;