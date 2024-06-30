"use client"
import React, { useEffect, useState } from 'react';

const SpreadSVG = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Check dark mode initially
    checkDarkMode();

    // Optionally, add a listener for class changes if the application toggles dark mode dynamically
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  if (!isDarkMode) {
    return  (
      <div style={{ position: 'absolute', zIndex: -5, top: '0%', left: '0%', height:'50%', width:'100%'}}>
        <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient
              id="GradientPad"
              cx="0.3"
              cy="0.5"
              r="0.4"
              fx="0.25"
              fy="0.60"
              spreadMethod="pad">
              <stop offset="0%" stopColor="#7D8ABC" />
              <stop offset="100%" stopColor="background" stopOpacity="0"  />
            </radialGradient>
            <radialGradient
              id="GradientRepeat"
              cx="0.5"
              cy="0.5"
              r="0.4"
              fx="0.75"
              fy="0.75"
              spreadMethod="repeat">
              <stop offset="0%" stopColor="red" />
              <stop offset="100%" stopColor="blue" />
            </radialGradient>
            
            <radialGradient
              id="GradientReflect"
              cx="0.5"
              cy="0.5"
              r="0.4"
              fx="0.75"
              fy="0.75"
              spreadMethod="reflect">
              <stop offset="0%" stopColor="red" />
              <stop offset="100%" stopColor="blue" />
            </radialGradient>
          </defs>
  
          <rect
            x="0"
            y="10"
            rx="15"
            ry="15"
            width="100%"
            height="100%"
            fill="url(#GradientPad)"
          />
  
          {/* <rect
            x="10"
            y="120"
            rx="15"
            ry="15"
            width="100"
            height="100"
            fill="url(#GradientRepeat)"
          /> */}
  
          {/* <rect
            x="120"
            y="120"
            rx="15"
            ry="15"
            width="100"
            height="100"
            fill="url(#GradientReflect)"
          /> */}
          {/* <text x="15" y="30" fill="white" fontFamily="sans-serif" fontSize="12pt">
            Pad
          </text>
          <text x="15" y="140" fill="white" fontFamily="sans-serif" fontSize="12pt">
            Repeat
          </text>
          <text x="125" y="140" fill="white" fontFamily="sans-serif" fontSize="12pt">
            Reflect
          </text> */}
        </svg>
      </div>
    );
  }

  return (
    <div style={{ position: 'absolute', zIndex: -5, top: '0%', left: '0%', height:'50%', width:'100%'}}>
      <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient
            id="GradientPad"
            cx="0.3"
            cy="0.5"
            r="0.4"
            fx="0.25"
            fy="0.60"
            spreadMethod="pad">
            <stop offset="0%" stopColor="#610C9F" />
            <stop offset="100%" stopColor="transparent"  />
          </radialGradient>
          <radialGradient
            id="GradientRepeat"
            cx="0.5"
            cy="0.5"
            r="0.4"
            fx="0.75"
            fy="0.75"
            spreadMethod="repeat">
            <stop offset="0%" stopColor="red" />
            <stop offset="100%" stopColor="blue" />
          </radialGradient>
          
          <radialGradient
            id="GradientReflect"
            cx="0.5"
            cy="0.5"
            r="0.4"
            fx="0.75"
            fy="0.75"
            spreadMethod="reflect">
            <stop offset="0%" stopColor="red" />
            <stop offset="100%" stopColor="blue" />
          </radialGradient>
        </defs>

        <rect
          x="0"
          y="10"
          rx="15"
          ry="15"
          width="100%"
          height="100%"
          fill="url(#GradientPad)"
        />

        {/* <rect
          x="10"
          y="120"
          rx="15"
          ry="15"
          width="100"
          height="100"
          fill="url(#GradientRepeat)"
        /> */}

        {/* <rect
          x="120"
          y="120"
          rx="15"
          ry="15"
          width="100"
          height="100"
          fill="url(#GradientReflect)"
        /> */}
        {/* <text x="15" y="30" fill="white" fontFamily="sans-serif" fontSize="12pt">
          Pad
        </text>
        <text x="15" y="140" fill="white" fontFamily="sans-serif" fontSize="12pt">
          Repeat
        </text>
        <text x="125" y="140" fill="white" fontFamily="sans-serif" fontSize="12pt">
          Reflect
        </text> */}
      </svg>
    </div>
  );
};

export default SpreadSVG;
