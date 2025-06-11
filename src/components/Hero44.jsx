import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import image1 from '../assets/images/hero4-image1.avif';
import image2 from '../assets/images/hero4-image2.avif';

const images = [
  {
    src: image1,
    label: '더 보기',
    date: 'Jun 10, 2024',
    title: '2024 파워 브랜드 행사',
  },
  {
    src: image2,
    label: '더 보기',
    date: 'Jul 8, 2024',
    title: '단열도료 (050A) 단열테스트',
  },
];

const Hero44 = () => {
  const [pointerText, setPointerText] = useState('');
  const [pointerVisible, setPointerVisible] = useState(false);
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animate only once
    });
  }, []);

  const handleMouseMove = e => {
    setPointerPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div id='hero4'
      className="relative h-screen bg-white px-4"
      onMouseMove={handleMouseMove}
      data-aos="fade-up">
      {/* Top Heading */}
      <h1 className="text-center text-4xl font-bold text-black pt-10 mb-8">
        최신 소식을 가장 빠르게 만나보세요.
      </h1>

      {/* Gallery */}
      <div className="flex flex-wrap rounded-3xl justify-center items-center gap-16">
        {images.map((img, index) => (
          <div
            key={index}
            className="flex flex-col rounded-3xl items-center cursor-none h-148 group w-144"
            data-aos="zoom-in"
            onMouseEnter={() => {
              setPointerText(img.label);
              setPointerVisible(true);
            }}
            onMouseLeave={() => setPointerVisible(false)}>
            <div
              className="relative w-full h-[70%] overflow-hidden rounded-3xl border-[25px]"
              style={{ borderColor: '#F7F8FF' }}>
              <img
                src={img.src}
                alt={img.label}
                className="w-full rounded-3xl h-full object-cover filter transition-all duration-500 group-hover:opacity-60 group-hover:rounded-2xl group-hover:scale-110"
              />
            </div>
            {/* Text below image */}
            <div className="text-center mt-3">
              <p className="text-sm text-gray-500">{img.date}</p>
              <p className="text-base font-semibold text-black">{img.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Pointer */}
      {pointerVisible && (
        <div
          className="fixed z-50 flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-semibold rounded-full pointer-events-none shadow-md border border-black"
          style={{
            top: pointerPosition.y,
            left: pointerPosition.x,
            transform: 'translate(-50%, -50%)',
          }}>
          <span>{pointerText}</span>
          <div className="w-14 h-10 text-white rounded-full flex items-center justify-center text-sm border bg-black border-black">
            →
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero44;
