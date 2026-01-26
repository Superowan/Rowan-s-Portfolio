
import React from 'react';

const VISUAL_WORKS = [
  'https://i.postimg.cc/QtLfsTb6/wen-chuang-zuo-pin1.jpg',
  'https://i.postimg.cc/4dzB3x2s/wen-chuang-zuo-pin2.jpg'
];

interface VisualCreativeProps {
  onBack?: () => void;
}

const VisualCreative: React.FC<VisualCreativeProps> = ({ onBack }) => {
  return (
    <div className="max-w-6xl mx-auto py-10 md:py-16 space-y-12 md:space-y-20 relative">
      {/* Back Button */}
      <div className="absolute top-0 left-4 z-20">
        <button 
          onClick={onBack}
          className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-black transition-colors"
        >
          [ ← BACK ]
        </button>
      </div>

      {/* Header section with minimal text */}
      <div className="px-4 text-center space-y-4 pt-4">
        <h2 className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-gray-400 font-bold">Visual Creative Showcase</h2>
        <p className="text-gray-500 text-[11px] tracking-[0.2em] uppercase font-medium">设计工具: PS AI</p>
      </div>

      {/* Full-width Image Spread */}
      <div className="space-y-10 md:space-y-16">
        {VISUAL_WORKS.map((image, index) => (
          <div 
            key={index} 
            className="w-full bg-white rounded-3xl shadow-2xl shadow-gray-200/40 overflow-hidden transform transition-all duration-700 hover:scale-[1.01]"
          >
            <img 
              src={image} 
              alt={`Visual Work ${index + 1}`} 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Minimal Footer for the section */}
      <div className="pt-20 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gray-300 font-medium">End of Visual Creative Section</p>
      </div>
    </div>
  );
};

export default VisualCreative;
