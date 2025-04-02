import React, { useState, useEffect } from 'react';
import { HiChevronRight } from "react-icons/hi";
import { FaLeaf, FaRulerCombined } from "react-icons/fa";

const serviceData = [
  { title: "Residences / Villa", description: "Top-rated residential building contractors providing qualitative and timely solutions.", icon: <FaLeaf size={40} className="mb-4 text-[#ff4a2a]" /> },
  { title: "Apartment", description: "Well-planned and budget-friendly apartment projects with modern amenities.", icon: <FaRulerCombined size={40} className="mb-4 text-[#ff4a2a]" /> },
  { title: "Bungalow", description: "Luxurious bungalows with classic and spectacular designs.", icon: <FaLeaf size={40} className="mb-4 text-[#ff4a2a]" /> },
  { title: "Row House", description: "Plush row houses designed with world-class fittings and nature's elegance.", icon: <FaRulerCombined size={40} className="mb-4 text-[#ff4a2a]" /> },
  { title: "Split-Level House", description: "Efficient space use, distinct living areas, and stylish designs for compact lots.", icon: <FaLeaf size={40} className="mb-4 text-[#ff4a2a]" /> },
  { title: "Traditional House", description: "Classic design, pitched roofs, and timeless details for a warm ambiance.", icon: <FaRulerCombined size={40} className="mb-4 text-[#ff4a2a]" /> },
  { title: "Cottage", description: "Cozy, charming design with rustic elements and inviting atmosphere.", icon: <FaLeaf size={40} className="mb-4 text-[#ff4a2a]" /> },
  { title: "Duplex / Triplex", description: "Multiple independent living units offering spacious, functional layouts.", icon: <FaRulerCombined size={40} className="mb-4 text-[#ff4a2a]" /> },
  { title: "Sustainable / Eco House", description: "Energy-efficient homes using eco-friendly materials and solar energy.", icon: <FaLeaf size={40} className="mb-4 text-[#ff4a2a]" /> },
  { title: "Smart Home", description: "Advanced technology integration for automation, security, and efficiency.", icon: <FaRulerCombined size={40} className="mb-4 text-[#ff4a2a]" /> }
];

const ServicesSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 2) % serviceData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-2 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-left md:w-1/2">
          <h2 className="top-4 left-10 text-4xl font-bold py-6">
            <span className="relative">
              Our <span className="absolute left-0 bottom-0 w-full h-1 bg-[#ff4a2a]"></span>
            </span>
            <span className="text-[#ff4a2a]"> Construction Services</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl">
          Kadamban construction is a multidisciplinary firm specializing in innovative and practical design solutions for residential and commercial projects. We offer hassle-free civil construction services in <span className='font-bold'>Salem, Namakkal, Karur, Chennai, Erode and Bangalore,</span> ensuring quality, transparency, and timely completion. Our expert team delivers customized solutions within your budget, backed by a reliable warranty.
 <span className='font-bold'>Build your dream home with 
 Kadamban Group – where innovation meets excellence!</span>

          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-[#ff4a2a] text-white py-3 px-8 rounded-md text-lg font-medium flex items-center gap-2 transition hover:bg-opacity-90">
              View More <HiChevronRight size={20} />
            </button>
            <button className="bg-[#ff4a2a] text-white py-3 px-8 rounded-md text-lg font-medium flex items-center gap-2 transition hover:bg-opacity-90">
              Download File <HiChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:w-1/2">
          {serviceData.slice(index, index + 2).map((service, i) => (
            <div key={i} className="bg-white text-[#ff4a2a] p-8 rounded-lg shadow-lg border border-gray-200">
              {service.icon}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
