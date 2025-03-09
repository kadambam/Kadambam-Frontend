import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  { id: 1, title: "Interior Design", desc: "Transforming spaces with stunning interior designs.", img: "https://picsum.photos/300/200?random=1" },
  { id: 2, title: "3D Elevation", desc: "Visualize your dream home with 3D elevation designs.", img: "https://picsum.photos/300/200?random=2" },
  { id: 3, title: "Electrical Plan", desc: "Smart and efficient electrical planning for safety.", img: "https://picsum.photos/300/200?random=3" },
  { id: 4, title: "Vastu Consultation", desc: "Expert guidance for a harmonious living space.", img: "https://picsum.photos/300/200?random=4" },
  { id: 5, title: "Customized Plans", desc: "Tailor-made architectural plans to suit your needs.", img: "https://picsum.photos/300/200?random=5" },
  { id: 6, title: "Home Renovation", desc: "Upgrade and modernize your living space.", img: "https://picsum.photos/300/200?random=6" },
];

const OurServices = () => {
  const navigate = useNavigate();

  return (
    <section className="relative p-10 bg-[#e3e3e3] flex flex-col md:flex-row items-start justify-between space-x-10">
      {/* Left Side - Text Content */}
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

        {[
          "Best Quality",
          "Delivery On Time",
          "Skilled Team",
          "Professionalism",
          "Affordable Prices",
          "Perfect Execution",
          "Meticulous Planning",
        ].map((text, index) => (
          <motion.p
            key={index}
            className="text-lg font-semibold"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
            ✅ {text}
          </motion.p>
        ))}
      </motion.div>

      {/* Right Side - Service Grid */}
      <motion.div
        className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: false }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="group relative flex flex-col  bg-white shadow-lg rounded-lg transition hover:shadow-xl"
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
              <ArrowRight size={24} />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OurServices;
