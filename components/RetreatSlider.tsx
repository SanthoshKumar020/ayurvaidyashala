'use client';

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const retreatData = [
  {
    title: 'Spirituality Ayurveda Yoga Retreat',
    description: 'Awaken your body’s innate wisdom with Panchakarma’s.',
  },
  {
    title: 'Transcending Deep Sleep Retreat',
    description: 'Awaken your body’s innate wisdom with Panchakarma’s.',
  },
  {
    title: 'Harmonize Women Care Retreat',
    description: 'Awaken your body’s innate wisdom with Panchakarma’s.',
  },
  {
    title: 'Detox & Mindfulness Retreat',
    description: 'Cleanse and calm your system inside and out.',
  },
  {
    title: 'Rejuvenation & Healing Retreat',
    description: 'Rediscover energy, balance, and vitality.',
  },
  {
    title: 'Holistic Lifestyle Retreat',
    description: 'Live healthier with Ayurvedic practices.',
  },
];

const RetreatSlider = () => {
  const cardsPerView = 3;
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) =>
      (prevIndex + 1) % Math.ceil(retreatData.length / cardsPerView)
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      (prevIndex - 1 + Math.ceil(retreatData.length / cardsPerView)) %
      Math.ceil(retreatData.length / cardsPerView)
    );
  };

  return (
    <section className="py-16 bg-white px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold text-yellow-600 mb-2">
          Rishikul AyurVaidya Shala
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-10">
          Our Ayurvedic Retreats
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full shadow mr-3 transition"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>

          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {retreatData
                .slice(index * cardsPerView, index * cardsPerView + cardsPerView)
                .map((retreat, idx) => (
                  <div
                    key={idx}
                    className="group bg-white border border-green-200 rounded-2xl p-6 shadow-lg transition duration-300 hover:bg-green-600 hover:text-white hover:shadow-xl"
                  >
                    <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center border-2 border-green-500 rounded-full group-hover:border-white">
                      <span className="text-green-600 group-hover:text-white text-xl">
                        🧘
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-green-800 group-hover:text-white mb-2">
                      {retreat.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-white">
                      {retreat.description}
                    </p>
                  </div>
                ))}
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full shadow ml-3 transition"
          >
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RetreatSlider;
