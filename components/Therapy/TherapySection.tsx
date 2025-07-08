'use client';

import Image from 'next/image';
import { TherapyCourses } from './TherapyCourses';
import { TherapyList } from './TherapyList';

export const TherapySection = () => {
  return (
    <section className="bg-white text-black w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section: Image + Courses */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div>
            <Image
              src="/theraphy.png"
              alt="Ayurvedic Therapy"
              width={700}
              height={500}
              className="rounded-lg w-full h-auto object-cover shadow-md"
            />
          </div>

          {/* Right Courses */}
          <TherapyCourses />
        </div>

        {/* Bottom Section: Therapies List */}
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mt-20 mb-6 text-center">
          Panchakarma Therapy Programs
        </h2>
        <TherapyList />
      </div>
    </section>
  );
};

export default TherapySection;
