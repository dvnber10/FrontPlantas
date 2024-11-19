import React, { useContext } from 'react';
import { ThemeContext } from '../Utility/ThemeContext';
import '../Styles/navbar.scss'

const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  console.log(isDark)
  return (
    <button onClick={toggleTheme} className='button'>
      {isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}
      
    </button>
  );
};

export default ThemeSwitcher;
