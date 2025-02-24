import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  { question: "Why do I need an interior designer?", answer: "An interior designer helps optimize space, improve aesthetics, and ensure a functional yet stylish home." },
  { question: "Why is our service perfect for your home interior design?", answer: "We offer customized designs tailored to your taste, high-quality materials, and expert guidance." },
  { question: "What services are included under home interior design?", answer: "Our services include space planning, furniture selection, lighting design, color consultation, and decor styling." },
  { question: "How much does home interiors cost?", answer: "The cost varies based on the design scope, materials, and labor. Contact us for a custom quote." },
  { question: "What will be the timelines for my project completion?", answer: "Most projects take 4-8 weeks, depending on complexity and customization requirements." },
  { question: "What are the trending interior design styles?", answer: "Minimalist, modern, Scandinavian, industrial, and bohemian styles are currently trending." }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-100 py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-8">
          FAQs About Home Interior & Exterior  Design
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
              >
                {faq.question}
                {openIndex === index ? <FaMinus className="text-gray-500" /> : <FaPlus className="text-gray-500" />}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
