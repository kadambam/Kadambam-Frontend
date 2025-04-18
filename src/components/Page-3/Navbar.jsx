import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-3");
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        setIsScrolled(window.scrollY > heroBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      } ${isMobile ? "h-14" : "h-16"}`}
    >
      <div className="container py-1 mx-auto md:flex md:justify-between md:items-center h-full">
        <div className="flex items-center justify-between h-full">
          <a href="#" className="h-full flex items-center">
            <img
              className={`w-auto ${isMobile ? "h-10" : "h-14 sm:h-12"}`}
              src={
                isScrolled || (isMobile && isOpen) ? "logo3black.png" : "logo3white.png"
              }
              alt="Logo"
            />
          </a>

          <div className="flex lg:hidden h-full items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`${
                isScrolled ? "text-black" : "text-white"
              } hover:opacity-75 focus:outline-none`}
              aria-label="toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`absolute top-full left-0 transition-all duration-300 ease-in-out md:relative md:top-auto md:left-auto md:w-auto md:flex md:items-center ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0"
          }`}
          style={{ width: isMobile && isOpen ? "fit-content" : "auto" }}
        >
          <div className="flex flex-col md:flex-row">
            <a
              className={`block my-2 md:mx-4 md:my-0 text-lg font-medium transition ${
                isMobile && isOpen ? "text-black hover:text-gray-600 bg-white px-4 py-2 rounded-md" : isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
              }`}
              style={{ fontFamily: "Unbounded, sans-serif" }}
              href="#"
            >
              Home
            </a>
            <a
              className={`block my-2 md:mx-4 md:my-0 text-lg font-medium transition ${
                isMobile && isOpen ? "text-black hover:text-gray-600 bg-white px-4 py-2 rounded-md" : isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
              }`}
              style={{ fontFamily: "Unbounded, sans-serif" }}
              href="#"
            >
              Services
            </a>
            <a
              className={`block my-2 md:mx-4 md:my-0 text-lg font-medium transition ${
                isMobile && isOpen ? "text-black hover:text-gray-600 bg-white px-4 py-2 rounded-md" : isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
              }`}
              style={{ fontFamily: "Unbounded, sans-serif" }}
              href="#"
            >
              Online shop
            </a>
            <a
              className={`block my-2 md:mx-4 md:my-0 text-lg font-medium transition ${
                isMobile && isOpen ? "text-black hover:text-gray-600 bg-white px-4 py-2 rounded-md" : isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
              }`}
              style={{ fontFamily: "Unbounded, sans-serif" }}
              href="#"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;