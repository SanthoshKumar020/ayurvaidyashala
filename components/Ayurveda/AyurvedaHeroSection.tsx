'use client';

import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export const AyurvedaHeroSection = () => {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/hero-ayurveda.jpg" // replace with your background image
          alt="Ayurveda Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Ayurveda</h1>
          <div className="flex gap-2 items-center mt-3 text-sm md:text-base font-medium">
            <span className="hover:underline cursor-pointer">Home</span>
            <span>&gt;&gt;</span>
            <span className="text-green-300">Ayurveda</span>
          </div>
        </div>
      </div>

      {/* Intro Content */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          {/* Left Title */}
          <div className="flex items-start gap-3">
            <Sparkles className="text-green-700 mt-1" />
            <div>
              <p className="text-sm font-semibold text-blue-900">Kerala</p>
              <h2 className="text-2xl md:text-3xl font-bold text-green-800">
                AyurVaidya Shala
              </h2>
            </div>
          </div>

          {/* Right Text */}
          <div className="border-l-4 border-green-700 pl-6 text-gray-800 text-sm md:text-base leading-relaxed max-w-2xl">
            Rishikul AyurVaidya Shala stands as a renowned institution committed to propagating
            Ayurveda Healings, Retreats and Therapies in the vibrant region of Kerala.
          </div>
        </div>
      </section>
    </div>
  );
};

export default AyurvedaHeroSection;
