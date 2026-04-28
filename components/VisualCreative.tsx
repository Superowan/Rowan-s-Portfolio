
import React, { useEffect, useRef } from 'react';

const VISUAL_WORKS = [
  'https://i.postimg.cc/QtLfsTb6/wen-chuang-zuo-pin1.jpg',
  'https://i.postimg.cc/4dzB3x2s/wen-chuang-zuo-pin2.jpg'
];

interface VisualCreativeProps {
  onBack?: () => void;
}

const VisualCreative: React.FC<VisualCreativeProps> = ({ onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
          }
        });
      },
      { threshold: 0.1 }
    );

    const images = containerRef.current?.querySelectorAll('.stagger-img');
    images?.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto pb-32 px-4 md:px-8 relative">
      {/* Back Button */}
      <div className="absolute top-0 left-4 md:left-8 z-30">
        <button 
          onClick={onBack}
          className="text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-black transition-colors"
        >
          [ ← BACK ]
        </button>
      </div>

      <div className="pt-20 lg:pt-32">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6 text-center md:text-left">
          Visual Creative
        </h1>
        <p className="text-sm font-mono tracking-widest uppercase text-gray-400 mb-20 text-center md:text-left">
          Tools: Photoshop / AI
        </p>

        {/* Full-width Image Spread without borders/shadows */}
        <div className="space-y-16 md:space-y-32">
          {VISUAL_WORKS.map((image, index) => (
            <div 
              key={index} 
              className="stagger-img opacity-0 translate-y-12 w-full overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
            >
              <img 
                src={image} 
                alt={`Visual Work ${index + 1}`} 
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-[2s] ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Minimal Footer for the section */}
        <div className="pt-32 text-center border-t border-black mt-32">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-300 font-medium">End of Visual Creative Section</p>
        </div>
      </div>
    </div>
  );
};

export default VisualCreative;
