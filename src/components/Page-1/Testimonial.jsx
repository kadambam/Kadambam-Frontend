import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Deepika",
    review:
      "Dusk & Dawn Construction exceeded my expectations! From start to finish, they handled my project with professionalism and care.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Arjun",
    review:
      "I'm impressed by the attention to detail and commitment to quality displayed by Dusk & Dawn Construction. Highly recommended!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Rahul",
    review:
      "Excellent craftsmanship and timely delivery. They turned my vision into reality with precision and expertise.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Priya",
    review:
      "The team was fantastic! They brought my ideas to life and delivered beyond what I expected.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const testimonialsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  // Get current set of testimonials
  const currentTestimonials = testimonials.slice(
    index * testimonialsPerPage,
    index * testimonialsPerPage + testimonialsPerPage
  );

  return (
    <div className="bg-gray-100 py-16 px-6 text-center">
      <h3 className="text-gray-500 text-sm uppercase">Clients Testimonials</h3>
      <h2 className="top-4 left-10 text-4xl font-bold">
        <span className="relative">
          What
          <span className="absolute left-0 bottom-0 w-full h-1 bg-[#ff4a2a]"></span>
        </span>
        <span className="text-[#ff4a2a]"> Clients Say !</span>
      </h2>

      <div className="relative w-full max-w-4xl mx-auto mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {currentTestimonials.map((testimonial, i) => (
              <div
                key={i}
                className="relative bg-white p-6 rounded-lg shadow-lg"
              >
                <FaQuoteLeft className="text-gray-300 text-3xl absolute top-4 right-4" />
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-gray-300"
                  />
                  <div className="text-left">
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="flex text-yellow-500">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <FaStar key={j} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">"{testimonial.review}"</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 mx-1 rounded-full cursor-pointer transition-all ${
                index === i ? "bg-[#ff4a2a]" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Redirect to Google Business */}
      <button
        onClick={() =>
          window.open("https://g.page/YOUR-GOOGLE-BUSINESS-LINK", "_blank")
        }
        className="mt-6 px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-900 transition"
      >
        Put Your Review
      </button>
    </div>
  );
};

export default TestimonialSection;
