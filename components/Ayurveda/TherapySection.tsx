'use client';

import Image from 'next/image';
import { FaPlus } from 'react-icons/fa';

// Reusable Course List Block
const TherapyCourses = () => {
  const courses = [
    'Foundational and Dosha Balancing Course',
    'Lifestyle Diet and Cooking Course',
    'Holistic and Massage Therapy Course',
    'Beauty – Skin Care Course',
    'Pregnancy Care & Baby Massage Course',
    'Acupuncture Marma Massage Course',
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-green-800 mb-4">
        Classical Ayurvedic Treatment Therapies
      </h3>
      <ul className="text-sm text-gray-700 space-y-2 mb-6">
        {courses.map((course, index) => (
          <li key={index} className="list-disc list-inside">
            {course}
          </li>
        ))}
      </ul>
      <button className="inline-flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 text-sm font-medium">
        View Courses <FaPlus />
      </button>
    </div>
  );
};

// Therapy Item Block
const TherapyItem = ({ title, description }: { title: string; description: string }) => (
  <div>
    <h4 className="font-semibold text-green-700 mb-1">{title}</h4>
    <p className="text-sm text-gray-700">{description}</p>
  </div>
);

// Main Section
const TherapySection = () => {
  const therapies = [
    {
      title: 'Vamana',
      description:
        'is a panchakarma treatment involving therapeutic vomiting induced by herbal medicines. It aims to expel accumulated toxins and mucus from the upper respiratory tract and stomach, promoting overall detoxification and balance in the body.',
    },
    {
      title: 'Virechana',
      description:
        'is a panchakarma therapy that uses herbal purgatives to cleanse the digestive tract. It helps eliminate toxins, excess bile, and Pitta-related imbalances, promoting detoxification, improved digestion, and overall health.',
    },
    {
      title: 'Basti',
      description:
        'is a therapeutic panchakarma treatment involving the administration of medicated enemas. It helps cleanse and nourish the colon, balancing Vata dosha, relieving constipation, promoting detoxification, and supporting overall gastrointestinal health.',
    },
    {
      title: 'Nasya',
      description:
        'is a panchakarma therapy where herbal oils or powders are administered through the nasal passages. It helps clear sinus congestion, improve breathing, nourish nasal tissues, and balance Prana (life force), promoting overall respiratory health and mental clarity.',
    },
    {
      title: 'Raktamokshana',
      description:
        'is a panchakarma therapy aimed at purifying the blood. It involves techniques like bloodletting or using leeches to remove impurities from the bloodstream, promoting better circulation and overall health.',
    },
    {
      title: 'Abhyanga',
      description:
        'is a traditional Ayurvedic full-body oil massage. It uses warm herbal oils to deeply nourish the skin, relax muscles, improve blood circulation, and promote detoxification. Abhyanga also calms the mind, enhances sleep quality, and supports overall well-being.',
    },
    {
      title: 'Shirodhara',
      description:
        'is an Ayurvedic therapy where a continuous stream of warm herbal oil or other liquids is poured onto the forehead, specifically on the “third eye” area. It induces deep relaxation, relieves stress, balances emotions, and enhances mental clarity and focus.',
    },
    {
      title: 'Swedana',
      description:
        'is a therapeutic sweating treatment in Ayurveda. It involves sitting in a steam chamber or receiving steam therapy with herbal-infused steam to induce sweating. Swedana helps open the pores, eliminate toxins, reduce stiffness, and promote relaxation and rejuvenation.',
    },
  ];

  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div>
          <Image
            src="/theraphy.png" // 🔁 Update with correct path
            alt="Transform Your Life with Ayurveda"
            width={700}
            height={500}
            className="rounded-md shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Right Course List */}
        <TherapyCourses />
      </div>

      {/* Therapy Grid */}
      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {therapies.map((therapy) => (
          <TherapyItem
            key={therapy.title}
            title={therapy.title}
            description={therapy.description}
          />
        ))}
      </div>
    </section>
  );
};

export default TherapySection;
