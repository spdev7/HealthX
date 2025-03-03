import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    console.log(root)
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="theme"
          value="light"
          checked={!isDarkMode}
          onChange={toggleTheme}
        />
        Light Mode
      </label>
      <label>
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        Dark Mode
      </label>
    </div>
  );
};

export default ThemeToggle;