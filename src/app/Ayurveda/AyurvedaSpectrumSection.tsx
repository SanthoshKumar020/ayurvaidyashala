'use client';

import { FaLeaf, FaSearch, FaGraduationCap, FaYinYang } from 'react-icons/fa';

const spectrum = [
  {
    icon: <FaLeaf className="text-green-700 text-2xl" />,
    title: 'Practical',
    description:
      'Diet & Nutrition: Ayurveda emphasizes personalized diet plans based on individual doshas & health conditions. Emphasizes self-care practices like self-reflection & self-awareness to cultivate inner balance.',
  },
  {
    icon: <FaSearch className="text-green-700 text-2xl" />,
    title: 'Traditional',
    description:
      'Holistic Approach: Ayurveda views the individual as a whole, considering physical, mental & spiritual aspects. Ayurveda highlights its rich cultural heritage & timeless wisdom.',
  },
  {
    icon: <FaGraduationCap className="text-green-700 text-2xl" />,
    title: 'Professional',
    description:
      'Education and Training: Ayurveda professionals undergo extensive education and training in Ayurvedic principles, anatomy, physiology and pharmacology.',
  },
  {
    icon: <FaYinYang className="text-green-700 text-2xl" />,
    title: 'Spiritual',
    description:
      'Balancing the Doshas: The three doshas (Vata, Pitta, Kapha) represent the three aspects of the universe and the human being and balancing them is seen as a spiritual practice.',
  },
];

const AyurvedaSpectrumSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold text-green-700 uppercase mb-2">
          ✦ Rishikul Ayur Vaidya Shala
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12">
          Our Ayurveda Spectrum
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {spectrum.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4">
              <div className="bg-gray-100 rounded-full p-4 shadow-md">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-green-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AyurvedaSpectrumSection;
