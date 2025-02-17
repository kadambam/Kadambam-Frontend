import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-[#bcc1cd] shadow">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="#">
            <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="Logo" />
          </a>

          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-black hover:text-gray-700 focus:outline-none"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-[#bcc1cd] md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:flex md:items-center ${isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0"}`}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <a className="my-2 text-black transition-colors duration-300 transform hover:text-gray-700 md:mx-4 md:my-0" href="#">Home</a>
            <a className="my-2 text-black transition-colors duration-300 transform hover:text-gray-700 md:mx-4 md:my-0" href="#">Services</a>
            <a className="my-2 text-black transition-colors duration-300 transform hover:text-gray-700 md:mx-4 md:my-0" href="#">Online shop</a>
            <a className="my-2 text-black transition-colors duration-300 transform hover:text-gray-700 md:mx-4 md:my-0" href="#">Contact</a>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;