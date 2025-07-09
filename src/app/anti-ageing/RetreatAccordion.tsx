'use client';

import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    title: 'When To Do?',
    content:
      `Discover Kerala's prime seasons for Healing and Balancing Retreat:
From Mid June to March is good & Always During Monsoon is best to practice to cleanse, hydrate, and provide healing.
Kerala offers a perfect retreat for Beauty Skin Care treatments year-round. Ayurvedic therapies thrive in Kerala's tropical climate, promoting holistic wellness amid lush greenery and serene surroundings.
Ideal for rejuvenation, Relaxation and Best Ayurvedic treatments in kerala.`,
  },
  {
    title: 'To Whom ?',
    content: 'This program is ideal for anyone seeking detox, skin rejuvenation, or a calming wellness retreat in Kerala.',
  },
  {
    title: 'What To Bring ?',
    content: 'Loose comfortable clothing, medical prescriptions (if any), sunscreen, ID proof, and an open mind.',
  },
  {
    title: 'What\'s Included',
    content: 'Accommodation, 3 meals daily, Ayurvedic consultation, yoga & meditation, treatments, and herbal medicines.',
  },
  {
    title: 'What\'s Not Included',
    content: 'Flights, personal shopping, sightseeing tours, or extra treatments not listed in the package.',
  },
  {
    title: 'Payment Details',
    content: '50% advance to confirm booking. Remaining upon arrival. Refund policy: 80% if cancelled before 10 days.',
  },
];

const RetreatAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const imageUrls = [
    '/images/kerala1.jpg',
    '/images/kerala2.jpg',
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
        {/* Left Images */}
        <div className="space-y-6">
          {imageUrls.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`Kerala ${i}`}
              className="rounded-xl shadow-md w-full object-cover aspect-video hover:scale-[1.01] transition-transform"
            />
          ))}
        </div>

        {/* Right Accordion */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="border-b pb-4">
              <button
                onClick={() => toggleIndex(i)}
                className="w-full flex justify-between items-center text-left text-gray-800 font-semibold text-lg"
              >
                {item.title}
                <span className="text-green-600">
                  {activeIndex === i ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              {activeIndex === i && (
                <p className="mt-3 text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetreatAccordion;
