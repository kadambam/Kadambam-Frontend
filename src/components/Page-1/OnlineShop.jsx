import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const images = [
  { id: 1, src: "https://picsum.photos/600/400?random=1", path: "/page2" },
  { id: 2, src: "https://picsum.photos/600/400?random=2", path: "/page2" },
  { id: 3, src: "https://picsum.photos/600/400?random=3", path: "/page2" },
  { id: 4, src: "https://picsum.photos/600/400?random=4", path: "/page2" }
];

const OnlineShop = () => {
  const navigate = useNavigate();

  return (
    <section className="relative p-10 bg-[#F8F8F8] flex flex-col md:flex-row items-start justify-between space-x-10">
      {/* Title */}
      <motion.h2 
        className="absolute top-4 left-10 text-4xl font-bold"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <span className="relative">
          Welcome
          <span className="absolute left-0 bottom-0 w-full h-1 bg-[#ff4a2a]"></span>
        </span>
        <span className="text-[#ff4a2a]"> to Online Shop</span>
      </motion.h2>

      {/* Left Side - Image Grid Layout */}
      <div className="w-full md:w-1/2 mt-16">
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
              {/* Navigation Icon */}
              <button
                className="absolute bottom-4 right-4 bg-[#ff4a2a] text-white p-2 rounded-full shadow-lg hover:bg-[#e03e1d]"
                onClick={() => navigate(image.path)}
              >
                <ArrowRight size={20} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Side - Text & List */}
      <motion.div 
        className="md:w-1/2 text-black space-y-6 mt-16"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <p className="text-lg font-bold">
          Your one-stop shop for Instant 2D plans, 3D elevations, electrical, interior drawings, etc.
        </p>

        <div className="p-6 border border-gray-400 rounded-lg shadow-lg bg-white">
          <ul className="list-none space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#ff4a2a] rounded-full mr-2"></span> 2D Plan & 3D Elevation
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#ff4a2a] rounded-full mr-2"></span> Bulk Plan & Electrical Plan
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#ff4a2a] rounded-full mr-2"></span> Easy Download & Available All Faces
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#ff4a2a] rounded-full mr-2"></span> 100% Vastu & Manayadi Sastram
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#ff4a2a] rounded-full mr-2"></span> Easy Customized Plans
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#ff4a2a] rounded-full mr-2"></span> Support via Call/WhatsApp
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#ff4a2a] rounded-full mr-2"></span> 100% Genuine Services
            </li>
          </ul>
        </div>
        <button 
          className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition"
          onClick={() => navigate("/quotation")}
        >
          Shop Now <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  );
};

export default OnlineShop;
