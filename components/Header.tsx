
import React from 'react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  return (
    <header className="flex flex-col items-center pt-10 pb-12 md:pt-16 md:pb-20">
      {/* Logo - Rowan Image (Transparent background & Larger Size) */}
      <div 
        onClick={() => onViewChange('works')}
        className="w-40 h-40 md:w-56 md:h-56 mb-10 overflow-hidden rounded-full cursor-pointer transition-transform duration-500 hover:scale-105 active:scale-95"
      >
        <img 
          src="https://i.ibb.co/GfYqWgcV/Chat-GPT-Image-Jan-22-2026-04-44-26-PM.png" 
          alt="Rowan Logo" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-10">
        <button
          onClick={() => onViewChange('works')}
          className={`relative text-[15px] font-medium tracking-wide transition-all duration-300 py-1 ${
            currentView === 'works' 
              ? 'text-black' 
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          Works
          {currentView === 'works' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform transition-transform duration-300 origin-left scale-x-100"></span>
          )}
        </button>
        <button
          onClick={() => onViewChange('about')}
          className={`relative text-[15px] font-medium tracking-wide transition-all duration-300 py-1 ${
            currentView === 'about' 
              ? 'text-black' 
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          About
          {currentView === 'about' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform transition-transform duration-300 origin-left scale-x-100"></span>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
