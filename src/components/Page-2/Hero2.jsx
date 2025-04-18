import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Modern from "../../assets/images/page2/section5/img1.jpeg";
import Contemporary from "../../assets/images/page2/section5/img2.jpeg";
import ArtModern from "../../assets/images/page2/section5/img3.jpeg";
import MidCentury from "../../assets/images/page2/section5/img4.jpeg";
import Minimalist from "../../assets/images/page2/section5/img5.jpeg";
import Scandinavian from "../../assets/images/page2/section5/img6.jpeg";
import Farmhouse from "../../assets/images/page2/section5/img7.jpeg";
import Traditional from "../../assets/images/page2/section5/img8.jpeg";


// Animation Variants
const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

// Card Data
const cardData = [
    {
        title: "Modern Style",
        description: "Tailored interiors with elegance",
        buttonText: "Explore Designs",
        bgColor: "bg-indigo-600",
        img: Modern,
    },
    {
        title: "Contemporary Style",
        description: "Modern living in the heart of the city",
        buttonText: "Explore Designs",
        bgColor: "bg-teal-600",
        img: Contemporary,
    },
    {
        title: "Art Modern Style",
        description: "Organic spaces with a green touch",
        buttonText: "Explore Designs",
        bgColor: "bg-orange-600",
        img: ArtModern,
    },
    {
        title: "Mid-Century Style",
        description: "Smart design for smarter homes",
        buttonText: "Explore Designs",
        bgColor: "bg-sky-700",
        img: MidCentury,
    },
    {
        title: "Minimalist Style",
        description: "Less clutter, more impact",
        buttonText: "Explore Designs",
        bgColor: "bg-pink-600",
        img: Minimalist,
    },
    {
        title: "Scandinavian Style",
        description: "Inspired by ocean breeze",
        buttonText: "Explore Designs",
        bgColor: "bg-cyan-700",
        img: Scandinavian,
    },
    {
        title: "Farmhouse Style",
        description: "Old-world charm with a modern twist",
        buttonText: "Explore Designs",
        bgColor: "bg-rose-700",
        img: Farmhouse,
    },
    {
        title: "Traditional Style",
        description: "Colorful designs that pop",
        buttonText: "Explore Designs",
        bgColor: "bg-yellow-500",
        img: Traditional,
    },
];

const Hero2 = () => {
    const navigate = useNavigate();
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prev) => (prev === 0 ? 4 : 0));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.section
            className="relative flex flex-wrap items-center justify-center min-h-screen bg-white p-6"
            id="hero-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInRight}
        >
            {/* Left Text Section */}
           <motion.div
    className="w-full md:w-1/2 text-center mt-6 md:mt-0 px-4 flex flex-col items-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }}
    variants={fadeIn}
>
    <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">
        Stylish & Superior
    </p>

    <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight mt-3">
        INNOVATIVE <span className="text-red-500">DESIGNS</span> <br />
        TO ELEVATE YOUR <br />
        <span className="text-red-500">LIVING</span>
    </h1>

    <p className="text-lg text-gray-600 mt-4 font-medium">
        Upgrade Your Lifestyle With Us
    </p>

    <motion.button
        className="flex items-center gap-2 px-6 py-2 border border-gray-800 mt-6 bg-white text-black rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 ease-in-out"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/quotation")}
    >
        Get a Quotation <ArrowRight className="w-5 h-5" />
    </motion.button>

    <motion.div
        className="mt-10 flex items-center justify-center gap-2 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeIn}
    >
        <p className="text-lg font-medium text-gray-600">Our Signature</p>
        <p className="text-lg font-medium text-red-500">Interior Theme</p>
    </motion.div>
</motion.div>

            {/* Right Cards Section */}
            <motion.div
                className="grid grid-cols-2 gap-4 w-full md:w-1/2 mt-6 md:mt-0"
                initial="hidden"
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {cardData.slice(startIndex, startIndex + 4).map((card, index) => (
                    <motion.div
                        key={index}
                        className="flex h-56 md:h-64 w-full rounded-lg overflow-hidden shadow-md border border-gray-300 transition hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Image Section */}
                        <div className="w-1/2 h-full">
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        {/* Text Section */}
                        <div
                            className={`w-1/2 p-4 ${card.bgColor} text-white flex flex-col justify-between h-full`}
                        >
                            <div>
                                <h3 className="text-xl font-semibold">{card.title}</h3>
                                <p className="text-sm mt-2">{card.description}</p>
                            </div>
                            <button
                                className="mt-4 px-4 py-2 bg-white text-black rounded-md text-sm font-medium"
                                onClick={() => navigate("/quotation")}
                            >
                                {card.buttonText}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Hero2;
