import React, { useEffect } from 'react';
import '../../Styles/navbar.scss'
// 
const ThemeSwitcher = ({ setStorage, storage }) => {
  useEffect(() => {
    localStorage.setItem('IsDark', JSON.stringify(storage))
  }, [storage])

  return (
    <div>
      <button onClick={() => setStorage(!storage)} className='button'>
        {storage ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
