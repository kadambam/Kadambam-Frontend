import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const exteriorImages = [
    "https://picsum.photos/600/400?random=1",
    "https://picsum.photos/600/400?random=2",
    "https://picsum.photos/600/400?random=3",
    "https://picsum.photos/600/400?random=4",
    "https://picsum.photos/600/400?random=5",
    "https://picsum.photos/600/400?random=6",
    "https://picsum.photos/600/400?random=7",
    "https://picsum.photos/600/400?random=8",
    "https://picsum.photos/600/400?random=9",
    "https://picsum.photos/600/400?random=10",
];

export default function ExteriorDesigns() {
    const swiper1Ref = useRef(null);
    const swiper2Ref = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            if (swiper1Ref.current && swiper1Ref.current.swiper) {
                swiper1Ref.current.swiper.navigation.init();
                swiper1Ref.current.swiper.navigation.update();
            }

            if (swiper2Ref.current && swiper2Ref.current.swiper) {
                swiper2Ref.current.swiper.navigation.init();
                swiper2Ref.current.swiper.navigation.update();
            }
        }, 500);
    }, []);

    return (
        <section className="text-center py-10 relative">
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-bold mb-6 border-b border-gray-300 inline-block"
                style={{ fontFamily: "'Sofia Pro Soft', sans-serif" }}
            >
                Exterior <span className="text-red-500">Designs</span>
            </motion.h2>

            {/* First Slider */}
            <div className="relative w-full flex items-center justify-center">
                {/* Left Button */}
                <button
                    id="prev-1"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition z-50 text-2xl"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <Swiper
                    ref={swiper1Ref}
                    navigation={{ prevEl: "#prev-1", nextEl: "#next-1" }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={20}
                    modules={[Navigation, Autoplay]}
                    className="swiper1 w-11/12"
                >
                    {exteriorImages.slice(0, 5).map((image, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="relative group overflow-hidden rounded-lg shadow-lg"
                                whileHover={{ scale: 1.05, rotate: 1 }}
                                transition={{ type: "spring", stiffness: 120 }}
                            >
                                <img
                                    src={image}
                                    alt={`Exterior design ${index + 1}`}
                                    className="w-full h-auto transition-transform duration-300 group-hover:shadow-2xl rounded-lg"
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Right Button */}
                <button
                    id="next-1"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition z-50 text-2xl"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>

            {/* Second Slider */}
            <div className="relative w-full flex items-center justify-center mt-8">
                {/* Left Button */}
                <button
                    id="prev-2"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition z-50 text-2xl"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <Swiper
                    ref={swiper2Ref}
                    navigation={{ prevEl: "#prev-2", nextEl: "#next-2" }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={20}
                    modules={[Navigation, Autoplay]}
                    className="swiper2 w-11/12"
                >
                    {exteriorImages.slice(5, 9).map((image, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="relative group overflow-hidden rounded-lg shadow-lg"
                                whileHover={{ scale: 1.05, rotate: 1 }}
                                transition={{ type: "spring", stiffness: 120 }}
                            >
                                <img
                                    src={image}
                                    alt={`Exterior design ${index + 4}`}
                                    className="w-full h-auto transition-transform duration-300 group-hover:shadow-2xl rounded-lg"
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Right Button */}
                <button
                    id="next-2"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition z-50 text-2xl"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </section>
    );
}
