'use client';

import { FaLeaf, FaCheckCircle, FaPlus } from 'react-icons/fa';
import Image from 'next/image';

const AyurvedaTreatments = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#00BF96] mb-10">
          Our Ayurvedic Treatments in Kerala
        </h2>

        <div className="bg-white border border-[#00BF96]/20 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Left: Image */}
          <div className="relative w-full h-[300px] md:h-auto">
            <Image
              src="/ayurvedatreatment.png"
              alt="Ayurvedic Treatment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right: Content */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#00BF96] font-semibold text-sm mb-2">
                <FaLeaf />
                Authentic Traditional
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug mb-4">
                Ayurvedic Treatments in Kerala
              </h3>

              <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                Our diverse array of services and treatments, notably the transformative Healings, 
                play a pivotal role in facilitating body-mind detoxification and effective stress management. 
                Led by a team of seasoned experts, we provide a comprehensive suite of Ayurvedic treatments and customized therapies.
              </p>

              {/* Treatment Programs */}
              <div className="border-t border-[#00BF96]/10 pt-5 mt-5">
                <div className="flex items-center gap-2 text-[#00BF96] font-semibold text-sm mb-3">
                  <FaLeaf />
                  Various Treatment Programs
                </div>
                <ul className="grid grid-cols-1 gap-2 text-[15px] text-gray-700">
                  {[
                    'Anti-Ageing Program',
                    'Stress Management Program',
                    'Detox Rehabilitation Program',
                    'Beauty Skin Care Program',
                    'Digestive & Immunity Program',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#00BF96]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="mt-10">
              <div className="text-sm text-[#00BF96] font-medium flex items-center gap-2 mb-1">
                <FaLeaf />
                Package Starting Price
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                USD 599* / 7 Days
              </div>
              <button className="inline-flex items-center gap-2 bg-[#00BF96] hover:bg-[#00a982] text-white font-medium px-6 py-3 rounded-full transition duration-300 shadow-md">
                Contact us <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AyurvedaTreatments;
