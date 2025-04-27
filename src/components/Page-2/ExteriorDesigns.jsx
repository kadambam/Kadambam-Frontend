import { useRef, useEffect, useState } from "react";
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

  const imagesPerSlide = isMobile ? 4 : 9;

  return (
    <section className="text-center py-16 bg-gray-50">
      <div className="mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Exterior <span className="text-red-500">Designs</span>
        </h2>
        <h3 className="text-xl md:text-2xl font-medium text-gray-700 mt-2">
          Inspiring for <span className="text-red-500">Home</span> Exterior Designs
        </h3>
      </div>

      <div className="relative w-full flex items-center justify-center">
        <button
          id="prev-slide"
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-300 transition z-50"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <Swiper
          ref={swiperRef}
          navigation={{ prevEl: "#prev-slide", nextEl: "#next-slide" }}
          autoplay={{ delay: 3000 }}
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          modules={[Navigation, Autoplay]}
          className="w-11/12 md:w-10/12 mx-auto"
        >
          {[...Array(Math.ceil(exteriorImages.length / imagesPerSlide))].map((_, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className={`grid gap-3 sm:gap-4 ${isMobile ? "grid-cols-2 grid-rows-2" : "grid-cols-3 grid-rows-3"}`}>
                {exteriorImages
                  .slice(slideIndex * imagesPerSlide, slideIndex * imagesPerSlide + imagesPerSlide)
                  .map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-xl shadow-md">
                      <img
                        src={image}
                        alt={`Exterior design ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
                      />
                    </div>
                  ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          id="next-slide"
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-300 transition z-50"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}
