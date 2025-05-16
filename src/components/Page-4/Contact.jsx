import React from "react";
import { FaCalendarCheck, FaLock, FaHome } from "react-icons/fa";
import img from "../../assets/images/page4/Section11/img.png";
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [help, setHelp] = useState("");
  const whatsappNumber = "+919894937699"; // Replace with your actual WhatsApp number

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Free Design Consultation Request:\nName: ${name}\nEmail: ${email}\nMobile No.: ${mobile}\nCity: ${city}\nHow can we help?: ${help}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative w-full h-screen bg-cover bg-center">
      {/* Background Overlay for Readability */}
      <div className="absolute inset-0">
        <img
          src={img}
          alt="Background"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-8 lg:px-32">
        {/* Left - Contact Form */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl max-w-md w-full">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-6 tracking-wide">
            Free Design Consultation
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 md:px-5 md:py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 md:px-5 md:py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Mobile No."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 md:px-5 md:py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Your City"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 md:px-5 md:py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <textarea
              placeholder="How can we help?"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 md:px-5 md:py-3 h-24 focus:outline-none focus:ring-2 focus:ring-gray-700"
              value={help}
              onChange={(e) => setHelp(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white font-semibold tracking-wide uppercase rounded-lg py-3 hover:bg-gray-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right - Text & Icons (Hidden on small screens) */}
        <div className="text-white max-w-lg space-y-6 mt-8 md:mt-0 hidden md:block">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest leading-tight uppercase">
            Book Your <br /> Professional Interior Designer
          </h2>
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center space-x-4">
              <FaCalendarCheck className="text-gray-300 text-2xl md:text-3xl" />
              <p className="text-base md:text-lg font-light tracking-wide">
                Book Free Design Consultation
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaLock className="text-gray-300 text-2xl md:text-3xl" />
              <p className="text-base md:text-lg font-light tracking-wide">Confirm Booking</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaHome className="text-gray-300 text-2xl md:text-3xl" />
              <p className="text-base md:text-lg font-light tracking-wide">
                We’ll Build It – Guaranteed 45 Days Installation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;