import { useState } from "react";

const NavbarBlack = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="hidden md:block fixed top-0 left-0 w-full bg-white shadow-md z-50 px-8 md:px-16 lg:px-14 h-18 md:h-15">
      <div className="container py-1 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img className="w-auto h-9 sm:h-7" src="logoblack.png" alt="Logo" />
          </a>
        </div>

        {/* Navigation Links - Centered */}
        <div
          className={`absolute inset-x-0 w-full md:relative md:w-auto md:flex md:items-center justify-center ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0"
          }`}
        >
          <div className="flex flex-col md:flex-row md:space-x-10">
            <a
              className="my-2 md:my-0 text-lg font-medium text-black hover:text-gray-600 transition"
              style={{ fontFamily: "Poppins, sans-serif" }}
              href="/"
            >
              Home
            </a>
            <a
              className="my-2 md:my-0 text-lg font-medium text-black hover:text-gray-600 transition"
              style={{ fontFamily: "Poppins, sans-serif" }}
              href="/architect"
            >
              Services
            </a>
            <a
              className="my-2 md:my-0 text-lg font-medium text-black hover:text-gray-600 transition"
              style={{ fontFamily: "Poppins, sans-serif" }}
              href="/onlineshop"
            >
              Online Shop
            </a>
            <a
              className="my-2 md:my-0 text-lg font-medium text-black hover:text-gray-600 transition"
              style={{ fontFamily: "Poppins, sans-serif" }}
              href="/contact"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Right Section - Button */}
        <div className="hidden md:flex ml-[-20px]">
          <a
            href="https://wa.me/+919043672462"
            className="px-6 py-2 bg-[#ff4a2a] text-white text-lg font-medium rounded-full hover:bg-[#e63e1f] transition"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBlack;
