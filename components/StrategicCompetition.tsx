
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
    description: '依托“护肤 + AI + 云计算”模式，构建覆盖用户全生命周期的护肤服务体系。通过实时皮肤数据监测提供个性化方案，整合社区运营、游戏化激励及数字人陪伴功能，解决男性护肤知识匮乏、习惯难坚持等痛点。',
    responsibilities: [
      '队长职责：主导核心创意方向，明确 **“刺激-陪伴-成长”** 的用户运营逻辑，制定 GTM 和营销策略。',
      '产品设计：规划 AI 智能卡片、数字人陪伴、游戏化激励的功能逻辑与交互流程。',
      '商业分析：负责 market 研究、**盈利分析**与可持续发展战略，设计高效转化路径。'
    ],
    hasDetail: true
  },
  {
    id: 'internet-plus',
    category: 'campus',
    award: '省级一等奖',
    year: '2023',
    projectName: '“互联网+”大学生创新创业大赛',
    description: '创立“同和一舍”国韵客舍民宿项目，以“赓续国学传承”为品牌理念，在贵州打造一体化旅游服务体系，带动当地文旅经济发展。',
    responsibilities: [
      '队长职责：搭建民宿 **PERC 商业模式**，主导品牌营销与新媒体推广。',
      '成果：运营多平台账号，累计获得 **8.5万+ 浏览量** 和 **500+ 收藏**，助力民宿与 **10 家单位** 达成合作。'
    ]
  },
  {
    id: 'zhengda-cup',
    category: 'campus',
    award: '国家级奖项',
    year: '2022',
    projectName: '“正大杯”全国大学生市场调研大赛',
    description: '针对贵州蜡染文创产品的消费者购买偏好展开研究，探索“互联网+”模式下传统文创产品的年轻化销售路径。',
    responsibilities: [
      '调研分析：运用 **AISAS 模型** 分析消费者行为特征，结合 **Logistic 模型** 确定 **18-25 岁** 为主要购买人群。',
      '产品落地：负责蜡染玩偶系列的产品设计与数字营销推广，输出 SWOT 及 PESTEL 分析。'
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
            entry.target.classList.remove('opacity-0', 'translate-y-12');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current?.querySelectorAll('.stagger-card');
    cards?.forEach((card, index) => {
      (card as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = navigator.userAgent.match(/iphone|ipad|android/i) ? 60 : 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

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
        return <strong key={i} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto px-4 md:px-8 pb-32 relative">
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
          Strategic Competition
        </h1>

        {/* Category Navigation (Editorial Style) */}
        <nav className="flex justify-start space-x-12 mb-20 border-b border-black pb-8 overflow-x-auto">
          <button 
            onClick={() => scrollToCategory('fmcg-section')}
            className="text-lg md:text-xl font-medium tracking-wide text-gray-400 hover:text-black transition-colors whitespace-nowrap"
          >
            FMCG Sector
          </button>
          <button 
            onClick={() => scrollToCategory('campus-section')}
            className="text-lg md:text-xl font-medium tracking-wide text-gray-400 hover:text-black transition-colors whitespace-nowrap"
          >
            Campus Sector
          </button>
        </nav>

        {/* FMCG Section */}
        <section id="fmcg-section" className="mb-32">
          <div className="space-y-24">
            {COMPETITIONS.filter(c => c.category === 'fmcg').map((project) => (
              <div key={project.id} className="stagger-card opacity-0 translate-y-12 transition-all duration-1000 ease-out flex flex-col md:flex-row gap-8 md:gap-16">
                
                {/* Left Column: Meta Info */}
                <div className="w-full md:w-1/3 shrink-0">
                  <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-tight mb-3">{project.award}</h3>
                  <div className="flex items-center gap-4 text-[11px] font-mono text-gray-400 tracking-widest uppercase">
                    <span>{project.year}</span>
                    <span className="w-8 h-px bg-gray-200"></span>
                    <span>Rank</span>
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="w-full md:w-2/3">
                  <h4 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">{project.projectName}</h4>
                  
                  <div className="space-y-8 text-[15px] md:text-[16px] text-gray-600 leading-relaxed font-light">
                    <p>{renderText(project.description)}</p>
                    
                    <div className="space-y-6 pt-4">
                      {project.responsibilities.map((resp, i) => {
                        const parts = resp.split('：');
                        const hasLabel = parts.length > 1;

                        return (
                          <div key={i} className="relative pl-6">
                            <div className="absolute left-0 top-[0.6em] w-[4px] h-[4px] border border-gray-400 rounded-sm shrink-0"></div>
                            <p>
                              {hasLabel ? (
                                <>
                                  <span className="font-medium text-gray-900">{parts[0]}：</span>
                                  {renderText(parts.slice(1).join('：'))}
                                </>
                              ) : (
                                renderText(resp)
                              )}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {project.hasDetail && (
                    <div className="mt-12">
                      <button 
                        onClick={onSelectProject}
                        className="group flex items-center gap-3 text-[11px] uppercase tracking-widest font-bold text-gray-900 transition-colors hover:text-gray-500"
                      >
                        <span className="border-b border-black pb-0.5 group-hover:border-transparent transition-colors">View Deep Dive</span>
                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
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
          <div className="w-full h-px bg-gray-200 mb-20"></div>
          
          <div className="space-y-32">
            {COMPETITIONS.filter(c => c.category === 'campus').map((project) => (
              <div key={project.id} className="stagger-card opacity-0 translate-y-12 transition-all duration-1000 ease-out flex flex-col md:flex-row gap-8 md:gap-16">
                
                {/* Left Column: Meta Info */}
                <div className="w-full md:w-1/3 shrink-0">
                  <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-tight mb-3">{project.award}</h3>
                  <div className="flex items-center gap-4 text-[11px] font-mono text-gray-400 tracking-widest uppercase">
                    <span>{project.year}</span>
                    <span className="w-8 h-px bg-gray-200"></span>
                    <span>Rank</span>
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="w-full md:w-2/3">
                  <h4 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">{project.projectName}</h4>
                  
                  <div className="space-y-8 text-[15px] md:text-[16px] text-gray-600 leading-relaxed font-light">
                    <p>{renderText(project.description)}</p>
                    
                    <div className="space-y-6 pt-4">
                      {project.responsibilities.map((resp, i) => {
                        const parts = resp.split('：');
                        const hasLabel = parts.length > 1;

                        return (
                          <div key={i} className="relative pl-6">
                            <div className="absolute left-0 top-[0.6em] w-[4px] h-[4px] border border-gray-400 rounded-sm shrink-0"></div>
                            <p>
                              {hasLabel ? (
                                <>
                                  <span className="font-medium text-gray-900">{parts[0]}：</span>
                                  {renderText(parts.slice(1).join('：'))}
                                </>
                              ) : (
                                renderText(resp)
                              )}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StrategicCompetition;
