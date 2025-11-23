import React from 'react';
import { BlogPost } from '../types';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';

interface BlogPostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, onBack }) => {
  
  const renderContent = (content: string) => {
    const sections = content.split('\n');
    return sections.map((line, index) => {
        if (line.trim().startsWith('## ')) {
            return <h3 key={index} className="text-2xl font-fantasy font-bold text-nature-400 mt-10 mb-6 border-b border-nature-200/30 pb-2">{line.replace('## ', '')}</h3>;
        }
        if (line.trim().startsWith('```')) {
             return null; 
        }
        if (line.includes('[Unit]') || line.includes('[Service]') || line.includes('ExecStart')) {
            return <code key={index} className="block bg-slate-900 p-6 rounded-xl border border-slate-800 font-mono text-sm text-nature-200 my-6 overflow-x-auto shadow-inner-light shadow-black/20">{line}</code>
        }
        if (line.includes('`')) {
            const parts = line.split('`');
            return (
                <p key={index} className="mb-4 text-slate-700 leading-relaxed text-lg">
                    {parts.map((part, i) => 
                        i % 2 === 1 
                        ? <span key={i} className="bg-nature-100/80 text-nature-500 px-1.5 py-0.5 rounded font-mono text-sm border border-nature-200/50 font-medium">{part}</span> 
                        : part
                    )}
                </p>
            )
        }
        return <p key={index} className="mb-4 text-slate-700 leading-relaxed text-lg">{line}</p>;
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 animate-in slide-in-from-bottom-8 duration-700 pt-32">
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-slate-500 hover:text-nature-400 mb-8 transition-colors font-mono text-sm bg-white/50 px-4 py-2 rounded-full w-fit hover:bg-white shadow-sm"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        RETURN_TO_ARCHIVE
      </button>

      <article className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-nature-100/30 to-transparent rounded-bl-full pointer-events-none" />

        <header className="mb-10 border-b border-slate-200/60 pb-8 relative z-10">
          <div className="flex flex-wrap gap-2 mb-6">
             {post.tags.map(tag => (
                 <span key={tag} className="px-3 py-1 text-sm font-mono bg-nature-100/50 text-nature-400 border border-nature-200/50 rounded-lg font-bold">
                     #{tag}
                 </span>
             ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-fantasy font-bold text-slate-800 mb-8 leading-tight drop-shadow-sm">
            {post.title}
          </h1>
          <div className="flex items-center justify-between text-slate-500 font-mono text-sm bg-slate-50/50 p-4 rounded-xl border border-slate-100">
             <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                 <span className="flex items-center gap-2"><Calendar size={16} className="text-nature-300" /> {post.date}</span>
                 <span className="flex items-center gap-2"><Clock size={16} className="text-warm-accent" /> {post.readTime}</span>
             </div>
             <button className="hover:text-nature-300 transition-colors p-2 hover:bg-white rounded-full"><Share2 size={18} /></button>
          </div>
        </header>

        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-fantasy prose-headings:text-nature-400 relative z-10">
             {renderContent(post.content)}
        </div>
      </article>
    </div>
  );
};

export default BlogPostDetail;