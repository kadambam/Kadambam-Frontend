import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronRight } from "react-icons/hi";
import { Section4Images } from '../../utils/data1';
import { useNavigate } from 'react-router-dom';


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Projects = () => {
  const [screenSize, setScreenSize] = useState('desktop');

  const navigate = useNavigate();


  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setScreenSize('mobile');
      } else if (width >= 600 && width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <span className="absolute left-0 bottom-[-6px]   w-full h-1 bg-[#ff4a2a]"></span>
          </span>
          <span className="text-[#ff4a2a]"> Projects</span>
        </h2>
        <p className="mt-6 text-gray-600 font-bold">
          Give your home a new look with these design ideas curated for you
        </p>
      </motion.div>

      {/* Grid */}
      <div className="container mx-auto py-2 lg:pt-14">
        {(screenSize === 'mobile' || screenSize === 'tablet') ? (
          <motion.div
            className={`grid ${screenSize === 'mobile' ? 'grid-cols-1' : 'grid-cols-2'} gap-4 px-4`}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {Section4Images.map((img, index) => (
              <motion.div
                key={index}
                className="w-full relative group"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                <img
                  alt="gallery"
                  className="block w-full aspect-square rounded-lg object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  src={img.image}
                />
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center p-2">
                  <p className="text-white bg-black text-xs font-semibold px-2 py-1 rounded">
                    Project {index + 1}
                  </p>
                  <div
  onClick={() => navigate('/page4')}
  className="hover:bg-gray-50 p-2 text-white hover:text-black transition rounded-lg cursor-pointer"
>
  <HiChevronRight className="w-5 h-5" />
</div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
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
                    <p className="text-white bg-black text-xs font-semibold px-2 py-1 rounded">
                      Project {index + 1}
                    </p>
                    <div
  onClick={() => navigate('/page4')}
  className="hover:bg-gray-50 p-2 text-white hover:text-black transition rounded-lg cursor-pointer"
>
  <HiChevronRight className="w-5 h-5" />
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
                  <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center p-2">
                    <p className="text-white bg-black text-xs font-semibold px-2 py-1 rounded">
                      Project {index + 4}
                    </p>
                    <div
  onClick={() => navigate('/page4')}
  className="hover:bg-gray-50 p-2 text-white hover:text-black transition rounded-lg cursor-pointer"
>
  <HiChevronRight className="w-5 h-5" />
</div>

                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
