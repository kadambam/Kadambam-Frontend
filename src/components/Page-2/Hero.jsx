import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex flex-wrap items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* Left Hexagonal Images */}
      <div className="relative flex flex-col items-center gap-3 w-full md:w-1/2">
        <div className="grid grid-cols-2 gap-3">
          <div className="hexagon">
            <img
              src="https://via.placeholder.com/250"
              alt="Sample 1"
              className="hex-img"
            />
          </div>
          <div className="hexagon">
            <img
              src="https://via.placeholder.com/250"
              alt="Sample 2"
              className="hex-img"
            />
          </div>
        </div>
        <div className="hexagon mt-[-35px]"> {/* Adjusted overlap */}
          <img
            src="https://via.placeholder.com/250"
            alt="Sample 3"
            className="hex-img"
          />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-1/2 text-center mt-6 md:mt-0 px-4">
        <p className="text-sm uppercase tracking-wider text-gray-500">
          Elegant & High Quality
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
          OUR <span className="text-red-500">CREATIVE</span> <br />
          <span className="text-red-500">DESIGNS</span> THAT BUILD <br />
          YOUR DREAM HOME
        </h1>

        {/* Updated Button */}
        <button
          className="flex items-center gap-2 px-6 py-2 border border-gray-800 mt-6 bg-white text-black rounded-lg hover:bg-gray-800 hover:text-white transition mx-auto"
          onClick={() => navigate("/quotation")}
        >
          Get a Quotation <ArrowRight className="w-5 h-5" />
        </button>

        {/* Signature Projects Section */}
        <div className="mt-10 text-gray-600 flex justify-center gap-2">
          <p className="text-lg font-medium">Our Signature</p>
          <p className="text-lg font-medium text-red-500">Projects</p>
        </div>
      </div>
    </section>
  );
};

// Hexagon CSS Styles (Improved)
const styles = `
.hexagon {
  width: 180px; /* Adjusted size */
  height: 208px; /* Proportional height */
  background-color: white;
  position: relative;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hex-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default HeroSection;
