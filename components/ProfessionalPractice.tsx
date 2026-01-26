
import React, { useEffect, useRef } from 'react';

const TIMELINE_DATA = [
  { 
    id: 'nio', 
    name: 'NIO', 
    range: '2023.11 – 2024.01', 
    durationScore: 2, 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/NIO_logo.svg' 
  },
  { 
    id: 'dji', 
    name: 'DJI', 
    range: '2024.02 – 2024.06', 
    durationScore: 4, 
    logo: 'https://brandlogos.net/wp-content/uploads/2019/01/dji-logo_brandlogos.net_21dtj.png' 
  },
  { 
    id: 'tangcheng', 
    name: 'Tangcheng', 
    range: '2024.06 – 2024.08', 
    durationScore: 2, 
    logo: 'https://www.bjiff.com/marketonlineEn/zy/xytcysjd_en/202208/W020220809550520222317.jpg' 
  },
  { 
    id: 'bytedance', 
    name: 'ByteDance', 
    range: '2024.11 – 2025.07', 
    durationScore: 8, 
    logo: 'https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/bytedance-brand-color.png' 
  },
];

// Reordered to put larger items towards the middle of the list for "center-out" wrap effect
const SKILLS = [
  { name: 'KOL推广', size: 'text-sm md:text-lg', weight: 'font-normal', color: 'text-gray-400' },
  { name: '内容营销', size: 'text-lg md:text-2xl', weight: 'font-medium', color: 'text-gray-600' },
  { name: 'GTM策略', size: 'text-2xl md:text-4xl', weight: 'font-bold', color: 'text-gray-800' },
  { name: '品牌整合营销', size: 'text-4xl md:text-6xl', weight: 'font-bold', color: 'text-gray-900' },
  { name: '市场活动策划', size: 'text-xl md:text-3xl', weight: 'font-semibold', color: 'text-gray-700' },
  { name: '用户增长', size: 'text-lg md:text-xl', weight: 'font-semibold', color: 'text-gray-500' },
  { name: '产品营销', size: 'text-base md:text-xl', weight: 'font-medium', color: 'text-gray-500' },
  { name: '社群运营', size: 'text-base md:text-xl', weight: 'font-semibold', color: 'text-gray-500' },
  { name: '市场研究', size: 'text-sm md:text-lg', weight: 'font-normal', color: 'text-gray-400' },
];

const EXPERIENCES = [
  {
    id: 'bytedance',
    company: 'ByteDance (Feishu)',
    role: '品牌营销实习生',
    details: [
      '大型市场 Campaign 操盘：全流程策划执行亿级商机项目【2025 飞书发布会】，统筹小鹏、安克、亚朵等 20+ 参展客户，实现直播 UV 累计 250w+，年同比增长 114%。',
      '产品整合营销：落地 7 场 200人+ 行业论坛，独立策划霸王茶姬互动展区，实现现场 2040人 参与，转化率达 71%。',
      '品牌策略与转化：制定《2024 飞书年度报告》线上传播和激励策略，捕获高价值线索 2136 条，MQL 转化率 7.2%。',
      'GTM 包装：专项制作 AI 产品营销物料，推动华南区域 Logo 墙完成 “AI+场景化” 焕新。'
    ],
    image: 'https://i.postimg.cc/LsNGBYQt/IMG-4704.jpg'
  },
  {
    id: 'tangcheng',
    company: '中国唐城影视基地',
    role: '市场营销实习生',
    details: [
      'IP 主题营销：借势《庆余年2》设计国风路线，抖音/微博话题互动播放破三千万次，带动暑期线下游客量同比增长 200%。',
      '新媒体运营：创作小红书多篇爆款攻略，单篇最高浏览量 10万+，账号1个月累计涨粉 1k+。',
      '直播支持：参与运营 5 场直播，单场在线峰值突破 2.3w+ 人，推动抖音橱窗月 GMV +27%。'
    ],
    image: 'https://i.postimg.cc/DyLDpYpx/IMG-5791.png'
  },
  {
    id: 'dji',
    company: '大疆车载 (DJI Automotive)',
    role: '人力资源实习生',
    details: [
      '招聘全链路管理：管理 99 个实习生 HC，筛选 4000+ 份简历，成功入职 71 人。搭建实习生招聘SOP，维护人才库',
      '校园大使项目：管理 20 所高校 200+ 人校园大使社群，通过社交平台矩阵大幅提升雇主品牌影响力。'
    ],
    image: 'https://img.caixin.com/2025-09-23/175862369258692_480_320.jpg'
  },
  {
    id: 'nio',
    company: '蔚来汽车 (NIO Inc.)',
    role: '市场活动实习生',
    details: [
      '活动策划与执行：执行大型车展及路演，线索转化率达 19.8%，有效降低 CPL 获客成本。',
      '品牌传播：发布 12 篇品牌深度内容，UV 同比上涨 120%，策划茅台联名购车等跨界合作。'
    ],
    image: 'https://media.gzstv.com/images/2023/04/12/8ce9bc3cd6934c0a8e2317d9905978ff.png'
  }
];

interface ProfessionalPracticeProps {
  onBack?: () => void;
}

const ProfessionalPractice: React.FC<ProfessionalPracticeProps> = ({ onBack }) => {
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

    const children = containerRef.current?.querySelectorAll('.scroll-fade');
    children?.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(`exp-${id}`);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={containerRef} className="max-w-5xl mx-auto pb-24 px-4 overflow-hidden relative">
      {/* Back Button */}
      <div className="absolute top-0 left-4 z-20">
        <button 
          onClick={onBack}
          className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-black transition-colors"
        >
          [ ← BACK ]
        </button>
      </div>

      {/* Timeline Section */}
      <div className="relative w-full pt-20 pb-32 md:pt-28 md:pb-40">
        {/* Winding Curve Path Background */}
        <div className="absolute top-1/2 left-0 w-full h-[240px] -translate-y-1/2 pointer-events-none opacity-5">
            <svg width="100%" height="240" viewBox="0 0 1000 240" preserveAspectRatio="none" className="w-full h-full">
                <path 
                  d="M0,120 C150,240 350,0 500,120 C650,240 850,0 1000,120" 
                  fill="none" 
                  stroke="black" 
                  strokeWidth="2" 
                />
            </svg>
        </div>

        {/* Nodes and Duration Intervals */}
        <div className="relative flex justify-between items-center max-w-4xl mx-auto">
          {TIMELINE_DATA.map((item, idx) => (
            <div 
              key={item.id} 
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center group relative cursor-pointer ${idx % 2 === 0 ? '-translate-y-12 md:-translate-y-16' : 'translate-y-12 md:translate-y-16'}`}
            >
              {/* Logo - Direct Original Image, Larger Size */}
              <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 z-10">
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Time Range and Name - Directly Below Logo */}
              <div className="mt-4 text-center">
                <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-1">{item.range}</p>
                <p className="text-xs md:text-sm font-semibold text-gray-800 group-hover:text-black transition-colors">{item.name}</p>
                
                {/* Duration Line Segment - Variable length based on duration */}
                <div 
                  className="mt-3 mx-auto h-1 bg-black rounded-full opacity-10 group-hover:opacity-100 transition-all duration-500"
                  style={{ width: `${Math.min(item.durationScore * 8 + 10, 80)}px` }}
                />
              </div>

              {/* Curve Anchor Point */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black rounded-full opacity-0 group-hover:opacity-20 transition-opacity" style={{
                  top: idx % 2 === 0 ? 'calc(50% + 80px)' : 'calc(50% - 80px)'
              }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Center-out Skill Cloud Section */}
      <div className="scroll-fade opacity-0 translate-y-12 transition-all duration-1000 delay-300 py-20 md:py-32 border-y border-gray-100 mb-24 bg-white/30 rounded-[3rem] px-10 md:px-20 overflow-hidden">
        <div className="max-w-4xl mx-auto relative flex flex-col items-center">
          <h3 className="text-[10px] font-bold tracking-[0.6em] uppercase text-gray-300 text-center mb-16">Expertise & Skills</h3>
          <div className="flex flex-wrap justify-center items-center content-center gap-x-8 gap-y-6 md:gap-x-14 md:gap-y-10 max-w-3xl">
            {SKILLS.map((skill, index) => (
              <span 
                key={index}
                className={`${skill.size} ${skill.weight} ${skill.color} transition-all duration-500 cursor-default tracking-tighter hover:scale-110 inline-block text-center whitespace-nowrap`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Details */}
      <div className="space-y-32 md:space-y-56">
        {EXPERIENCES.map((exp) => (
          <section 
            id={`exp-${exp.id}`}
            key={exp.id} 
            className="scroll-fade opacity-0 translate-y-12 transition-all duration-1000 ease-out flex flex-col md:flex-row gap-12 md:gap-20 items-start"
          >
            {/* Left Content */}
            <div className="w-full md:w-[60%] order-2 md:order-1">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                  {exp.company}
                </h2>
                <p className="text-xl text-gray-400 mt-2 font-medium">{exp.role}</p>
              </div>
              
              <ul className="space-y-8 text-gray-600 text-[16px] md:text-[17px] leading-relaxed">
                {exp.details.map((detail, i) => (
                  <li key={i} className="flex gap-5">
                    <span className="mt-3 w-1.5 h-1.5 rounded-full bg-black shrink-0 opacity-10" />
                    <p>{detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-[40%] order-1 md:order-2">
              <div className="aspect-[4/3] w-full bg-white rounded-xl shadow-lg shadow-gray-200/50 overflow-hidden group">
                <img 
                  src={exp.image} 
                  alt={exp.company} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalPractice;
