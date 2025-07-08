'use client';

import React from 'react';

const packages = [
  {
    title: 'Ayurveda Professionals',
    description:
      'Our professionals are unwaveringly dedicated to delivering top-notch Ayurvedic treatments, ensuring your overall wellness. Preserving the essence & content of the treatment is paramount, along with expressing confidence in the expertise & cleanliness of the practitioners.',
    number: '01',
  },
  {
    title: 'Ayurveda Retreats',
    description:
      'Our retreats combine treatment, education, and peaceful experiences. Whether short or long, you’ll be guided by dedicated specialists supporting your transformational journey.',
    number: '02',
  },
  {
    title: 'Ayurveda Treatments',
    description:
      'Our signature Panchakarma Detox program offers complete mind-body purification through five cleansing actions. It’s a profound healing therapy rooted in ancient Ayurvedic wisdom.',
    number: '03',
  },
  {
    title: 'Ayurveda Courses',
    description:
      'Courses are designed to help individuals lead joyful, self-aware lives while building strong professional foundations in Ayurveda under expert guidance.',
    number: '04',
  },
];

export const AyurvedicPackages = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-[#00BF96] font-semibold uppercase mb-2 tracking-wider">
          Ayurveda in Kerala
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#040F36] mb-12">
          Our Ayurvedic Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="relative bg-[#FFFEFE] rounded-2xl p-6 md:p-8 border border-[#00BF96]/20 shadow-sm hover:shadow-md transition"
            >
              {/* Number Badge */}
              <div className="absolute top-4 right-4 text-5xl font-bold text-[#00BF96]/10 select-none">
                {pkg.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#00BF96] mb-3">
                {pkg.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {pkg.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AyurvedicPackages;
