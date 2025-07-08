import React from 'react';

interface DropdownProps {
  title: string;
  items: { label: string; href: string }[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, items, isOpen, onOpen, onClose }) => (
  <div
    className="relative cursor-pointer px-3 py-1 rounded-md transition-colors duration-200"
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
    style={{
      backgroundColor: isOpen ? '#fde047' : 'transparent',
      color: isOpen ? '#222' : '#fff',
    }}
  >
    <span>{title} &#x2b;</span>
    {isOpen && (
      <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded z-10">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block px-4 py-2 hover:bg-gray-100 text-gray-900 text-sm"
          >
            {item.label}
          </a>
        ))}
      </div>
    )}
  </div>
);

export default Dropdown;
