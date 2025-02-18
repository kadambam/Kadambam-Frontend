import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gray-50">
      {/* Left Hexagonal Images */}
      <div className="relative flex flex-col items-center gap-2 w-1/2">
        <div className="flex gap-2">
          <div className="hexagon">
            <img
              src="/images/living-room-1.jpg"
              alt="Living Room 1"
              className="hex-img"
            />
          </div>
          <div className="hexagon">
            <img
              src="/images/decor-wall.jpg"
              alt="Decor Wall"
              className="hex-img"
            />
          </div>
        </div>
        <div className="hexagon">
          <img
            src="/images/living-room-2.jpg"
            alt="Living Room 2"
            className="hex-img"
          />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="w-1/2 text-center">
        <p className="text-sm uppercase tracking-wider text-gray-500">
          Elegant & High Quality
        </p>
        <h1 className="text-4xl font-semibold text-gray-800 leading-snug">
          OUR <span className="text-red-500">CREATIVE</span> <br />
          <span className="text-red-500">DESIGNS</span> THAT BUILD <br />
          YOUR DREAM HOME
        </h1>

        {/* Updated Button */}
        <button
          className="flex items-center gap-2 px-6 py-2 mt-4 bg-white text-black rounded-lg hover:bg-gray-300 transition mx-auto"
          onClick={() => navigate("/quotation")}
        >
          Get a Quotation <ArrowRight className="w-5 h-5" />
        </button>

        {/* Signature Projects Section */}
        <div className="mt-10 text-gray-600 flex justify-center gap-2">
          <p className="text-lg font-medium">Our Signature</p>
          <p className="text-lg font-medium text-red-500">Projects</p>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Our Residential & Commercial projects are located in all over Kerala & dedicated projects in Tamilnadu as well as Karnataka
        </p>
      </div>
    </section>
  );
};

// Hexagon CSS Styles
const styles = `
.hexagon {
  width: 120px;
  height: 138px;
  background-color: white;
  position: relative;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  overflow: hidden;
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
