'use client';

import { useEffect, useState } from 'react';

export function UltraSimpleTheme() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Force light mode on first load
    document.documentElement.classList.remove('dark');
    setIsDark(false);
    localStorage.setItem('theme', 'light');
    
    console.log('UltraSimpleTheme: Initialized to light mode');
  }, []);

  const handleToggle = () => {
    console.log('UltraSimpleTheme: Toggle clicked, current isDark:', isDark);
    
    if (isDark) {
      // Switch to light
      document.documentElement.classList.remove('dark');
      setIsDark(false);
      localStorage.setItem('theme', 'light');
      console.log('UltraSimpleTheme: Switched to light mode');
    } else {
      // Switch to dark
      document.documentElement.classList.add('dark');
      setIsDark(true);
      localStorage.setItem('theme', 'dark');
      console.log('UltraSimpleTheme: Switched to dark mode');
    }
    
    console.log('UltraSimpleTheme: HTML classes now:', document.documentElement.className);
  };

  if (!mounted) {
    return (
      <div className="p-2 rounded-lg bg-gray-100 text-gray-700 w-9 h-9 flex items-center justify-center">
        <div className="w-5 h-5 animate-pulse bg-gray-300 rounded" />
      </div>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        // Sun icon for light mode
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
}