import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600", label: "VR" },
  { id: 2, src: "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000", label: "Tech" },
  { id: 3, src: "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000", label: "Dev" },
  { id: 4, src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600", label: "Retro" }
];

const OnlineShop = () => {
  const navigate = useNavigate();

  return (
    <section className="relative p-10 bg-[#F8F8F8] flex flex-col md:flex-row items-start justify-between space-x-10">
      {/* Title - Positioned at the top-left */}
      <h2 className="absolute top-4 left-10 text-4xl font-bold">
        <span className="relative">
          Welcome
          <span className="absolute left-0 bottom-0 w-full h-1 bg-[#ff4a2a]"></span>
        </span>
        <span className="text-[#ff4a2a]"> to Online Shop</span>
      </h2>
        
      {/* Left Side - Image Grid Layout */}
      <div className="w-full md:w-1/2 h-2xl mt-16">
        <div className="grid  gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80  ${
                index === 1 || index === 2 ? "md:col-span-2 sm:col-span-2" : ""
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image.src}
                alt={`Gallery ${image.label}`}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                {image.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>


      {/* Right Side - Text & List */}
      <div className="md:w-1/2 text-black space-y-6 mt-16">
        {/* Description */}
        <p className="text-lg font-bold">
          Your one-stop shop for Instant 2D plans, 3D elevations, electrical, interior drawings, etc.
        </p>

        {/* Styled List Box */}
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
      </div>
    </section>
  );
};

export default OnlineShop;
