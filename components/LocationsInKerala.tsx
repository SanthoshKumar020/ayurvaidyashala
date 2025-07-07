'use client';

import React from 'react';

export const LocationsInKerala = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-sm text-green-600 font-semibold">Rishikul AyurVaidya Shala</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
          Our Locations in Kerala
        </h2>

        <div className="flex flex-col md:flex-row items-start justify-center gap-10">
          {/* Left: Number of locations */}
          <div className="text-center md:text-left">
            <h1 className="text-6xl font-bold text-blue-900 mb-2">2</h1>
            <p className="text-gray-700 text-lg">Locations in Kerala</p>
          </div>

          {/* Right: Maps */}
          <div className="flex flex-col gap-6">
            {/* Location 1 */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d504781.94734268443!2d76.710248!3d8.72863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ef004d8ed53f%3A0xf977a17d0a1207c7!2sRishikul%20Ayurvaidya%20Shala!5e0!3m2!1sen!2sus!4v1751883773636!5m2!1sen!2sus"
              width="600"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Location 2 */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d504687.8646176704!2d76.687865!3d8.797912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e5f700689845%3A0xfd6d29b30192506!2sThe%20Kerala%20Retreat!5e0!3m2!1sen!2sus!4v1751883823770!5m2!1sen!2sus"
              width="600"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsInKerala;
