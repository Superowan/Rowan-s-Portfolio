
import React from 'react';

const AI_PROJECTS = [
  {
    titleEn: 'Base AI Workflow',
    titleZh: '多维表格 AI 自动化',
    url: 'https://my.feishu.cn/base/Pegfb2BIgaWqdEs6ANccBm0ynhc?from=from_copylink',
    image: 'https://i.postimg.cc/gc8KyjDk/IMG-4694.jpg',
    description: '基于飞书多维表格 AI 字段与自动化流程，实现用户从问卷入口提交信息后，自动生成特定主题的 AI 明信片，并通过飞书 BOT 实时推送或现场打印 。',
    responsibilities: [
      { label: '系统架构', detail: '独立完成飞书问卷、多维表格 AI 捷径（Kimi/豆包）及自动化流的闭环搭建 。' },
      { label: '规模化复用', detail: '模版已复用至 10 场 企业级展会（含飞书未来无限大会），累计生成作品 1000+ 份 。' }
    ]
  },
  {
    titleEn: 'Vibe Coding Lab',
    titleZh: '品牌网页实验室',
    url: 'https://imperfect-club.netlify.app/',
    image: 'https://i.postimg.cc/zXfVzP39/Screen-Shot-2026-01-26-170556-499.png',
    description: '采用 Vibe Coding（提示词驱动开发）模式，通过 AIGC 工具快速构建的高质感护肤品牌橱窗。',
    responsibilities: [
      { label: '视觉资产生成', detail: '运用 Midjourney 生成品牌 Mockup 及生活方式摄影，确立“不完美俱乐部”简约、自然的品牌视觉体系。' },
      { label: '敏捷开发部署', detail: '利用提示词驱动网页构建，并在 Netlify 实现响应式部署。' },
      { label: '流程探索', detail: '实践从产品概念到视觉交付的全链路 AI 敏捷开发流程。' }
    ]
  }
];

interface AiExplorationProps {
  onBack?: () => void;
}

const AiExploration: React.FC<AiExplorationProps> = ({ onBack }) => {
  return (
    <div className="max-w-5xl mx-auto py-12 md:py-20 px-4 space-y-32 relative">
      {/* Back Button */}
      <div className="absolute top-0 left-4 z-20">
        <button 
          onClick={onBack}
          className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-black transition-colors"
        >
          [ ← BACK ]
        </button>
      </div>

      {/* Projects List */}
      <div className="space-y-48 pt-10">
        {AI_PROJECTS.map((project, index) => (
          <div key={index} className="space-y-12">
            {/* Project Image */}
            <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-white rounded-2xl shadow-xl shadow-gray-200/50 overflow-hidden group">
              <img 
                src={project.image} 
                alt={project.titleEn} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[35%_1fr] gap-8 md:gap-20 items-start">
              {/* Left side: Project Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight leading-tight">
                    {project.titleEn}
                    <span className="block text-gray-400 font-medium text-sm md:text-lg mt-1">{project.titleZh}</span>
                  </h3>
                </div>
                
                <div className="pt-2">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 border border-gray-200 rounded-xl text-[10px] uppercase tracking-[0.25em] font-bold text-gray-500 hover:text-gray-800 hover:border-gray-400 hover:bg-[#EBEBEB] transition-all duration-300 shadow-sm"
                  >
                    View Project ↗
                  </a>
                </div>
              </div>

              {/* Right side: Details */}
              <div className="space-y-10">
                <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed font-normal">
                  {project.description}
                </p>
                
                <div className="grid gap-8">
                  {project.responsibilities.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="text-[10px] uppercase tracking-[0.35em] text-gray-400 font-bold">{item.label}</h4>
                      <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Developing Section */}
        <div className="pt-24 border-t border-gray-100 text-center">
           <p className="text-[10px] md:text-[11px] uppercase tracking-[0.6em] text-gray-300 font-bold">
             Developing... 更多工具开发中
           </p>
        </div>
      </div>
    </div>
  );
};

export default AiExploration;
