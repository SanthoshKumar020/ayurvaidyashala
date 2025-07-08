'use client';

import Image from 'next/image';
import {
  GiMeditation,
  GiHerbsBundle,
  GiLotus,
  GiHealingShield,
} from 'react-icons/gi';

const cards = [
  {
    title: 'Ayurveda Panchakarma',
    desc: "Awaken your body's innate wisdom with Panchakarma's.",
    icon: <GiMeditation className="text-4xl text-[#00BF96]" />,
    image: '/images/panchakarma.jpg',
  },
  {
    title: 'Ayurveda Retreat',
    desc: 'Rebalance, restore, and renew at our Ayurveda retreat.',
    icon: <GiHerbsBundle className="text-4xl text-[#00BF96]" />,
    image: '/images/retreat.jpg',
  },
  {
    title: 'Ayurveda Course',
    desc: 'Empower yourself with Ayurvedic knowledge, transform your life.',
    icon: <GiLotus className="text-4xl text-[#00BF96]" />,
    image: '/images/course.jpg',
  },
  {
    title: 'Ayurveda Treatment',
    desc: 'Nourish your body, calm your mind, and uplift your spirit.',
    icon: <GiHealingShield className="text-4xl text-[#00BF96]" />,
    image: '/images/treatment.jpg',
  },
];

const AyurvedaSlider = () => {
  return (
    <section className="bg-[#f9fefc] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#00BF96] mb-12">
          Ayurveda in Kerala
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative w-full h-48 md:h-52">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority={index === 0}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-2">
                <div>{card.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-[#00BF96] transition">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AyurvedaSlider;
