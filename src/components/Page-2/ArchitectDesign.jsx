import HeroSection from "./Hero";
import { ArrowRight } from "lucide-react";

const images = [
  { id: 1, src: "https://picsum.photos/400/250", title: "Project 1", link: "/project-1" },
  { id: 2, src: "https://picsum.photos/400/250", title: "Project 2", link: "/project-2" },
  { id: 3, src: "https://picsum.photos/400/250", title: "Project 3", link: "/project-3" },
  { id: 4, src: "https://picsum.photos/400/250", title: "Project 4", link: "/project-4" }
];

const ArchitectDesign = () => {
  return (
    <div className="bg-[#f8f8f8] font-[Poppins, sans-serif]">
      <div className="container mx-auto px-6 py-16">
        {/* Page Heading */}
        <h1 className="text-5xl font-bold text-gray-900 uppercase tracking-wider text-center mb-6 font-[Cinzel, serif]">
          Architect
        </h1>
        
        {/* Image & Text Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text */}
          <div className="md:w-1/2 text-left">
            <p className="text-2xl font-semibold text-gray-800 leading-relaxed font-[Lora, serif]">
              Home to Beautiful Design
            </p>
            <p className="text-lg text-gray-600 mt-4 font-[Nunito, sans-serif]">
              Get Your Dream House Design Plans with the Hands of Best Architects.
            </p>
            <div className="flex gap-4 mt-6">
              {/* Updated Buttons */}
              <button className="flex items-center gap-2 px-6 py-2 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-800 hover:text-white transition shadow-lg">
                Get a Quotation <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 px-6 py-2  text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition shadow-lg">
                Talk to Us <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={images[0].src}
              alt="Architect Design"
              className="w-[85%] rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      <HeroSection />
    </div>
  );
};

export default ArchitectDesign;
