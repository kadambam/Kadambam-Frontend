import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";

const HeroMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 bg-transparent p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logowhite.png" alt="Kadambam Logo" className="h-5 w-auto" />
          <span className="text-white text-2xl font-bold"></span>
        </div>
        <div className="hidden md:flex gap-8 text-white text-lg">
          <a href="#home" className="hover:text-[#ff4a2a]">HOME</a>
          <a href="#services" className="hover:text-[#ff4a2a]">SERVICES</a>
          <a href="#shop" className="hover:text-[#ff4a2a]">ONLINE SHOP</a>
          <a href="#contact" className="hover:text-[#ff4a2a]">CONTACT</a>
        </div>
        <button onClick={toggleMenu} className="md:hidden">
          <HiMenu className="text-white text-3xl" />
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-white text-black shadow-lg rounded-lg p-4 space-y-3 w-48 z-50">
            <a href="/" className="block hover:text-[#ff4a2a]">HOME</a>
            <a href="/architect" className="block hover:text-[#ff4a2a]">SERVICES</a>
            <a href="/onlineshop" className="block hover:text-[#ff4a2a]">ONLINE SHOP</a>
            <a href="/contact" className="block hover:text-[#ff4a2a]">CONTACT</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-[100vh] min-h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="Kadambam Architecture"
          className="absolute inset-0 w-full h-full object-cover z-0"   
        />
        <div
    className="absolute inset-0 z-10"
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
  ></div>


        {/* Text Content */}
        <div className="relative z-20 h-full flex items-center justify-center px-6">
          <div className="text-center text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
  Where Tradition Meets Modern Living
</h1>
<p className="text-lg md:text-xl mb-8">
  Designing timeless spaces inspired by culture, crafted with care.
</p>

            <a
              href="https://wa.me/919043672462"
              className="inline-block bg-[#ff4a2a] hover:bg-[#e93e1d] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMobile;
