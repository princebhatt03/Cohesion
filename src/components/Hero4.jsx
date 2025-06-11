import React, { useState, useEffect } from 'react';
import image1 from '../assets/images/hero5-image1.avif';
import image2 from '../assets/images/hero5-image2.avif';
import image3 from '../assets/images/hero5-image3.avif';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  { src: image1, label: '클릭해서 더보기' },
  { src: image2, label: '클릭해서 더보기' },
  { src: image3, label: '클릭해서 더보기' },
];

const Hero4 = () => {
  const [pointerText, setPointerText] = useState('');
  const [pointerVisible, setPointerVisible] = useState(false);
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleMouseMove = e => {
    setPointerPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="hero3"
      className="relative w-full h-screen px-6 py-12 md:px-16 bg-white"
      onMouseMove={handleMouseMove}
      data-aos="fade-up">
      {/* Title */}
      <h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        data-aos="fade-down">
        전문가 소개
      </h2>

      {/* Image gallery */}
      <div className="flex flex-wrap justify-center items-center gap-16">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative cursor-pointer w-84 h-98 overflow-hidden rounded-4xl"
            onMouseEnter={() => {
              setPointerText(img.label);
              setPointerVisible(true);
            }}
            onMouseLeave={() => setPointerVisible(false)}
            data-aos="zoom-in"
            data-aos-delay={index * 200}>
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </div>

      {/* Custom pointer */}
      {pointerVisible && (
        <div
          className="fixed z-50 px-3 py-1 bg-white text-black text-sm font-semibold rounded-xl pointer-events-none mix-blend-difference transition-all duration-150"
          style={{
            top: pointerPosition.y,
            left: pointerPosition.x,
            transform: 'translate(-50%, -50%)',
          }}>
          {pointerText}
        </div>
      )}
    </section>
  );
};

export default Hero4;
