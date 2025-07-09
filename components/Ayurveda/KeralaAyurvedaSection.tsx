'use client';

import Image from 'next/image';

const KeralaAyurvedaSection = () => {
  return (
    <section className="bg-green-800 py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 items-center bg-green-700 rounded-lg overflow-hidden shadow-md">
        {/* Left: Text Content */}
        <div className="p-6 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Kerala, Embracing Ayurveda over years
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Kerala has a rich history in embracing and practicing Ayurveda at its best and pure form
            through the hereditary of AshtaVaidyas or Eight Physicians who were the eight masters
            and healers from earlier families with royal patronage that bloomed the buds of Ayurveda
            in Kerala during the 13th -17th Century. Even the present has extended its richness and
            value by the establishment of Ayurvedic colleges, hospitals and courses with the hard
            core support of the government.
          </p>
        </div>

        {/* Right: Image */}
        <div className="w-full h-full">
          <Image
            src="/kerala-ayurveda.jpg" // Replace with actual image in /public
            alt="Kerala Ayurveda"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default KeralaAyurvedaSection;
