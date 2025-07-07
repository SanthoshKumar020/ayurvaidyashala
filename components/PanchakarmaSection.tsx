'use client';

import Link from 'next/link';

const PanchakarmaSection = () => {
  return (
    <section className="relative bg-white">
      {/* Parallax Background */}
      <div
        className="bg-fixed bg-center bg-cover h-[600px] relative"
        style={{ backgroundImage: "url('/herosec.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#03112d]/70 clip-diagonal z-10" />
        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-end max-w-7xl mx-auto px-6">
          <div className="w-full md:w-1/2 text-white text-right">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
              Experience Authentic <br /> Panchakarma Therapy
            </h2>
            <p className="text-lg text-blue-100 mb-4 leading-relaxed">
              Discover centuries-old Ayurvedic wisdom through Panchakarma — a comprehensive healing and detoxification therapy. Designed to cleanse, balance, and rejuvenate both mind and body.
            </p>
            <p className="text-base text-blue-200 mb-8">
              At Rishikul AyurVaidya Shala, we tailor each program to your unique dosha, ensuring a truly personalized and transformative experience that promotes optimal health and inner harmony.
            </p>
            <Link
              href="/courses"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded shadow-md transition duration-300"
            >
              View Courses →
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
        }

        @media (max-width: 768px) {
          .clip-diagonal {
            clip-path: none;
          }
        }
      `}</style>
    </section>
  );
};

export default PanchakarmaSection;
