import React, { useRef, useState } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  className = "", 
  spotlightColor = "rgba(125, 157, 137, 0.1)", // nature-300/10 (Sage Green)
  borderColor = "rgba(184, 198, 185, 0.4)" // nature-200
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-xl ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${borderColor}, transparent 10%)`,
            maskImage: `radial-gradient(100px circle at ${position.x}px ${position.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(100px circle at ${position.x}px ${position.y}px, black, transparent)`,
        }}
      />
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;