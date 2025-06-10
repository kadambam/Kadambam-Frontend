import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

const Contactus = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setServiceDropdown(false);
  };

  const toggleServiceDropdown = () => {
    setServiceDropdown((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const subject = "Contact from Kadambam Website";
    const body = `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `;

    window.location.href = `mailto:kadambangroups@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="relative overflow-hidden">
      {/* Navbar */}
      <nav className="w-full bg-transparent p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <img src="/logoblack.png" alt="Kadambam Logo" className="h-5 w-auto" /> */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-black text-lg items-center relative" style={{ fontFamily: "Poppins, sans-serif" }}>
          <a href="#home" className="hover:text-[#ff4a2a]">HOME</a>

         <div className="relative group">
  <a className="hover:text-[#ff4a2a] cursor-pointer">SERVICES</a>
  <div className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-200 z-50">
    <a href="/architect" className="block px-4 py-2 hover:bg-gray-100">Architect</a>
    <a href="/pmc" className="block px-4 py-2 hover:bg-gray-100">PMC Consultation</a>
    <a href="/onlineshop" className="block px-4 py-2 hover:bg-gray-100">Online Shop</a>
    <a href="/maintenance" className="block px-4 py-2 hover:bg-gray-100">Maintenance</a>
  </div>
</div>


          <a href="#shop" className="hover:text-[#ff4a2a]">ONLINE SHOP</a>
          <a href="#contact" className="hover:text-[#ff4a2a]">CONTACT</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden">
          <HiMenu className="text-black text-3xl" />
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-white text-black shadow-lg rounded-lg p-4 space-y-3 w-56 z-50" style={{ fontFamily: "Poppins, sans-serif" }}>
            <a href="/" className="block hover:text-[#ff4a2a]">HOME</a>

            <div>
              <button
                onClick={toggleServiceDropdown}
                className="w-full text-left hover:text-[#ff4a2a] focus:outline-none"
              >
                SERVICES
              </button>
              {serviceDropdown && (
                <div className="mt-2 ml-2 space-y-2 text-sm">
                  <a href="/architect" className="block hover:text-[#ff4a2a]">Architect</a>
                  <a href="/pmc" className="block hover:text-[#ff4a2a]">PMC Consultation</a>
                  <a href="/onlineshop" className="block hover:text-[#ff4a2a]">Online Shop</a>
                  <a href="/maintenance" className="block hover:text-[#ff4a2a]">Maintenance</a>
                </div>
              )}
            </div>

            <a href="/onlineshop" className="block hover:text-[#ff4a2a]">ONLINE SHOP</a>
            <a href="/contact" className="block hover:text-[#ff4a2a]">CONTACT</a>
          </div>
        )}
      </nav>

      {/* Contact Section */}
      <section className=" px-4 md:px-20 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Section */}
          <div className="flex flex-col justify-center h-full space-y-8 text-left">
            <h2 className="text-5xl font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Kadamban Group
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Feel free to ContactUs.
            </p>

            <div className="space-y-6 text-gray-800">
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-[#ff4a2a] text-2xl" />
                <a href="tel:+919043672462" className="text-xl font-medium hover:text-[#ff4a2a]">+91-9043672462</a>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-[#ff4a2a] text-2xl" />
                <a href="mailto:kadambangroup@gmail.com" className="text-xl font-medium hover:text-[#ff4a2a]">kadambangroup@gmail.com</a>
              </div>

              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-[#ff4a2a] text-2xl mt-1" />
                <span className="text-xl font-medium leading-relaxed">15 Mosuvanna Lane, Kaikolan Thottam <br /> Erode - 638001</span>
              </div>

              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-[#ff4a2a] text-2xl mt-1" />
                <span className="text-xl font-medium leading-relaxed">Branch Office: 232, 2nd Floor, 4th Main <br /> 6th Cross, Srinivasanagar</span>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <a href="https://facebook.com/Kadambangroups/" className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                  <FaFacebookF className="text-gray-800 text-xl" />
                </a>
                <a href="https://x.com/KadambanGroup" className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                  <FaTwitter className="text-gray-800 text-xl" />
                </a>
                <a href="https://instagram.com/kadamban_architect" className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                  <FaInstagram className="text-gray-800 text-xl" />
                </a>
                <a href="https://linkedin.com/in/Kadambangroup" className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                  <FaLinkedinIn className="text-gray-800 text-xl" />
                </a>
                <a href="https://wa.me/919043672462" target="_blank" rel="noreferrer" className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                  <FaWhatsapp className="text-gray-800 text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white p-8 shadow-md rounded-lg w-full">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-lg font-medium">Name</label>
                  <input name="firstName" type="text" placeholder="First" className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-[#ff4a2a] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-gray-700 text-lg font-medium">&nbsp;</label>
                  <input name="lastName" type="text" placeholder="Last" className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-[#ff4a2a] focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-lg font-medium">Email</label>
                <input name="email" type="email" placeholder="example@email.com" className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-[#ff4a2a] focus:outline-none" />
              </div>

              <div>
                <label className="block text-gray-700 text-lg font-medium">Phone</label>
                <input name="phone" type="text" placeholder="+91-9043672462" className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-[#ff4a2a] focus:outline-none" />
              </div>

              <div>
                <label className="block text-gray-700 text-lg font-medium">Message</label>
                <textarea name="message" placeholder="Type your message ..." className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-[#ff4a2a] focus:outline-none" rows="4"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#ff4a2a] text-white text-lg py-3 rounded-md hover:bg-red-600 transition duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
