'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <img src="/weblogo.png" alt="Rishikul AyurVaidya Shala" className="mx-auto h-16 mb-4" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
        <div>
          <h4 className="font-semibold mb-4">Ayurveda Treatment</h4>
          <ul className="space-y-2 text-sm">
            <li>🌿 Anti Ageing Program</li>
            <li>🌿 Detox Rehabilitation Program</li>
            <li>🌿 Beauty Skin Care Program</li>
            <li>🌿 Digestive and Immunity Program</li>
            <li>🌿 Panchakarma and Rejuvenation</li>
            <li>🌿 Spinal and Brain Care Rejuvenation</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Ayurveda Retreat</h4>
          <ul className="space-y-2 text-sm">
            <li>🌿 Preventing and Wellness Retreat</li>
            <li>🌿 Healing and Balancing Retreat</li>
            <li>🌿 Retirement and Soulful Retreat</li>
            <li>🌿 Harmonious Women Care Retreat</li>
            <li>🌿 Transcending Deep Sleep Retreat</li>
            <li>🌿 Spirituality Ayurveda Yoga Retreat</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Ayurveda Course</h4>
          <ul className="space-y-2 text-sm">
            <li>🌿 Foundational and Dosha Balancing</li>
            <li>🌿 Lifestyle Diet and Cooking</li>
            <li>🌿 Holistic and Massage Therapy</li>
            <li>🌿 Beauty – Skin Care</li>
            <li>🌿 Pregnancy Care & Baby Massage</li>
            <li>🌿 Acupuncture Marma Massage</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Ayurveda Panchakarma</h4>
          <ul className="space-y-2 text-sm">
            <li>🌿 7 Days Panchakarma Treatment</li>
            <li>🌿 14 Days Panchakarma Treatment</li>
            <li>🌿 21 Days Panchakarma Treatment</li>
            <li>🌿 28 Days Panchakarma Treatment</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-white/70">
        <p className="mb-1">
          Location: South Cliff, Figo Resort-AyurVaidyaShala, Temple Rd, Varkala, Kerala 695141, India
        </p>
        <p className="mb-1">2025 © All rights reserved by Rishikul AyurVaidya Shala</p>
        <a href="#" className="underline hover:text-white">Privacy & Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
