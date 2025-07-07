'use client';

import React from 'react';

export const WhyRishikul = () => {
  return (
    <section className="bg-[#040F36] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h4 className="text-sm font-semibold text-white/70 mb-1">
            Rishikul AyurVaidya Shala
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Why Rishikul-
            <br />
            AyurVaidya Shala <span className="text-green-400">?</span>
          </h2>
          <div className="w-10 h-1 bg-green-500 mt-2 mx-auto md:mx-0" />
        </div>

        <div className="max-w-lg text-sm text-gray-300 leading-relaxed text-center md:text-left">
          <p>
            The AyurVaidya Shala is laid on the ethnic southern beach in Varkala, Kerala, India.
            When the southern Kerala is known for their Ayurvedic admiration, we are ensuring our
            companions will be treated well as we iterate about the Ayurvedic restoration.
            We have the privilege to say that nobody does this both together before.
          </p>
        </div>
      </div>
    </section>
  );
};
