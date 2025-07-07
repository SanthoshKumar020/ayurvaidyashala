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
    icon: <GiMeditation className="text-4xl text-green-600" />,
    image: '/images/panchakarma.jpg',
  },
  {
    title: 'Ayurveda Retreat',
    desc: 'Rebalance, restore, and renew at our Ayurveda retreat.',
    icon: <GiHerbsBundle className="text-4xl text-green-600" />,
    image: '/images/retreat.jpg',
  },
  {
    title: 'Ayurveda Course',
    desc: 'Empower yourself with Ayurvedic knowledge, transform your life.',
    icon: <GiLotus className="text-4xl text-green-600" />,
    image: '/images/course.jpg',
  },
  {
    title: 'Ayurveda Treatment',
    desc: 'Nourish your body, calm your mind, and uplift your spirit.',
    icon: <GiHealingShield className="text-4xl text-green-600" />,
    image: '/images/treatment.jpg',
  },
];

const AyurvedaSlider = () => {
  return (
    <section className="bg-[#f9fefc] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-green-800 mb-12">
          Ayurveda in Kerala
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-52 w-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-3">{card.icon}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AyurvedaSlider;
