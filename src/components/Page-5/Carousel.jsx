import React, { useState } from 'react';
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
      title: "Commercial Spaces ",
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
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const visibleCards = [
    cards[startIndex],
    cards[(startIndex + 1) % cards.length],
    cards[(startIndex + 2) % cards.length],
  ];

  return (
    <section className="flex items-center justify-center space-x-4 p-6">
      <button className="p-2 bg-gray-200 rounded-full shadow-md" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <div className="flex space-x-4">
        {visibleCards.map((card, index) => (
          <div key={index} className="flex w-96 h-52 rounded-lg overflow-hidden shadow-md">
            <div className={`p-6 flex-1 text-white ${card.bgColor}`}>
              <h2 className="text-xl font-bold">{card.title}</h2>
              <p className="text-sm mt-2">{card.description}</p>
              <button className="mt-4 px-4 py-2 bg-white text-black font-medium rounded-lg">
                {card.buttonText}
              </button>
            </div>
            <div
              className="w-1/2 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
          </div>
        ))}
      </div>

      <button className="p-2 bg-gray-200 rounded-full shadow-md" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
