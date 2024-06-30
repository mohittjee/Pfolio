"use client"
import React, { useEffect, useState } from 'react';

const LinearSVG: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Check dark mode initially
    checkDarkMode();

    // Optionally, add a listener for class changes if your application toggles dark mode dynamically
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  if (!isDarkMode) {
    return (
      <div style={{ position: 'absolute', zIndex: -3, top: '35%', left: '0', height: '65%', width: '100%' }}>
        <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="Gradient1">
              <stop className="stop1" offset="0%" />
              <stop className="stop2" offset="50%" />
              <stop className="stop3" offset="100%" />
            </linearGradient>
            <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="background" stopOpacity="0" />
              <stop offset="3%" stopColor="background" />
              <stop offset="15%" stopColor="#7D8ABC" />
              <stop offset="40%" stopColor="#7D8ABC" />
              <stop offset="70%" stopColor="#A555EC" />
              <stop offset="90%" stopColor="background" />
            </linearGradient>
          </defs>
          <style>
            {`
              #rect1 {
                fill: url(#Gradient1);
              }
              .stop1 {
                stop-color: red;
              }
              .stop2 {
                stop-color: black;
                stop-opacity: 0;
              }
              .stop3 {
                stop-color: blue;
              }
            `}
          </style>
  
          {/* <rect id="rect1" x="10" y="10" rx="15" ry="15" width="100" height="100" /> */}
          <rect
            x="0"
            y="120"
            rx="15"
            ry="15"
            width="100%"
            height="100%"
            fill="url(#Gradient2)"
          />
        </svg>
      </div>
    );
  }

  return (
    <div style={{ position: 'absolute', zIndex: -3, top: '35%', left: '0', height: '65%', width: '100%' }}>
      <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="Gradient1">
            <stop className="stop1" offset="0%" />
            <stop className="stop2" offset="50%" />
            <stop className="stop3" offset="100%" />
          </linearGradient>
          <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="background" stopOpacity="0" />
            <stop offset="31%" stopColor="#6420AA" opacity="1" />
            <stop offset="80%" stopColor="background" stopOpacity="0" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
        </defs>
        <style>
          {`
            #rect1 {
              fill: url(#Gradient1);
            }
            .stop1 {
              stop-color: red;
            }
            .stop2 {
              stop-color: black;
              stop-opacity: 0;
            }
            .stop3 {
              stop-color: blue;
            }
          `}
        </style>

        {/* <rect id="rect1" x="10" y="10" rx="15" ry="15" width="100" height="100" /> */}
        <rect
          x="0"
          y="120"
          rx="15"
          ry="15"
          width="100%"
          height="100%"
          fill="url(#Gradient2)"
        />
      </svg>
    </div>
  );
};

export default LinearSVG;
