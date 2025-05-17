import { useState, useEffect } from "react";

const NavbarBlack = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "architect" },
    { name: "Online shop", href: "/onlineshop" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      } ${isMobile ? "h-14" : "h-16"}`}
    >
      <div className="container py-1 mx-auto md:flex md:justify-between md:items-center h-full">
        <div className="flex items-center justify-between h-full w-full">
          <a href="#" className="h-full flex items-center">
            <img
              className={`w-auto ${isMobile ? "h-10" : "h-12"}`}
              src={isScrolled ? "logo2black.png" : "logo2white.png"}
              alt="Logo"
            />
          </a>

          <div className="flex lg:hidden h-full items-center ml-auto">
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

        {/* Menu */}
        <div
          className={`fixed top-14 right-0 w-2/3 ${
            isScrolled ? "bg-white/90" : "bg-black/80"
          } transition-transform duration-300 ease-in-out md:relative md:top-auto md:right-auto md:w-auto md:bg-transparent md:flex md:items-center ${
            isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center py-4 md:py-0 gap-y-2">
            {navLinks.map(({ name, href }, index) => (
              <a
                key={index}
                href={href}
                className={`block my-2 md:mx-4 md:my-0 text-lg font-medium transition ${
                  isScrolled
                    ? "text-black hover:text-gray-700"
                    : "text-white hover:text-gray-300"
                } text-center whitespace-nowrap`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBlack;
