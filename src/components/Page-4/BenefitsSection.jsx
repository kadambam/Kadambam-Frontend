import React from "react";
import { FaClock, FaCogs, FaCompass, FaPhoneAlt } from "react-icons/fa";

const benefits = [
  {
    icon: <FaClock />,
    title: "Time Saving",
    description: "Streamlined processes to ensure faster delivery without compromising on quality.",
  },
  {
    icon: <FaCogs />,
    title: "Easy Customized",
    description: "Tailor every detail to your preference with our user-friendly customization options.",
  },
  {
    icon: <FaCompass />,
    title: "As per Vastu",
    description: "Designs aligned with Vastu principles to bring harmony and positive energy.",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Dedicated Call Support",
    description: "Get personalized assistance anytime from our expert customer support team.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide font-['Sofia Pro Soft']">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {benefits.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="text-5xl text-gray-700">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-wide">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
