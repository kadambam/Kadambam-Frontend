import React from "react";
import { motion } from "framer-motion";
import architectImage from "../../assets/images/page2/process/Architect.png";

// Step data
const steps = [
  { number: "01", title: "Site Analysis", icon: "📍" },
  { number: "02", title: "Concept Creation", icon: "📝" },
  { number: "03", title: "Design Development", icon: "🏗️" },
  { number: "04", title: "Execution", icon: "🔨" },
];

const InfogramProcess = () => {
  return (
    <div className="w-full">
      {/* Desktop/Tablet - Full Image */}
      <div className="hidden md:flex w-full h-screen justify-center items-center overflow-hidden">
        <img
          src={architectImage}
          alt="Infogram Process"
          className="w-auto h-auto max-w-full max-h-full"
        />
      </div>

      {/* Mobile View - Enhanced Design */}
      <div className="md:hidden bg-[#f5f5f5] py-12 px-5">
        <div className="text-center mb-10">
          <h2 className="text-[1.8rem] font-bold leading-tight text-gray-800 mb-3">
            How to Chart Out the{" "}
            <span className="text-red-500">Architectural Design</span> Process?
          </h2>
          <p className="text-[1rem] text-gray-600">
            Design Methodology Defined Categorically in Phases
          </p>
        </div>

        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-white py-6 px-6 rounded-2xl shadow-md border-l-4 border-red-500 flex items-center gap-4"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              {/* Number bubble */}
              <div className="flex-shrink-0 w-10 h-10 bg-red-500 text-white font-bold text-sm rounded-full flex items-center justify-center shadow">
                {step.number}
              </div>

              {/* Step Details */}
              <div>
                <div className="text-xl font-semibold text-gray-800">
                  {step.icon} {step.title}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfogramProcess;
