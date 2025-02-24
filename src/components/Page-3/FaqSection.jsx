import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { question: "Why do I need an interior designer?", answer: "An interior designer helps you make the most of your space by combining functionality with aesthetics." },
  { question: "Why is Livspace perfect for your home interior design?", answer: "Livspace offers end-to-end solutions, from design consultation to final execution." },
  { question: "What services are included under home interior design?", answer: "Interior design services include space planning, furniture selection, color consultation, and decor styling." },
  { question: "How much does home interiors cost?", answer: "The cost varies based on the size of your space, design preferences, and material choices." },
  { question: "What will be the timelines for my project completion?", answer: "Project timelines depend on the scope of work but typically range from 4 to 12 weeks." },
  { question: "What are the trending interior design styles?", answer: "Popular styles include modern, minimalist, bohemian, industrial, and Scandinavian designs." }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-100 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">FAQs About Home Interior Design</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <button
                className="w-full flex justify-between items-center text-left font-medium text-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-gray-800">{index + 1}. {faq.question}</span>
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
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
