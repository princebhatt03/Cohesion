import React, { useState } from 'react';

const navItems = [
  { label: 'Home' },
  { label: 'About' },
  { label: 'Products' },
  { label: 'NEWS' },
  { label: '전문가' },
  { label: '후기' },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="flex justify-center pt-6 relative z-50">
      {/* Outer Container: 540px width */}
      <div className="relative flex flex-row gap-[10px] justify-center items-end w-[540px] min-h-fit overflow-visible">
        {/* Glass Background */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-full -z-10" />

        {/* Inner Nav */}
        <div className="flex flex-row gap-0 items-center justify-center px-[2px] py-[2px] h-[48px] w-min bg-white rounded-full shadow-md">
          {navItems.map(item => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`relative px-5 py-2 text-sm rounded-full transition duration-200 font-medium
                ${
                  activeTab === item.label
                    ? 'bg-[#BE8226] text-white shadow'
                    : 'text-gray-800 hover:[#BE8226]'
                }
              `}>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
