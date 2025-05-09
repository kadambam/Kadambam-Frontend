import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Why is Kadamban Group the best construction contractor, interior, and PMC consultant in Bangalore and Tamil Nadu?",
    answer: "Kadamban Group offers expert residential and commercial construction, customized interiors, and efficient project management with timely delivery and top-notch quality—all under one roof.",
  },
  {
    question: "What services does Kadamban Group provide?",
    answer: "We offer house construction, interior design, PMC, architectural consulting, vastu advice, turnkey solutions, estimation & budgeting, and property management services.",
  },
  {
    question: "What construction packages are available at Kadamban Construction?",
    answer: "We offer Basic (budget-friendly), Premium (modern finishes), Luxury (custom interiors), and Turnkey (all-inclusive) construction packages tailored to your needs.",
  },
  {
    question: "How is Kadamban Construction different from other contractors?",
    answer: "We focus on quality, transparency, timely delivery, vastu-compliant modern designs, and complete end-to-end solutions from planning to interiors.",
  },
  {
    question: "Why should you choose Kadamban to build your dream home?",
    answer: "We provide expert execution, customized planning, legal compliance, and full support from design to handover—ensuring peace of mind.",
  },
  {
    question: "How long does it take to complete a new home with Kadamban?",
    answer: "Timelines vary by project type: Basic – 6-8 months, Premium – 8-12 months, Turnkey – 10-14 months.",
  },
];


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-white px-4 " id="faq-section">
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