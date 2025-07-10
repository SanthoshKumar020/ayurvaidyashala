// components/RevitalizeYourYouth.tsx
'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const features = [
  'Reduction of fine lines and wrinkles',
  'Improvement in skin elasticity and tone',
  'Enhancement of overall skin texture and radiance',
  'Promotion of inner balance and well-being',
  'Personalized life plans tailored to individual goals and needs',
  'Focus on long-term skin health and maintenance',
  'Professional guidance and support throughout the process',
];

export default function RevitalizeYourYouth() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="relative w-full h-full">
          <Image
            src="/images/anti-aging-treatment.jpg" // Replace with your image path
            alt="Anti-Aging Therapy"
            width={800}
            height={600}
            className="rounded-lg shadow-lg object-cover"
          />
          {/* Decorative corners - optional */}
          <div className="absolute top-0 left-0 w-full h-full border-4 border-yellow-400 pointer-events-none rounded-lg" style={{ borderStyle: 'double' }} />
        </div>

        {/* Right: Content */}
        <div className="text-left space-y-5">
          <h4 className="text-sm font-bold text-green-800 uppercase tracking-wider">
            Transforming Journey
          </h4>
          <h2 className="text-3xl font-extrabold text-green-700">
            Revitalize Your Youth:
          </h2>
          <p className="text-gray-700 font-medium">
            Discover Anti-Ageing Treatment
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our anti-aging treatment offers rejuvenation through specialized therapies, promoting youthful skin and holistic wellness. Experience personalized care in a serene environment, tailored to enhance your natural beauty and vitality.
          </p>
          <p className="text-indigo-900 font-semibold">
            Embark on a transformative journey to reclaim youthful radiance and holistic wellness with our anti-aging treatment in a serene and supportive environment.
          </p>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-green-500 w-5 h-5 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
