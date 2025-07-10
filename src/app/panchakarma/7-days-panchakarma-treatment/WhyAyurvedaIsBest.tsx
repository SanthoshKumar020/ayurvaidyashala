// components/WhyAyurvedaIsBest.tsx
'use client';

const qualities = [
  {
    title: 'Experienced',
    description: 'Established in 2010, years of expertise in Ayurvedic wisdom.',
  },
  {
    title: 'Specialized',
    description:
      'Focus on anti-aging therapies and rejuvenation programs. Tailored, immersive experiences.',
  },
  {
    title: 'Authentic',
    description:
      'Traditional Ayurvedic practices, and compassionate care from experienced Ayurvedic practitioners.',
  },
  {
    title: 'Professional',
    description:
      'High standards in communication and personalized support.',
  },
  {
    title: 'Recommended',
    description:
      'Praised by clients for exceptional health results. Dedicated professionals with expertise and care.',
  },
  {
    title: 'Certification',
    description:
      'Certified by esteemed Ayurvedic organizations. Meets high standards of Ayurvedic excellence.',
  },
  {
    title: 'Always Beyond',
    description:
      'Anti-Aging Treatment goes beyond skin-deep. Holistic transformation addressing root causes.',
  },
  {
    title: 'Excellence',
    description:
      'Creating personalized health plans to help you feel balanced from the inside out.',
  },
];

export default function WhyAyurvedaIsBest() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto text-center">
      <p className="text-sm font-semibold text-indigo-700 uppercase mb-2">
        ✦✦ Get In Touch With Us Today To Rejuvenate Your Youth
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-10">
        Why Ayurveda Shala Is Best For Anti-Aging Treatment:
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
        {qualities.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition duration-300 border border-gray-100"
          >
            <h4 className="text-lg font-semibold text-green-800 mb-2">
              {item.title}
            </h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
