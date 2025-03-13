import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiChevronRight } from "react-icons/hi";


const services = [
  { id: 1, title: "Interior Design", desc: "Transforming spaces with stunning interior designs.", img: "https://picsum.photos/300/200?random=1" },
  { id: 2, title: "3D Elevation", desc: "Visualize your dream home with 3D elevation designs.", img: "https://picsum.photos/300/200?random=2" },
  { id: 3, title: "Electrical Plan", desc: "Smart and efficient electrical planning for safety.", img: "https://picsum.photos/300/200?random=3" },
  { id: 4, title: "Vastu Consultation", desc: "Expert guidance for a harmonious living space.", img: "https://picsum.photos/300/200?random=4" },
  { id: 5, title: "Customized Plans", desc: "Tailor-made architectural plans to suit your needs.", img: "https://picsum.photos/300/200?random=5" },
  { id: 6, title: "Home Renovation", desc: "Upgrade and modernize your living space.", img: "https://picsum.photos/300/200?random=6" },
  { id: 7, title: "Landscaping", desc: "Creating beautiful outdoor spaces.", img: "https://picsum.photos/300/200?random=7" },
  { id: 8, title: "Roof Design", desc: "Innovative roofing solutions.", img: "https://picsum.photos/300/200?random=8" },
  { id: 9, title: "Space Planning", desc: "Maximizing space efficiency.", img: "https://picsum.photos/300/200?random=9" },
  { id: 10, title: "Building Renovation", desc: "Revamping old buildings with modern designs.", img: "https://picsum.photos/300/200?random=10" },
  { id: 11, title: "Furniture Design", desc: "Custom furniture solutions.", img: "https://picsum.photos/300/200?random=11" },
  { id: 12, title: "Smart Home Setup", desc: "Automation for modern homes.", img: "https://picsum.photos/300/200?random=12" },
];

const OurServices = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative p-10 bg-[#e3e3e3] flex flex-col md:flex-row items-start justify-between space-x-10">
      <motion.div
        className="w-full md:w-1/3 text-black space-y-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <motion.h2
          className="absolute top-4 left-10 text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <span className="relative">
            Our Awesome
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#ff4a2a]"></span>
          </span>
          <span className="text-[#ff4a2a]"> Services</span>
        </motion.h2>

        <motion.p
          className="text-lg mt-10 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          We undertake other key elements of your project, making your home as beautiful as you wish it to be.
        </motion.p>

        {["Best Quality", "Delivery On Time", "Skilled Team", "Professionalism", "Affordable Prices", "Perfect Execution", "Meticulous Planning"].map((text, index) => (
          <motion.p
            key={index}
            className="text-lg font-semibold"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
           <li className="flex items-center">
              <span className="w-2 h-2 bg-[#ff4a2a] rounded-full mr-2"></span> {text}
            </li>
          </motion.p>
        ))}

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 px-6 py-2 bg-[#ff4a2a] text-white rounded-full hover:bg-black transition"
        >
          View More
        </button>
      </motion.div>

      <motion.div
        className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: false }}
      >
        {services.slice(0, 6).map((service) => (
          <motion.div
            key={service.id}
            className="group relative flex flex-col bg-white shadow-lg rounded-lg transition hover:shadow-xl"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={service.img}
              alt={service.title}
              className="rounded-md w-full h-40 object-cover"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            />
            <h3 className="text-xl font-bold mt-4 px-4">{service.title}</h3>
            <p className="text-gray-600 p-4">{service.desc}</p>
            <motion.button
              className="absolute bottom-4 right-4 text-[#ff4a2a] hover:text-black"
              whileHover={{ scale: 1.2 }}
              onClick={() => navigate(`/services/${service.id}`)}
            >
               <HiChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {isModalOpen && (
  <motion.div
    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="bg-white rounded-lg p-8 overflow-x-auto whitespace-nowrap relative"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      exit={{ y: -50 }}
      transition={{ duration: 0.5 }}
      style={{ scrollbarWidth: "none" }}
    >
      {/* Close icon */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-4 right-4 text-black hover:text-[#ff4a2a] p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition mb-5"
      >
        <X size={30} />
      </button>

      {/* Horizontal scrolling service cards */}
      <div
        className="flex space-x-6 animate-slide pt-10"
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="group relative flex flex-col bg-white shadow-lg rounded-lg transition hover:shadow-xl w-[300px] flex-shrink-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={service.img}
              alt={service.title}
              className="rounded-md w-full h-40 object-cover"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <h3 className="text-xl font-bold mt-4 px-4">{service.title}</h3>
            <p className="text-gray-600 p-4 leading-relaxed whitespace-normal break-words">
              {service.desc}
            </p>

            <motion.button
              className="absolute bottom-4 right-4 text-[#ff4a2a] hover:text-black"
              whileHover={{ scale: 1.2 }}
              onClick={() => navigate(`/services/${service.id}`)}
            >
              <ArrowRight size={24} />
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </motion.div>
)}




    </section>
  );
};

export default OurServices;