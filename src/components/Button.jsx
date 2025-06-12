import React, { useState } from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';

const Button = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full h-fit flex items-center justify-center bg-white">
      <button
        className="relative px-18 py-5 rounded-full font-raleway text-xl tracking-widest text-[#080707] bg-white border-[7px] border-[#dadbeb] overflow-hidden cursor-pointer flex items-center justify-center gap-4"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        {/* Main text with small left shift on hover */}
        <span
          className={`relative z-10 transition-all duration-[400ms] ease-[cubic-bezier(0.56,0.51,0.85,0.84)]
            ${hovered ? '-translate-x-4' : 'translate-x-0'}`}>
          더 보기
        </span>

        {/* Arrow comes in from right */}
        <span
          className={`absolute right-6 top-1/2 -translate-y-1/2 transition-all duration-[450ms] ease-[cubic-bezier(0.56,0.51,0.85,0.84)] z-0
            ${
              hovered
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
            }`}>
          <div className="bg-black rounded-full p-2">
            <BsArrowDownCircle
              size={40}
              className="text-white"
            />
          </div>
        </span>
      </button>
    </div>
  );
};

export default Button;
