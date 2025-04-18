import { useState, useEffect } from "react";

const NavbarBlack = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight; // Get bottom position
        setIsScrolled(window.scrollY > heroBottom - 100); // Change state when past hero section
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container py-1 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="#">
            <img
              className="w-auto h-9 sm:h-7"
              src={isScrolled ? "logoblack.png" : "logowhite.png"}
              alt="Logo"
            />
          </a>

          <div className="flex lg:hidden">
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
          className={`absolute inset-x-0 w-full py-4 transition-all duration-300 ease-in-out md:relative md:w-auto md:flex md:items-center ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0"
          }`}
        >
          <div className="flex flex-col md:flex-row">
            {["Home", "Services", "Online Shop", "Contact"].map((item, index) => (
              <a
                key={index}
                className={`my-2 md:mx-4 md:my-0 text-lg font-medium transition ${
                  isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
                }`}
                style={{ fontFamily: "Poppins, serif" }}
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBlack;
