
import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';

const WORK_EXPERIENCES = {
  zh: [
    {
      id: 'insta360',
      company: 'Insta360',
      role: '海外数字营销实习生',
      range: '2026.03 – Present',
      details: [
        '海外整合营销：协助制定3款产品全球上市和NAB 2026的数字营销策略，跨部门统筹SEO、EDM、社媒内容等全链路传播方案落地。通过优化SEO、EDM触达及广告投放，实现单Campaign官网流量提升41%，预售转化率达目标120%。',
        '市场洞察与社媒运营：统筹FB、YT、TT、IG等官方账号，制定差异化内容策略。独立撰写及优化符合海外受众偏好的创意文案，确保品牌信息的精准传递；管理100+位创作者资源池，通过共创提高品牌在目标圈层的影响力。',
        'UGC生态构建：负责Insta360 Vision Awards的后台管理与迭代，整合多渠道数据，以ROI为导向复盘优化策略；深度调研6家竞品案例，设计大赛方案。搭建Community“曝光—参与—转化”的用户增长闭环，提高营销预算效率17%。'
      ],
      image: 'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24755254/BFARSACE_GO3_2.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=1440'
    },
    {
      id: 'bytedance',
      company: 'ByteDance (Feishu)',
      role: '品牌营销实习生',
      range: '2024.11 – 2025.07',
      details: [
        '大型市场 Campaign 操盘：全流程策划执行亿级商机项目【2025 飞书发布会】，统筹小鹏、安克、亚朵等 20+ 参展客户，实现直播 UV 累计 250w+，年同比增长 114%。',
        '产品整合营销：落地 7 场 200人+ 行业论坛，独立策划霸王茶姬互动展区，实现现场 2040人 参与，转化率达 71%。',
        '品牌策略与转化：制定《2024 飞书年度报告》线上传播和激励策略，捕获高价值线索 2136 条，MQL 转化率 7.2%。',
        'GTM 包装：专项制作 AI 产品营销物料，推动华南区域 Logo 墙完成 “AI+场景化” 焕新。'
      ],
      image: 'https://i.postimg.cc/LsNGBYQt/IMG-4704.jpg'
    },
    {
      id: 'dji',
      company: '大疆车载 (DJI)',
      role: '人力资源实习生',
      range: '2024.02 – 2024.06',
      details: [
        '招聘全链路管理：管理 99 个实习生 HC，筛选 4000+ 份简历，成功入职 71 人。搭建实习生招聘SOP，维护人才库。',
        '校园大使项目：管理 20 所高校 200+ 人校园大使社群，通过社交平台矩阵大幅提升雇主品牌影响力。'
      ],
      image: 'https://img.caixin.com/2025-09-23/175862369258692_480_320.jpg'
    },
    {
      id: 'tangcheng',
      company: '中国唐城影视基地',
      role: '市场营销实习生',
      range: '2024.06 – 2024.08',
      details: [
        'IP 主题营销：借势《庆余年2》设计国风路线，抖音/微博话题互动播放破三千万次，带动暑期线下游客量同比增长 200%。',
        '新媒体运营：创作小红书多篇爆款攻略，单篇最高浏览量 10万+，账号1个月累计涨粉 1k+。',
        '直播支持：参与运营 5 场直播，单场在线峰值突破 2.3w+ 人，推动抖音橱窗月 GMV +27%。'
      ],
      image: 'https://i.postimg.cc/DyLDpYpx/IMG-5791.png'
    },
    {
      id: 'nio',
      company: '蔚来汽车 (NIO Inc.)',
      role: '市场活动实习生',
      range: '2023.11 – 2024.01',
      details: [
        '活动策划与执行：执行大型车展及路演，线索转化率达 19.8%，有效降低 CPL 获客成本。',
        '品牌传播：发布 12 篇品牌深度内容，UV 同比上涨 120%，策划茅台联名购车等跨界合作。'
      ],
      image: 'https://media.gzstv.com/images/2023/04/12/8ce9bc3cd6934c0a8e2317d9905978ff.png'
    }
  ],
  en: [
    {
      id: 'insta360',
      company: 'Insta360',
      role: 'Overseas Digital Marketing Intern',
      range: '2026.03 – Present',
      details: [
        'Overseas IMC: Assisted in establishing global launch strategies for 3 products and NAB 2026. Coordinated cross-departmental operations including SEO, EDM, and social media content. Improved website traffic by 41% per campaign and achieved 120% of pre-sale conversion targets via SEO, EDM and ad optimization.',
        'Market Insights & Social Media: Managed official accounts across FB, YT, TT, IG, tailoring content strategies. Independently drafted and optimized creative copy to accurately convey brand messages to overseas audiences; managed a 100+ creator pool, co-creating content to enhance brand impact.',
        'UGC Ecosystem: Managed backend operations and iterations for the Insta360 Vision Awards. Integrated multi-channel data to optimize ROI-driven strategies; researched 6 competitor cases to design the competition plan. Built a "Exposure-Participation-Conversion" closed-loop for the Community, increasing marketing budget efficiency by 17%.'
      ],
      image: 'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24755254/BFARSACE_GO3_2.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=1440'
    },
    {
      id: 'bytedance',
      company: 'ByteDance (Feishu)',
      role: 'Brand Marketing Intern',
      range: '2024.11 – 2025.07',
      details: [
        'Large-scale Campaign Management: Planned and executed the 100-million level commercial project [2025 Feishu Launch Event], coordinating 20+ exhibiting clients (Xpeng, Anker, Atour, etc.), achieving a cumulative 2.5M+ live stream UV, up 114% YoY.',
        'Product IMC: Implemented 7 industry forums (200+ attendees each) and independently planned the Chagee interactive exhibition area, realizing 2040 on-site participants with a 71% conversion rate.',
        'Brand Strategy & Conversion: Formulated online dissemination and incentive strategies for the "2024 Feishu Annual Report", capturing 2136 high-value leads with a 7.2% MQL conversion rate.',
        'GTM Packaging: Produced specialized AI product marketing materials, advancing the "AI + Scenarized" rebranding of the Logo Wall in the South China region.'
      ],
      image: 'https://i.postimg.cc/LsNGBYQt/IMG-4704.jpg'
    },
    {
      id: 'dji',
      company: 'DJI Automotive',
      role: 'HR Intern',
      range: '2024.02 – 2024.06',
      details: [
        'Full-cycle Recruitment: Managed 99 intern headcounts, screened 4000+ resumes, and successfully onboarded 71 talents. Built the intern recruitment SOP and maintained the talent pool.',
        'Campus Ambassador Project: Managed a community of 200+ campus ambassadors across 20 universities, significantly boosting employer brand influence via social media matrices.'
      ],
      image: 'https://img.caixin.com/2025-09-23/175862369258692_480_320.jpg'
    },
    {
      id: 'tangcheng',
      company: 'Tangcheng Film & TV Base',
      role: 'Marketing Intern',
      range: '2024.06 – 2024.08',
      details: [
        'IP-themed Marketing: Leveraged "Joy of Life 2" to design traditional Chinese tourism routes, achieving 30M+ interactions on Douyin/Weibo, driving a 200% YoY increase in summer offline visitors.',
        'New Media Operations: Authored multiple viral guides on Xiaohongshu with a peak view count of 100k+ per post, gaining 1k+ followers in a month.',
        'Live Streaming Support: Co-operated 5 live streams, peeking at 23k+ concurrent viewers, driving a 27% increase in Douyin showcase monthly GMV.'
      ],
      image: 'https://i.postimg.cc/DyLDpYpx/IMG-5791.png'
    },
    {
      id: 'nio',
      company: 'NIO Inc.',
      role: 'Marketing Event Intern',
      range: '2023.11 – 2024.01',
      details: [
        'Event Planning & Execution: Executed large-scale auto shows and roadshows with a lead conversion rate of 19.8%, effectively reducing CPL.',
        'Brand Dissemination: Published 12 in-depth brand articles, increasing UV by 120% YoY. Planned cross-industry collaborations such as the Kweichow Moutai co-branded car purchase event.'
      ],
      image: 'https://media.gzstv.com/images/2023/04/12/8ce9bc3cd6934c0a8e2317d9905978ff.png'
    }
  ]
};

const SKILLS = {
  zh: [
    '数字营销', '品牌整合营销', 'GTM策略', 'KOL推广', '内容营销', 
    '市场活动策划', '用户增长', '产品营销', '社群运营', '市场研究'
  ],
  en: [
    'Digital Marketing', 'IMC', 'GTM Strategy', 'KOL Promotion', 'Content Marketing', 
    'Event Planning', 'User Growth', 'Product Marketing', 'Community Ops', 'Market Research'
  ]
};

interface ProfessionalPracticeProps {
  onBack?: () => void;
}

const ProfessionalPractice: React.FC<ProfessionalPracticeProps> = ({ onBack }) => {
  const { language } = useLanguage();
  const currentExperiences = WORK_EXPERIENCES[language as keyof typeof WORK_EXPERIENCES];
  const currentSkills = SKILLS[language as keyof typeof SKILLS];

  const [activeExpId, setActiveExpId] = useState<string>(currentExperiences[0].id);

  useEffect(() => {
    // Intersection observer for sticky image switching
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveExpId(entry.target.id.replace('exp-', ''));
        }
      });
    }, {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    });

    document.querySelectorAll('.exp-text-section').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(`exp-${id}`);
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
          Professional Index
        </h1>

        {/* Index Table Section (Replaces generic graphic timeline) */}
        <div className="flex flex-col border-t border-black mb-32">
          {currentExperiences.map((exp, index) => (
            <div 
              key={`index-${exp.id}`} 
              onClick={() => scrollToSection(exp.id)}
              className={`group flex flex-col md:flex-row md:items-center py-8 md:py-10 border-b border-gray-200 cursor-pointer overflow-hidden relative ${index === 0 ? 'border-t border-gray-200 -mt-px' : ''}`}
            >
              {/* Subtle hover background block */}
              <div className="absolute inset-0 bg-[#F8F8F8] transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out -z-10"></div>
              
              <div className="w-full md:w-1/4 text-[11px] text-gray-400 font-mono mb-3 md:mb-0 uppercase tracking-widest">
                {exp.range}
              </div>
              <div className="w-full md:w-1/2 text-2xl md:text-3xl font-medium text-gray-900 tracking-tight transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4">
                {exp.company}
              </div>
              <div className="w-full md:w-1/4 text-left md:text-right text-gray-500 mt-3 md:mt-0 text-sm md:text-base font-light transition-colors duration-500 group-hover:text-black">
                {exp.role}
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Marquee / Typography Flow for Skills */}
        <div className="py-20 border-y border-transparent relative overflow-hidden mb-32 flex flex-wrap gap-x-6 gap-y-4 md:gap-x-10 text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-medium justify-center items-center">
          {currentSkills.map((skill, index) => (
            <React.Fragment key={index}>
              <span className="hover:text-gray-800 transition-colors cursor-default">{skill}</span>
              {index < currentSkills.length - 1 && <span className="text-gray-300 pointer-events-none">•</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Experience Details - Sticky High-end Layout */}
        <div className="relative flex flex-col md:flex-row items-start">
          
          {/* Left Column: Sticky Image (Desktop Only) */}
          <div className="hidden md:block sticky top-32 w-5/12 h-[65vh] overflow-hidden rounded-[2px] bg-gray-100">
            {currentExperiences.map((exp) => (
              <img
                key={'img-' + exp.id}
                src={exp.image}
                alt={exp.company}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  activeExpId === exp.id 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105 select-none pointer-events-none'
                }`}
              />
            ))}
            {/* Subtle Overlay to make text pop if needed, though separated here */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
          </div>

          {/* Right Column: Scrolling Text Data */}
          <div className="w-full md:w-6/12 md:ml-auto">
            {currentExperiences.map((exp, index) => (
              <div
                id={`exp-${exp.id}`}
                key={`detail-${exp.id}`}
                className={`exp-text-section flex flex-col justify-center min-h-[50vh] ${
                  index !== currentExperiences.length - 1 ? 'pb-32 md:pb-64' : 'pb-16'
                }`}
              >
                {/* Mobile Image (Hidden on Desktop) */}
                <div className="block md:hidden mb-10 w-full aspect-[4/3] overflow-hidden rounded-[2px] bg-gray-100">
                  <img src={exp.image} alt={exp.company} className="w-full h-full object-cover" />
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-tight">
                    {exp.company}
                  </h2>
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 font-mono text-xs uppercase tracking-widest text-gray-400">
                    <span className="text-black font-semibold">{exp.role}</span>
                    <span className="hidden sm:inline">—</span>
                    <span>{exp.range}</span>
                  </div>
                </div>

                <div className="space-y-8 text-[15px] md:text-[16px] text-gray-600 leading-relaxed font-light">
                  {exp.details.map((detail, idx) => {
                    const parts = detail.includes('：') ? detail.split('：') : detail.split(': ');
                    // Automatically highlight label words before full-width colon if they exist
                    const hasLabel = parts.length > 1;

                    return (
                      <div key={idx} className="relative pl-6">
                        <div className="absolute left-0 top-[0.6em] w-[4px] h-[4px] border border-gray-400 rounded-sm shrink-0"></div>
                        <p>
                          {hasLabel ? (
                            <>
                              <span className="font-semibold text-gray-900">{parts[0]}{detail.includes('：') ? '：' : ': '}</span>
                              {parts.slice(1).join(detail.includes('：') ? '：' : ': ')}
                            </>
                          ) : (
                            detail
                          )}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfessionalPractice;
