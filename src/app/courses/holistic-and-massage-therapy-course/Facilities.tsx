'use client';

import {
  FaWifi,
  FaHandsHelping,
  FaMoneyBillWave,
  FaBed,
  FaClinicMedical,
  FaPlaneDeparture,
  FaUtensils,
  FaHotTub,
  FaConciergeBell,
  FaTint,
} from 'react-icons/fa';

const facilities = [
  { icon: <FaWifi />, label: 'Wifi' },
  { icon: <FaHandsHelping />, label: 'Help Desk' },
  { icon: <FaMoneyBillWave />, label: 'Money Exchange' },
  { icon: <FaBed />, label: 'Accommodation' },
  { icon: <FaClinicMedical />, label: 'Health care' },
  { icon: <FaPlaneDeparture />, label: 'Travel Desk' },
  { icon: <FaUtensils />, label: 'Food' },
  { icon: <FaHotTub />, label: 'Hot Water' },
  { icon: <FaConciergeBell />, label: 'Reception Desk' },
  { icon: <FaTint />, label: 'RO Water' },
];

export default function Facilities() {
  return (
    <section className="py-16 bg-[#F9FAFB] text-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex justify-center items-center gap-2 text-green-700 font-semibold text-sm uppercase tracking-wider">
            <FaHandsHelping />
            Rishikul AyurVaidya Shala
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 text-green-800">
            Facilities in Rishikul AyurVaidya Shala
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-8">
          {facilities.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-md hover:shadow-green-200 transition-all duration-300 border hover:border-green-600"
            >
              <div className="text-green-600 text-3xl mb-2">{item.icon}</div>
              <div className="text-sm font-medium text-gray-700">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
