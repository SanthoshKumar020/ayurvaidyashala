'use client';

import { FaLeaf, FaCheckCircle, FaPlus } from 'react-icons/fa';
import Image from 'next/image';

const AyurvedaTreatments = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-[#f0fdf4]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-green-800 mb-10">
          Our Ayurvedic Treatments in Kerala
        </h2>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Left: Single Large Image */}
          <div className="relative w-full h-full min-h-[360px]">
            <Image
              src="/ayurvedatreatment.png" // replace with your image name
              alt="Ayurvedic Treatment"
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right: Content */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-green-700 font-semibold text-sm mb-2">
                <FaLeaf />
                Authentic Traditional
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug mb-4">
                Ayurvedic Treatments in Kerala
              </h3>
              <p className="text-gray-600 mb-6 text-[15px] leading-relaxed">
                Our diverse array of services and treatments, notably the transformative Healings, play a pivotal role in facilitating body-mind detoxification and effective stress management. Led by a team of seasoned experts, we provide a comprehensive suite of offerings, encompassing Ayurvedic specialized treatments and customized therapies.
              </p>

              {/* Treatment Programs */}
              <div className="border-t pt-5 mt-4">
                <div className="flex items-center gap-2 text-green-700 font-semibold text-sm mb-3">
                  <FaLeaf />
                  Various Treatments Programs
                </div>
                <ul className="grid grid-cols-1 gap-2 text-[15px] text-gray-700">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600" />
                    Anti-Ageing Program
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600" />
                    Stress Management Program
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600" />
                    Detox Rehabilitation Program
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600" />
                    Beauty Skin Care Program
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600" />
                    Digestive & Immunity Program
                  </li>
                </ul>
              </div>
            </div>

            {/* Price + Button */}
            <div className="mt-10">
              <div className="text-sm text-green-700 font-medium flex items-center gap-2 mb-1">
                <FaLeaf />
                Package Starting Price
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-green-900 mb-4">
                USD 599* / 7 Days
              </div>
              <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full transition duration-300 shadow-lg">
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
