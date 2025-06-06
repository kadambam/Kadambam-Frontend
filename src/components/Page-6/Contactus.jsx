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

const Contactus = () => {
    return (
        <section className=" px-4 md:px-20 bg-white overflow-x-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 mt-20 items-start">
                {/* Left Section - Contact Info */}
                <div className="flex flex-col justify-center h-full space-y-8 text-left">
                    {/* Contact Heading */}
                    <h2 className="text-5xl font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Kadamban Group
                    </h2>

                    {/* Contact Description */}
                    <p className="text-gray-600 text-xl leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Feel free to ContactUs.
                    </p>

                    {/* Contact Details */}
                    <div className="space-y-6 text-gray-800">
                        <div className="flex items-center space-x-4">
                            <FaPhoneAlt className="text-[#ff4a2a] text-2xl" />
                            <a href="tel:+919043672462" className="text-xl font-medium hover:text-[#ff4a2a]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                +91-9043672462
                            </a>
                        </div>

                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-[#ff4a2a] text-2xl" />
                            <a href="mailto:kadambangroup@gmail.com" className="text-xl font-medium hover:text-[#ff4a2a]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                kadambangroup@gmail.com
                            </a>
                        </div>

                        <div className="flex items-start space-x-4">
                            <FaMapMarkerAlt className="text-[#ff4a2a] text-2xl mt-1" />
                            <span className="text-xl font-medium leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                                15 Mosuvanna Lane, Kaikolan Thottam <br /> Erode - 638001
                            </span>
                        </div>

                        <div className="flex items-start space-x-4">
                            <FaMapMarkerAlt className="text-[#ff4a2a] text-2xl mt-1" />
                            <span className="text-xl font-medium leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Branch Office: 232, 2nd Floor, 4th Main <br /> 6th Cross, Srinivasanagar
                            </span>
                        </div>

                        {/* Social Icons */}
                        <div className="flex flex-wrap gap-4 mt-10">
                            <a href="https://facebook.com/Kadambangroups/" className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                                <FaFacebookF className="text-gray-800 text-xl" />
                            </a>
                            <a href="https://x.com/KadambanGroup" className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                                <FaTwitter className="text-gray-800 text-xl" />
                            </a>
                            <a href="https://instagram.com/kadamban_architect
" className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition">
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

                {/* Right Section - Contact Form */}
                <div className="bg-white p-8 shadow-md rounded-lg w-full">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 text-lg font-medium">Name</label>
                                <input
                                    type="text"
                                    placeholder="First"
                                    className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-[#ff4a2a] focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-lg font-medium">&nbsp;</label>
                                <input
                                    type="text"
                                    placeholder="Last"
                                    className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-[#ff4a2a] focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 text-lg font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="example@email.com"
                                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-[#ff4a2a] focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-lg font-medium">Phone</label>
                            <input
                                type="text"
                                placeholder="+91-9043672462"
                                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-[#ff4a2a] focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-lg font-medium">Message</label>
                            <textarea
                                placeholder="Type your message ..."
                                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-[#ff4a2a] focus:outline-none"
                                rows="4"
                            ></textarea>
                        </div>

                        <button className="w-full bg-[#ff4a2a] text-white text-lg py-3 rounded-md hover:bg-red-600 transition duration-300">
                            <a href="https://wa.me/919043672462">Submit</a>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contactus;
