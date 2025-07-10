'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/anti-ageing-bg.jpg" // Replace with your background image
          alt="Anti Ageing Program"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Sparkles */}
      <div className="absolute top-10 right-10 z-10 space-y-2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.3, repeat: Infinity, repeatType: 'mirror' }}
            className="text-white text-3xl md:text-5xl"
          >
            ✨
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Anti Ageing Program</h1>
        <div className="flex items-center gap-2 text-white/80 text-sm md:text-base">
          <Link href="/" className="hover:underline">Home</Link>
          <FaChevronRight size={12} />
          <Link href="/services" className="hover:underline">Services</Link>
          <FaChevronRight size={12} />
          <span className="text-white font-semibold">Anti Ageing Program</span>
        </div>
      </div>
    </div>
  );
}
