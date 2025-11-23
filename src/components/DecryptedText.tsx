import React, { useEffect, useState, useRef } from 'react';

interface DecryptedTextProps {
  text: string;
  className?: string;
  speed?: number;
  revealSpeed?: number;
  useOriginalCharsOnly?: boolean;
  animateOnHover?: boolean;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  className = '',
  speed = 30,
  revealSpeed = 50,
  animateOnHover = false,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const scramble = () => {
    let iteration = 0;
    
    clearInterval(intervalRef.current as number);

    intervalRef.current = window.setInterval(() => {
      setDisplayText(prev =>
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (letter === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current as number);
      }

      iteration += 1 / (revealSpeed / 10);
    }, speed);
  };

  useEffect(() => {
    if (!animateOnHover) {
      scramble();
    }
  }, []);

  const handleMouseEnter = () => {
    if (animateOnHover) {
      setIsHovering(true);
      scramble();
    }
  };

  return (
    <span 
      className={className} 
      onMouseEnter={handleMouseEnter}
      style={{ display: 'inline-block' }}
    >
      {displayText}
    </span>
  );
};

export default DecryptedText;