'use client';

const mistakes = [
  {
    title: 'Incompatible food pairing',
    content:
      'Certain food combinations can upset the balance of your doshas which could lead to indigestion, bloating and gas formations. Some foods are warm in nature while some are cold, teaming the two may prove problematic for your system. Some of the most detrimental food combinations are milk-bananas, curd-sour fruits and melons-grains.',
    number: '01',
  },
  {
    title: 'Overeating',
    content:
      'Overeating is also a strict no-no, according to Ayurveda. Overeating leads to problems like indigestion, flatulence & trouble in sleeping. Keep your dinner light. According to Ayurveda, overeating increases toxins (ama) in the digestive tract which is difficult to eliminate. Eat sattvik food as it is light on stomach & does not lead to toxin accumulation.',
    number: '02',
  },
  {
    title: 'Drinking very chilled water during the meal or after',
    content:
      'Drinking chilled water shocks the system. It may hamper the digestion and also the normal functioning of the gastric juices. It upsets the internal temperature and the focus of your system shifts from digestion to regulating the temperature. According to Ayurveda, it is wiser to sip mouthful of warm water during the meals.',
    number: '03',
  },
  {
    title: 'Standing and Eating',
    content:
      'According to Ayurveda expert Dr. Dhanvantri Tyagi, the posture in which you eat plays a crucial part in your digestion. Moreover, when you are sitting you are paying better attention to your food. Distracted eating is again a bad dietary practice, according to Ayurveda. There is also an important concept of sukoon (peace/contentment) in Ayurveda — when you are sitting and eating.',
    number: '04',
  },
];

export const DietMistakesSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-semibold text-green-700 uppercase mb-2">
          ✦ Rishikul Ayur Vaidya Shala
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-12">
          4 Diet Mistakes You Must Avoid According To Ayurveda:
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {mistakes.map((mistake, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 relative"
            >
              <h3 className="text-[16px] font-bold text-[#1e2a4c] mb-2">
                {mistake.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {mistake.content}
              </p>
              <div className="absolute bottom-4 right-4 text-green-700 text-lg font-bold opacity-80">
                {mistake.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DietMistakesSection;
