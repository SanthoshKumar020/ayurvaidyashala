import { TherapyItem } from './TherapyItem';

const therapies = [
  {
    title: 'Vamana',
    description:
      'is a panchakarma treatment involving therapeutic vomiting induced by herbal medicines. It aims to expel accumulated toxins and mucus from the upper respiratory tract and stomach, promoting overall detoxification and balance in the body.',
  },
  {
    title: 'Virechana',
    description:
      'is a panchakarma therapy that uses herbal purgatives to cleanse the digestive tract. It helps eliminate toxins, excess bile, and Pitta-related imbalances, promoting detoxification, improved digestion, and overall health.',
  },
  {
    title: 'Basti',
    description:
      'is a therapeutic panchakarma treatment involving the administration of medicated enemas. It helps cleanse and nourish the colon, balancing Vata dosha, relieving constipation, promoting detoxification, and supporting overall gastrointestinal health.',
  },
  {
    title: 'Nasya',
    description:
      'is a panchakarma therapy where herbal oils or powders are administered through the nasal passages. It helps clear sinus congestion, improve breathing, nourish nasal tissues, and balance Prana (life force), promoting overall respiratory health and mental clarity.',
  },
  {
    title: 'Raktamokshana',
    description:
      'is a panchakarma therapy aimed at purifying the blood. It involves techniques like bloodletting or using leeches to remove impurities from the bloodstream, promoting better circulation and overall health.',
  },
  {
    title: 'Abhyanga',
    description:
      'is a traditional Ayurvedic full-body oil massage. It uses warm herbal oils to deeply nourish the skin, relax muscles, improve blood circulation, and promote detoxification. Abhyanga also calms the mind, enhances sleep quality, and supports overall well-being.',
  },
  {
    title: 'Shirodhara',
    description:
      'is an Ayurvedic therapy where a continuous stream of warm herbal oil or other liquids is poured onto the forehead, specifically on the “third eye” area. It induces deep relaxation, relieves stress, balances emotions, and enhances mental clarity and focus.',
  },
  {
    title: 'Swedana',
    description:
      'is a therapeutic sweating treatment in Ayurveda. It involves sitting in a steam chamber or receiving steam therapy with herbal-infused steam to induce sweating. Swedana helps open the pores, eliminate toxins, reduce stiffness, and promote relaxation and rejuvenation.',
  },
];

export const TherapyList = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 mt-16">
      {therapies.map((therapy) => (
        <TherapyItem key={therapy.title} title={therapy.title} description={therapy.description} />
      ))}
    </div>
  );
};
