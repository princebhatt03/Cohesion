import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#hero1' },
  { label: 'About', href: '#hero2' },
  { label: 'Products', href: '#hero0' },
  { label: 'NEWS', href: '#hero4' },
  { label: '전문가', href: '#hero5' },
  { label: '후기', href: '#hero6' },
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

  // Add smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <header className="flex justify-center pt-6 fixed top-0 left-0 w-full z-50">
      {/* Scroll-based blur background */}
      {showBlur && (
        <div className="fixed top-0 left-0 w-full h-18 bg-white/10 backdrop-blur-lg -z-10 transition-opacity duration-300 pointer-events-none" />
      )}

      {/* Nav container */}
      <div className="relative flex items-end justify-center w-full px-6">
        <div className="flex items-center justify-center gap-0 w-full max-w-[480px] px-[4px] py-[4px] h-[48px] bg-white rounded-full shadow-md">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveTab(item.label)}
              className={`relative px-[19px] py-[11px] text-sm rounded-full font-medium transition-all duration-200 ${
                activeTab === item.label
                  ? 'bg-[#BE8226] text-white shadow'
                  : 'text-gray-800 hover:text-[#BE8226]'
              }`}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
