import React from "react";
import { FaUserCheck, FaClipboardList, FaRupeeSign } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center mb-5">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/1920/1080" 
          alt="Background" 
          className="object-cover object-center w-full h-full" 
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-8 md:px-16 lg:px-32">
        
        {/* Left: Contact Form */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl max-w-md w-full">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-6 tracking-wide">
          Book your Home services at your doorstep
          </h2>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Name *" 
              required 
              className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700" 
            />
            <input 
              type="text" 
              placeholder="Mobile No *" 
              required 
              className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700" 
            />
            <input 
              type="text" 
              placeholder="Your City" 
              className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700" 
            />
            <textarea 
              placeholder="Type your maintenance services details" 
              className="w-full border border-gray-300 rounded-lg px-5 py-3 h-24 focus:outline-none focus:ring-2 focus:ring-gray-700">
            </textarea>
            <button 
              type="submit" 
              className="w-full bg-gray-800 text-white font-semibold tracking-wide uppercase rounded-lg py-3 hover:bg-gray-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right: Info & Icons */}
        <div className="text-white max-w-lg space-y-6 mt-10 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-bold tracking-widest leading-tight uppercase">
            Book your <br /> Home services at your doorstep
          </h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaUserCheck className="text-gray-300 text-3xl" />
              <p className="text-lg font-light tracking-wide">Verified Professionals</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaClipboardList className="text-gray-300 text-3xl" />
              <p className="text-lg font-light tracking-wide">Hassle Free Booking</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaRupeeSign className="text-gray-300 text-3xl" />
              <p className="text-lg font-light tracking-wide">Transparent Pricing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
