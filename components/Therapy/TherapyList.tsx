import { TherapyItem } from './TherapyItem';

const therapies = [
  {
    title: 'Vamana',
    description:
      'A panchakarma treatment involving therapeutic vomiting to remove toxins from the upper digestive tract.',
  },
  {
    title: 'Virechana',
    description:
      'A herbal purgation therapy to cleanse the intestines and detoxify excess Pitta.',
  },
  {
    title: 'Basti',
    description:
      'An Ayurvedic medicated enema therapy for cleansing and nourishing the colon.',
  },
  {
    title: 'Nasya',
    description:
      'Herbal oils or powders are administered through the nose to cleanse sinuses and enhance mental clarity.',
  },
  {
    title: 'Raktamokshana',
    description:
      'A blood purification therapy using methods like leeching to eliminate toxins and improve circulation.',
  },
  {
    title: 'Abhyanga',
    description:
      'A full-body oil massage using warm herbal oils for relaxation, detox, and rejuvenation.',
  },
  {
    title: 'Shirodhara',
    description:
      'Warm oil is poured onto the forehead to relax the mind, reduce anxiety, and improve focus.',
  },
  {
    title: 'Swedana',
    description:
      'An herbal steam therapy that opens pores, promotes sweating, and removes deep-rooted toxins.',
  },
];

export const TherapyList = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-16">
      {therapies.map((therapy) => (
        <TherapyItem
          key={therapy.title}
          title={therapy.title}
          description={therapy.description}
        />
      ))}
    </div>
  );
};
