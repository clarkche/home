import React, { useState, useEffect } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogList from './components/BlogList';
import BlogPostDetail from './components/BlogPostDetail';
import ProjectList from './components/ProjectList';
import Gallery from './components/Gallery';
import GalleryDetail from './components/GalleryDetail';
import OracleChat from './components/OracleChat';
import { ViewState, BlogPost, GallerySeries } from './types';
import { BLOG_POSTS, PROJECTS, GALLERY_SERIES } from './data/constants';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedSeries, setSelectedSeries] = useState<GallerySeries | null>(null);

  const handleNavigate = (newView: ViewState) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    handleNavigate(ViewState.POST_DETAIL);
  };

  const handleSelectSeries = (series: GallerySeries) => {
    setSelectedSeries(series);
    handleNavigate(ViewState.GALLERY_DETAIL);
  };

  const renderView = () => {
    switch (view) {
      case ViewState.HOME:
        return <Hero onNavigate={handleNavigate} />;
      case ViewState.BLOG:
        return <BlogList posts={BLOG_POSTS} onSelectPost={handleSelectPost} />;
      case ViewState.POST_DETAIL:
        return selectedPost ? (
          <BlogPostDetail post={selectedPost} onBack={() => handleNavigate(ViewState.BLOG)} />
        ) : (
          <BlogList posts={BLOG_POSTS} onSelectPost={handleSelectPost} />
        );
      case ViewState.PROJECTS:
        return <ProjectList projects={PROJECTS} />;
      case ViewState.GALLERY:
        return <Gallery series={GALLERY_SERIES} onSelectSeries={handleSelectSeries} />;
      case ViewState.GALLERY_DETAIL:
        return selectedSeries ? (
          <GalleryDetail series={selectedSeries} onBack={() => handleNavigate(ViewState.GALLERY)} />
        ) : (
          <Gallery series={GALLERY_SERIES} onSelectSeries={handleSelectSeries} />
        );
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen relative text-slate-800 font-sans selection:bg-nature-200 selection:text-white">
      <Background />
      <Navbar currentView={view} onChangeView={handleNavigate} />
      
      <main className="relative z-10 min-h-screen flex flex-col pt-16">
        {renderView()}
        
        <footer className="mt-auto py-4 text-center text-slate-500 font-mono text-sm border-t border-slate-200 bg-white/50 backdrop-blur-sm">
           <p>© {new Date().getFullYear()} Clark Chen. Constructed with Gemini 3.</p>
        </footer>
      </main>

      <OracleChat />
    </div>
  );
};

export default App;