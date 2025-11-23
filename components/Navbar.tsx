import React from 'react';
import { Home, BookOpen, Cpu, BookImage } from 'lucide-react';
import { ViewState, NavItem } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const navItems: NavItem[] = [
  { label: 'Sanctum', view: ViewState.HOME, icon: Home },
  { label: 'Artifacts', view: ViewState.PROJECTS, icon: Cpu },
  { label: 'Chronicles', view: ViewState.GALLERY, icon: BookImage},
  { label: 'Grimoire', view: ViewState.BLOG, icon: BookOpen },
];

const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView }) => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto glass rounded-full px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 lg:px-8 flex items-center justify-between shadow-glass hover:shadow-glass-hover transition-all duration-500 w-full max-w-md md:max-w-3xl lg:max-w-6xl backdrop-blur-xl bg-white/80 border border-white/60">

        {/* Brand / Logo Area */}
        <div
            className="group flex items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer flex-shrink-0"
            onClick={() => onChangeView(ViewState.HOME)}
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-nature-400 to-nature-300 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300 border border-white/20">
             <span className="text-white font-fantasy font-bold text-lg sm:text-xl leading-none pt-0.5">C</span>
             {/* Shine effect */}
             <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="hidden sm:flex flex-col justify-center">
              <span className="font-fantasy font-bold text-base md:text-lg tracking-widest text-slate-800 group-hover:text-nature-400 transition-colors leading-none mb-1">CLARK CHEN</span>
              <span className="text-[9px] font-mono text-slate-400 tracking-[0.2em] group-hover:tracking-[0.35em] transition-all duration-500 leading-none uppercase">Technomancer</span>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.view || (currentView === ViewState.POST_DETAIL && item.view === ViewState.BLOG);
            
            return (
              <button
                key={item.label}
                onClick={() => onChangeView(item.view)}
                className={`
                  relative group overflow-hidden flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 border
                  ${isActive
                    ? 'bg-nature-400 text-white border-nature-400 shadow-lg shadow-nature-300/30 scale-105'
                    : 'bg-transparent text-slate-500 border-transparent hover:border-nature-200/40 hover:text-nature-400 hover:shadow-sm'
                  }
                `}
              >
                {/* Hover Background Effect for non-active items */}
                {!isActive && (
                   <div className="absolute inset-0 bg-gradient-to-r from-nature-100/40 via-white/60 to-nature-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                {/* Active Inner Glow */}
                {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                )}
                
                <Icon size={16} className={`relative z-10 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110 group-hover:-rotate-12'}`} />
                
                <span className={`
                    relative z-10 hidden md:inline font-mono text-xs font-bold uppercase transition-all duration-300
                    ${isActive ? 'tracking-widest' : 'tracking-wider group-hover:tracking-widest'}
                `}>
                  {item.label}
                </span>
                
                {/* Active Indicator Dot */}
                {isActive && <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white/80 rounded-full shadow-[0_0_6px_rgba(255,255,255,0.9)]" />}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;