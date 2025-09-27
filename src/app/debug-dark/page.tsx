'use client';

import { useEffect, useState } from 'react';

export default function DebugDark() {
  const [htmlClasses, setHtmlClasses] = useState('');

  useEffect(() => {
    const updateClasses = () => {
      setHtmlClasses(document.documentElement.className);
    };
    
    updateClasses();
    
    const observer = new MutationObserver(updateClasses);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const addDark = () => {
    document.documentElement.classList.add('dark');
    console.log('Added dark class');
  };

  const removeDark = () => {
    document.documentElement.classList.remove('dark');
    console.log('Removed dark class');
  };

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    console.log('Toggled dark class');
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">Dark Mode Debug</h1>
      
      <div className="mb-8 space-x-4">
        <button onClick={addDark} className="px-4 py-2 bg-gray-800 text-white rounded">
          Add Dark Class
        </button>
        <button onClick={removeDark} className="px-4 py-2 bg-gray-200 text-black rounded">
          Remove Dark Class
        </button>
        <button onClick={toggleDark} className="px-4 py-2 bg-blue-500 text-white rounded">
          Toggle Dark Class
        </button>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Test Card</h2>
          <p className="text-gray-600 dark:text-gray-300">
            This should change colors when dark mode is toggled.
          </p>
        </div>

        <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded">
          <p className="text-blue-800 dark:text-blue-200">Blue themed content</p>
        </div>

        <div className="p-4 bg-green-100 dark:bg-green-900 rounded">
          <p className="text-green-800 dark:text-green-200">Green themed content</p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-100 dark:bg-yellow-900 rounded">
        <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Debug Info</h3>
        <p className="text-yellow-700 dark:text-yellow-300">HTML Classes: {htmlClasses || 'none'}</p>
        <p className="text-yellow-700 dark:text-yellow-300">
          Has dark class: {htmlClasses.includes('dark') ? 'YES' : 'NO'}
        </p>
      </div>
    </div>
  );
}