'use client';

import Image from 'next/image';

const KeralaAyurvedaSection = () => {
  return (
    <section className="bg-green-800 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Kerala, Embracing Ayurveda over years
          </h2>
          <p className="text-white text-sm md:text-base leading-relaxed">
            Kerala has a rich history in embracing and practicing Ayurveda at its best and pure form through the hereditary of Ashtavaidyas or Eight Physicians who were the sagest healers and healers from earlier families with royal patronage that bloomed the buds of Ayurveda in Kerala during the 13th -17th Century... Even the present has extended its richness and value by the establishment of Ayurvedic colleges, hospitals and courses with the hard core support of the government.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 relative h-64 md:h-72 w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/ayurveda-kerala.jpg"
            alt="Ayurveda Kerala"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default KeralaAyurvedaSection;
