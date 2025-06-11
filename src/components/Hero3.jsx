import React, { useEffect, useRef, useState } from 'react';

const Hero3 = () => {
  const highlightRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (highlightRef.current) {
        const rect = highlightRef.current.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight);

        setIsInView(isVisible);
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full h-screen bg-[#E3D7C8] flex items-center justify-center px-6 md:px-16 scroll-smooth">
      <div className="max-w-5xl w-full text-center">
        <p className="text-[32px] md:text-[48px] leading-[140%] text-[#647066] font-semibold tracking-wide">
          우리는 환경친화적이고 다양한 기능을 갖춘 건축자재를 생산합니다.
          <span
            ref={highlightRef}
            className={`transition-colors duration-500 ${
              isInView ? 'text-black' : 'text-[#647066]'
            }`}>
            건축물의 내구성과 에너지 효율을 높이는데
          </span>{' '}
          중요한 역할을 수행합니다.
        </p>
      </div>
    </section>
  );
};

export default Hero3;
