
import React from 'react';

interface ProjectDetailProps {
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ onBack }) => {
  // Video link for external navigation
  const videoId = "-wjxc7CnZPQ";
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const videoCoverUrl = "https://i.postimg.cc/SxjxW2hh/Screen-Shot-2026-01-26-175635-269.png";

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
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6 text-center md:text-left">
          L'Oréal BrandStorm 2025
        </h1>
        <p className="text-sm font-mono tracking-widest uppercase text-gray-400 mb-20 text-center md:text-left">
          National Top 50 Project Presentation
        </p>

        {/* Main Presentation Image */}
        <section className="space-y-6 mb-32">
          <div className="w-full bg-gray-100 overflow-hidden transform transition-all duration-[2s] hover:scale-[1.01] ease-out">
            <img 
              src="https://i.postimg.cc/SKTRB6fG/BRANDSTORM-by-Unity-Stubble.jpg" 
              alt="Brandstorm Project Presentation" 
              className="w-full h-auto object-cover block"
            />
          </div>
        </section>

        {/* Video Navigation Image Section */}
        <section className="border-t border-black pt-16">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 gap-6">
            <h2 className="text-2xl font-medium text-gray-900 tracking-tight">Project Video Pitch</h2>
            <a 
              href={watchUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-[11px] uppercase tracking-widest font-bold text-gray-900 transition-colors hover:text-gray-500 w-fit"
            >
              <span className="border-b border-black pb-0.5 group-hover:border-transparent transition-colors">Watch on YouTube</span>
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          
          <a 
            href={watchUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block relative aspect-video w-full bg-gray-100 overflow-hidden"
          >
            <img 
              src={videoCoverUrl} 
              alt="Watch Video on YouTube" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-[1.02] ease-out"
            />
            {/* Subtle Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors duration-700">
              <div className="w-20 h-20 md:w-24 md:h-24 border border-white/50 rounded-full flex items-center justify-center transform transition-transform duration-700 group-hover:scale-110 backdrop-blur-sm">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </a>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
