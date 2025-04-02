import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const pricingPlans = [
  {
    title: "Budget",
    features: [
      "2D Floor Plan - Vasthu",
      "3D Elevation",
      "Floor Plan Revision Upto 2 Times",
    ],
    buttonLabel: "Get Started",
  },
  {
    title: "Standard",
    features: [
      "2D Floor Plan - Vasthu",
      "3D Elevation",
      "Floor Plan Revision",
      "Electrical Design",
      "Compound wall Design and details",
    ],
    buttonLabel: "Get Started",
  },
  {
    title: "Premium",
    features: [
      "2D Floor Plan - Vasthu",
      "3D Elevation",
      "Floor Plan Revision ",
      "Structural Design",
      "Plumbing Design",
      "Electrical Design",
      "Exterior colors/finishes",
      "Furniture Layout",
      "Civil Drawings",
      "Compound wall Design and details",
      "Site Visits by Architects Upto 2 Times",
    ],
    buttonLabel: "Get Started",
  },
  {
    title: "Elite",
    features: [
      "2D Floor Plan - Vasthu",
      "3D Floor Plan - Vasthu",
      "3D Elevation",
      "2D Elevation",
      "3D Walkthrough",
      "Floor Plan Revision Unlimited",
      "Structural Design",
      "Civil Drawings",
      "Plumbing Design",
      "Electrical Design",
      "Furniture Layout",
      "Compound wall Design and details",
      "Entrance Gate and details",
      "Exterior colors/finishes",
      "Site Visits by Architects Upto 5 Times",
    ],
    buttonLabel: "Get Started",
  },
];

const PricingPage = () => {
  const navigate = useNavigate();
  const [expandedPlan, setExpandedPlan] = useState(null);

  const toggleViewMore = (index) => {
    setExpandedPlan(expandedPlan === index ? null : index);
  };

  return (
    <section className="bg-[#f8f8f8] py-16 px-5 md:px-20 text-center">
      {/* Title Section */}
      <motion.h2
        className="text-3xl font-semibold mb-6 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Elevate Your <span className="text-red-500">Dream Space</span> with Our Plans
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Simple solutions, stylish results—start your journey here.
      </motion.p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => {
          const isExpanded = expandedPlan === index;
          const isExpandable = index >= 2; // Expandable for Premium & Elite

          return (
            <motion.div
              key={index}
              className="relative bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-gray-800 flex flex-col h-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Plan Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{plan.title}</h3>

              {/* Features List */}
              <ul className="mt-5 space-y-2 text-gray-600 text-left mx-auto w-full max-w-xs">
                {plan.features.slice(0, isExpanded ? plan.features.length : 4).map((feature, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                className="mt-6 px-6 py-3 text-gray-900 rounded-lg text-lg transition bg-gray-300 hover:bg-gray-900 hover:text-white"
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate("/contact")}
              >
                {plan.buttonLabel}
              </motion.button>

              {/* View More / View Less Button Below CTA */}
              {isExpandable && (
                <button
                  className="mt-4 text-gray-500 text-sm font-medium flex items-center justify-center gap-1 hover:text-gray-700"
                  onClick={() => toggleViewMore(index)}
                >
                  {isExpanded ? (
                    <>
                      View Less <span className="text-lg">▲</span>
                    </>
                  ) : (
                    <>
                      View More <span className="text-lg">▼</span>
                    </>
                  )}
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingPage;
