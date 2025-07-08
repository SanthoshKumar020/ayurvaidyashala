'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const AyurvedaIntro = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Image with Badge */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/1.png"
            alt="Ayurveda in Kerala"
            fill
            className="object-cover rounded-3xl"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute top-4 left-4 bg-yellow-300 text-green-900 font-semibold px-4 py-2 rounded-full shadow text-sm md:text-base">
            🌿 12+ Years of Experience
          </div>
        </div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Ayurveda in Kerala
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">
            Rishikul AyurVaidya Shala
          </h3>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Rishikul AyurVaidya Shala stands as a renowned institution committed to propagating Ayurveda Healings, Retreats, and Therapies in the vibrant region of Kerala.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Our primary goal is to democratize the reach of Ayurveda, extending its benefits to every corner, city, and household in India and across the globe. With an unwavering team dedicated to this cause for over a decade, AyurVaidya Shala has been instrumental in delivering authentic Ayurvedic healing treatments to people in Kerala and beyond.
          </p>
          <a
            href="/about-us"
            className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full transition font-medium shadow"
          >
            Learn More About Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AyurvedaIntro;
