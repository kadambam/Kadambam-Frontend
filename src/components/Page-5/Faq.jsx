import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is property management?",
    answer: "It involves managing all aspects of a property—tenants, rent, maintenance, and security. Kadamban ensures a hassle-free experience for owners."
  },
  {
    question: "How often will the property be inspected?",
    answer: "We conduct regular inspections as per client preferences, with photo and report updates."
  },
  {
    question: "What cities do you cover?",
    answer: "We operate in multiple cities across India. Contact us for specific location details."
  },
  {
    question: "Why choose Kadamban Property Management Services?",
    answer: "We offer transparency, verified tenants, regular maintenance, and encroachment protection."
  },
  {
    question: "Can you help find suitable tenants?",
    answer: "Yes, we handle tenant sourcing, background checks, and lease management."
  },
  {
    question: "How long does it take to find a tenant?",
    answer: "It varies, but our efficient process helps secure tenants quickly."
  },
  // {
  //   question: "Do you manage properties for associations or complexes?",
  //   answer: "Yes, we manage individual properties, gated communities, and residential complexes."
  // },
  // {
  //   question: "Will owners be informed about repairs or maintenance?",
  //   answer: "Absolutely. We notify owners before any work is done."
  // },
  // {
  //   question: "What types of properties do you manage?",
  //   answer: "We manage residential, commercial, and vacant plots."
  // },
  // {
  //   question: "Do you have an in-house team for repairs and renovations?",
  //   answer: "Yes, our dedicated team ensures high-quality maintenance and renovations."
  // }
];



const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-100 px-4" id="faq-section">
      <div className="max-w-6xl mx-auto flex flex-col">
        <span className="text-orange-500 font-semibold">Frequently Asked Questions</span>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">Get the Answers You Need</h2>
        <p className="text-gray-600 mt-2">We have compiled some of the most common questions about our interior design services.</p>

        <div className="mt-6 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 border border-gray-200">
              <button
                className="w-full flex justify-between items-center text-left font-medium text-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-gray-800">{index + 1}. {faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;