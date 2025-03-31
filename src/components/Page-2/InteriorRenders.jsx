import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const exteriorImages = [
    "https://picsum.photos/400/225?random=1",
    "https://picsum.photos/400/225?random=2",
    "https://picsum.photos/400/225?random=3",
    "https://picsum.photos/400/225?random=4",
    "https://picsum.photos/400/225?random=5",
    "https://picsum.photos/400/225?random=6",
    "https://picsum.photos/400/225?random=7",
    "https://picsum.photos/400/225?random=8",
    "https://picsum.photos/400/225?random=9",
    "https://picsum.photos/400/225?random=10",
    "https://picsum.photos/400/225?random=11",
    "https://picsum.photos/400/225?random=12",
    "https://picsum.photos/400/225?random=13",
    "https://picsum.photos/400/225?random=14",
    "https://picsum.photos/400/225?random=15",
    "https://picsum.photos/400/225?random=16",
    "https://picsum.photos/400/225?random=17",
    "https://picsum.photos/400/225?random=18",
];

export default function InteriorRenders() {
    const swiperRef = useRef(null);

    return (
        <section className="text-center py-10 relative">
            {/* Title */}
            <h2 className="text-3xl font-bold mb-6 border-b border-gray-300 inline-block">
                Interior <span className="text-red-500">Renders</span>
            </h2>

            {/* Slider with One Navigation Button */}
            <div className="relative w-full flex items-center justify-center">
                {/* Left Button */}
                <button
                    id="prev-slide"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition z-50"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <Swiper
                    ref={swiperRef}
                    navigation={{ prevEl: "#prev-slide", nextEl: "#next-slide" }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    slidesPerView={1} // One full 3x3 grid per slide
                    spaceBetween={20}
                    modules={[Navigation, Autoplay]}
                    className="w-11/12"
                >
                    {/* Creating slides of 9 images each */}
                    {[...Array(Math.ceil(exteriorImages.length / 9))].map((_, slideIndex) => (
                        <SwiperSlide key={slideIndex}>
                            <div className="grid grid-cols-3 gap-4">
                                {exteriorImages.slice(slideIndex * 9, slideIndex * 9 + 9).map((image, index) => (
                                    <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                                        <img
                                            src={image}
                                            alt={`Exterior design ${index + 1}`}
                                            className="w-[400px] h-[225px] object-cover rounded-lg transition-transform duration-300 group-hover:shadow-2xl"
                                        />
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Right Button */}
                <button
                    id="next-slide"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition z-50"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </section>
    );
}
