import React from 'react';

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
    <section className="relative bg-white text-black dark:text-white overflow-hidden mt-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between py-10 px-6  lg:px-8">
        
        {/* Left Section - Real Estate Services */}
        <div className="max-w-lg text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-800 mb-8">
            Real Estate <span className="text-[#ff4a2a]">Services</span> at Your Fingertips
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-900 mb-6">
            Discover tailored property solutions — whether you're buying, selling, or investing, we make real estate simple.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-md border border-gray-300 transition">
                <span className="text-2xl">{service.icon}</span>
                <p className="text-md font-medium text-gray-800 ">{service.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Gallery */}
        <div className="bg-white w-full lg:w-1/2">
          <div className="max-w-screen-2xl px-4 md:px-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 shadow-lg">
              {[
                { src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620", label: "Modern Homes" },
                { src: "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a", label: "Urban Spaces" },
                { src: "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c", label: "Luxury Villas" },
                { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f", label: "Cozy Apartments" },
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`group relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg md:h-80 ${
                    index === 1 || index === 2 ? "md:col-span-2" : ""
                  }`}
                >
                  <img
                    src={item.src + "?auto=format&q=75&fit=crop&w=600"}
                    alt={item.label}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroWithGallery;
