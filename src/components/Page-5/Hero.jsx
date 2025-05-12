import React from 'react';
import p5sec1img1 from "../../assets/images/page5/section01/p5sec1img1.jpeg";
import p5sec1img2 from "../../assets/images/page5/section01/p5sec1img1.jpg";
import p5sec1img3 from "../../assets/images/page5/section01/p5sec1img3.jpeg";
import p5sec1img4 from "../../assets/images/page5/section01/p5sec1img4.jpeg";

const HeroWithGallery = () => {
  const services = [
    { icon: '🏡', title: "Property Buy & Sell" },
    { icon: '📈', title: "Real Estate Investment" },
    { icon: '🏢', title: "Commercial Leasing" },
    { icon: '📑', title: "Legal Consultation" },
    { icon: '📊', title: "Property Valuation" },
    { icon: '🌿', title: "Land Development" }
  ];

  return (
    <section className="relative bg-white text-black dark:text-white overflow-hidden mt-10 w-full" id="hero-5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-10 gap-10">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-800 mb-6">
            End-to-End <span className="text-[#ff4a2a]">Solutions,</span> at your doorstep…!
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-900 mb-6">
            Worried about managing your property in Chennai, Bangalore, Salem, Erode, Namakkal, or Karur? Whether you're an NRI or too busy, we take care of it all – hassle-free!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-md border-gray-300 transition">
                <span className="text-2xl">{service.icon}</span>
                <p className="text-md font-medium text-gray-800">{service.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Gallery */}
        {/* Right Section - Gallery */}
<div className="w-full lg:w-1/2">
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2">
    {[
      { src: p5sec1img2, label: "Modern Homes" },
      { src: p5sec1img3, label: "Urban Spaces" },
      { src: p5sec1img4, label: "Luxury Villas" },
      { src: p5sec1img1, label: "Cozy Apartments" },
    ].map((item, index) => (
      <div
        key={index}
        className="relative flex h-40 sm:h-48 md:h-64 items-end overflow-hidden rounded-lg shadow-lg"
      >
        <img
          src={item.src + "?auto=format&q=75&fit=crop&w=600"}
          alt={item.label}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
      </div>
    ))}
  </div>
</div>


      </div>
    </section>
  );
};

export default HeroWithGallery;
