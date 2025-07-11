'use client';

import Image from 'next/image';

const ContactHero = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/contact-hero.jpg"
        alt="Contact Us Hero"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact us</h1>
        <p className="text-sm md:text-base space-x-1">
          <span className="opacity-80">Home</span>
          <span className="text-green-400 mx-2">❯</span>
          <span className="font-semibold">Contact us</span>
        </p>
      </div>

      {/* Sparkles (Optional Decorative SVGs) */}
      <div className="absolute top-10 right-10 z-30 animate-pulse">
        <div className="text-white text-4xl">✨</div>
      </div>
    </section>
  );
};

export default ContactHero;
