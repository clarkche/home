import React from 'react';
import { ArrowRight, Terminal, Code2, Database, Cloud, Layout, Cpu, ScrollText } from 'lucide-react';
import { ViewState } from '../types';
import DecryptedText from './DecryptedText';
import SpotlightCard from './SpotlightCard';
import TiltedCard from './TiltedCard';

interface HeroProps {
    onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Viewport */}
      <div className="min-h-screen flex flex-col justify-center items-center px-4 text-center relative pt-24 pb-12">
        
        {/* Profile/Avatar Graphic - Rectangular Terminal Window */}
        <TiltedCard className="mb-10 z-10" scale={1.05} rotationFactor={15}>
            <div className="w-72 aspect-[4/3] glass-dark rounded-xl shadow-2xl relative overflow-hidden flex flex-col group border border-slate-600/50">
                
                {/* Terminal Header */}
                <div className="h-8 bg-slate-900/50 border-b border-white/5 flex items-center px-3 gap-2 backdrop-blur-md">
                    <div className="w-3 h-3 rounded-full bg-red-400/80 shadow-[0_0_8px_rgba(248,113,113,0.5)]"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400/80 shadow-[0_0_8px_rgba(251,191,36,0.5)]"></div>
                    <div className="w-3 h-3 rounded-full bg-nature-300/80 shadow-[0_0_8px_rgba(125,157,137,0.5)]"></div>
                    <div className="ml-auto text-[10px] text-nature-200 font-mono tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
                        user@aether-net
                    </div>
                </div>

                {/* Terminal Content */}
                <div className="flex-1 p-6 relative flex flex-col items-center justify-center bg-slate-900/80">
                    {/* Grid Background inside terminal */}
                    <div className="absolute inset-0 opacity-10" 
                        style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '12px 12px'}}>
                    </div>
                    
                    <div className="relative z-10 p-5 rounded-2xl mb-4 bg-gradient-to-br from-slate-800 to-nature-400 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                         <Terminal size={48} className="text-nature-100 drop-shadow-[0_0_15px_rgba(184,198,185,0.8)]" />
                    </div>
                    
                    <div className="font-mono text-sm text-nature-100 z-10 flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full border border-white/5">
                        <span className="text-nature-300">➜</span>
                        <span className="text-nature-200">~</span>
                        <span className="animate-pulse w-2 h-4 bg-nature-200 block ml-1 shadow-[0_0_5px_rgba(184,198,185,0.8)]"></span>
                    </div>

                    {/* Scanline overlay */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=')] opacity-20 pointer-events-none"></div>
                    
                    {/* Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </TiltedCard>

        <div className="space-y-6 max-w-4xl mx-auto z-10 relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-nature-200/50 mb-2 animate-fade-in-up shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nature-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-nature-300"></span>
              </span>
              <h2 className="text-nature-400 font-mono text-xs tracking-widest uppercase font-bold">
                <DecryptedText text="System Online • Level 25 Engineer" revealSpeed={80} />
              </h2>
          </div>

          <h1 className="text-5xl md:text-8xl font-fantasy font-bold text-nature-400 mb-4 leading-[0.9] tracking-tight animate-fade-in-up delay-100 drop-shadow-sm">
            <DecryptedText text="Weaving Logic into" className="block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-nature-400 via-nature-300 to-nature-200 drop-shadow-sm">
               <DecryptedText text="Digital Reality" revealSpeed={60} speed={40} />
            </span>
          </h1>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-white/40 blur-xl rounded-full -z-10"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-sans leading-relaxed animate-fade-in-up delay-200 font-medium">
                I am Clark Chen.
                <br/>
                I construct scalable systems and elegant interfaces. 
                <br/>
                Welcome to my digital sanctum, where code meets creativity.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-8 animate-fade-in-up delay-300">
            <button 
              onClick={() => onNavigate(ViewState.PROJECTS)}
              className="group relative px-8 py-3 bg-white/80 backdrop-blur-sm overflow-hidden rounded-xl border border-nature-300/50 text-nature-400 font-mono uppercase tracking-widest hover:text-white transition-all shadow-glass hover:shadow-glow hover:-translate-y-1"
            >
              <div className="absolute inset-0 w-0 bg-warm-accent transition-all duration-[250ms] ease-out group-hover:w-full opacity-100 z-0" />
              <span className="relative flex items-center gap-2 z-10 font-bold">
                <DecryptedText text="View Artifacts" animateOnHover speed={20} /> <ArrowRight size={18} />
              </span>
            </button>
            
            <button 
              onClick={() => onNavigate(ViewState.BLOG)}
              className="group relative px-8 py-3 glass overflow-hidden rounded-xl border-nature-200/50 text-nature-400 font-mono uppercase tracking-widest hover:bg-nature-100/50 transition-all shadow-sm hover:shadow-glass hover:-translate-y-1"
            >
               <span className="relative flex items-center gap-2 font-bold">
                <DecryptedText text="Read Grimoire" animateOnHover speed={20} /> <ScrollText size={18} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Sections with Glass Containers */}
      
      {/* Skills Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
             {/* Decorative blob inside card */}
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-nature-200/20 rounded-full blur-3xl pointer-events-none"></div>

             <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl font-fantasy font-bold text-nature-400 mb-4">The Toolkit</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-transparent via-nature-300 to-transparent mx-auto rounded-full opacity-50" />
                <p className="mt-4 text-slate-500 font-mono">Mastery over the following arcanum.</p>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                <SkillCard icon={Code2} title="Frontend" skills={['React', 'TypeScript', 'Tailwind', 'Next.js']} />
                <SkillCard icon={Database} title="Backend" skills={['Python(FastAPI)', 'PostgreSQL', 'GraphQL', 'Redis']} />
                <SkillCard icon={Cloud} title="Cloud" skills={['AWS', 'Docker', 'Kubernetes', 'CI/CD']} />
                <SkillCard icon={Layout} title="Design" skills={['Figma', 'UI/UX', 'Accessibility', 'Motion']} />
             </div>
          </div>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                 {/* Left Column - System Core Card */}
                 <div className="lg:col-span-1 h-full">
                    <TiltedCard className="h-full min-h-[400px]" rotationFactor={8}>
                        <div className="glass-card h-full w-full rounded-3xl flex flex-col items-center justify-center relative overflow-hidden group p-8">
                             <div className="absolute inset-0 bg-gradient-to-br from-nature-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                             
                             {/* Decorative grid background */}
                             <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                                style={{backgroundImage: `radial-gradient(circle at center, #7D9D89 1px, transparent 1px)`, backgroundSize: '24px 24px'}}>
                             </div>

                             <Cpu size={100} strokeWidth={1} className="text-nature-300 drop-shadow-md relative z-10 group-hover:scale-110 transition-transform duration-500 mb-8" />
                             
                             <div className="relative z-10 text-center space-y-2">
                                <h3 className="font-fantasy font-bold text-2xl text-slate-700">System Core</h3>
                                <div className="font-mono text-[10px] tracking-widest text-nature-400 bg-nature-100/50 px-3 py-1 rounded-full border border-nature-200/50 inline-block">
                                  ONLINE • STABLE
                                </div>
                             </div>

                             <div className="absolute bottom-6 left-0 right-0 text-center font-mono text-[9px] text-nature-300/60 tracking-[0.2em]">
                                 ID: CL-ARK-25
                             </div>
                        </div>
                    </TiltedCard>
                 </div>
                 
                 {/* Right Column - Text & Stats */}
                 <div className="lg:col-span-2 flex flex-col gap-6 h-full">
                    <div className="glass-card p-10 rounded-3xl relative flex-grow">
                        <h2 className="text-4xl font-fantasy font-bold text-nature-400 mb-6">Architecture & Philosophy</h2>
                        <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                            <p>
                                I believe that code is the closest thing to modern magic. We speak words of power into a terminal, and reality rearranges itself.
                            </p>
                            <p>
                                My approach blends rigorous engineering principles with intuitive user experience design. I don't just build software; I craft digital environments that feel responsive, alive, and effortless to inhabit.
                            </p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6 h-auto">
                        <SpotlightCard className="glass-card p-8 flex flex-col items-center justify-center rounded-3xl h-full">
                            <span className="block text-5xl font-bold text-nature-400 font-fantasy drop-shadow-sm mb-2">5+</span>
                            <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">Years Exp</span>
                        </SpotlightCard>
                         <SpotlightCard className="glass-card p-8 flex flex-col items-center justify-center rounded-3xl h-full">
                            <span className="block text-5xl font-bold text-nature-400 font-fantasy drop-shadow-sm mb-2">20+</span>
                            <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">Projects</span>
                        </SpotlightCard>
                    </div>
                 </div>
             </div>
        </div>
      </section>

    </div>
  );
};

interface SkillCardProps {
    icon: React.ComponentType<any>;
    title: string;
    skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skills }) => (
    <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-b from-white to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></div>
        <SpotlightCard className="glass-card p-6 h-full transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-white to-nature-100 rounded-xl flex items-center justify-center mb-4 shadow-inner-light text-nature-400 transition-transform group-hover:scale-110 border border-white">
                <Icon size={24} />
            </div>
            <h3 className="font-fantasy font-bold text-xl text-nature-400 mb-3">{title}</h3>
            <ul className="space-y-2">
                {skills.map(s => (
                    <li key={s} className="text-slate-600 font-mono text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-nature-300/60" />
                        {s}
                    </li>
                ))}
            </ul>
        </SpotlightCard>
    </div>
);

export default Hero;