import { useState, useEffect } from "react";

const NavbarBlack = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md transition-all duration-300">
        <div className="container px-6 py-1 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <a href="#">
              <img className="w-auto h-9 sm:h-7" src="logoblack.png" alt="Logo" />
            </a>
  
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
  
          <div
            className={`absolute inset-x-0 w-full px-6 py-4 transition-all duration-300 ease-in-out md:relative md:w-auto md:flex md:items-center ${
              isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0"
            }`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              {["Home", "Services", "Online shop", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="my-2 md:mx-4 md:my-0 text-lg font-medium text-black hover:text-gray-600 transition"
                  style={{ fontFamily: "Cinzel, serif" }}
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
  