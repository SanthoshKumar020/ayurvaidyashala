'use client';

import Image from 'next/image';
import { TherapyCourses } from '../../../components/Therapy/TherapyCourses';
import { TherapyList } from '../../../components/Therapy/TherapyList';


export default function TherapiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div>
          <Image
            src="/therapy.jpg" // Make sure to place your image in /public
            alt="Ayurvedic Therapy"
            width={700}
            height={500}
            className="rounded-md w-full h-auto object-cover"
          />
        </div>

        {/* Therapy Courses Section */}
        <TherapyCourses />
      </div>

      {/* Therapies List */}
      <TherapyList />
    </div>
  );
}
