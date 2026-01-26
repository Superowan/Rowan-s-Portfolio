
import React, { useEffect, useRef } from 'react';

interface CompetitionProject {
  id: string;
  category: 'fmcg' | 'campus';
  award: string;
  year: string;
  projectName: string;
  description: string;
  responsibilities: string[];
  hasDetail?: boolean;
}

const COMPETITIONS: CompetitionProject[] = [
  {
    id: 'brandstorm',
    category: 'fmcg',
    award: '全国 TOP 50',
    year: '2025',
    projectName: "L'Oréal BrandStorm 2025",
    description: '依托“护肤 + AI + 云计算”模式，构建覆盖用户全生命周期的护肤服务体系。通过实时皮肤数据监测提供个性化方案，整合社区运营、游戏化激励及数字人陪伴功能，解决男性护肤知识匮乏、习惯难坚持等痛点 。',
    responsibilities: [
      '队长职责：主导核心创意方向，明确 **“刺激-陪伴-成长”** 的用户运营逻辑，制定 GTM 和营销策略 。',
      '产品设计：规划 AI 智能卡片、数字人陪伴、游戏化激励的功能逻辑与交互流程 。',
      '商业分析：负责 market 研究、**盈利分析**与可持续发展战略，设计高效转化路径 。'
    ],
    hasDetail: true
  },
  {
    id: 'internet-plus',
    category: 'campus',
    award: '省级一等奖',
    year: '2023',
    projectName: '“互联网+”大学生创新创业大赛',
    description: '创立“同和一舍”国韵客舍民宿项目，以“赓续国学传承”为品牌理念，在贵州打造一体化旅游服务体系，带动当地文旅经济发展 。',
    responsibilities: [
      '队长职责：搭建民宿 **PERC 商业模式**，主导品牌营销与新媒体推广 。',
      '成果：运营多平台账号，累计获得 **8.5万+ 浏览量** 和 **500+ 收藏**，助力民宿与 **10 家单位** 达成合作 。'
    ]
  },
  {
    id: 'zhengda-cup',
    category: 'campus',
    award: '国家级奖项',
    year: '2022',
    projectName: '“正大杯”全国大学生市场调研大赛',
    description: '针对贵州蜡染文创产品的消费者购买偏好展开研究，探索“互联网+”模式下传统文创产品的年轻化销售路径 。',
    responsibilities: [
      '调研分析：运用 **AISAS 模型** 分析消费者行为特征，结合 **Logistic 模型** 确定 **18-25 岁** 为主要购买人群 。',
      '产品落地：负责蜡染玩偶系列的产品设计与数字营销推广，输出 SWOT 及 PESTEL 分析 。'
    ]
  }
];

interface StrategicCompetitionProps {
  onBack?: () => void;
  onSelectProject?: () => void;
}

const StrategicCompetition: React.FC<StrategicCompetitionProps> = ({ onBack, onSelectProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-16');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current?.querySelectorAll('.stagger-card');
    cards?.forEach((card, index) => {
      (card as HTMLElement).style.transitionDelay = `${index * 0.15}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-black">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div ref={containerRef} className="max-w-5xl mx-auto px-4 pb-32 relative">
      {/* Back Button */}
      <div className="absolute top-0 left-4 z-20">
        <button 
          onClick={onBack}
          className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-black transition-colors"
        >
          [ ← BACK ]
        </button>
      </div>

      {/* Category Navigation */}
      <nav className="flex justify-center space-x-12 mb-24 md:mb-32 pt-8">
        <button 
          onClick={() => scrollToCategory('fmcg-section')}
          className="text-2xl md:text-3xl font-bold text-gray-300 hover:text-black transition-colors"
        >
          FMCG Competition
        </button>
        <button 
          onClick={() => scrollToCategory('campus-section')}
          className="text-2xl md:text-3xl font-bold text-gray-300 hover:text-black transition-colors"
        >
          Campus Competition
        </button>
      </nav>

      {/* FMCG Section */}
      <section id="fmcg-section" className="mb-40 relative">
        <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none select-none -z-10 overflow-hidden w-full h-full flex justify-end items-start">
            <span className="text-[10vw] font-bold leading-none translate-x-10 -translate-y-4">L'Oréal</span>
        </div>
        
        <h2 className="text-[11px] uppercase tracking-[0.4em] text-gray-400 font-bold mb-16">FMCG Sector</h2>
        
        <div className="space-y-32">
          {COMPETITIONS.filter(c => c.category === 'fmcg').map((project) => (
            <div key={project.id} className="stagger-card opacity-0 translate-y-16 transition-all duration-1000 ease-out grid grid-cols-1 md:grid-cols-[30%_1fr] gap-12 md:gap-16">
              <div>
                <h3 className="text-3xl font-bold text-black leading-tight mb-2">{project.award}</h3>
                <p className="text-gray-400 font-medium tracking-widest">{project.year}</p>
              </div>
              <div className="space-y-6">
                <h4 className="text-xl md:text-2xl font-semibold text-gray-900">{project.projectName}</h4>
                <p className="text-gray-600 leading-relaxed text-lg">{renderText(project.description)}</p>
                <ul className="space-y-4 pt-4 border-t border-gray-100">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} className="text-gray-600 flex gap-4 leading-relaxed">
                      <span className="text-gray-300">-</span>
                      <p>{renderText(resp)}</p>
                    </li>
                  ))}
                </ul>
                {project.hasDetail && (
                  <div className="pt-6">
                    <button 
                      onClick={onSelectProject}
                      className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-1"
                    >
                      [ 作品详情 ]
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campus Section */}
      <section id="campus-section">
        <h2 className="text-[11px] uppercase tracking-[0.4em] text-gray-400 font-bold mb-16">Campus Sector</h2>
        
        <div className="space-y-48">
          {COMPETITIONS.filter(c => c.category === 'campus').map((project) => (
            <div key={project.id} className="stagger-card opacity-0 translate-y-16 transition-all duration-1000 ease-out grid grid-cols-1 md:grid-cols-[30%_1fr] gap-12 md:gap-16">
              <div>
                <h3 className="text-3xl font-bold text-black leading-tight mb-2">{project.award}</h3>
                <p className="text-gray-400 font-medium tracking-widest">{project.year}</p>
              </div>
              <div className="space-y-6">
                <h4 className="text-xl md:text-2xl font-semibold text-gray-900">{project.projectName}</h4>
                <p className="text-gray-600 leading-relaxed text-lg">{renderText(project.description)}</p>
                <ul className="space-y-4 pt-4 border-t border-gray-100">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} className="text-gray-600 flex gap-4 leading-relaxed">
                      <span className="text-gray-300">-</span>
                      <p>{renderText(resp)}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StrategicCompetition;
