import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const pricingPlans = [
  {
    title: "Standard",
    price: "499",
    features: [
      "Basic floor plan design",
      "2D Elevation drawings",
      "Consultation for design improvements",
    ],
    buttonLabel: "Get Started",
  },
  {
    title: "Premium",
    price: "999",
    features: [
      "3D Elevation design",
      "Structural & Civil Drawings",
      "Personalized consultation with experts",
    ],
    buttonLabel: "Get Started",
  },
  {
    title: "Elite",
    price: "1999",
    features: [
      "Complete architectural design",
      "High-quality 3D rendering",
      "Custom interior design consultation",
    ],
    buttonLabel: "Get Started",
  },
];

const PricingPage = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-[#f8f8f8] py-16 px-5 md:px-20 text-center">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Elevate Your <span className="text-red-500">Dream Space</span> with Our Plans
      </h2>
      <p className="text-lg text-gray-600 mb-10">
        Choose the perfect architectural solution that fits your vision and budget.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className="relative bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-gray-800 transition-transform transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onMouseEnter={() => index === 1 && setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Hover text for Premium plan */}
            {index === 1 && hoveredIndex === index && (
              <motion.div
                className="absolute top-0 left-0 w-full bg-gray-700 text-white text-sm py-2 rounded-t-2xl"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                ⭐ This is the best plan for you!
              </motion.div>
            )}

            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{plan.title}</h3>
            <p className="text-4xl font-bold text-gray-900">{plan.price}</p>
            <ul className="mt-5 space-y-2 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex justify-center items-center gap-2">
                  ✓ {feature}
                </li>
              ))}
            </ul>
            <button
              className="mt-6 px-6 py-3 text-gray-900 rounded-lg text-lg transition bg-gray-300 hover:bg-gray-900 hover:text-white transform hover:scale-105"
              onClick={() => navigate("/contact")}
            >
              {plan.buttonLabel}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingPage;
