import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const SlideButton = ({ text = 'Explore' }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative group bg-white text-black px-10 py-4 rounded-full overflow-hidden font-semibold transition-all duration-300 border border-black">
          <span className="relative z-10">{text}</span>

          {/* Sliding circle with arrow */}
          <div
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 ${
              hovered ? 'translate-x-0' : 'translate-x-16'
            }`}>
            <span className="relative z-10">{text}</span>
            <ArrowRight size={16} />
          </div>
        </button>
      </div>
    </>
  );
};

export default SlideButton;
