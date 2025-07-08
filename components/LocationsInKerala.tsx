'use client';

import React from 'react';

export const LocationsInKerala = () => {
  return (
    <section className="bg-[#ffffff] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h4 className="text-sm text-[#00BF96] font-semibold uppercase tracking-wide">
          Rishikul AyurVaidya Shala
        </h4>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#00BF96] mt-2 mb-10">
          Our Locations in Kerala
        </h2>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Left: Info */}
          <div className="text-center lg:text-left">
            <h1 className="text-6xl font-extrabold text-[#FFEEA9] mb-2 drop-shadow-sm">
              2
            </h1>
            <p className="text-lg text-[#00BF96] font-medium">
              Locations in Kerala
            </p>
          </div>

          {/* Right: Maps */}
          <div className="flex flex-col gap-8 w-full lg:w-[700px]">
            {/* Location 1 */}
            <div className="w-full h-[250px] sm:h-[300px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d504781.94734268443!2d76.710248!3d8.72863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ef004d8ed53f%3A0xf977a17d0a1207c7!2sRishikul%20Ayurvaidya%20Shala!5e0!3m2!1sen!2sus!4v1751883773636!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Location 2 */}
            <div className="w-full h-[250px] sm:h-[300px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d504687.8646176704!2d76.687865!3d8.797912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e5f700689845%3A0xfd6d29b30192506!2sThe%20Kerala%20Retreat!5e0!3m2!1sen!2sus!4v1751883823770!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsInKerala;
