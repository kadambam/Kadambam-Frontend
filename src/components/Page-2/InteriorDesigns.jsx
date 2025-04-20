import React, { useRef, useState, useEffect } from "react"; // Import useState and useEffect
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// Image imports
import img1 from "../../assets/images/page2/section8/img1.jpg";
import img2 from "../../assets/images/page2/section8/img2.jpg";
import img3 from "../../assets/images/page2/section8/img3.jpg";
import img4 from "../../assets/images/page2/section8/img4.jpg";
import img5 from "../../assets/images/page2/section8/img5.jpg";
import img6 from "../../assets/images/page2/section8/img6.png";
import img7 from "../../assets/images/page2/section8/img7.jpg";
import img8 from "../../assets/images/page2/section8/img8.jpg";
import img9 from "../../assets/images/page2/section8/img9.jpg";
import img10 from "../../assets/images/page2/section8/img10.jpg";
import img11 from "../../assets/images/page2/section8/img11.jpg";
import img12 from "../../assets/images/page2/section8/img12.jpg";
import img13 from "../../assets/images/page2/section8/img13.jpg";
import img14 from "../../assets/images/page2/section8/img14.jpg";
import img15 from "../../assets/images/page2/section8/img15.png";
import img16 from "../../assets/images/page2/section8/img16.jpg";
import img17 from "../../assets/images/page2/section8/img17.jpg";
import img18 from "../../assets/images/page2/section8/img18.jpeg";

const interiorImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17, img18,
];

export default function InteriorDesigns() {
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 640);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const slidesPerRow = isMobile ? 4 : 9; // 2 rows x 2 columns = 4 images for mobile

  return (
    <section className="text-center py-8 sm:py-16 bg-gray-50">
      {/* Title */}
      <div className="mb-6 sm:mb-8 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          Interior <span className="text-red-500">Designs</span>
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 mt-1 sm:mt-2">
          Inspiring Concepts for <span className="text-red-500">Elegant Home</span> Interiors
        </h3>
      </div>

      {/* Slider */}
      <div className="relative w-full flex items-center justify-center">
        {/* Left Button */}
        <button
          id="prev-slide-interior"
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-300 transition z-50"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-sm sm:text-base" />
        </button>

        {/* Swiper */}
        <Swiper
          ref={swiperRef}
          navigation={{ prevEl: "#prev-slide-interior", nextEl: "#next-slide-interior" }}
          autoplay={{ delay: 3000 }}
          loop={true}
          slidesPerView={1}
          spaceBetween={15}
          modules={[Navigation, Autoplay]}
          className="w-11/12 md:w-10/12 mx-auto"
        >
          {[...Array(Math.ceil(interiorImages.length / slidesPerRow))].map((_, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className={`grid gap-2 sm:gap-4 ${isMobile ? "grid-cols-2 grid-rows-2" : "grid-cols-3"}`}>
                {interiorImages
                  .slice(slideIndex * slidesPerRow, slideIndex * slidesPerRow + slidesPerRow)
                  .map((image, index) => (
                    <div
                      key={index}
                      className="relative group overflow-hidden rounded-md shadow-md"
                    >
                      <img
                        src={image}
                        alt={`Interior design ${index + 1}`}
                        className="w-full h-32 sm:h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Button */}
        <button
          id="next-slide-interior"
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-300 transition z-50"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-sm sm:text-base" />
        </button>
      </div>
    </section>
  );
}