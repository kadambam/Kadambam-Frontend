import { motion } from "framer-motion";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const allServices = [
  { id: 1, title: "Architects", desc: "Innovative and customized designs tailored to your needs.", img: "https://picsum.photos/300/200?random=1" },
  { id: 2, title: "Construction", desc: "High-quality construction for residential, commercial, and industrial projects.", img: "https://picsum.photos/300/200?random=2" },
  { id: 3, title: "Maintenance", desc: "Reliable upkeep and repair services to keep your spaces functional and pristine.", img: "https://picsum.photos/300/200?random=3" },
  { id: 4, title: "Concept Development", desc: "Transforming ideas into actionable, creative plans.", img: "https://picsum.photos/300/200?random=4" },
  { id: 5, title: "Renovation & Re-Modelling", desc: "Modernize and upgrade your spaces with our expertise.", img: "https://picsum.photos/300/200?random=5" },
  { id: 6, title: "Space Planning", desc: "Optimizing layouts for efficiency and style.", img: "https://picsum.photos/300/200?random=6" },
  { id: 7, title: "Property Management", desc: "Seamless management and maintenance of your properties.", img: "https://picsum.photos/300/200?random=7" },
  { id: 8, title: "Interior & Exterior Design", desc: "Stunning designs that reflect your personality and purpose.", img: "https://picsum.photos/300/200?random=8" },
  { id: 9, title: "PMC Consultancy", desc: "Expert project management and consultancy for smooth execution.", img: "https://picsum.photos/300/200?random=9" },
  { id: 10, title: "Estimation & Costing", desc: "Accurate budgeting and cost-effective solutions.", img: "https://picsum.photos/300/200?random=10" },
  { id: 11, title: "Landscape Designing", desc: "Creating beautiful, sustainable outdoor spaces.", img: "https://picsum.photos/300/200?random=11" },
  { id: 12, title: "Contracting Services", desc: "End-to-end contracting for hassle-free project delivery.", img: "https://picsum.photos/300/200?random=12" },
  { id: 13, title: "Material Suggestion", desc: "Guidance on the best materials for durability and aesthetics.", img: "https://picsum.photos/300/200?random=13" },
];


const OurServices = () => {
  const navigate = useNavigate();
  const [currentPage1, setCurrentPage1] = useState(0);
  const [currentPage2, setCurrentPage2] = useState(0);
  const servicesPerLine = 3;
  
  // Split services into two groups for two lines
  const line1Services = allServices.slice(0, allServices.length / 2);
  const line2Services = allServices.slice(allServices.length / 2);

  // Calculate total pages for each line
  const totalPagesLine1 = Math.ceil(line1Services.length / servicesPerLine);
  const totalPagesLine2 = Math.ceil(line2Services.length / servicesPerLine);

  // Get current services for each line
  const currentLine1Services = line1Services.slice(
    currentPage1 * servicesPerLine,
    (currentPage1 + 1) * servicesPerLine
  );

  const currentLine2Services = line2Services.slice(
    currentPage2 * servicesPerLine,
    (currentPage2 + 1) * servicesPerLine
  );

  // Navigation functions
  const nextPage1 = () => {
    setCurrentPage1((prev) => (prev === totalPagesLine1 - 1 ? 0 : prev + 1));
  };

  const prevPage1 = () => {
    setCurrentPage1((prev) => (prev === 0 ? totalPagesLine1 - 1 : prev - 1));
  };

  const nextPage2 = () => {
    setCurrentPage2((prev) => (prev === totalPagesLine2 - 1 ? 0 : prev + 1));
  };

  const prevPage2 = () => {
    setCurrentPage2((prev) => (prev === 0 ? totalPagesLine2 - 1 : prev - 1));
  };



  return (
    <section className="relative p-10 bg-gray-50 flex flex-col md:flex-row items-start justify-between space-x-10">
      <motion.div
        className="w-full md:w-1/3 text-black space-y-4 mt-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <div className="flex justify-between items-start">
        <motion.h2
  className="text-4xl font-bold"
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false }}
>
  <span className="relative inline-block pb-1">
    Our
    <span className="absolute left-0 bottom-[-6px] w-full h-1 bg-[#ff4a2a]"></span>
  </span>
  <span className="text-[#ff4a2a]"> Specialization</span>
</motion.h2>

        </div>

        <motion.p
          className="text-lg mt-10 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
        We offer expert architectural, construction, and property services, ensuring innovation and sustainability.

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
      </motion.div>

      <div className="w-full md:w-2/3 relative ">
        {/* Navigation buttons for line 1 (top right) */}
        <div className=" flex justify-end space-x-2 mb-4 z-10"> 
          <motion.button
            onClick={prevPage1}
            className="p-2 rounded-md bg-gray-50 hover:shadow-md hover:bg-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            onClick={nextPage1}
            className="p-2 rounded-md bg-gray-50 hover:shadow-md hover:bg-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* First line of services - removed fade animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {currentLine1Services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col bg-gray-50 rounded-lg transition hover:shadow-xl p-2"
            >
              <img
                src={service.img}
                alt={service.title}
                className="rounded-md w-full h-40 object-cover"
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
            </div>
          ))}
        </div>

        {/* Navigation buttons for line 2 */}
        <div className=" flex justify-end space-x-2 mb-4 z-10"> 
          <motion.button
            onClick={prevPage2}
            className="p-2 rounded-md bg-gray-50 hover:shadow-md hover:bg-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            onClick={nextPage2}
            className="p-2 rounded-md bg-gray-50 hover:shadow-md hover:bg-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Second line of services - removed fade animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentLine2Services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col bg-gray-50 rounded-lg transition hover:shadow-xl p-2"
            >
              <img
                src={service.img}
                alt={service.title}
                className="rounded-md w-full h-40 object-cover"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;