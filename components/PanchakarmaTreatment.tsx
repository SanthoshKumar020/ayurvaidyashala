'use client';

import { FaLeaf, FaCheckCircle, FaPlus } from 'react-icons/fa';
import Image from 'next/image';

const PanchakarmaTreatment = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-[#FFEEA9]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#00BF96] mb-10">
          Panchakarma Treatments in Kerala
        </h2>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Left: Image */}
          <div className="relative h-[280px] md:h-auto">
            <Image
              src="/panchakarmatreatment.png"
              alt="Panchakarma Therapy"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>

          {/* Right: Text Content */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#00BF96] font-semibold text-sm mb-3">
                <FaLeaf />
                Panchakarma Treatment in Kerala
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug mb-4">
                A Complete Detox &<br /> Purification Therapy
              </h3>
              <p className="text-gray-600 mb-6 text-[15px] leading-relaxed">
                One of the popular treatments at Rishikul AyurVaidya Shala is the Panchakarma Complete Purification & Detox. This therapy involves a series of five cleansing actions carried out over several weeks.
                <br /><br />
                It includes Nasya (nasal cleansing), Vamana (controlled vomiting), Virechana (purgation), Raktamokshana and Basti. Panchakarma is a renowned ancient detoxification therapy in Ayurveda.
              </p>

              <div className="grid gap-2 text-[15px] text-gray-700">
                {[
                  'Balanced & Grounded',
                  'Prevented & Purified',
                  'Rejuvenated & Transformed',
                  'Destressed & Life Redefined',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#00BF96]" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Price + CTA */}
            <div className="mt-8">
              <div className="text-sm text-[#00BF96] font-medium flex items-center gap-2 mb-1">
                <FaLeaf />
                Package Starting Price
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-[#00BF96] mb-4">
                USD 599* / 7 Days
              </div>
              <button className="inline-flex items-center gap-2 bg-[#00BF96] hover:bg-[#019e7f] text-white font-medium px-6 py-3 rounded-full transition duration-300 shadow-md">
                Contact us <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanchakarmaTreatment;
