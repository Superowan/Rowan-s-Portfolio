
import React, { useState } from 'react';

const CONTACTS = [
  { label: 'WeChat', value: 'Leeway512' },
  { label: 'LinkedIn', value: 'https://www.linkedin.com/in/rowan-li-508652351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { label: 'Bilibili', value: 'https://b23.tv/JNmgzeX' },
  { label: 'Email', value: '18585810215@163.com' },
];

const ConnectItem: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCopied(false);
      }}
    >
      <button 
        onClick={handleCopy}
        className={`text-sm font-medium transition-all duration-300 border-b border-transparent pb-0.5 whitespace-nowrap ${
          isHovered ? 'text-black border-black' : 'text-gray-500 hover:text-gray-800'
        }`}
      >
        {label}
      </button>
      
      {/* Popover / Reveal Area */}
      <div className={`absolute top-full left-0 mt-2 transition-all duration-300 pointer-events-none z-20 ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      }`}>
        <div className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 px-4 py-2 rounded-lg flex items-center gap-3">
          <span className="text-[11px] text-gray-800 font-mono max-w-[200px] truncate">
            {value}
          </span>
          <span className={`text-[9px] uppercase tracking-widest font-bold transition-colors ${
            copied ? 'text-green-500' : 'text-gray-300'
          }`}>
            {copied ? 'Copied' : 'Click to Copy'}
          </span>
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-16 py-8">
      <section>
        <h1 className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight text-gray-900 text-center md:text-left">
          Hi, I'm Rowan (李若兰).
        </h1>

        {/* Hero Landscape Photo */}
        <div className="w-full mb-16 overflow-hidden rounded-2xl shadow-sm">
          <img 
            src="https://i.ibb.co/RGx11LDr/20260122170245-133-62.jpg" 
            alt="Rowan Landscape" 
            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
        
        <div className="space-y-12 text-gray-700 text-[17px] leading-relaxed font-normal">
          <div>
            <h2 className="text-[11px] uppercase tracking-[0.25em] text-gray-400 font-semibold mb-3">Bio</h2>
            <p>03年湖北襄阳人，INTJ-A，目前 base 深圳 。</p>
          </div>

          <div>
            <h2 className="text-[11px] uppercase tracking-[0.25em] text-gray-400 font-semibold mb-3">Education</h2>
            <p className="mb-1">2025-2027 香港中文大学 — 管理学硕士</p>
            <p>2021-2025 贵州大学 — 旅游管理本科</p>
          </div>

          <div>
            <h2 className="text-[11px] uppercase tracking-[0.25em] text-gray-400 font-semibold mb-3">Philosophy</h2>
            <p className="mb-6 font-medium text-gray-900">关键词：目标感、执行力、保持更新 。</p>
            <p className="text-gray-600">
              热爱品牌、营销和 GTM 出海 领域，希望我的创作能为世界带来意义和感动。
            </p>
          </div>
        </div>
      </section>

      <section className="pt-12 border-t border-gray-200">
        <h2 className="text-[11px] uppercase tracking-[0.25em] text-gray-400 font-semibold mb-6">Connect</h2>
        <div className="flex flex-wrap gap-x-10 gap-y-6">
          {CONTACTS.map((contact) => (
            <ConnectItem key={contact.label} label={contact.label} value={contact.value} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
