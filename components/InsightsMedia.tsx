
import React from 'react';

interface InsightsMediaProps {
  onBack?: () => void;
}

const InsightsMedia: React.FC<InsightsMediaProps> = ({ onBack }) => {
  return (
    <div className="max-w-6xl mx-auto pb-32 px-4 md:px-8 relative min-h-[70vh]">
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
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-20 text-center md:text-left">
          Insights & Media
        </h1>
        
        <div className="flex flex-col items-center justify-center border-t border-black pt-32 pb-16">
          <p className="text-xl md:text-2xl text-gray-800 font-light tracking-tight mb-4">
            Official WeChat Account: <span className="font-semibold text-black">细雨微声</span>
          </p>
          
          <div className="w-16 h-16 mt-12 mb-10 text-gray-200">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
          </div>
          
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400 font-medium">
            WIP / Content Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsightsMedia;
