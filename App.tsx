
import React, { useState, useEffect } from 'react';
import { ViewState } from './types';
import Header from './components/Header';
import Works from './components/Works';
import About from './components/About';
import ProfessionalPractice from './components/ProfessionalPractice';
import StrategicCompetition from './components/StrategicCompetition';
import ProjectDetail from './components/ProjectDetail';
import BaseSolution from './components/BaseSolution';
import AiExploration from './components/AiExploration';
import VisualCreative from './components/VisualCreative';
import InsightsMedia from './components/InsightsMedia';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('works');
  const [isVisible, setIsVisible] = useState(false);

  // Simple entry animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle smooth transition between views
  const handleViewChange = (newView: ViewState) => {
    if (newView === view) return;
    setIsVisible(false);
    setTimeout(() => {
      setView(newView);
      setIsVisible(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  const handleBackToWorks = () => handleViewChange('works');

  const renderContent = () => {
    switch (view) {
      case 'practice':
        return <ProfessionalPractice onBack={handleBackToWorks} />;
      case 'competition':
        return <StrategicCompetition onBack={handleBackToWorks} onSelectProject={() => handleViewChange('project-detail')} />;
      case 'project-detail':
        return <ProjectDetail onBack={() => handleViewChange('competition')} />;
      case 'base-solution':
        return <BaseSolution onBack={handleBackToWorks} />;
      case 'ai-exploration':
        return <AiExploration onBack={handleBackToWorks} />;
      case 'visual-creative':
        return <VisualCreative onBack={handleBackToWorks} />;
      case 'insights-media':
        return <InsightsMedia onBack={handleBackToWorks} />;
      case 'about':
        return <About />;
      case 'works':
      default:
        return <Works onSelect={(id) => {
          if (id === 1) handleViewChange('practice');
          if (id === 2) handleViewChange('competition');
          if (id === 3) handleViewChange('base-solution');
          if (id === 4) handleViewChange('ai-exploration');
          if (id === 5) handleViewChange('visual-creative');
          if (id === 6) handleViewChange('insights-media');
        }} />;
    }
  };

  // Helper to determine which main tab is active
  const getActiveTab = (): ViewState => {
    if (['practice', 'competition', 'project-detail', 'base-solution', 'ai-exploration', 'visual-creative', 'insights-media', 'works'].includes(view)) {
      return 'works';
    }
    return 'about';
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-6 flex flex-col items-center selection:bg-gray-200">
      {/* Subtle Update Date indicator at the top - Made more visible */}
      <div className="w-full pt-6 flex justify-center">
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-500 font-semibold">
          Update Date: 2026.1.26
        </span>
      </div>

      <Header currentView={getActiveTab()} onViewChange={handleViewChange} />
      
      <main className={`w-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {renderContent()}
      </main>

      <footer className="mt-auto pt-32 pb-12 text-[10px] text-gray-300 font-medium tracking-[0.3em] uppercase">
        © {new Date().getFullYear()} ROWAN LI. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

export default App;
