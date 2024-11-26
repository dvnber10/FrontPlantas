import React, { useState } from 'react'
import Navbar from '../Componets/Layaut/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../Componets/Layaut/Footer';


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
        <Outlet context={[storage]} />
      </div>
      <div className={storage ? 'footer-dark' : 'footer-ligth'}>
        <Footer />
      </div>
    </div>
  )
}


export default Index