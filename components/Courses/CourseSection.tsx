'use client';

import { useState } from 'react';
import { CourseCard } from './CourseCard';

const allCourses = [
  {
    image: '/course1.jpg',
    title: 'Foundational and Dosha Balancing Course',
    duration: '7 Days in Kerala',
    color: 'bg-green-700',
  },
  {
    image: '/course2.jpg',
    title: 'Lifestyle Diet and Cooking Course',
    duration: '7 Days in Kerala',
    color: 'bg-yellow-500',
  },
  {
    image: '/course3.jpg',
    title: 'Holistic and Massage Therapy Course',
    duration: '7 Days in Kerala',
    color: 'bg-green-800',
  },
  {
    image: '/course4.jpg',
    title: 'Pregnancy Care & Baby Massage Course',
    duration: '7 Days in Kerala',
    color: 'bg-pink-600',
  },
  {
    image: '/course5.jpg',
    title: 'Beauty – Skin Care Course',
    duration: '7 Days in Kerala',
    color: 'bg-purple-600',
  },
  {
    image: '/course6.jpg',
    title: 'Acupuncture Marma Massage Course',
    duration: '7 Days in Kerala',
    color: 'bg-blue-700',
  },
];

export const CourseSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCourses = allCourses.slice(startIndex, startIndex + 3);

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + 3 < allCourses.length) setStartIndex(startIndex + 1);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-sm font-bold text-yellow-600 uppercase">✦ Rishikul Ayurvaidiyashala</h2>
        <h1 className="text-3xl font-bold text-green-700 mt-2">Our Ayurvedic Course</h1>
        <p className="text-gray-600 mt-2">
          Explore the Science of Ayurveda with Our Comprehensive Courses
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-green-600 text-white rounded-full shadow-lg ${
            startIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''
          }`}
        >
          &lt;
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {visibleCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={startIndex + 3 >= allCourses.length}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-green-600 text-white rounded-full shadow-lg ${
            startIndex + 3 >= allCourses.length ? 'opacity-30 cursor-not-allowed' : ''
          }`}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};
