'use client';

export function DarkModeDebug() {
  const addDark = () => {
    document.documentElement.classList.add('dark');
    console.log('Added dark class manually');
    console.log('HTML classes:', document.documentElement.className);
  };

  const removeDark = () => {
    document.documentElement.classList.remove('dark');
    console.log('Removed dark class manually');
    console.log('HTML classes:', document.documentElement.className);
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-red-500 text-white p-4 rounded space-y-2">
      <div className="text-xs">Debug Controls</div>
      <button onClick={addDark} className="block w-full bg-black text-white px-2 py-1 rounded text-xs">
        Add Dark
      </button>
      <button onClick={removeDark} className="block w-full bg-white text-black px-2 py-1 rounded text-xs">
        Remove Dark
      </button>
      <div className="text-xs">
        Test: <span className="bg-white dark:bg-black px-1">should change</span>
      </div>
    </div>
  );
}