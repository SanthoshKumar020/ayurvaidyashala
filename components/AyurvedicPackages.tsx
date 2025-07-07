'use client';

import React from 'react';

const packages = [
  {
    title: 'Ayurveda Professionals',
    description:
      'Our professionals are unwaveringly dedicated to delivering top-notch Ayurvedic treatments, ensuring your overall wellness. Preserving the essence & content of the treatment is paramount, along with expressing confidence in the expertise & cleanliness of the practitioners. This ensures a holistic & effective approach to Ayurvedic treatments at Rishikul AyurVaidya shala.',
    number: '01',
  },
  {
    title: 'Ayurveda Retreats',
    description:
      'The Ayurveda retreats at Rishikul AyurVaidyashala are painless, and participants genuinely relish the experience. They provide a combination of entertainment, education, and treatment. Whether you opt for a short-term retreat or a longer one, you will be guided by experienced and dedicated specialists who will facilitate your transformational journey.',
    number: '02',
  },
  {
    title: 'Ayurveda Treatments',
    description:
      'At the forefront of Rishikul AyurVaidya Shala offerings is the highly sought-after Panchakarma Complete Detox treatment, a comprehensive therapy spanning several weeks. This renowned therapy encompasses five cleansing actions of Purifications in all levels of personality, whereas this ayurvedic treatment is always demanding to transform life',
    number: '03',
  },
  {
    title: 'Ayurveda Courses',
    description:
      'The Ayurveda Courses at Rishikul AyurVaidyashala are designed Various Course for a participants to be self-dependent to live life joyful by knowing lifestyle through Ayurveda Courses and to evolve be best in profession In Ayurvedic Basic Foundational Courses. by our dedicated team of Ayurvedic specialist doctors, who are committed to do best.',
    number: '04',
  },
];

export const AyurvedicPackages = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-yellow-600 font-semibold uppercase mb-2">Ayurveda in Kerala</p>
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12">Our Ayurvedic Packages</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm relative"
            >
              <h3 className="text-lg font-bold text-blue-900 mb-3">{pkg.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{pkg.description}</p>
              <div className="absolute bottom-6 right-6 text-3xl font-bold text-green-700/80 opacity-30 select-none">
                {pkg.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AyurvedicPackages;
