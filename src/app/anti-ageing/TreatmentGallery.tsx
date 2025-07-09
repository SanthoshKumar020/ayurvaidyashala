// components/TreatmentGallery.tsx
'use client';

import Image from 'next/image';

const images = [
  '/images/therapy1.jpg',
  '/images/therapy2.jpg',
  '/images/therapy3.jpg',
  '/images/therapy4.jpg',
  '/images/therapy5.jpg',
  '/images/therapy6.jpg',
  '/images/therapy7.jpg',
];

export default function TreatmentGallery() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-10 text-center">
        Ayurvedic Treatments in Action
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group">
            <Image
              src={src}
              alt={`Treatment ${index + 1}`}
              width={600}
              height={400}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
