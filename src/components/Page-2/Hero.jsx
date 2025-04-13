import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const cardData = [
  {
    title: "Find Your Dream Home",
    description: "Luxury apartments and villas",
    buttonText: "Explore now",
    bgColor: "bg-green-600",
    img: "https://picsum.photos/400/300?random=1",
  },
  {
    title: "Discover Scenic Retreats",
    description: "Stay in picturesque locations",
    buttonText: "Learn More",
    bgColor: "bg-purple-600",
    img: "https://picsum.photos/400/300?random=2",
  },
  {
    title: "Luxury Living Spaces",
    description: "Experience modern architecture",
    buttonText: "View More",
    bgColor: "bg-red-600",
    img: "https://picsum.photos/400/300?random=3",
  },
  {
    title: "Investment Opportunities",
    description: "Secure profitable real estate deals",
    buttonText: "Get started",
    bgColor: "bg-blue-600",
    img: "https://picsum.photos/400/300?random=4",
  },
];

const ImageGrid = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      className="relative flex flex-wrap items-center justify-center min-h-screen bg-gray-100 p-6"
      id="hero-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeIn}
    >
      {/* Left Section - Split Card Layout (Extracted from HeroWithGallery) */}
      <motion.div
        className="grid grid-cols-2 gap-4 w-full md:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeIn}
      >
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="flex rounded-lg overflow-hidden shadow-lg border border-gray-300 transition hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {/* Left Image Section */}
            <div className="w-1/2">
              <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
            </div>

            {/* Right Text Section */}
            <div className={`w-1/2 p-4 ${card.bgColor} text-white flex flex-col justify-between`}>
              <div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm mt-2">{card.description}</p>
              </div>
              <button 
                className="mt-4 px-4 py-2 bg-white text-black rounded-md text-sm font-medium"
                onClick={() => navigate("/quotation")}
              >
                {card.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Right Side Content - Unchanged */}
      <motion.div
        className="w-full md:w-1/2 text-center mt-6 md:mt-0 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeIn}
      >
        <p className="text-sm uppercase tracking-wider text-gray-500">
          Elegant & High Quality
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
          OUR <span className="text-red-500">CREATIVE</span> <br />
          <span className="text-red-500">DESIGNS</span> THAT BUILD <br />
          YOUR DREAM HOME
        </h1>

        {/* Animated Button */}
        <motion.button
          className="flex items-center gap-2 px-6 py-2 border border-gray-800 mt-6 bg-white text-black rounded-lg hover:bg-gray-800 hover:text-white transition mx-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/quotation")}
        >
          Get a Quotation <ArrowRight className="w-5 h-5" />
        </motion.button>

        {/* Signature Projects Section */}
        <motion.div
          className="mt-10 text-gray-600 flex justify-center gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
        >
          <p className="text-lg font-medium">Our Signature</p>
          <p className="text-lg font-medium text-red-500">Projects</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ImageGrid;
