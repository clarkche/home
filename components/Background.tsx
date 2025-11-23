import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-void">
      {/* Animated Gradient Morphs - Brighter to show through glass */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-nature-100 mix-blend-multiply filter blur-[80px] opacity-80 animate-morph" />
      <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-nature-200/60 mix-blend-multiply filter blur-[80px] opacity-60 animate-morph" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-nature-300/30 mix-blend-multiply filter blur-[60px] opacity-70 animate-morph" style={{ animationDelay: '4s' }} />

      {/* Dynamic Grid Pattern - Deep Slate */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232F4858' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      />
      
      {/* Floating Particles/Orbs for Depth */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-nature-300/10 rounded-full blur-2xl animate-float" style={{ animationDuration: '8s' }} />
      <div className="absolute top-3/4 left-1/3 w-24 h-24 bg-nature-200/20 rounded-full blur-xl animate-float" style={{ animationDuration: '12s', animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-nature-100/40 rounded-full blur-3xl animate-float" style={{ animationDuration: '15s', animationDelay: '3s' }} />
      
      {/* Tiny Warm Accent Highlight (Subtle) */}
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-warm-accent/20 rounded-full blur-2xl animate-pulse-slow" />

      {/* Noise Overlay for texture */}
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </div>
  );
};

export default Background;