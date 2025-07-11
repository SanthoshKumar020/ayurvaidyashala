'use client';

import Image from 'next/image';
import { Sparkles } from 'lucide-react';

const FaqBanner = () => {
  return (
    <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/87558267-5f3b-4e1f-88ba-2abe3f4d6f39.png"
        alt="FAQ Banner Background"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold capitalize">Faq Page</h1>
        <div className="flex items-center gap-2 mt-2 text-sm md:text-base">
          <span className="text-white font-semibold">Home</span>
          <span className="text-green-400 font-bold text-lg">›</span>
          <span className="text-green-400 font-medium">Faq Page</span>
        </div>

        {/* Sparkle Icon */}
        <div className="mt-4">
          <Sparkles className="text-white w-8 h-8 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default FaqBanner;
