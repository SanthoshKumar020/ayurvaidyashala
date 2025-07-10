'use client';

import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { BsCalendar2CheckFill } from 'react-icons/bs';
import { Sparkles } from 'lucide-react';

const features = [
  'All Meals Included',
  'Includes Regular Consultation',
  'Internal & External Medicines',
  'Single or Couple Accommodation',
  'Available All Months',
];

export default function ProgramDetails() {
  return (
    <section className="bg-white px-4 py-10">
      <div className="max-w-6xl mx-auto shadow-xl rounded-md overflow-hidden grid md:grid-cols-2 gap-6 bg-white border border-gray-200">
        {/* Image */}
        <div className="relative w-full h-96 md:h-auto">
          <Image
            src="/anti-ageing-treatment.jpg" // Replace with your image
            alt="Treatment"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 border-[10px] border-[#d1b464] rounded-sm pointer-events-none"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-center">
          <h3 className="text-primary font-semibold text-lg flex items-center gap-2">
            <Sparkles className="text-green-700" size={18} />
            Treatment Key highlights:
          </h3>

          <p className="text-green-800 font-bold text-xl mt-2 mb-4">
            Duration: <span className="text-green-900">7 Days</span>
          </p>

          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-800">
                <FaCheckCircle className="text-green-600 mt-1" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Pricing */}
          <div className="flex items-center justify-start gap-12 text-green-900 font-semibold text-lg mb-4">
            <div>
              <p className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Sparkles className="text-green-600" size={16} />
                (Single)
              </p>
              <p className="text-xl">USD 650</p>
            </div>
            <div>
              <p className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Sparkles className="text-green-600" size={16} />
                (Couple)
              </p>
              <p className="text-xl">USD 1150</p>
            </div>
          </div>

          {/* Button */}
          <button className="inline-flex items-center px-5 py-2 rounded-full bg-green-700 hover:bg-green-800 text-white font-semibold shadow-md transition">
            Book Now <BsCalendar2CheckFill className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
