'use client';

import Image from 'next/image';
import { TherapyCourses } from './TherapyCourses';
import { TherapyList } from './TherapyList';

export const TherapySection = () => {
  return (
    <div className="bg-white text-black w-full">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Top Section: Image + Courses */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Image */}
          <div>
            <Image
              src="/theraphy.png" // Place this image inside the public/ folder
              alt="Ayurvedic Therapy"
              width={700}
              height={500}
              className="rounded-md w-full h-auto object-cover"
            />
          </div>

          {/* Right Courses */}
          <TherapyCourses />
        </div>

        {/* Bottom Section: Therapies List */}
        <TherapyList />
      </div>
    </div>
  );
};
