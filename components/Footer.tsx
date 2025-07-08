'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#00BF96] text-white py-16 px-6">
      {/* Logo Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <img
          src="/weblogo.png"
          alt="Rishikul AyurVaidya Shala"
          className="mx-auto h-16 mb-4"
        />
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left text-sm">
        {/* Ayurveda Treatment */}
        <div>
          <h4 className="font-semibold mb-4 text-[#FFEEA9]">Ayurveda Treatment</h4>
          <ul className="space-y-2 text-white/90">
            <li>🌿 Anti Ageing Program</li>
            <li>🌿 Detox Rehabilitation Program</li>
            <li>🌿 Beauty Skin Care Program</li>
            <li>🌿 Digestive and Immunity Program</li>
            <li>🌿 Panchakarma and Rejuvenation</li>
            <li>🌿 Spinal and Brain Care Rejuvenation</li>
          </ul>
        </div>

        {/* Ayurveda Retreat */}
        <div>
          <h4 className="font-semibold mb-4 text-[#FFEEA9]">Ayurveda Retreat</h4>
          <ul className="space-y-2 text-white/90">
            <li>🌿 Preventing and Wellness Retreat</li>
            <li>🌿 Healing and Balancing Retreat</li>
            <li>🌿 Retirement and Soulful Retreat</li>
            <li>🌿 Harmonious Women Care Retreat</li>
            <li>🌿 Transcending Deep Sleep Retreat</li>
            <li>🌿 Spirituality Ayurveda Yoga Retreat</li>
          </ul>
        </div>

        {/* Ayurveda Course */}
        <div>
          <h4 className="font-semibold mb-4 text-[#FFEEA9]">Ayurveda Course</h4>
          <ul className="space-y-2 text-white/90">
            <li>🌿 Foundational and Dosha Balancing</li>
            <li>🌿 Lifestyle Diet and Cooking</li>
            <li>🌿 Holistic and Massage Therapy</li>
            <li>🌿 Beauty – Skin Care</li>
            <li>🌿 Pregnancy Care & Baby Massage</li>
            <li>🌿 Acupuncture Marma Massage</li>
          </ul>
        </div>

        {/* Ayurveda Panchakarma */}
        <div>
          <h4 className="font-semibold mb-4 text-[#FFEEA9]">Ayurveda Panchakarma</h4>
          <ul className="space-y-2 text-white/90">
            <li>🌿 7 Days Panchakarma Treatment</li>
            <li>🌿 14 Days Panchakarma Treatment</li>
            <li>🌿 21 Days Panchakarma Treatment</li>
            <li>🌿 28 Days Panchakarma Treatment</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-xs text-white/80 space-y-2">
        <p>
          📍 South Cliff, Figo Resort-AyurVaidyaShala, Temple Rd, Varkala, Kerala 695141, India
        </p>
        <p>2025 © All rights reserved by Rishikul AyurVaidya Shala</p>
        <a
          href="#"
          className="underline hover:text-white transition duration-200"
        >
          Privacy & Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
