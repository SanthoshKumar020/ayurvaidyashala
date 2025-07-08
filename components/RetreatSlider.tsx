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

  const totalPages = Math.ceil(retreatData.length / cardsPerView);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-[#FFEEA9]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-sm font-semibold text-[#00BF96] text-center mb-2">
          Rishikul AyurVaidya Shala
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#00BF96] text-center mb-10">
          Our Ayurvedic Retreats
        </h2>

        {/* Slider Controls + Cards */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="p-2 bg-[#FFEEA9] hover:bg-white rounded-full shadow mr-3 transition"
            aria-label="Previous Slide"
          >
            <FaChevronLeft className="text-[#00BF96]" />
          </button>

          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              {retreatData
                .slice(index * cardsPerView, index * cardsPerView + cardsPerView)
                .map((retreat, idx) => (
                  <div
                    key={idx}
                    className="group bg-white border border-[#00BF96]/20 rounded-2xl p-6 shadow-md transition duration-300 hover:bg-[#00BF96] hover:text-white"
                  >
                    <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center border-2 border-[#00BF96] rounded-full group-hover:border-white">
                      <span className="text-[#00BF96] group-hover:text-white text-xl">🧘</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
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
            className="p-2 bg-[#FFEEA9] hover:bg-white rounded-full shadow ml-3 transition"
            aria-label="Next Slide"
          >
            <FaChevronRight className="text-[#00BF96]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RetreatSlider;
