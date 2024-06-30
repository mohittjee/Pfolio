"use client"
import React, { useEffect, useState } from 'react';

const ArraySVG: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Check dark mode initially
    checkDarkMode();

    // Optionally, add a listener for class changes if  application toggles dark mode dynamically
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  if (!isDarkMode) {
    return  (
      <div style={{ position: 'absolute', zIndex: -10, top: 0, left: 0, width: '100%', height: '100%' }}>
        <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="customGradient" x1="30%" y1="90%" x2="80%" y2="0%">
              <stop offset="85%" stopColor="background" />
              <stop offset="90%" stopColor="#7D8ABC" />
              <stop offset="95%" stopColor="background" />
            </linearGradient>
          </defs>
  
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#customGradient)"
          />
        </svg>
      </div>
    );
  }

  return (
    <div style={{ position: 'absolute', zIndex: -10, top: 0, left: 0, width: '100%', height: '100%' }}>
      <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="customGradient" x1="30%" y1="90%" x2="80%" y2="0%">
            <stop offset="85%" stopColor="background" />
            <stop offset="90%" stopColor="#3f6576" />
            <stop offset="95%" stopColor="background" />
          </linearGradient>
        </defs>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#customGradient)"
        />
      </svg>
    </div>
  );
};

export default ArraySVG;
