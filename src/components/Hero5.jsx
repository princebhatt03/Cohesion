import React from 'react';
import profileImage from '../assets/images/hero6-image1.avif';

const TestimonialSection = () => {
  return (
    <section
      id="hero5"
      className="w-full bg-white py-16 px-4 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
        후기가 입증하는 전문성
      </h2>

      <p className="text-gray-500 pt-5 text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed">
        “Thank you for building such an empowering <br /> tool, especially for
        designers! The site went from <br /> Figma to Framer in less than a
        week.”
      </p>

      <div className="flex items-center space-x-4">
        <img
          src={profileImage}
          alt="user"
          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
        />

        <div className="text-left">
          <p className="text-lg font-bold text-black">부산광역시 해운대구</p>
          <p className="text-sm text-gray-500">김*영</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
