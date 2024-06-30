"use client"
import React, { useEffect, useState } from 'react';

const GridOverlay: React.FC = () => {
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
    return (
      <div className="absolute inset-0 h-screen w-full -z-30">
        <div className="absolute h-full w-full bg-transparent ">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 h-screen w-full -z-30">
      <div className="absolute h-full w-full bg-transparent ">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
    </div>
  );
};

export default GridOverlay;
