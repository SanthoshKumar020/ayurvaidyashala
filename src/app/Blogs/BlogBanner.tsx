// components/BlogBanner.jsx

'use client';

import Image from 'next/image';
import { Sparkles } from 'lucide-react';

const BlogBanner = () => {
  return (
    <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/baf632f2-a595-4cc9-ba46-bbf2e8513fef.png"
        alt="Blog background"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold">Blog</h1>
        <div className="flex items-center gap-2 mt-2 text-sm md:text-base">
          <span className="text-green-400 font-semibold">Home</span>
          <span className="text-green-400 font-bold text-lg">›</span>
          <span className="text-white font-medium">Blog</span>
        </div>

        {/* Optional Sparkle Icon */}
        <div className="mt-4">
          <Sparkles className="text-yellow-300 w-8 h-8 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;
