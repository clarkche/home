import React from 'react';
import LiquidEther from './LiquidEther';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-void">
      {/* Liquid Ether Effect */}
      <LiquidEther
        colors={['#B8C6B9', '#7D9D89', '#E6EBE6']}
        mouseForce={10}
        cursorSize={90}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={true}
        autoDemo={true}
        autoSpeed={0.3}
        autoIntensity={2.2}
        takeoverDuration={0.8}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default Background;