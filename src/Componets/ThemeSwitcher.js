import React, { useEffect, useState } from 'react';
import '../Styles/navbar.scss'
// 
const ThemeSwitcher = ({setStorage, storage}) => {
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(storage))
  }, [storage])

  return (
    <div>
      <button onClick={() => setStorage(!storage)} className='button'>
        {storage ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
