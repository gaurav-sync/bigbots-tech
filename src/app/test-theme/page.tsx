'use client';

import { useState } from 'react';

export default function TestTheme() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-4xl font-bold mb-8">Theme Test Page</h1>
      
      <div className="mb-8 space-x-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Toggle Theme (Current: {isDark ? 'Dark' : 'Light'})
        </button>
        
        <button
          onClick={() => {
            localStorage.removeItem('theme');
            window.location.reload();
          }}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Clear Theme & Reload
        </button>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
          <h2 className="text-xl font-semibold mb-2">Test Card</h2>
          <p className="text-gray-600 dark:text-gray-300">
            This text should change color based on the theme.
          </p>
        </div>

        <div className="p-4 border border-gray-300 dark:border-gray-700 rounded">
          <h3 className="font-semibold">Border Test</h3>
          <p>This should have different border colors.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded">
            <p>Blue background</p>
          </div>
          <div className="p-4 bg-green-100 dark:bg-green-900 rounded">
            <p>Green background</p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-100 dark:bg-yellow-900 rounded">
        <h3 className="font-semibold mb-2">Debug Info</h3>
        <p>HTML classes: {typeof window !== 'undefined' ? document.documentElement.className : 'Loading...'}</p>
        <p>Dark mode state: {isDark ? 'true' : 'false'}</p>
      </div>
    </div>
  );
}