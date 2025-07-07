'use client';

import { motion } from 'framer-motion';
import {
  FaSpa,
  FaLeaf,
  FaPagelines,
  FaSeedling,
} from 'react-icons/fa';
import { GiLotus, GiHerbsBundle } from 'react-icons/gi';

const floatingIcons = [
  { Icon: GiLotus, className: 'top-[10%] left-[10%]' },
  { Icon: FaSpa, className: 'top-[20%] right-[12%]' },
  { Icon: GiHerbsBundle, className: 'bottom-[15%] left-[5%]' },
  { Icon: FaSeedling, className: 'bottom-[10%] right-[8%]' },
  { Icon: FaLeaf, className: 'top-[50%] left-[48%]' },
  { Icon: FaPagelines, className: 'bottom-[30%] right-[45%]' },
];

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden bg-black parallax-bg">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/herosec.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-green-900/60 to-black/50 z-10" />

      {/* Floating Icons with React Icons */}
      {floatingIcons.map(({ Icon, className }, index) => (
        <motion.div
          key={index}
          className={`absolute text-white text-2xl md:text-4xl z-20 ${className}`}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon className="opacity-80 drop-shadow-lg" />
        </motion.div>
      ))}

      {/* Main Text */}
      <div className="relative z-30 max-w-4xl mx-auto h-full flex flex-col justify-center items-center text-center px-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-xl"
        >
          🌿 Rishikul AyurVaidya Shala
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-xl md:text-2xl font-medium mb-8 drop-shadow-lg"
        >
          Ayurveda in Kerala – A Holistic Destination for Healing, Learning & Transformation
        </motion.h2>
        <motion.a
          href="/ayurveda"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          className="bg-yellow-300 text-green-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition"
        >
          Explore Ayurveda
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
