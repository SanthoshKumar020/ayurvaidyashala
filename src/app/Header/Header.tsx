'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from './Dropdown';
import { dropdowns } from './menuData';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="w-full shadow-md relative z-50">
      {/* Top Menu Bar */}
      <div className="py-4 px-6 flex justify-between items-center max-w-7xl mx-auto bg-gradient-to-r from-green-500 to-teal-500">
        <Link href="/">
          <Image src="/weblogo.png" alt="Rishikul Logo" width={140} height={60} />
        </Link>

        <nav className="hidden md:flex gap-8 text-white font-semibold text-base">
          <Link href="/" className="relative group">
            <span className="group-hover:text-yellow-400">Home</span>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-400 scale-x-100 transition-transform origin-left" />
          </Link>
          <Link href="/ayurveda">Ayurveda</Link>
          <Link href="#">Retreats</Link>
          <Link href="#">Courses</Link>
          <Link href="#">Panchakarma</Link>
          <Link href="#">Clinics</Link>
          <Link href="#">Amenities</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
        </nav>
      </div>

      {/* Dropdown Bar */}
      <div
        className="w-full py-3 transition-colors duration-300"
        style={{ background: '#FFEEA9' }}
      >
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
