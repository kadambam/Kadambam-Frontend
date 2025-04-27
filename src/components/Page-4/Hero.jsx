import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // import Pagination
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // import pagination styles
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
// import Navbar from "../Page-1/Navbar";

const OnlineShopping = () => {
    const offerImages = [
        "https://picsum.photos/1200/500?random=1",
        "https://picsum.photos/1200/500?random=2",
        "https://picsum.photos/1200/500?random=3",
        "https://picsum.photos/1200/500?random=4",
        "https://picsum.photos/1200/500?random=5",
        "https://picsum.photos/1200/500?random=6",
    ];

    return (
        <div className="relative h-screen w-full bg-white" id="hero-4">
            {/* Fullscreen Image Slider with overlay */}
            <Swiper
                modules={[Autoplay, Navigation, Pagination]} // add Pagination
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }} // enable dots
                loop
                className="h-full w-full"
            >
                {offerImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-screen w-full">
                            <img
                                src={image}
                                alt={`Offer ${index + 1}`}
                                className="w-full h-screen object-cover"
                            />
                            {/* Dark overlay for better text contrast */}
                            <div className="absolute inset-0 bg-black/40" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Floating WhatsApp & Call Buttons */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
                <a
                    href="https://wa.me/your-number"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
                >
                    <FaWhatsapp size={28} />
                </a>
                <a
                    href="tel:your-phone-number"
                    className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
                >
                    <FaPhoneAlt size={28} />
                </a>
            </div>
        </div>
    );
};

export default OnlineShopping;
