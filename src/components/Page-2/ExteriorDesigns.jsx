import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../assets/images/page2/section7/img1.jpg";
import img2 from "../../assets/images/page2/section7/img2.jpg";
import img3 from "../../assets/images/page2/section7/img3.jpg";
import img4 from "../../assets/images/page2/section7/img4.jpg";
import img5 from "../../assets/images/page2/section7/img5.jpg";
import img6 from "../../assets/images/page2/section7/img6.jpg";
import img7 from "../../assets/images/page2/section7/img7.jpg";
import img8 from "../../assets/images/page2/section7/img8.jpg";
import img9 from "../../assets/images/page2/section7/img9.jpg";
import img10 from "../../assets/images/page2/section7/img10.jpg";
import img11 from "../../assets/images/page2/section7/img11.jpg";
import img12 from "../../assets/images/page2/section7/img12.png";
import img13 from "../../assets/images/page2/section7/img13.jpg";
import img14 from "../../assets/images/page2/section7/img14.jpg";
import img15 from "../../assets/images/page2/section7/img15.jpg";
import img16 from "../../assets/images/page2/section7/img16.jpg";
import img17 from "../../assets/images/page2/section7/img17.png";
import img18 from "../../assets/images/page2/section7/img18.png";

const exteriorImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
];

export default function InteriorDesigns() {
    const swiperRef = useRef(null);

    return (
        <section className="text-center py-16 bg-gray-50">
            {/* Title Section */}
            <div className="mb-8">
                <h2 className="text-4xl font-semibold text-gray-800">
                    Exterior <span className="text-red-500">Designs</span>
                </h2>
                <h3 className="text-2xl font-medium text-gray-700 mt-2">
                    Inspiring for <span className="text-red-500"> Home </span>Exterior Designs
                </h3>
            </div>

            {/* Slider Section */}
            <div className="relative w-full flex items-center justify-center">
                {/* Left Button */}
                <button
                    id="prev-slide"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-300 transition z-50"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                {/* Swiper Component */}
                <Swiper
                    ref={swiperRef}
                    navigation={{ prevEl: "#prev-slide", nextEl: "#next-slide" }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    slidesPerView={1} // One full 3x3 grid per slide
                    spaceBetween={20}
                    modules={[Navigation, Autoplay]}
                    className="w-11/12 md:w-10/12 mx-auto"
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
                                            className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:shadow-2xl"
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
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-300 transition z-50"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </section>
    );
}
