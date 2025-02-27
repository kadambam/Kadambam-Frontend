import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send Email Function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_az529rg", // Replace with your EmailJS Service ID
        "template_ym20qkp", // Replace with your EmailJS Template ID
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "oOIUZiv8hH0yPwYmG" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
          setErrorMessage("");
        },
        (err) => {
          console.log("FAILED...", err);
          setErrorMessage("Failed to send message. Please try again.");
          setSuccessMessage("");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Side: Contact Details */}
        <div className="md:w-1/2 bg-gradient-to-br from-gray-900 to-gray-700 p-10 text-white">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            Have questions or inquiries? Feel free to reach out to us.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-lg">📍</span>
              <p className="ml-2">545 Mavis Island, Chicago, IL 99191</p>
            </div>
            <div className="flex items-center">
              <span className="text-lg">📞</span>
              <p className="ml-2">+1 (555) 234-5678</p>
            </div>
            <div className="flex items-center">
              <span className="text-lg">✉️</span>
              <p className="ml-2">hello@example.com</p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="md:w-1/2 p-10 bg-white">
          <form onSubmit={sendEmail} className="space-y-6">
            {/* Success & Error Messages */}
            {successMessage && <p className="text-green-600">{successMessage}</p>}
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}

            {/* Name Fields */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className="w-full px-4 py-3 mt-1 border rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  className="w-full px-4 py-3 mt-1 border rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 mt-1 border rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 234 567 890"
                required
                className="w-full px-4 py-3 mt-1 border rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                className="w-full px-4 py-3 mt-1 border rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
