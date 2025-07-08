'use client';
import Image from 'next/image';

const features = [
  {
    title: 'Ayurvedic Panchakarma',
    icon: '/icons/panchakarma.png',
  },
  {
    title: 'Ayurvedic Retreats',
    icon: '/icons/retreats.png',
  },
  {
    title: 'Ayurvedic Courses',
    icon: '/icons/courses.png',
  },
  {
    title: 'Ayurvedic Treatments',
    icon: '/icons/treatments.png',
  },
];

export default function AyurvedaCardSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-green-100 shadow transition-all duration-300 hover:shadow-md hover:border-green-300 p-6 flex items-center gap-4"
            >
              {/* Icon Container */}
              <div className="bg-[#f0fdf4] rounded-full w-20 h-20 flex items-center justify-center shrink-0">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                  className="object-contain"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <div>
                <h3 className="text-green-800 font-semibold text-[16px] leading-snug">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
