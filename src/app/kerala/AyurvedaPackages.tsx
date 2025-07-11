'use client';

import Image from 'next/image';
import { FaCheckCircle, FaPlus } from 'react-icons/fa';

const packages = [
  {
    location: 'Varkala',
    price: 'USD 599* / 7 Days',
  },
  {
    location: 'Paravur',
    price: 'USD 599* / 7 Days',
  },
];

const AyurvedaPackages = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-green-800 text-3xl font-bold text-center mb-10">AyurVaidya Shala</h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-16">
          Rishikul AyurVaidya Shala stands as a renowned institution committed to propagating Ayurveda Healing,
          Retreats and Therapies in the vibrant region of Kerala.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src="/images/ayurveda-treatment.jpg"
                    alt="Ayurveda"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm text-green-700 font-medium mb-1">🌿 Ayurvedic Treatments in Kerala</h4>
                    <h3 className="text-2xl font-bold text-green-800 mb-3">{pkg.location.toUpperCase()}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Our diverse array of services and treatments, notably the transformative Healings, play a pivotal role in facilitating body-mind detoxification and effective stress management. Led by a team of seasoned experts, we provide a comprehensive suite of offerings, encompassing Ayurvedic specialized treatments and customized treatments.
                    </p>

                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-600" /> Anti-Ageing Programme
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-600" /> Stress Management Programme
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-600" /> Detox Rehabilitation Programme
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-600" /> Beauty skin care Programme
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-600" /> Digestive & Immunity Programme
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm text-gray-500">📦 Package Starting From</p>
                    <p className="text-green-800 font-extrabold text-lg">{pkg.price}</p>

                    <button className="mt-4 inline-flex items-center px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition">
                      Contact us <FaPlus className="ml-2 text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AyurvedaPackages;
