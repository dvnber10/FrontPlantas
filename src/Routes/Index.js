import React, { useState } from 'react'
import Navbar from '../Componets/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../Componets/Footer';


const Index = () => {

  const [storage, setStorage] = useState(() => {
    const storedValue = localStorage.getItem('IsDark');
    return storedValue ? JSON.parse(storedValue) : false
  });

  return (
    <div className={storage ? 'dark' : 'ligth'}>
      <div className="layout">
        <Navbar storage={storage} setStorage={setStorage} />
      </div>
      <div className="body-page">
        <Outlet />
      </div>
      <div className={storage ? 'footer-dark' : 'footer-ligth'}>
        <Footer />
      </div>
    </div>
  )
}


export default Index