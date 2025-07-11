'use client';

const experts = [
  {
    name: 'Dr. Anu Soman',
    role: 'Seek great Healing with',
    description:
      'Dr. Anu Soman is a highly respected Ayurvedic doctor with over 15 years of experience...balance and harmony.',
    image: null,
  },
  {
    name: 'Dr. Pramod Kumar',
    role: 'Seek great Healing with',
    description:
      'Dr. Pramod Kumar is a talented Ayurvedic doctor with a strong foundation...sharing their knowledge and expertise.',
    image: '/experts/pramod.jpg',
  },
  {
    name: 'Dr. Saraswathi Bukka',
    role: 'Seek great Healing with',
    description:
      'Dr. Saraswathi Bukka is a compassionate and experienced Ayurvedic doctor...wellness workshops.',
    image: '/experts/saraswathi.jpg',
  },
  {
    name: 'Dr. Sangeet',
    role: 'Seek great Healing with',
    description:
      'Dr. Sangeet is a renowned Ayurvedic expert with extensive knowledge...or guidance on Ayurvedic practices.',
    image: null,
  },
];

const ExpertsList = () => {
  return (
    <section className="px-4 py-10 lg:px-20 bg-white">
      {experts.map((expert, index) => (
        <div key={index} className="mb-12">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-start gap-4">
              {expert.image && (
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              )}
              <div>
                <p className="text-gray-700 text-sm leading-relaxed">{expert.description}</p>
                <h3 className="text-lg font-bold text-green-800 mt-4">{expert.name}</h3>
                <p className="text-sm text-green-600">{expert.role}</p>
              </div>
            </div>
          </div>

          {/* Decorative Divider */}
          {index !== experts.length - 1 && (
            <div className="my-8 flex justify-center">
              <div className="w-32 h-1 bg-green-200 rounded-full relative">
                <div className="absolute inset-x-1/2 -translate-x-1/2 -top-3 text-green-600 text-xl">
                  🪷
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ExpertsList;
