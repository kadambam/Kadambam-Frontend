import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // for dropdown

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        setIsScrolled(window.scrollY > heroBottom);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isMobile) return null;

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/architect" }, // placeholder, dropdown overrides
    { label: "Online shop", href: "/onlineshop" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      } h-16`}
    >
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        <a href="#home" className="h-full flex items-center">
          <img
            className="w-auto h-9 sm:h-7"
            src={isScrolled ? "logoblack.png" : "logowhite.png"}
            alt="Logo"
          />
        </a>

        <div className="flex gap-6 items-center relative">
          {links.map(({ label, href }, index) => {
            if (label === "Services") {
              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <a
                    href={href}
                    className={`text-lg font-medium transition ${
                      isScrolled
                        ? "text-black hover:text-gray-700"
                        : "text-white hover:text-gray-300"
                    }`}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {label}
                  </a>
                  {servicesOpen && (
                    <div className="absolute top-8 left-0 bg-white shadow-md rounded-md w-48 py-2 z-50">
                      <a
                        href="/architect"
                        className="block px-4 py-2 text-black hover:bg-gray-100"
                      >
                        Architect
                      </a>
                      <a
                        href="/pmc"
                        className="block px-4 py-2 text-black hover:bg-gray-100"
                      >
                        PMC Consultation
                      </a>
                      <a
                        href="/maintenance"
                        className="block px-4 py-2 text-black hover:bg-gray-100"
                      >
                        Maintenance
                      </a>
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                <a
                  key={index}
                  href={href}
                  className={`text-lg font-medium transition ${
                    isScrolled
                      ? "text-black hover:text-gray-700"
                      : "text-white hover:text-gray-300"
                  }`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {label}
                </a>
              );
            }
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
