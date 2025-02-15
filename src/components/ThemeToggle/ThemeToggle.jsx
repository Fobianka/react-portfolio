import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';

import './ThemeToggle.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saveTheme = localStorage.getItem('saved-theme');
    if (saveTheme) {
      setTheme(saveTheme);
      document.body.classList.toggle('dark-theme', saveTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('dark-theme', newTheme === 'dark');
    localStorage.setItem('saved-theme', newTheme);
  };

  return (
    <div className="them-btn" onClick={toggleTheme}>
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </div>
  );
};

export default ThemeToggle;
