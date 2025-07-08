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
    className="relative"
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
    tabIndex={0} // for keyboard accessibility
    style={{
      transition: 'background 0.3s',
      backgroundColor: isOpen ? '#fde047' : 'transparent',
      borderRadius: isOpen ? '6px' : undefined,
      color: isOpen ? '#222' : '#fff', // adjust text color for visibility
      cursor: 'pointer',
      padding: '0 0.75rem',
    }}
  >
    <span>{title}</span>
    {isOpen && (
      <div
        className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded z-10"
        style={{ color: '#222' }}
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block px-4 py-2 hover:bg-gray-100"
            style={{ color: '#222', textDecoration: 'none' }}
          >
            {item.label}
          </a>
        ))}
      </div>
    )}
  </div>
);

export default Dropdown;
