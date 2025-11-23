import React from 'react';
import { BlogPost } from '../types';
import { Clock, Calendar, ChevronRight } from 'lucide-react';
import TiltedCard from './TiltedCard';

interface BlogListProps {
  posts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
}

const BlogList: React.FC<BlogListProps> = ({ posts, onSelectPost }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 animate-in fade-in duration-500 pt-32">
      <div className="mb-16 text-center">
        <span className="px-3 py-1 rounded-full glass border-nature-200 text-xs font-mono text-nature-400 uppercase tracking-widest mb-4 inline-block">Knowledge Base</span>
        <h2 className="text-5xl font-fantasy font-bold text-slate-800 mb-4 drop-shadow-sm">The Grimoire</h2>
        <p className="text-slate-500 font-mono max-w-xl mx-auto">Recorded knowledge and arcane discoveries from the depths of the codebase.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} onClick={() => onSelectPost(post)} className="cursor-pointer group perspective-1000">
             <TiltedCard 
                className="h-full"
                scale={1.03}
                rotationFactor={8}
            >
                <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-glass-hover">
                    <div className="h-52 overflow-hidden relative shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10" />
                        <div className="absolute top-4 right-4 z-20">
                            <div className="glass px-2 py-1 rounded-md text-xs font-bold text-slate-800 backdrop-blur-md border-white/50 shadow-sm">
                                {post.readTime}
                            </div>
                        </div>
                        <img 
                            src={post.imageUrl} 
                            alt={post.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        />
                        <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                            {post.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="px-2 py-1 text-xs font-mono bg-white/90 text-slate-800 border-none rounded-md shadow-sm font-bold backdrop-blur-md">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="p-6 flex flex-col grow relative bg-white/40">
                        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-nature-400 transition-colors line-clamp-2 font-fantasy tracking-wide">
                            {post.title}
                        </h3>
                        <p className="text-slate-600 text-sm mb-6 line-clamp-3 grow leading-relaxed">
                            {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-slate-500 font-mono border-t border-slate-200/60 pt-4 mt-auto">
                            <div className="flex items-center gap-1">
                                <Calendar size={12} /> {post.date}
                            </div>
                            <div className="flex items-center gap-1 font-bold text-nature-400 group-hover:translate-x-1 transition-transform">
                                READ_ENTRY <ChevronRight size={14} />
                            </div>
                        </div>
                    </div>
                </div>
            </TiltedCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;