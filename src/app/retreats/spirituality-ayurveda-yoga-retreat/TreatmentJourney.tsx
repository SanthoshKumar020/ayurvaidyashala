'use client';

import { FaSpa, FaLeaf, FaRecycle, FaSeedling, FaSmileBeam, FaHandsHelping } from 'react-icons/fa';

const steps = [
  {
    title: 'Initial Phase',
    icon: <FaLeaf className="text-green-600 text-3xl mb-3" />,
    description:
      'We start with a thorough cleansing to prepare your skin, removing impurities and creating a clean canvas for treatment.',
  },
  {
    title: 'Cleansing Phase',
    icon: <FaRecycle className="text-green-600 text-3xl mb-3" />,
    description:
      'This phase involves deep cleansing to purify your skin, removing dirt, oil, and buildup for a fresh and glowing complexion.',
  },
  {
    title: 'Rejuvenating Phase',
    icon: <FaSpa className="text-green-600 text-3xl mb-3" />,
    description:
      'Advanced therapies rejuvenate your skin’s youthful appearance, enhancing tone, texture, and elasticity.',
  },
  {
    title: 'Purgation Phase',
    icon: <FaSeedling className="text-green-600 text-3xl mb-3" />,
    description:
      'We focus on detoxifying your skin and body, clearing toxins, and promoting inner balance and clarity.',
  },
  {
    title: 'Regeneration Phase',
    icon: <FaSmileBeam className="text-green-600 text-3xl mb-3" />,
    description:
      'This step promotes cellular renewal, stimulates collagen, and improves overall skin health and vibrancy.',
  },
  {
    title: 'Final Consultation',
    icon: <FaHandsHelping className="text-green-600 text-3xl mb-3" />,
    description:
      'We ensure your satisfaction with a personalized consultation, advice, and long-term care plan.',
  },
];

export default function TreatmentJourney() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Revitalize and Renew</h2>
        <p className="text-gray-600 mt-2">A Comprehensive Anti-Aging Treatment Journey</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 border-t-4 border-green-500"
          >
            <div className="flex flex-col items-start">
              {step.icon}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
