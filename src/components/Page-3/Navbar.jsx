import { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);
  const [ServicesOpen, setServicesOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setServicesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container py-1 mx-auto md:flex md:justify-between md:items-center h-full">
        <div className="flex items-center justify-between h-full w-full">
          <a href="#" className="h-full flex items-center">
            <img
              className={`w-auto ${isMobile ? "h-10" : "h-12"}`}
              src={isScrolled ? "logo3black.png" : "logo3white.png"}
              alt="Logo"
            />
          </a>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden h-full items-center ml-auto">
            <button
              onClick={toggleMenu}
              type="button"
              className={`${
                isScrolled ? "text-black" : "text-white"
              } hover:opacity-75 focus:outline-none`}
              aria-label="toggle menu"
            >
              <HiMenu className="text-3xl" />
            </button>
          </div>
        </div>

       {/* Desktop Menu */}
<div className="hidden md:flex gap-6 text-lg items-center whitespace-nowrap">
  <a
    href="/"
    className={`hover:text-[#ff4a2a] ${
      isScrolled ? "text-black" : "text-white"
    }`}
    style={{ fontFamily: "Poppins, sans-serif" }}
  >
    Home
  </a>

  <div className="relative group">
    <button
      className={`hover:text-[#ff4a2a] ${
        isScrolled ? "text-black" : "text-white"
      }`}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      Services
    </button>
    <div className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
      <a href="/architect" className="block px-4 py-2 hover:bg-gray-100">Architect</a>
      <a href="/pmc" className="block px-4 py-2 hover:bg-gray-100">PMC Consultation</a>
      <a href="/maintenance" className="block px-4 py-2 hover:bg-gray-100">Maintenance</a>
    </div>
  </div>

  <a
    href="/onlineshop"
    className={`hover:text-[#ff4a2a] ${
      isScrolled ? "text-black" : "text-white"
    } whitespace-nowrap`}
    style={{ fontFamily: "Poppins, sans-serif" }}
  >
    Online Shop
  </a>
  <a
    href="/contact"
    className={`hover:text-[#ff4a2a] ${
      isScrolled ? "text-black" : "text-white"
    } whitespace-nowrap`}
    style={{ fontFamily: "Poppins, sans-serif" }}
  >
    Contact
  </a>
</div>


        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-16 right-4 bg-white text-black shadow-lg rounded-lg p-4 space-y-3 w-64 z-50">
            <a
              href="/"
              className="block hover:text-[#ff4a2a]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Home
            </a>

            <div>
              <button
                onClick={toggleServices}
                className="w-full text-left hover:text-[#ff4a2a] focus:outline-none"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Services
              </button>
              {ServicesOpen && (
                <div className="mt-2 ml-2 space-y-2 text-sm">
                  <a href="/architect" className="block hover:text-[#ff4a2a]">Architect</a>
                  <a href="/pmc" className="block hover:text-[#ff4a2a]">PMC Consultation</a>
                  <a href="/maintenance" className="block hover:text-[#ff4a2a]">Maintenance</a>
                </div>
              )}
            </div>

            <a
              href="/onlineshop"
              className="block hover:text-[#ff4a2a]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Online Shop
            </a>
            <a
              href="/contact"
              className="block hover:text-[#ff4a2a]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
