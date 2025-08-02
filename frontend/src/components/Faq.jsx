import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'How do I order a book?',
    answer:
      'Browse our catalog, add your favorite books to the cart, and proceed to checkout. You can pay via mobile banking or cash on delivery.',
  },
  {
    question: 'Do you deliver outside Dhaka?',
    answer:
      'Yes, we deliver all over Bangladesh via our courier partners. Delivery time may vary depending on location.',
  },
  {
    question: 'Can I return a book?',
    answer:
      'If you receive a damaged or incorrect book, you can request a return or replacement within 3 days of delivery.',
  },
  {
    question: 'Is there any discount for bulk orders?',
    answer:
      'Absolutely! We offer special discounts for bulk and institutional orders. Please contact our support team for details.',
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'We accept bKash, Nagad, Rocket, and cash on delivery.',
  },
  {
    question: 'Can I track my order?',
    answer:
      'Yes, once your order is shipped, you’ll receive a tracking number via email or SMS.',
  },
  {
    question: 'Are all books original prints?',
    answer:
      'Yes, we only sell original, high-quality books from trusted publishers and suppliers.',
  },
  {
    question: 'Do you have a loyalty program?',
    answer:
      'Yes! You can earn points on every purchase which you can redeem later for discounts.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-400 to-teal-500 text-transparent bg-clip-text mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[0, 1].map((col) => (
            <div key={col} className="space-y-6">
              {faqs.slice(col * 4, col * 4 + 4).map((faq, index) => {
                const actualIndex = col * 4 + index;
                return (
                  <div
                    key={actualIndex}
                    className="border border-gray-200 rounded-xl shadow-sm transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(actualIndex)}
                      className="w-full p-5 flex justify-between items-center text-left focus:outline-none"
                    >
                      <span className="text-lg font-medium text-gray-800">
                        {faq.question}
                      </span>
                      <FaChevronDown
                        className={`text-gray-500 transition-transform duration-300 ${
                          openIndex === actualIndex ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === actualIndex ? 'max-h-40 pb-5' : 'max-h-0'
                      }`}
                    >
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
