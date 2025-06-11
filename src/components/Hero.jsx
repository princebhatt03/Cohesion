import React from 'react';
import backgroundImage from '../assets/images/hero-image1.avif';

const Hero = () => {
  return (
    <section
      id="hero0"
      className="relative h-[90vh] w-full bg-cover bg-center text-[#E1D8CF] flex items-center justify-start px-6 md:px-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Overlay for dark blur effect (optional) */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 text-justify p-20 max-w-6xl">
        <h1 className="text-5xl md:text-5xl font-bold leading-snug md:leading-tight">
          탄소는 줄이고, 미래를 지었습니다.
        </h1>
        <h1 className="mt-4 text-justify text-4xl md:text-5xl font-semibold">
          플라스틱 대비 98% 절감 솔루션.
        </h1>

        {/* Stats Row */}
        <div className="mt-8 flex flex-col text-justify md:flex-row items-center justify-start gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-3xl text-justify md:text-4xl font-bold text-[#E1D8CF]">
              2390+
            </p>
            <p className="text-sm text-start mt-1 text-[#E1D8CF]">
              4월 평균탄소 절감량
              <br />
              (kg CO2e)
            </p>
          </div>
          <div className="border-l border-gray-300 h-12 hidden md:block" />
          <div className="text-start">
            <p className="text-3xl md:text-4xl font-bold text-[#E1D8CF]">
              366.4+
            </p>
            <p className="text-sm mt-1 text-gray-200">
              누적 평균 탄소 절감량
              <br />
              (t CO2e)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
