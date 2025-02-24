import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[#fdf7e6] px-6 py-10">
      {/* Left: Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-1/2">
        <h2 className="text-2xl font-semibold text-black mb-4 text-center">
          Tell Us About Your Dream Project
        </h2>
        <div className="w-16 border-b-2 border-black mx-auto mb-6"></div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="Eg: John"
              className="input-field"
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Eg: Smith"
              className="input-field"
              onChange={handleChange}
            />
          </div>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter Phone Number"
            className="input-field"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="jane.doe@example.com"
            className="input-field"
            onChange={handleChange}
          />

          {/* Interest Selection */}
          <div className="space-y-2">
            <label className="font-semibold text-sm text-gray-700">
              I am Interested In *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {["Architectural Design", "Interior Designing", "House Construction", "House Renovation", "Others"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="border border-gray-400 py-2 px-3 rounded-lg text-gray-700 text-sm hover:bg-black hover:text-white transition"
                  onClick={() => setFormData({ ...formData, interest: item })}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Your Message..."
            className="input-field h-24"
            onChange={handleChange}
          />

          {/* Google reCAPTCHA */}
          <div className="flex justify-center my-4">
            <ReCAPTCHA sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY" />
          </div>

          <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
            Submit
          </button>
        </form>
      </div>

      {/* Right: Contact Info */}
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-6">
        <h3 className="text-xl font-bold">Have Any Questions?</h3>
        <p className="text-sm text-gray-300">We are here to help. Click below to reach us on WhatsApp.</p>

        <a
          href="https://wa.me/YOUR_WHATSAPP_NUMBER"
          target="_blank"
          className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-lg font-semibold mt-4 hover:bg-green-600 transition"
        >
          📲 Message us on WhatsApp
        </a>

        <div className="mt-6 space-y-4 text-sm">
          <div>
            <strong>📍 Address:</strong>
            <p className="text-gray-400">MIG, 267/2A 1st Floor, 100 Feet Road, New ASTC Hudco, Hosur, Tamil Nadu - 635109, INDIA</p>
          </div>
          <div>
            <strong>📞 Phone:</strong>
            <p className="text-gray-400">+91 96004 42776</p>
          </div>
          <div>
            <strong>📧 Email:</strong>
            <p className="text-gray-400">info@chennee.in</p>
          </div>
          <div>
            <strong>⏰ Timings:</strong>
            <p className="text-gray-400">Mon - Sat, 10 am to 6 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
