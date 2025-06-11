import React, { useEffect, useState } from 'react';
import image1 from '../assets/images/hero2-image1.avif';
import image2 from '../assets/images/hero2-image2.avif';
import image3 from '../assets/images/hero2-image3.avif';

const slides = [
  {
    image: image1,
    text: '소재\n장섬유',
    style: 'top-[10%] right-[5%]',
    text1: '보온단열재\n그라스울\n미네라울',
    style1: 'bottom-[20%] left-[8%]',
  },
  {
    image: image2,
    text: '보온단열재\n그라스울\n미네랄울',
    style: 'top-[25%] left-[10%]',
    text1: '소재\n장섬유',
    style1: 'bottom-[15%] right-[10%]',
  },
  {
    image: image3,
    text: '페인트\n건축페인트\n분체페인트\n일반공업페인트',
    style: 'top-[25%] left-[70%]',
    text1: '보온단열재\n그라스울\n미네라울',
    style1: 'bottom-[10%] left-[10%]',
  },
];

const Hero2 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { image, text, text1, style, style1 } = slides[current];

  return (
    <section className="w-full flex items-center justify-center px-16 py-12 h-screen bg-white transition-all duration-700">
      {/* Text Section */}
      <div className="ml-8 w-[70%] space-y-4">
        <p className="text-[#BE8226] font-extrabold text-xl">Construction</p>
        <h1 className="text-5xl font-extrabold text-black">
          다양한 건축자재를
          <br />
          생산합니다.
        </h1>
        <p className="text-gray-700 text-start font-semibold text-[16px]">
          KCC는 환경친화적이고 다양한 기능을 갖춘 건 <br />
          축자재를 생산합니다. 건축물의 내구성과 에너지 효율을 <br />
          높이는데 중요한 역할을 수행합니다.
        </p>
      </div>

      {/* Image + Floating Labels */}
      <div className="w-full h-[85vh] cursor-pointer relative flex items-center justify-center bg-white transition-all duration-1000 overflow-hidden">
        <img
          src={image}
          alt="hero"
          key={current}
          className="max-h-[85%] object-contain transition-all duration-700 ease-in-out hover:scale-110 hover:rotate-4"
        />

        {/* Floating Text 1 */}
        <div
          className={`absolute bg-white text-black font-semibold text-sm whitespace-pre-line px-4 py-2 border border-black shadow-md rounded-sm ${style} transition-all duration-700`}>
          {text}
        </div>

        {/* Floating Text 2 */}
        <div
          className={`absolute bg-white text-black font-semibold text-sm whitespace-pre-line px-4 py-2 border border-black shadow-md rounded-sm ${style1} transition-all duration-700`}>
          {text1}
        </div>
      </div>
    </section>
  );
};

export default Hero2;
