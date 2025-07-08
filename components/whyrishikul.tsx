'use client';

import React from 'react';

export const WhyRishikul = () => {
  return (
    <section className="bg-[#040F36] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h4 className="text-sm font-semibold text-white/60 mb-2 tracking-wide">
            Rishikul AyurVaidya Shala
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-2">
            Why Rishikul — <br />
            AyurVaidya Shala <span className="text-[#00BF96]">?</span>
          </h2>
          <div className="w-10 h-1 bg-[#FFEEA9] mt-3 mx-auto md:mx-0" />
        </div>

        {/* Right Side */}
        <div className="max-w-xl text-[15px] text-white/80 leading-relaxed text-center md:text-left">
          <p>
            Nestled on the tranquil southern beach of Varkala, Kerala, India —
            <strong className="text-[#FFEEA9]"> Rishikul AyurVaidya Shala</strong> offers an
            authentic Ayurvedic healing experience. While Kerala is celebrated for its Ayurvedic
            heritage, we stand apart by combining <span className="text-[#00BF96]">time-tested
            therapies</span> with modern care. We proudly offer a truly unique restoration journey —
            one that’s never been done quite this way before.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyRishikul;
