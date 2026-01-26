
import React from 'react';

interface InsightsMediaProps {
  onBack?: () => void;
}

const InsightsMedia: React.FC<InsightsMediaProps> = ({ onBack }) => {
  return (
    <div className="max-w-3xl mx-auto py-32 px-6 flex flex-col items-center justify-center min-h-[40vh] relative">
      {/* Back Button */}
      <div className="absolute top-0 left-6 z-20">
        <button 
          onClick={onBack}
          className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-black transition-colors"
        >
          [ ← BACK ]
        </button>
      </div>

      <div className="text-center space-y-10 pt-10">
        <div className="space-y-4">
          <h2 className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-gray-400 font-bold">Insights & Media</h2>
          <p className="text-xl md:text-2xl text-gray-800 font-medium tracking-tight">
            我的微信公众号：<span className="text-black font-semibold">细雨微声</span>
          </p>
        </div>
        
        <div className="pt-12">
           <div className="w-12 h-0.5 bg-gray-200 mx-auto rounded-full"></div>
        </div>
        
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-300 font-medium">
          Content Coming Soon / 内容持续更新中
        </p>
      </div>
    </div>
  );
};

export default InsightsMedia;
