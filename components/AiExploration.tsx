
import React, { useEffect, useRef } from 'react';
import { useLanguage } from './LanguageContext';

const AI_PROJECTS = {
  zh: [
    {
      titleEn: 'NMTI Personality H5',
      titleZh: '牛马人格测试',
      url: 'https://nmti-test.netlify.app/',
      image: 'https://i.ibb.co/nsQWSnkj/20260428160952-198-62.png',
      description: 'NMTI 是一款面向中国职场人群的 H5 心理测试应用，基于独特的五维度评分模型将用户精准匹配至 28 种职场人格原型，全程单页面顺滑体验，无需下载安装即开即用。',
      responsibilities: [
        { label: '逻辑与算法', detail: '搭建极具网感的五维度评分体系（摸鱼指数、情绪稳定度、社交外放度、跑路冲动值、攻击力），通过曼哈顿距离算法实现最近原型匹配，并铺设隐藏人格彩蛋。' },
        { label: '极致单域技术', detail: '放弃臃肿框架，以纯原生 HTML/CSS/JS 单文件实现。28 张插画通过 Base64 深度内嵌，并由 html2canvas 实时渲染结果海报，资源采用国内稳定 CDN 高速分发部署于 Netlify。' },
        { label: '全链路 AI 引擎', detail: '前端视觉由【即梦 AI】包揽 28 张全套人格原画；文案内核由【豆包】辅佐精选修辞；从首行代码至 UI 设计、漏洞排查的整个开发生命周期均由【Claude Cowork】驱动。' },
        { label: '社交传播导向', detail: '针对移动端及微信内置浏览器精心打磨沉浸式操作流，支持一键长按存图至相册，极低阻碍的参与路径成功撬动圈层社交的裂变式传播。' }
      ]
    },
    {
      titleEn: 'Base AI Workflow',
      titleZh: '多维表格 AI 自动化',
      url: 'https://my.feishu.cn/base/Pegfb2BIgaWqdEs6ANccBm0ynhc?from=from_copylink',
      image: 'https://i.postimg.cc/gc8KyjDk/IMG-4694.jpg',
      description: '基于飞书多维表格 AI 字段与自动化流程，实现用户从问卷入口提交信息后，自动生成特定主题的 AI 明信片，并通过飞书 BOT 实时推送或现场打印。',
      responsibilities: [
        { label: '系统架构', detail: '独立完成飞书问卷、多维表格 AI 捷径（Kimi/豆包）及自动化流的闭环搭建。' },
        { label: '规模化复用', detail: '模版已复用至 10 场企业级展会（含飞书未来无限大会），累计生成作品 1000+ 份。' }
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
  ],
  en: [
    {
      titleEn: 'NMTI Personality H5',
      titleZh: 'Office Worker Personality Test',
      url: 'https://nmti-test.netlify.app/',
      image: 'https://i.ibb.co/nsQWSnkj/20260428160952-198-62.png',
      description: 'NMTI is an H5 psychological testing application aimed at Chinese professionals. Based on a unique five-dimensional scoring model, it accurately matches users to 28 workplace personality archetypes with a smooth single-page experience, requiring no downloads.',
      responsibilities: [
        { label: 'Logic & Algorithm', detail: 'Built an engaging five-dimensional scoring system (slacking index, emotional stability, social extroversion, urge to quit, attack power), using Manhattan distance algorithm for archetype matching, and embedded hidden personality easter eggs.' },
        { label: 'Pure Single-File Tech', detail: 'Abandoned bloated frameworks to implement pure native HTML/CSS/JS in a single file. 28 illustrations deeply embedded via Base64, real-time poster rendering via html2canvas, and deployed on Netlify using high-speed domestic CDNs.' },
        { label: 'Full AI Pipeline', detail: 'Front-end visuals covered entirely by [Jimeng AI] for all 28 original character arts; copy refined with [Doubao]; the entire development lifecycle from first line of code and UI design to bug fixing driven entirely by [Claude Cowork].' },
        { label: 'Social Vitality', detail: 'Polished immersive operating flow specifically for mobile and WeChat built-in browsers, supporting one-click long-press to save images to album, successfully triggering viral social spread with extremely low participation barriers.' }
      ]
    },
    {
      titleEn: 'Base AI Workflow',
      titleZh: 'Bitable AI Automation',
      url: 'https://my.feishu.cn/base/Pegfb2BIgaWqdEs6ANccBm0ynhc?from=from_copylink',
      image: 'https://i.postimg.cc/gc8KyjDk/IMG-4694.jpg',
      description: 'Based on Feishu Bitable AI fields and automated workflows, this system allows users to submit information via a questionnaire entrance, automatically generates theme-specific AI postcards, and pushes them in real-time via Feishu BOT or prints them on-site.',
      responsibilities: [
        { label: 'System Architecture', detail: 'Independently completed the closed-loop construction of Feishu questionnaire, Bitable AI shortcuts (Kimi/Doubao), and automated flows.' },
        { label: 'Scaled Reusability', detail: 'The template has been reused across 10 enterprise-level exhibitions (including Feishu Future Infinite Conference), accumulating 1000+ generated works.' }
      ]
    },
    {
      titleEn: 'Vibe Coding Lab',
      titleZh: 'Brand Webpage Lab',
      url: 'https://imperfect-club.netlify.app/',
      image: 'https://i.postimg.cc/zXfVzP39/Screen-Shot-2026-01-26-170556-499.png',
      description: 'Adopting the Vibe Coding (Prompt-Driven Development) pattern, this is a high-texture skincare brand showcase quickly built using AIGC tools.',
      responsibilities: [
        { label: 'Visual Assets Gen', detail: 'Used Midjourney to generate brand Mockups and lifestyle photography, establishing the "Imperfect Club" minimalist and natural brand visual system.' },
        { label: 'Agile Deployment', detail: 'Utilized prompt-driven web construction and implemented responsive deployment on Netlify.' },
        { label: 'Process Exploration', detail: 'Practiced a full-link AI agile development process from product concept to visual delivery.' }
      ]
    }
  ]
};

interface AiExplorationProps {
  onBack?: () => void;
}

const AiExploration: React.FC<AiExplorationProps> = ({ onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const projects = AI_PROJECTS[language as keyof typeof AI_PROJECTS];

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

    const cards = containerRef.current?.querySelectorAll('.stagger-fade');
    cards?.forEach((card) => observer.observe(card));

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
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-24 text-center md:text-left">
          AI & Workflow
        </h1>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <div key={index} className="stagger-fade opacity-0 translate-y-12 transition-all duration-1000 ease-out flex flex-col md:flex-row gap-12 md:gap-20">
              
              {/* Left Column: Image */}
              <div className="w-full md:w-1/2 overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[600px] bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.titleEn} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105"
                />
              </div>

              {/* Right Column: Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="mb-10">
                  <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-tight mb-2">
                    {project.titleEn}
                  </h3>
                  <span className="font-mono text-sm uppercase tracking-widest text-gray-400">
                    {project.titleZh}
                  </span>
                </div>
                
                <div className="space-y-8 text-[15px] md:text-[16px] text-gray-600 leading-relaxed font-light mb-12">
                  <p>{project.description}</p>
                  
                  <div className="space-y-6 pt-4">
                    {project.responsibilities.map((item, idx) => {
                      const hasLabel = !!item.label;
                      return (
                        <div key={idx} className="relative pl-6">
                          <div className="absolute left-0 top-[0.6em] w-[4px] h-[4px] border border-gray-400 rounded-sm shrink-0"></div>
                          <p>
                            <span className="font-medium text-gray-900">{item.label}{item.label && (language === 'zh' ? '：' : ': ')}</span>
                            {item.detail}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-gray-100">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-[11px] uppercase tracking-widest font-bold text-gray-900 transition-colors hover:text-gray-500 w-fit"
                  >
                    <span className="border-b border-black pb-0.5 group-hover:border-transparent transition-colors">Visit Project Platform</span>
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>

            </div>
          ))}

          {/* Developing Section */}
          <div className="stagger-fade opacity-0 translate-y-12 transition-all duration-1000 ease-out pt-32 pb-16 text-center border-t border-black">
             <p className="text-xs uppercase tracking-[0.6em] text-gray-400 font-normal">
               {language === 'zh' ? 'Developing... 更多工具开发中' : 'Developing... More tools under construction'}
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiExploration;
