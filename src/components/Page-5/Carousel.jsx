import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = () => {
  const cards = [
    {
      title: "Find Your Dream Home",
      description: "Luxury apartments and villas",
      buttonText: "Explore now",
      image: "https://picsum.photos/200/300?random=1",
      bgColor: "bg-green-600",
    },
    {
      title: "Investment Opportunities",
      description: "Secure profitable real estate deals",
      buttonText: "Get started",
      image: "https://picsum.photos/200/300?random=2",
      bgColor: "bg-blue-600",
    },
    {
      title: "Commercial Spaces",
      description: "Modern offices in prime locations",
      buttonText: "View listings",
      image: "https://picsum.photos/200/300?random=3",
      bgColor: "bg-blue-800",
    },
    {
      title: "Vacation Homes",
      description: "Relax in your own holiday retreat",
      buttonText: "Discover more",
      image: "https://picsum.photos/200/300?random=4",
      bgColor: "bg-yellow-600",
    },
    {
      title: "Co-working Spaces",
      description: "Inspiring work environments",
      buttonText: "Join now",
      image: "https://picsum.photos/200/300?random=5",
      bgColor: "bg-purple-600",
    },
    {
      title: "Luxury Penthouses",
      description: "Exclusive living experiences",
      buttonText: "Take a tour",
      image: "https://picsum.photos/200/300?random=6",
      bgColor: "bg-red-600",
    },
    {
      title: "Smart Homes",
      description: "Futuristic living with smart tech",
      buttonText: "See options",
      image: "https://picsum.photos/200/300?random=7",
      bgColor: "bg-gray-800",
    },
    {
      title: "Green Living",
      description: "Eco-friendly housing solutions",
      buttonText: "Live green",
      image: "https://picsum.photos/200/300?random=8",
      bgColor: "bg-emerald-600",
    },
    {
      title: "Rental Homes",
      description: "Affordable and flexible rental plans",
      buttonText: "Browse rentals",
      image: "https://picsum.photos/200/300?random=9",
      bgColor: "bg-cyan-700",
    },
    {
      title: "Luxury Villas",
      description: "Private retreats with lavish designs",
      buttonText: "View villas",
      image: "https://picsum.photos/200/300?random=10",
      bgColor: "bg-pink-700",
    },
    {
      title: "Studio Apartments",
      description: "Compact and affordable urban spaces",
      buttonText: "Check now",
      image: "https://picsum.photos/200/300?random=11",
      bgColor: "bg-indigo-600",
    },
    {
      title: "Farm Houses",
      description: "Scenic and peaceful countryside homes",
      buttonText: "Take a look",
      image: "https://picsum.photos/200/300?random=12",
      bgColor: "bg-lime-700",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const visibleCards = [
    cards[startIndex],
    cards[(startIndex + 1) % cards.length],
    cards[(startIndex + 2) % cards.length],
  ];

  return (
    <section className="flex items-center justify-center p-4 md:p-6">
      <button className="p-2 bg-gray-200 rounded-full shadow-md hidden md:block" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <div className="flex overflow-x-auto md:overflow-hidden space-x-4 md:space-x-4 transition-transform duration-700 ease-in-out">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex md:w-96 md:h-52 rounded-lg overflow-hidden shadow-md flex-shrink-0 w-full sm:w-80 h-auto sm:h-48"
            style={{ transform: `translateX(-${startIndex * (320 + 16)}px)` }} // Adjust for mobile width + margin
          >
            <div className={`p-4 sm:p-6 flex-1 text-white ${card.bgColor}`}>
              <h2 className="text-lg sm:text-xl font-bold">{card.title}</h2>
              <p className="text-xs sm:text-sm mt-2">{card.description}</p>
              <button className="mt-2 sm:mt-4 px-3 py-1 sm:px-4 sm:py-2 bg-white text-black font-medium rounded-lg text-xs sm:text-sm">
                {card.buttonText}
              </button>
            </div>
            <div
              className="w-1/2 sm:w-40 bg-cover bg-center flex-shrink-0"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
          </div>
        ))}
      </div>

      <button className="p-2 bg-gray-200 rounded-full shadow-md hidden md:block" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </section>
  );
};

export default Carousel;