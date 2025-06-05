import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Initial screen size check
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

  // Do not render Navbar at all in mobile view
  if (isMobile) return null;

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/architect" },
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

        <div className="flex gap-6">
          {links.map(({ label, href }, index) => (
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
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
