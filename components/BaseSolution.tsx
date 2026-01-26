
import React from 'react';

interface BaseSolutionProps {
  onBack?: () => void;
}

const BaseSolution: React.FC<BaseSolutionProps> = ({ onBack }) => {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6 relative">
      {/* Back Button */}
      <div className="absolute top-0 left-6 z-20">
        <button 
          onClick={onBack}
          className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-black transition-colors"
        >
          [ ← BACK ]
        </button>
      </div>

      <div className="text-center space-y-12 pt-10">
        <div className="space-y-4">
          <h2 className="text-[11px] uppercase tracking-[0.4em] text-gray-400 font-bold">Base Solution</h2>
          <h1 className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed">
            关于多维表格模版作品，<br />请访问我的飞书文档查看～
          </h1>
        </div>

        <div className="pt-8">
          <a 
            href="https://my.feishu.cn/wiki/A84twgPTliVPg5k6OzHcfn2SnRe?from=from_copylink" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block group"
          >
            <div className="px-10 py-5 bg-white border border-gray-100 rounded-full shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 transform hover:-translate-y-1">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-gray-500 group-hover:text-black transition-colors">
                [ Open Feishu Document ]
              </span>
            </div>
          </a>
        </div>

        <div className="pt-16 max-w-lg mx-auto">
          <p className="text-sm text-gray-400 leading-loose italic">
            "Base Solution 模块是我在飞书实习期间及之后，通过创作标准化的多维表格模版，<br className="hidden md:block" />
            激励市场 Campaign 互动、提升团队协作效率与业务管理颗粒度，以及服务日常生活中的小需求。"
          </p>
        </div>
      </div>
    </div>
  );
};

export default BaseSolution;
