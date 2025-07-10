'use client';

import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const tabs = [
  {
    label: 'Physical',
    description:
      'The physical goal of anti-aging treatment is to reduce wrinkles, firm the skin, and improve overall skin texture and tone, promoting a youthful appearance and healthier skin.',
    image: '/tabs/physical.jpg',
  },
  {
    label: 'Mental',
    description:
      'The mental goal of anti-aging treatment is to enhance confidence, promote positive self-image, and reduce stress and anxiety related to aging, fostering a resilient and youthful mindset for overall well-being.',
    image: '/tabs/mental.jpg',
  },
  {
    label: 'Spiritual',
    description:
      'The spiritual goal of anti-aging treatment is to foster inner peace, enhance mindfulness, and promote a deeper connection with oneself and others, facilitating spiritual growth and a harmonious outlook.',
    image: '/tabs/spiritual.jpg',
  },
];

export default function TreatmentTabs() {
  const [activeTab, setActiveTab] = useState('Physical');

  const current = tabs.find((tab) => tab.label === activeTab);

  return (
    <section className="bg-white py-12 px-4">
      {/* Tabs */}
      <div className="max-w-5xl mx-auto border-b border-gray-200 flex justify-center gap-12 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={clsx(
              'pb-2 font-semibold text-lg transition',
              activeTab === tab.label
                ? 'text-green-700 border-b-4 border-green-700'
                : 'text-gray-500 hover:text-green-700'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {current && (
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">{current.label}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{current.description}</p>
          </div>
          <div className="relative w-full h-80 md:h-[350px] rounded-md overflow-hidden shadow-lg">
            <Image
              src={current.image}
              alt={current.label}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
