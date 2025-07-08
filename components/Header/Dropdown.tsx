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
      color: '#000', // text color always black
    }}
  >
    <span>{title} &#x2b;</span>
    {isOpen && (
      <div
        className="absolute left-0 mt-2 w-56 shadow-lg rounded z-10"
        style={{
          backgroundColor: '#FEFF9F',
          color: '#000',
        }}
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block px-4 py-2 text-sm"
            style={{
              color: '#000',
              textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#DDF6D2')}
            onMouseLeave={e => (e.currentTarget.style.color = '#000')}
          >
            {item.label}
          </a>
        ))}
      </div>
    )}
  </div>
);

export default Dropdown;
