'use client';

import Image from 'next/image';
import { MdSchedule } from 'react-icons/md';
import { GiMeditation, GiHerbsBundle, GiFruitBowl } from 'react-icons/gi';
import { TbYoga } from 'react-icons/tb';
import { FaUtensils, FaSpa } from 'react-icons/fa';

const schedule = [
  { time: '6:00 AM', activity: 'Herbal Tea', icon: <GiHerbsBundle /> },
  { time: '6:30 AM', activity: 'Yoga', icon: <TbYoga /> },
  { time: '8:00 AM', activity: 'Treatment', icon: <FaSpa /> },
  { time: '9:00 AM', activity: 'Breakfast', icon: <GiFruitBowl /> },
  { time: '1:00 PM', activity: 'Lunch', icon: <FaUtensils /> },
  { time: '4:30 PM', activity: 'Treatment', icon: <FaSpa /> },
  { time: '6:00 PM', activity: 'Meditation', icon: <GiMeditation /> },
  { time: '7:00 PM', activity: 'Dinner', icon: <FaUtensils /> },
];

export default function DailySchedule() {
  return (
    <section className="relative w-full h-[600px] md:h-[500px]">
      {/* Background Image */}
      <Image
        src="/schedule-bg.jpg" // Replace with your actual background path
        alt="Background"
        fill
        className="object-cover brightness-[0.4]"
        priority
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg w-full max-w-4xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-2">
            <MdSchedule className="text-green-300" />
            Daily Schedule
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white/10 hover:bg-white/20 transition p-4 rounded-lg"
              >
                <div className="text-sm md:text-base font-semibold">{item.time}</div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <span className="text-green-200">{item.icon}</span>
                  {item.activity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
