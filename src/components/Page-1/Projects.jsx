import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <div className="project-container py-10 text-center">
      {/* Centered Title with Two Lines */}
      <motion.div
        className="proj-title"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="top-4 left-10 text-4xl font-bold">
          <span className="relative">
            Our Recent
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#ff4a2a]"></span>
          </span>
          <span className="text-[#ff4a2a]"> Projects</span>
        </h2>
        <p className="mt-6 text-gray-600 font-bold">Here are a Few of our Outstanding Design Projects</p>
        <p className="text-gray-600">Give your home a new look...</p>
      </motion.div>

      {/* Project Grid */}
      <div className="project-wrapper">
        <div className="container mx-auto  py-2 lg:pt-14">
          <motion.div className="-m-1 flex flex-wrap md:-m-2" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
            <div className="flex w-1/2 flex-wrap">
              {[70, 72, 73].map((num, index) => (
                <motion.div key={index} className={`w-${index === 2 ? 'full' : '1/2'} p-1 md:p-2 relative group`} variants={imageVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    src={`https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(${num}).webp`}
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-semibold">Project {index + 1}</p>
                    <FaArrowRight className="text-white text-2xl mt-2" />
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex w-1/2 flex-wrap">
              {[74, 75, 77].map((num, index) => (
                <motion.div key={index} className={`w-${index === 0 ? 'full' : '1/2'} p-1 md:p-2 relative group`} variants={imageVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    src={`https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(${num}).webp`}
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-semibold">Project {index + 4}</p>
                    <FaArrowRight className="text-white text-2xl mt-2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
