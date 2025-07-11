'use client';

import Image from 'next/image';

const KeralaBanner = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[400px]">
      <Image
        src="/images/kerala-banner.png" // Use your actual image path
        alt="Kerala Banner"
        fill
        className="object-cover object-center brightness-75"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">Kerala</h1>
        <div className="mt-4 text-lg md:text-xl flex items-center gap-2">
          <span className="font-semibold">Home</span>
          <span className="text-green-400 text-xl">»</span>
          <span className="text-green-100">Kerala</span>
        </div>
      </div>
    </section>
  );
};

export default KeralaBanner;
