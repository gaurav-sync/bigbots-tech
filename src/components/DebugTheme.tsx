'use client';

import { useEffect, useState } from 'react';

export function DebugTheme() {
  const [htmlClasses, setHtmlClasses] = useState('');
  const [theme, setTheme] = useState('');
  const [isDarkClass, setIsDarkClass] = useState(false);

  useEffect(() => {
    const updateDebugInfo = () => {
      const classes = document.documentElement.className;
      setHtmlClasses(classes);
      setTheme(localStorage.getItem('theme') || 'not set');
      setIsDarkClass(document.documentElement.classList.contains('dark'));
    };

    updateDebugInfo();
    
    // Update debug info when classes change
    const observer = new MutationObserver(updateDebugInfo);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-4 left-4 bg-black/90 text-white p-3 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="mb-1">HTML Classes: <span className="text-yellow-300">{htmlClasses || 'none'}</span></div>
      <div className="mb-1">Stored Theme: <span className="text-green-300">{theme}</span></div>
      <div className="mb-1">Has Dark Class: <span className="text-blue-300">{isDarkClass ? 'YES' : 'NO'}</span></div>
      <div className="mb-1">Test BG: <span className="bg-white dark:bg-red-500 px-2 py-1 text-black dark:text-white">should change</span></div>
      <button 
        onClick={() => {
          console.log('HTML element:', document.documentElement);
          console.log('Classes:', document.documentElement.className);
          console.log('Contains dark:', document.documentElement.classList.contains('dark'));
        }}
        className="mt-2 bg-blue-600 px-2 py-1 rounded text-white text-xs"
      >
        Log to Console
      </button>
    </div>
  );
}