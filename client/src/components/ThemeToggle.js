import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="bg-gray-200 dark:bg-gray-800 p-2 rounded flex items-center justify-center transition-colors duration-300"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        // Sun Icon for Light Mode
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-yellow-500">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 12v2m9-9h-2M5 12H3m14.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m11.314 0l-1.414 1.414M7.05 16.95l-1.414 1.414M12 6a6 6 0 00-6 6 6 6 0 006 6 6 6 0 006-6 6 6 0 00-6-6z" />
        </svg>
      ) : (
        // Moon Icon for Dark Mode
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3c.132 0 .263.027.384.08a1 1 0 011.11-.643 9 9 0 100 17.126 1 1 0 01-.602-1.866A7 7 0 115 12c0-.132.027-.263.08-.384a1 1 0 01.643-1.11A7.97 7.97 0 0112 5a7.98 7.98 0 016.277 2.923 1 1 0 011.866.602A10.002 10.002 0 0112 3z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
