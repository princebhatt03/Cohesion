import React, { useState, useEffect } from 'react';

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
  const [showBlur, setShowBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBlur(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex justify-center pt-6 relative z-50">
      {/* Scroll Blur Background */}
      {showBlur && (
        <div className="fixed top-0 left-0 w-full h-[150%] bg-white/10 backdrop-blur-lg -z-10 transition-opacity duration-300 pointer-events-none" />
      )}

      {/* Outer Nav Container */}
      <div className="relative flex flex-row gap-[10px] justify-center items-end w-full min-h-fit overflow-visible">
        {/* Static Glass Background */}
        <div className="absolute top-[-50%] w-full bg-white/10 h-[150%] backdrop-blur-lg  -z-10" />

        {/* Inner Nav */}
        <div className="flex flex-row gap-0 w-[37%] items-center justify-center px-0 py-1 h-[48px] bg-white rounded-full shadow-md">
          {navItems.map(item => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`relative px-5 py-3 text-sm rounded-full transition duration-200 font-medium
                ${
                  activeTab === item.label
                    ? 'bg-[#BE8226] text-white shadow'
                    : 'text-gray-800 hover:text-[#BE8226]'
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
