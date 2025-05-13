import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

import Carousel from "./Carousel";

const OnlineShopping = () => {
    // Sample offer images (Replace with your actual image URLs)
    const offerImages = [
        "https://picsum.photos/1200/500?random=1",
        "https://picsum.photos/1200/500?random=2",
        "https://picsum.photos/1200/500?random=3",
        "https://picsum.photos/1200/500?random=4",
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Stagger the appearance of children
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 }, // Start a bit below and transparent
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100, // Make it springy
                damping: 20,
            },
        },
        exit: { y: -20, opacity: 0 },
    };

    return (
        <motion.div
            className="relative min-h-screen bg-white"
            id="hero-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants} // Apply container variants
        >
            {/* Offer Image Slider */}
            <motion.div
                className="mt-20 px-4 md:px-12 lg:px-20"
                variants={itemVariants} // Apply item variants
            >
                {/* Increased margin-top (mt-20) for better spacing */}
                <Swiper
                    modules={[Autoplay, Navigation]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={{
                        // Apply the style directly to the navigation buttons here
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    loop
                    className="rounded-lg shadow-lg"
                >
                    {offerImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                alt={`Offer ${index + 1}`}
                                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                            />
                        </SwiperSlide>
                    ))}
                    {/* Custom Navigation Arrows - Added here with updated color */}
                    <div
                        className="swiper-button-prev text-gray-800"
                        style={{ color: '#4a5568' }} // Inline style for the color
                    >
                    </div>
                    <div
                        className="swiper-button-next text-gray-800"
                        style={{ color: '#4a5568' }} // Inline style for the color
                    >
                    </div>
                </Swiper>
            </motion.div>

            {/* Carousel Component */}
            <motion.div
                className="p-4"
                variants={itemVariants} // Apply item variants
            >
                <Carousel />
            </motion.div>
        </motion.div>
    );
};

export default OnlineShopping;
