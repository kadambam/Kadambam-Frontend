import React from "react";
import { FaCalendarCheck, FaLock, FaHome } from "react-icons/fa";  

const ContactUs = () => {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('./background.jpg')" }}
        >
            {/* 🔹 Background Overlay for Better Readability */}
            <div className="absolute inset-0" style={{ background: "rgba(0, 0, 0, 0.3)" }}></div>


            {/* 🔹 Content Wrapper */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-8 md:px-16 lg:px-32">
                
                {/* 🔹 Left - Contact Form */}
                <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl max-w-md w-full">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-6 tracking-wide">
                        Free Design Consultation
                    </h2>
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700" />
                        <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700" />
                        <input type="text" placeholder="Mobile No." className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700" />
                        <input type="text" placeholder="Your City" className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700" />
                        <input type="text" placeholder="Scope" className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700" />
                        <textarea placeholder="How can we help?" className="w-full border border-gray-300 rounded-lg px-5 py-3 h-24 focus:outline-none focus:ring-2 focus:ring-gray-700"></textarea>
                        <button className="w-full bg-gray-800 text-white font-semibold tracking-wide uppercase rounded-lg py-3 hover:bg-gray-700 transition duration-300">
                            Submit
                        </button>
                    </form>
                </div>

                {/* 🔹 Right - Text & Icons */}
                <div className="text-white max-w-lg space-y-6 mt-10 md:mt-0">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-widest leading-tight uppercase">
                        Book Your <br /> Professional Interior Designer
                    </h2>
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <FaCalendarCheck className="text-gray-300 text-3xl" />
                            <p className="text-lg font-light tracking-wide">Book Free Design Consultation</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaLock className="text-gray-300 text-3xl" />
                            <p className="text-lg font-light tracking-wide">Confirm Booking</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaHome className="text-gray-300 text-3xl" />
                            <p className="text-lg font-light tracking-wide">We’ll Build It – Guaranteed 45 Days Installation</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
