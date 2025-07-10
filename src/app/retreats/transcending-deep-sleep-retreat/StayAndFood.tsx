'use client';

import { JSX, useEffect, useState } from 'react';
import { FaWifi, FaBed, FaLeaf, FaMugHot, FaBroom, FaHotTub, FaChair, FaUtensils } from 'react-icons/fa';
import Image from 'next/image';

const stayImages = [
  '/stay-1.jpg',
  '/stay-2.jpg',
];

const foodImages = [
  '/food-1.jpg',
  '/food-2.jpg',
];

const stayFeatures = [
  { icon: <FaWifi />, text: 'Free Wi-Fi' },
  { icon: <FaBed />, text: 'AC / Non-AC Rooms Available' },
  { icon: <FaBroom />, text: 'Clean, hygienic surroundings' },
  { icon: <FaBed />, text: 'Sharing / Non-sharing rooms' },
  { icon: <FaHotTub />, text: 'Attached bathrooms with hot/cold water' },
  { icon: <FaChair />, text: 'Private balcony & proper furniture' },
];

const foodFeatures = [
  { icon: <FaUtensils />, text: '3 meals a day (breakfast, lunch, dinner)' },
  { icon: <FaMugHot />, text: 'Herbal tea served occasionally' },
  { icon: <FaLeaf />, text: 'Pure vegetarian & Yogic food' },
  { icon: <FaLeaf />, text: 'Vegan & Gluten-free options' },
  { icon: <FaUtensils />, text: 'Food on demand (allergies covered)' },
];

function AutoImageSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full h-64 relative rounded-xl overflow-hidden shadow-lg">
      <Image
        src={images[index]}
        alt="Stay or Food"
        fill
        className="object-cover transition-all duration-500"
      />
    </div>
  );
}

function FeatureCard({ title, features }: { title: string; features: { icon: JSX.Element; text: string }[] }) {
  return (
    <div className="bg-white shadow-xl rounded-xl p-6 border-t-4 border-green-600">
      <h3 className="text-xl font-bold mb-4 text-green-700">{title}</h3>
      <ul className="space-y-3 text-gray-700">
        {features.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-green-500 mt-1">{item.icon}</span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function StayAndFood() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Stay */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <FeatureCard title="About - STAY" features={stayFeatures} />
          <AutoImageSlider images={stayImages} />
        </div>

        {/* Food */}
        <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          <AutoImageSlider images={foodImages} />
          <FeatureCard title="About - FOOD" features={foodFeatures} />
        </div>
      </div>
    </section>
  );
}
