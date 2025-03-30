import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { HiChevronRight } from "react-icons/hi";

import { Section4Images } from '../../utils/data1';


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Projects = () => {
  const projectImages = [70, 72, 73, 74, 75, 77];

  return (
    <div className="project-container py-10 text-center">
      {/* Title */}
      <motion.div
        className="proj-title"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="text-4xl font-bold">
          <span className="relative">
            Our Recent
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#ff4a2a]"></span>
          </span>
          <span className="text-[#ff4a2a]"> Projects</span>
        </h2>
        <p className="mt-6 text-gray-600 font-bold">
        Give your home a new look with these design ideas curated for you
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="container mx-auto py-2 lg:pt-14">
        <motion.div
          className="-m-1 flex flex-wrap md:-m-2"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex w-1/2 flex-wrap">
  {Section4Images.slice(0, 3).map((img, index) => (
    <motion.div
      key={index}
      className={`w-${index === 2 ? 'full' : '1/2'} p-1 md:p-2 relative group`}
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <img
        alt="gallery"
        className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 group-hover:scale-105"
        src={img.image}
      />

<div className="absolute bottom-2 left-2 right-2 flex justify-between items-center p-2">
  {/* Project title with light gray background */}
  <p className="text-white bg-black text-xs font-semibold px-2 py-1 rounded">
    Project {index + 1}
  </p>

  {/* Arrow icon with its own round background */}
  <div className="hover:bg-gray-50 p-2 text-white  hover:text-black transition rounded-lg">
  <HiChevronRight className="w-5 h-5 " />
</div>


</div>

              </motion.div>
            ))}
          </div>

          <div className="flex w-1/2 flex-wrap">
  {Section4Images.slice(3, 6).map((img, index) => (
    <motion.div
      key={index}
      className={`w-${index === 0 ? 'full' : '1/2'} p-1 md:p-2 relative group`}
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <img
        alt="gallery"
        className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 group-hover:scale-105"
        src={img.image}
      />

                {/* Project title and arrow at the bottom */}
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center p-2">
  {/* Project title with light gray background */}
  <p className="text-white bg-black text-xs font-semibold px-2 py-1 rounded">
    Project {index + 4}
  </p>

  {/* Arrow icon with round background */}
  <div className="hover:bg-gray-50 p-2 text-white  hover:text-black transition rounded-lg">
  <HiChevronRight className="w-5 h-5" />
  </div>
</div>

              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
