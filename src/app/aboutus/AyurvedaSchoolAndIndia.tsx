'use client';

import Image from 'next/image';

const AyurvedaSchoolAndIndia = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Section 1: Kerala Ayurvedic School */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h4 className="text-sm text-green-700 font-medium">🌿 Rishikul AyurVaidya Shala</h4>
            <h2 className="text-3xl font-bold text-green-800">Kerala Ayurvedic School</h2>
            <p className="text-gray-600 text-sm">
              Rishikul AyurVaidya Shala stands as a renowned institution committed to propagating Ayurveda Healings,
              Retreats and Therapies in the vibrant region of Kerala.
            </p>
            <div className="w-20 h-1 bg-yellow-400"></div>
            <p className="text-gray-600 text-sm">
              Our primary goal is to democratize the reach of Ayurveda, extending its benefits to every corner, city,
              and household in India and across the globe. With an unwavering team dedicated to this cause, for a
              quarter of a century, AyurVaidya Shala has been instrumental in delivering authentic Ayurvedic Healing
              Treatments to the residents of Kerala and beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/ayurveda-1.jpg"
                alt="Ayurveda Bowl"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/ayurveda-2.jpg"
                alt="Treatment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Ayurveda in India */}
        <div className="bg-green-800 text-white rounded-2xl px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2 space-y-6">
              <h4 className="text-sm text-lime-200 font-medium">🌿 Rishikul AyurVaidya Shala</h4>
              <h2 className="text-3xl font-bold text-white">Ayurveda in India</h2>
              <p className="text-sm leading-relaxed">
                Ayurveda, India’s ancient system of medicine, boasts a rich heritage of traditional practices and
                philosophies. Rooted in Ashtanga Ayurveda—covering eight branches including internal medicine,
                pediatrics, surgery, and more—Ayurveda promotes holistic healing through herbs, diet, therapies, and
                lifestyle practices. It aims to restore balance in the body and mind by aligning with nature’s rhythms.
              </p>
              <p className="text-sm leading-relaxed">
                Kerala is renowned for its authentic Ayurvedic treatments and therapies, housing the best training
                institutions and wellness retreats in India. The synergy of tradition and nature makes Kerala a global
                destination for Ayurveda tourism.
              </p>
              <p className="text-sm leading-relaxed">
                Ingredients like turmeric, tulsi, neem, and ashwagandha are central to therapies, addressing
                digestion, immunity, stress, and chronic ailments.
              </p>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {['india-1.jpg', 'india-2.jpg', 'india-3.jpg', 'india-4.jpg'].map((img, i) => (
                <div key={i} className="relative w-full h-36 md:h-44 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={`/images/${img}`}
                    alt={`India Ayurveda ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AyurvedaSchoolAndIndia;
