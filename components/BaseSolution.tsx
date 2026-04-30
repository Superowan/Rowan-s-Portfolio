
import React from 'react';
import { useLanguage } from './LanguageContext';

interface BaseSolutionProps {
  onBack?: () => void;
}

const BaseSolution: React.FC<BaseSolutionProps> = ({ onBack }) => {
  const { language } = useLanguage();

  const content = {
    zh: {
      title: '关于多维表格模版作品',
      desc: '"Base Solution 模块是我在飞书实习期间及之后，通过创作标准化的多维表格模版，激发 Campaign 互动、提升团队协作效率以及服务日常生活中的各种场景化需求。"'
    },
    en: {
      title: 'About Bitable Template Works',
      desc: '"The Base Solution module showcases standardized Bitable templates I created during and after my Feishu internship. These templates are designed to stimulate Campaign participation, enhance team collaboration, and serve various daily scenario needs."'
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <div className="max-w-6xl mx-auto pb-32 px-4 md:px-8 relative">
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
          Base Solution
        </h1>

        <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-32 border-t border-black pt-16">
          <div className="w-full md:w-1/3 shrink-0">
            <h2 className="text-2xl font-medium text-gray-900 leading-snug mb-6">
              {t.title}
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed font-light mb-10">
              {t.desc}
            </p>
            
            <a 
              href="https://my.feishu.cn/wiki/A84twgPTliVPg5k6OzHcfn2SnRe?from=from_copylink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-[11px] uppercase tracking-widest font-bold text-gray-900 transition-colors hover:text-gray-500 w-fit"
            >
              <span className="border-b border-black pb-0.5 group-hover:border-transparent transition-colors">View Feishu Document</span>
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          
          <div className="w-full md:w-2/3 bg-gray-50 aspect-[16/10] md:aspect-auto md:min-h-[500px] flex items-center justify-center border border-gray-100/50 grayscale hover:grayscale-0 transition-all duration-1000 p-8">
            {/* Visual Placeholder / Mockup Idea */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 opacity-30">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <p className="text-sm font-mono tracking-widest uppercase text-gray-400">External Link</p>
              <p className="text-xl font-medium text-gray-800 mt-2">Bitable Templates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseSolution;
