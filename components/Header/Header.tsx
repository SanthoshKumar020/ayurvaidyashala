'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // ✅ import router
import Dropdown from './Dropdown';
import { dropdowns } from './menuData';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const router = useRouter(); // ✅ useRouter for navigation

  return (
    <header className="w-full shadow-md relative z-50">
      {/* Top Menu Bar */}
      <div className="py-4 px-6 flex justify-between items-center max-w-7xl mx-auto bg-gradient-to-r from-green-500 to-teal-500">
        <Image
          src="/weblogo.png"
          alt="Rishikul Logo"
          width={140}
          height={60}
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />
        <nav className="hidden md:flex gap-8 text-white font-semibold text-base">
          <span className="relative group cursor-pointer" onClick={() => router.push('/')}>
            <span className="group-hover:text-yellow-400">Home</span>
          </span>
          <span className="relative group cursor-pointer" onClick={() => router.push('/ayurveda')}>
            <span className="group-hover:text-yellow-400">Ayurveda</span>
          </span>
          <span className="relative group cursor-pointer">Retreats</span>
          <span className="relative group cursor-pointer">Courses</span>
          <span className="relative group cursor-pointer">Panchakarma</span>
          <span className="relative group cursor-pointer">Clinics</span>
          <span className="relative group cursor-pointer">Amenities</span>
          <span className="relative group cursor-pointer">FAQ</span>
          <span className="relative group cursor-pointer">About Us</span>
          <span className="relative group cursor-pointer">Contact Us</span>
        </nav>
      </div>

      {/* Dropdown Bar */}
      <div className="w-full py-3 transition-colors duration-300" style={{ background: '#FFEEA9' }}>
        <div className="flex justify-center gap-10 flex-wrap text-black font-semibold text-base max-w-7xl mx-auto">
          {dropdowns.map((item) => (
            <Dropdown
              key={item.key}
              title={item.title}
              items={item.items}
              isOpen={openDropdown === item.key}
              onOpen={() => setOpenDropdown(item.key)}
              onClose={() => setOpenDropdown(null)}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
