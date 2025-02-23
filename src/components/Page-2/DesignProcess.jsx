import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Site Analysis",
    icon: "📍", // Replace with actual icon/image
  },
  {
    number: "02",
    title: "Concept Creation",
    icon: "📝",
  },
  {
    number: "03",
    title: "Design Development",
    icon: "🏗️",
  },
  {
    number: "04",
    title: "Execution",
    icon: "🔨",
  },
];

const DesignProcess = () => {
  return (
    <section className="bg-gray py-16 px-5 md:px-20 text-center">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">
        How to Chart Out The <span className="text-red-500">Architectural Design</span> Process?
      </h2>
      <p className="text-lg text-gray-600 mb-12">
        Design Methodology Defined Categorically in Phases
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative bg-white p-6 rounded-2xl shadow-lg text-center border-t-4 border-gray-600 transition-transform transform hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Step Number */}
            <span className="absolute -top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-bold">
              {step.number}
            </span>

            {/* Step Icon */}
            <div className="text-3xl mb-3">{step.icon}</div>

            {/* Step Title */}
            <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default DesignProcess;
