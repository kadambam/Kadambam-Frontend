import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const images = [
  { id: 1, src: "https://picsum.photos/400/300", title: "Project 1", link: "/project-1" },
  { id: 2, src: "https://picsum.photos/400/300", title: "Project 2", link: "/project-2" },
  { id: 3, src: "https://picsum.photos/400/300", title: "Project 3", link: "/project-3" },
  { id: 4, src: "https://picsum.photos/400/300", title: "Project 4", link: "/project-4" }
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section 
      className="relative flex flex-col md:flex-row items-center justify-between p-10 text-white"
      style={{ backgroundImage: "url('https://picsum.photos/1200/800')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Left Side - Company Info */}
      <div className="relative md:w-1/2 space-y-6 z-10">
        <h1 className="text-4xl font-bold">Welcome to Kadambam GROUP</h1>
        <p className="text-lg">One-Touch solution for all things.</p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button 
            className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition"
            onClick={() => navigate("/contact")}
          >
            Talk Us <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition"
            onClick={() => navigate("/quotation")}
          >
            Get a Quotation <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right Side - Image Grid */}
      <div className="relative grid grid-cols-2 gap-6 md:w-1/3 mt-6 md:mt-0 z-10">
        {images.map((image) => (
          <motion.div
            key={image.id}
            className="relative group w-full h-[250px] rounded-lg overflow-hidden shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
            
            {/* Overlay for Title & Icon */}
            <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 flex justify-between items-center">
              <h3 className="text-lg font-semibold">{image.title}</h3>
              <button
                className="p-2 bg-white rounded-full hover:bg-gray-300 transition"
                onClick={() => navigate(image.link)}
              >
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
