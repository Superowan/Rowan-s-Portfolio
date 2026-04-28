
import React from 'react';
import { WorkItem } from '../types';
import { Briefcase, Trophy, Sparkles, Palette, BarChart3 } from 'lucide-react';

const WORK_ITEMS: WorkItem[] = [
  { id: 1, title: 'Professional Experience', icon: Briefcase, bgColor: '#FFFFFF' },
  { id: 2, title: 'Strategic Competition', icon: Trophy, bgColor: '#FFFFFF' },
  { id: 3, title: 'Base Solution', icon: 'https://i.postimg.cc/76jWQRGr/20260126-175928.png', bgColor: '#FFFFFF' },
  { id: 4, title: 'AI Exploration', icon: Sparkles, bgColor: '#FFFFFF' },
  { id: 5, title: 'Visual Creative', icon: Palette, bgColor: '#FFFFFF' },
  { id: 6, title: 'Insights & Media', icon: BarChart3, bgColor: '#FFFFFF' },
];

interface WorksProps {
  onSelect?: (id: number) => void;
}

const Works: React.FC<WorksProps> = ({ onSelect }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 md:gap-y-16 md:gap-x-12 max-w-4xl mx-auto px-4">
      {WORK_ITEMS.map((item) => {
        const isImageUrl = typeof item.icon === 'string' && item.icon.startsWith('http');
        const IconComponent = !isImageUrl ? item.icon as React.ElementType : null;
        
        return (
          <div
            key={item.id}
            onClick={() => (item.id >= 1 && item.id <= 6) && onSelect?.(item.id)}
            className="group flex flex-col items-center cursor-pointer"
          >
            {/* Transparent container for the icon silhouette */}
            <div 
              className="relative w-full aspect-square flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              {isImageUrl ? (
                <img 
                  src={item.icon as string} 
                  alt={item.title}
                  className="w-14 h-14 md:w-20 md:h-20 object-contain transform transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
                />
              ) : (
                IconComponent && <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-black transform transition-all duration-500 group-hover:scale-110 opacity-40 group-hover:opacity-100" strokeWidth={1} />
              )}
            </div>
            
            {/* Updated label style */}
            <p className="mt-2 text-[10px] md:text-[11px] font-semibold text-gray-400 uppercase tracking-[0.3em] text-center transition-all duration-300 group-hover:text-black group-hover:translate-y-[-4px]">
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Works;
