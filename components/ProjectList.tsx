import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github, Layers } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import TiltedCard from './TiltedCard';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 animate-in fade-in duration-500 pt-32">
       <div className="mb-20 text-center">
        <span className="px-3 py-1 rounded-full glass border-nature-200 text-xs font-mono text-nature-400 uppercase tracking-widest mb-4 inline-block">Portfolio</span>
        <h2 className="text-5xl font-fantasy font-bold text-slate-800 mb-4 drop-shadow-sm">Artifacts & Constructs</h2>
        <p className="text-slate-500 font-mono">Systems deployed to the digital ether.</p>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2 group relative z-10 perspective-1000">
               <TiltedCard scale={1.02} rotationFactor={5} className="rounded-2xl shadow-2xl shadow-nature-300/20">
                    <div className="absolute -inset-1 bg-gradient-to-r from-nature-300 to-nature-200 opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative rounded-2xl overflow-hidden border border-white/50 bg-white aspect-video glass-card p-1">
                        <div className="overflow-hidden rounded-xl w-full h-full relative">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                             {/* Overlay Grid */}
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxwYXRoIGQ9Ik0xIDF2MmgyaDJ2MmgydjJIMXYySDJWMiImaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                    </div>
               </TiltedCard>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 relative">
                 {/* Decorative background number */}
                 <div className="absolute -top-10 -left-10 text-9xl font-fantasy font-bold text-slate-200/50 pointer-events-none select-none -z-10">
                     0{index + 1}
                 </div>

                <SpotlightCard className="p-8 h-full glass-card border-white/80 relative z-10">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-nature-400 font-mono text-xs font-bold tracking-widest bg-nature-100/50 w-fit px-2 py-1 rounded border border-nature-200/50">
                            <Layers size={14} />
                            <span>PROJECT_ID: {project.id.toUpperCase()}</span>
                        </div>
                        
                        <h3 className="text-4xl font-fantasy font-bold text-slate-800 leading-tight">{project.title}</h3>
                        
                        <p className="text-slate-600 leading-relaxed text-lg border-l-2 border-warm-accent/30 pl-4">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 py-2">
                            {project.techStack.map(tech => (
                                <span key={tech} className="px-3 py-1 bg-white/60 text-slate-600 text-sm font-mono border border-slate-200 rounded-md shadow-sm hover:bg-white hover:text-nature-400 transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a href={project.github} className="flex items-center gap-2 px-5 py-2.5 bg-slate-100/80 hover:bg-white text-slate-800 rounded-xl transition-all border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                                <Github size={18} />
                                <span className="font-mono text-sm font-semibold">Source</span>
                            </a>
                            <a href={project.link} className="flex items-center gap-2 px-5 py-2.5 bg-nature-400 text-white rounded-xl transition-all hover:bg-nature-400/90 shadow-lg shadow-nature-400/20 hover:shadow-nature-400/40 hover:-translate-y-0.5 group">
                                <ExternalLink size={18} />
                                <span className="font-mono text-sm font-semibold">Live Demo</span>
                            </a>
                        </div>
                    </div>
              </SpotlightCard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;