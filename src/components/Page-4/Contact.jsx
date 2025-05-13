import React from "react";
import { FaCalendarCheck, FaLock, FaHome } from "react-icons/fa";

const ContactUs = () => {
    return (
        <section className="relative w-full h-screen bg-cover bg-center">
            {/* Background Overlay for Readability */}
            <div className="absolute inset-0">
                <img
                    src="https://picsum.photos/1920/1080"
                    alt="Background"
                    className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-32">
                {/* Left - Contact Form */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl max-w-md w-full">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-6 tracking-wide">
                        Free Design Consultation
                    </h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 md:px-5 md:py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 md:px-5 md:py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />
                        <input
                            type="text"
                            placeholder="Mobile No."
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 md:px-5 md:py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />
                        <input
                            type="text"
                            placeholder="Your City"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 md:px-5 md:py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />
                        <textarea
                            placeholder="How can we help?"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 md:px-5 md:py-3 h-24 focus:outline-none focus:ring-2 focus:ring-gray-700"
                        ></textarea>
                        <button className="w-full bg-gray-800 text-white font-semibold tracking-wide uppercase rounded-lg py-3 hover:bg-gray-700 transition duration-300">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
