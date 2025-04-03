import { useState } from "react";

const NavbarBlack = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-8 md:px-16 lg:px-14 h-18  md:h-15">
      <div className="container py-1 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#">
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
            {["Home", "Services", "Online Shop", "Contact"].map((item, index) => (
              <a
                key={index}
                className="my-2 md:my-0 text-lg font-medium text-black hover:text-gray-600 transition"
                style={{ fontFamily: "Poppins, serif" }}
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Button (Moved Slightly Left) */}
        <div className="hidden md:flex ml-[-20px]">
          <a
            href="#"
            className="px-6 py-2 bg-[#ff4a2a] text-white text-lg font-medium rounded-full hover:bg-[#e63e1f] transition"
            style={{ fontFamily: "Poppins, serif" }}
          >
            Get Free Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-black hover:opacity-75 focus:outline-none"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBlack;
