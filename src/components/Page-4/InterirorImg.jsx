import React, { useState } from "react";
import { X } from "lucide-react";
import bedroom from "../../assets/images/page4/Section8/bedroom.jpg"
import dining from "../../assets/images/page4/Section8/dining.jpg"
import living from "../../assets/images/page4/Section8/livingroom.jpg"
import kitchen from "../../assets/images/page4/Section8/kitchen.jpg"

const exteriorDesigns = [
    {
        title: "Modern Living Room",
        description: "A spacious and elegant living room with contemporary decor.",
        img: living,
        gallery: [
            "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
            "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg",
            "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg",
            "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg",
        ],
    },
    {
        title: "Luxury Bedroom",
        description: "A cozy bedroom with warm lighting and luxurious furniture.",
        img: bedroom,
        gallery: [
            "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
            "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
            "https://images.pexels.com/photos/3965528/pexels-photo-3965528.jpeg",
            "https://images.pexels.com/photos/8136920/pexels-photo-8136920.jpeg",
        ],
    },
    {
        title: "Minimalist Kitchen",
        description: "A sleek, modern kitchen with minimalist aesthetics.",
        img: kitchen,
        gallery: [
            "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg",
            "https://images.pexels.com/photos/4682117/pexels-photo-4682117.jpeg",
            "https://images.pexels.com/photos/3735416/pexels-photo-3735416.jpeg",
            "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
        ],
    },
    {
        title: "Elegant Dining Room",
        description: "A sophisticated dining space with a classic touch.",
        img: dining,
        gallery: [
            "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg",
            "https://images.pexels.com/photos/932095/pexels-photo-932095.jpeg",
            "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg",
            "https://images.pexels.com/photos/8136920/pexels-photo-8136920.jpeg",
        ],
    },
];

const InteriorImg = () => {
    const [selectedDesign, setSelectedDesign] = useState(null);

    return (
        <section className="bg-[#F8F8F8] py-12 px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {exteriorDesigns.map((design, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <img
                            src={design.img}
                            alt={design.title}
                            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-medium text-gray-800">{design.title}</h3>
                            <p className="text-gray-500 text-sm">{design.description}</p>
                            {/* Arrow Button for Modal */}
                            <button
                                className="mt-3 text-gray-600 hover:text-black transition"
                                onClick={() => setSelectedDesign(design)}
                            >
                                ➜
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Popup */}
            {selectedDesign && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-lg z-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-gray-600 hover:text-black"
                            onClick={() => setSelectedDesign(null)}
                        >
                            <X size={20} />
                        </button>

                        <h3 className="text-xl font-semibold text-center text-gray-800">{selectedDesign.title}</h3>
                        <p className="text-gray-500 text-center mb-4">{selectedDesign.description}</p>

                        {/* Gallery Images */}
                        <div className="grid grid-cols-2 gap-4">
                            {selectedDesign.gallery.map((img, i) => (
                                <img key={i} src={img} alt="Gallery" className="w-full h-24 object-cover rounded-lg" />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default InteriorImg;
