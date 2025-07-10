// components/HowToReach.tsx
'use client';

import { Plane, TrainFront, BusFront, CarFront } from 'lucide-react';

const reachOptions = [
  {
    id: 1,
    icon: <Plane className="w-8 h-8 text-white" />,
    title: 'By Air',
    description: 'The nearest airport is Trivandrum International Airport, located about 40 kilometers from Varkala. Taxis and buses are easily available from the airport to Varkala.',
  },
  {
    id: 2,
    icon: <TrainFront className="w-8 h-8 text-white" />,
    title: 'By Train',
    description: 'Varkala Sivagiri railway station (VAK) is well-connected with major cities in India. It’s about 2 kilometers from the main beach area.',
  },
  {
    id: 3,
    icon: <BusFront className="w-8 h-8 text-white" />,
    title: 'By Bus',
    description: 'Varkala is well-connected by frequent bus services from Trivandrum, Kollam, and other cities. Both government and private buses are available.',
  },
  {
    id: 4,
    icon: <CarFront className="w-8 h-8 text-white" />,
    title: 'By Car',
    description: 'If driving from Trivandrum, take NH 66 and follow signs to Varkala. The journey takes around 1.5 hours depending on traffic.',
  },
];

export default function HowToReach() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-10">
        How To Reach Varkala <span className="text-green-500">?</span>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reachOptions.map((option) => (
          <div
            key={option.id}
            className="relative bg-white shadow-xl rounded-xl p-6 overflow-hidden hover:scale-105 transition-all duration-300 group"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-lime-500 rounded-full shadow-md mb-4 z-10 relative">
              {option.icon}
            </div>
            <div className="text-6xl font-bold text-gray-100 absolute top-4 right-6 group-hover:text-gray-200">
              {option.id.toString().padStart(2, '0')}
            </div>
            <h3 className="text-xl font-semibold text-black mt-4 mb-2">{option.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out max-h-[3rem] group-hover:max-h-40 overflow-hidden text-ellipsis">
              {option.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
