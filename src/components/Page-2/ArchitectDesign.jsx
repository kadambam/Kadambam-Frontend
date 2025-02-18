import HeroSection from "./Hero";



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
              <button className="px-8 py-3 bg-[#333] text-white uppercase tracking-wide rounded-lg shadow-lg hover:bg-[#555]">
                Get Quotation
              </button>
              <button className="px-8 py-3 border border-gray-800 text-gray-800 uppercase tracking-wide rounded-lg shadow-lg hover:bg-gray-800 hover:text-white">
                Talk to Us
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
<HeroSection/>
    </div>
  );
};

export default ArchitectDesign;
