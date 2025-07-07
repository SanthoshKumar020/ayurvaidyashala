// components/Header/Dropdown.tsx
'use client';
import { useState } from 'react';

export default function Dropdown({ title, items }: { title: string; items: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="text-white font-semibold px-4 py-2 hover:underline">
        {title} +
      </button>
      {open && (
        <div className="absolute top-full left-0 w-72 bg-white shadow-lg z-50 rounded-md py-2">
          {items.map((item, i) => (
            <a
              key={i}
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
