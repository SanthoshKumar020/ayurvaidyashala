'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from './Dropdown';
import { dropdowns } from './menuData';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="shadow-md w-full">
      {/* Top Menu */}
      <div
        className="py-4 px-6 flex justify-between items-center max-w-7xl mx-auto"
        style={{ backgroundColor: '#0fab83' }}
      >
        <Link href="/">
          <Image src="/weblogo.png" alt="Rishikul Logo" width={140} height={60} />
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-black">
          <Link href="/">Home</Link>
          <Link href="#">Ayurveda</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Our Experts</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Kerala</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
        </nav>
      </div>

      {/* Dropdown bar */}
      <div
        className="w-full py-3"
        style={{ backgroundColor: openDropdown ? '#fde047' : '#0fab83', transition: 'background 0.3s' }}
      >
        <div className="flex justify-center gap-10 flex-wrap text-white font-semibold text-base max-w-7xl mx-auto">
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
