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

const Hexagon = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      className="relative flex flex-wrap items-center justify-center min-h-screen bg-gray-100 p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeIn}
    >
      {/* Left Hexagonal Images */}
      <motion.div
        className="relative flex flex-col items-center gap-3 w-full md:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="grid grid-cols-2 gap-3">
          {["Sample 1", "Sample 2"].map((alt, index) => (
            <motion.div
              key={index}
              className="hexagon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={`https://picsum.photos/250/250?random=${index}`}
                alt={alt}
                className="hex-img"
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="hexagon mt-[-35px]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="https://picsum.photos/250/250?random=3"
            alt="Sample 3"
            className="hex-img"
          />
        </motion.div>
      </motion.div>

      {/* Right Side Content */}
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

// Hexagon CSS
const styles = `
.hexagon {
  width: 180px;
  height: 208px;
  background-color: white;
  position: relative;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.hex-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Hexagon;
