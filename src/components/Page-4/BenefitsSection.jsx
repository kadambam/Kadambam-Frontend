import React from "react";
import { FaShieldAlt, FaHome, FaUsers, FaTools } from "react-icons/fa";

const benefits = [
  { icon: <FaShieldAlt />, title: "10-Year Warranty", description: "All our products come with a 10-year warranty for any manufacturing defects." },
  { icon: <FaHome />, title: "On-Time Installation", description: "Get your chosen products installed in 45 days, or we pay your rent. That’s a promise!" },
  { icon: <FaUsers />, title: "Expert Designers", description: "Create your dream home, fitting your lifestyle, with the help of our top designers." },
  { icon: <FaTools />, title: "Ongoing Support", description: "Enjoy unwavering support and services from our skilled team for up to 10 years." },
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
