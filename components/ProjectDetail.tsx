
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
    <div className="max-w-4xl mx-auto py-8 space-y-20 relative">
      {/* Back Button */}
      <div className="absolute top-0 left-0 z-20">
        <button 
          onClick={onBack}
          className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-black transition-colors"
        >
          [ ← BACK ]
        </button>
      </div>

      {/* Header */}
      <div className="border-b border-gray-100 pb-8 pt-8">
        <div>
          <h1 className="text-3xl font-bold text-black">L'Oréal BrandStorm 2025</h1>
          <p className="text-gray-400 uppercase tracking-widest text-[11px] font-bold mt-2">National Top 50 Project Presentation</p>
        </div>
      </div>

      {/* Main Presentation Image */}
      <section className="space-y-6">
        <h2 className="text-[11px] uppercase tracking-[0.3em] text-gray-300 font-bold">Key Visual</h2>
        <div className="w-full bg-white rounded-2xl shadow-xl shadow-gray-200/50 overflow-hidden">
          <img 
            src="https://i.postimg.cc/SKTRB6fG/BRANDSTORM-by-Unity-Stubble.jpg" 
            alt="Brandstorm Project Presentation" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Video Navigation Image Section */}
      <section className="space-y-6 pb-20">
        <div className="flex justify-between items-baseline">
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-gray-300 font-bold">Project Video</h2>
          <a 
            href={watchUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[9px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
          >
            Watch on YouTube ↗
          </a>
        </div>
        
        <a 
          href={watchUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block relative aspect-video w-full bg-white rounded-2xl shadow-xl shadow-gray-200/50 overflow-hidden"
        >
          <img 
            src={videoCoverUrl} 
            alt="Watch Video on YouTube" 
            className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
          />
          {/* Subtle Play Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/5 transition-colors duration-500">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-500 group-hover:scale-110">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
            </div>
          </div>
          {/* Mobile indicator */}
          <div className="absolute bottom-4 left-4 md:hidden">
            <span className="bg-black/60 backdrop-blur-md text-white text-[9px] uppercase tracking-widest px-3 py-1 rounded-full">
              Click to Play
            </span>
          </div>
        </a>
      </section>
    </div>
  );
};

export default ProjectDetail;
